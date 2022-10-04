import SearchBar from "./SearchBar.jsx";
import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useLocation, useHistory } from "react-router-dom";

/**router mock */
jest.mock("react-router-dom", () => ({
    useLocation: jest.fn(),
    useHistory: jest.fn(),
  }));
  
  const mockPush = jest.fn();
  useHistory.mockImplementation(() => ({
    push: mockPush,
  }));

describe("SearchBar", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
    describe("when rendering default", ()=>{
        it("should show search icon and input", ()=>{
            useLocation.mockImplementation(() => ({
                pathname: "/search/multi/harry/page/1",
              }));
            render(<SearchBar/>);
            expect(screen.getByRole(/navbar-icon/i)).toBeInTheDocument();
            expect(screen.getByRole(/textbox/i)).toBeInTheDocument();
        });
    });
    describe("when doing a search", () =>{
      it("should display the keyword in the url", async () =>{
        useLocation.mockImplementation(() => ({
          pathname: "/",
        }));
        render(<SearchBar/>);
        const searchInput = screen.getByRole(/textbox/i);

        await userEvent.type(searchInput, 'harry');
        await userEvent.type(searchInput, '{enter}');

        await waitFor( () => {
          expect(mockPush).toHaveBeenNthCalledWith(1, "/search/multi/harry/page/1");
        })
      })
    })
})