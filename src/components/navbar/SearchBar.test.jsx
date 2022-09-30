import SearchBar from "./SearchBar.jsx";
import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import useFetch from "../../hooks/useFetch";
import { useLocation, useHistory } from "react-router-dom";

/**router mock */
jest.mock("react-router-dom", () => ({
    useLocation: jest.fn(),
    useHistory: jest.fn(),
  }));
  

describe("SearchBar", () => {
    describe("when rendering default", ()=>{
        it("should show search icon and input", ()=>{
            useLocation.mockImplementation(() => ({
                pathname: "/search/multi/harry/page/1",
              }));
            render(<SearchBar/>);
            expect(screen.getByRole(/navbar-icon/i)).toBeInTheDocument();
            expect(screen.getByRole(/textbox/i)).toBeInTheDocument();
        })
    })
})