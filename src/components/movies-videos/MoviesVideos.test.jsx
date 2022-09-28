import MoviesVideos from "./MoviesVideos.jsx";
import React from "react";
import { screen, render } from "@testing-library/react";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

const mockMovieVideoData = {
  id: 532639,
  results: [
    {
      id: "631c58aa19690c007ca0e308",
      iso_639_1: "es",
      iso_3166_1: "ES",
      key: "dZrmy91eZa4",
      name: "Pinocho | Tráiler oficial en español | Disney+",
      official: true,
      published_at: "2022-08-24T16:27:24.000Z",
      site: "YouTube",
      size: 1080,
      type: "Trailer",
    },
  ],
};

/**useFetch mock */
jest.mock("../../hooks/useFetch");
const mockUseFetch = useFetch;

/**router mock */
jest.mock("react-router-dom", () => ({
  useParams: jest.fn(),
}));

describe("MoviesVideos", () => {
  describe("when rendering a default", () => {
    it("should show iframe and video title", async () => {
      useParams.mockImplementation(() => ({
        media: "movie",
        id: "532639",
      }));
      mockUseFetch.mockReturnValue(mockMovieVideoData);
      render(<MoviesVideos />);
      expect(screen.getByRole("heading", { level: 4, name:'Pinocho | Tráiler oficial en español | Disney+' })).toBeInTheDocument();
      expect(screen.getByRole(/iframe/i)).toBeInTheDocument();
    });
  });
});
