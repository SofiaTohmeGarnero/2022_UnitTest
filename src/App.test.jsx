import App from "./App.jsx";
import React, { Suspense, lazy } from "react";
import { screen, render, waitFor } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router, Route, MemoryRouter } from "react-router-dom";

jest.mock("./components/navbar/NavBar", () =>
  jest.fn(() => {
    return <nav>NavBar</nav>;
  })
);
jest.mock("./views/home/Home", () =>
  jest.fn(() => {
    return <div>Home</div>;
  })
);
jest.mock("./views/genres/Genres", () =>
  jest.fn(() => {
    return <div>Genres</div>;
  })
);
jest.mock("./views/mediaview/MediaView", () =>
  jest.fn(() => {
    return <div>MediaView</div>;
  })
);
jest.mock("./views/individualcard/IndividualCard", () =>
  jest.fn(() => {
    return <div>IndividualCard</div>;
  })
);
jest.mock("./views/personview/PersonView", () =>
  jest.fn(() => {
    return <div>PersonView</div>;
  })
);
jest.mock("./views/notfound/NotFound", () =>
  jest.fn(() => {
    return <div>NotFound</div>;
  })
);

describe("App", () => {
  describe("when redering default", () => {
    it("should show Suspense and NavBar component", () => {
      const history = createMemoryHistory();
      history.push("/");
      render(
        <Router history={history}>
          <Route path={"/"} component={App} />
        </Router>
      );
      expect(screen.getByRole(/nav/)).toBeInTheDocument();
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });
  });
  describe("when redering lazy components", () => {
    describe("with '/' in the url", () => {
      it("should show Home component", async () => {
        /**covergage arroja un warning */
        const history = createMemoryHistory();
        history.push("/");
        const {getByText} = render(
          <Router history={history}>
            <Route path={"/"} component={App} />
          </Router>
        );
        await waitFor(() => expect(getByText("Home")).toBeInTheDocument());
      });
    });
    describe("with '/movie' in the url", () => {
      it("should show Genres component", async () => {        
        const { getByText } = render(
          <MemoryRouter initialEntries={['/movie']}>
            <App />
          </MemoryRouter>
        );
        await waitFor(() => expect(getByText("Genres")).toBeInTheDocument());
      });
    }); 
  });
  describe("when checking location in tests", () => {
    describe("with '/movie' in the url", () => {
      it("should redirect to Genre page", () => {
        const history = createMemoryHistory();
        history.push("/movie");
        render(
          <Router history={history}>
            <App />
          </Router>
        );
        expect(history.location.pathname).toBe("/movie");
      });
    });
  });
});
