import Card from "./Card.jsx";
import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useHistory } from "react-router-dom";

const mockProps = {
  id: 94997,
  title: "House of the Dragon",
  img: "/xiB0hsxMpgxpJehYxUDhiUkg2w.jpg",
  subtitle: undefined,
  mediaType: "tv",
};

/**router mock */
jest.mock("react-router-dom", () => ({
  useHistory: jest.fn(),
}));

const mockPush = jest.fn();
useHistory.mockImplementation(() => ({
  push: mockPush,
}));

describe("Card", () => {
  it("should render a card with complete media information", () => {
    render(
      <Card
        key={mockProps.id}
        id={mockProps.id}
        title={mockProps.title}
        img={mockProps.img}
        mediaType={mockProps.mediaType}
      />
    );
    expect(screen.getByText("House of the Dragon")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("should render an unavailable card", () => {
    render(<Card />);
    expect(screen.getByTestId("Not available")).toBeInTheDocument();
  });
  it("should change url when clicking on a card", async () => {
    render(
      <Card
        key={mockProps.id}
        id={mockProps.id}
        title={mockProps.title}
        img={mockProps.img}
        mediaType={mockProps.mediaType}
      />
    );
    userEvent.click(screen.getByRole(/img/i));
    await waitFor(() => {
      expect(mockPush).toHaveBeenNthCalledWith(1, "/tv/94997/info");
    });
  });
});
