import PersonCredits from "./PersonCredits.jsx";
import React from "react";
import { screen, render } from "@testing-library/react";

const mockFetch = {
  id: 31,
  cast: [
    {
      id: 13,
      poster_path: "/oiqKEhEfxl9knzWXvWecJKN3aj6.jpg",
      title: "Forrest Gump",
      character: "Forrest Gump",
      media_type: "movie",
    },
    {
      id: 497,
      poster_path: "/9jfxlPX4nJvpBC3QxcqXvyBteaK.jpg",
      title: "La milla verde",
      character: "Paul Edgecomb",
      media_type: "movie",
    },
    {
      id: 594,
      poster_path: "/g0szJPw61Cj3sjaGsIy4aWdGZU3.jpg",
      title: "The Terminal",
      character: "Viktor Navorski",
      media_type: "movie",
    },
    {
      id: 862,
      poster_path: "/oiqKEhEfxl9knzWXvWecJKN3aj6.jpg",
      title: "Toy Story",
      character: "Woody (voice)",
      media_type: "movie",
    }
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
    render(<PersonCredits />);
    expect( await screen.findAllByRole(/img/i)).toHaveLength(4);
  });
});
