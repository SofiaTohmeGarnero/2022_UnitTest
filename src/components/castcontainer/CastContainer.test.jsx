import CastContainer from "./CastContainer.jsx";
import React from "react";
import { screen, render } from "@testing-library/react";

const mockFetch = {
  id: 629176,
  cast: [
    {
      character: "Joe Smith",
      id: 16483,
      name: "Sylvester Stallone",
      profile_path: "/qDRGPAcQoW8Wuig9bvoLpHwf1gU.jpg",
    },
    {
      character: "Sam Cleary",
      id: 2532098,
      name: "Javon Walton",
      profile_path: "/50yQRa8dXASgkVVjDNJUQ5YqUin.jpg",
    },
    {
      character: "Tiffany Cleary",
      id: 1026947,
      name: "Dascha Polanco",
      profile_path: "/bIIjxz1EKZEtHeGjju82FkObyl2.jpg",
    },
  ],
  crew: [],
};

/** Fetch mock */
let fetch;
let originalFetch;

beforeEach(() => {
  originalFetch = global.fetch;
  global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(mockFetch)
  }));
});

afterEach(() => {
  global.fetch = fetch;
});

/** usePaarams mock */
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn().mockReturnValue({ environment: 'dev', service: 'fakeService' }),
}))

describe("CastContainer", () => {
  it("should render a list of cast character cards", async () => {
    render(<CastContainer />);
    expect( await screen.findAllByRole(/img/i)).toHaveLength(3);
  });
});
