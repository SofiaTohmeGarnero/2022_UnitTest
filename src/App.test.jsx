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
    /** funciona en conjunto con: > __mocks__ > react-router-dom.js */ 
    describe("with '/' in the url", () => {
      it("should show Home component", async () => {
        /**covergage arroja un warning */
        const { getByText } = render(
          <MemoryRouter initialEntries={['/']}>
            <App />
          </MemoryRouter>
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
    describe("with '/search/multi/harry/page/1' in the url", () => {
      it("should show MediaView component", async () => {       
        const { getByText } = render(
          <MemoryRouter initialEntries={['/search/multi/harry/page/1']}>
            <App />
          </MemoryRouter>
        );
        await waitFor(() => expect(getByText("MediaView")).toBeInTheDocument());
      });
    }); 
    describe("with '/person/10980/credits' in the url", () => {
      it("should show PersonView component", async () => {      
        const { getByText } = render(
          <MemoryRouter initialEntries={['/person/10980/credits']}>
            <App />
          </MemoryRouter>
        );
        await waitFor(() => expect(getByText("PersonView")).toBeInTheDocument());
      });
    }); 
    describe("with '/tv/1396/seasons/1' in the url", () => {
      it("should show IndividualCard component", async () => {   
        const { getByText } = render(
          <MemoryRouter initialEntries={['/tv/1396/seasons/1']}>
            <App />
          </MemoryRouter>
        );
        await waitFor(() => expect(getByText("IndividualCard")).toBeInTheDocument());
      });
    }); 
    describe("with every path in the url", () => {
      it("should show NotFound component", async () => {       
        const { getByText } = render(
          <MemoryRouter initialEntries={['/login/hello/world/everyone/100']}>
            <App />
          </MemoryRouter>
        );
        await waitFor(() => expect(getByText("NotFound")).toBeInTheDocument());
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
