import { render, screen } from "@testing-library/react";
import Genres from "./Genres";
import { useParams } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  useParams: jest.fn(),
}));

jest.mock("../../components/card-container/CardContainer.jsx", () =>
  jest.fn(({title}) => {
    return <div>{title}</div>;
  })
);

describe("Genres", () => {
  describe("when rendering default with movie in the url ", () => {
    it("should show 4 CardContainer", async () => {
      useParams.mockImplementation(() => ({
        media: "movie",
      }));
      render(<Genres />);
      const CardContainerMoviePopular = await screen.findByText(
        "Peliculas Populares"
      );
      const CardContainerMovieTopRated = await screen.findByText(
        "Peliculas con mejores criticas"
      );
      const CardContainerMovieUpcoming = await screen.findByText(
        "Peliculas a estrenar"
      );
      const CardContainerMovieNowPlaying = await screen.findByText(
        "Peliculas en cine"
      );

      await expect(CardContainerMoviePopular).toBeInTheDocument();
      await expect(CardContainerMovieTopRated).toBeInTheDocument();
      await expect(CardContainerMovieUpcoming).toBeInTheDocument();
      await expect(CardContainerMovieNowPlaying).toBeInTheDocument();
    });
  });
  describe("when rendering default with tv in the url ", () => {
    it("should show 3 CardContainer", async () => {
      useParams.mockImplementation(() => ({
        media: "tv",
      }));
      render(<Genres />);
      const CardContainerTvPopular = await screen.findByText(
        "Series Populares"
      );
      const CardContainerTvTopRated = await screen.findByText(
        "Series con mejores criticas"
      );
      const CardContainerTvOnTheAir = await screen.findByText(
        "Series al aire"
      );

      await expect(CardContainerTvPopular).toBeInTheDocument();
      await expect(CardContainerTvTopRated).toBeInTheDocument();
      await expect(CardContainerTvOnTheAir).toBeInTheDocument();
    });
  });
});
