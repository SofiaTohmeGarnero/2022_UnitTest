import PersonView from "./PersonView.jsx";
import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

jest.mock("../../components/credits/PersonCredits.jsx", () =>
  jest.fn(() => {
    return <div>PersonCredits</div>;
  })
);

describe("PersonView", () => {
  describe("when rendering default", () => {
    it("should show information and credits links", () => {
      const history = createMemoryHistory();
      render(
        <Router history={history}>
          <PersonView />
        </Router>
      );
      expect(screen.getByText(/informacion/i)).toBeInTheDocument();
      expect(screen.getByText(/creditos/i)).toBeInTheDocument();
    });
  });
  describe("when clicking on credits links", () => {
    it("should show PersonCredits component", async () => {
      const history = createMemoryHistory();
      render(
        <Router history={history}>
          <PersonView />
        </Router>
      );
      const user = userEvent.setup();
      await user.click(screen.getByText(/creditos/i));
      expect(screen.getByText(/PersonCredits/i)).toBeInTheDocument();
    });
  });
});
