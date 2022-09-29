import PaginationContainer from "./PaginationContainer.jsx";
import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useHistory } from "react-router-dom";

/**router mock */
jest.mock("react-router-dom", () => ({
  useHistory: jest.fn(),
}));

const mockPush = jest.fn();
useHistory.mockImplementation(() => ({
  push: mockPush,
}));

describe("PaginationContainer", () => {
  describe("when rendering default", () => {
    it("should render the pagination", () => {
      render(<PaginationContainer totalPages={4400} />);
      const pagination = screen.getByRole(/nav/i);
      expect(pagination).toBeInTheDocument();
    });
  });
  describe("when clicking on second page", () => {
    it("should change de page in useHistory", async () => {
      render(<PaginationContainer totalPages={4400} />);
      const btn2 = screen.getByRole(/button/i, {name: "Go to page 2"});
      await userEvent.click(btn2);
      await waitFor(() => {
        expect(mockPush).toHaveBeenNthCalledWith(
          1,
          "2"
        );
      });
    });
  });
});
