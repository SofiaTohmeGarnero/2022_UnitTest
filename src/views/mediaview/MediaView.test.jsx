import { render, screen } from "@testing-library/react";
import MediaView from "./MediaView";
import { useParams } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  useParams: jest.fn(),
}));

jest.mock("../../components/card-container/CardContainer.jsx", () =>
  jest.fn(({ title }) => {
    return <div>{title}</div>;
  })
);

jest.mock("../../components/pagination/PaginationContainer.jsx", () =>
  jest.fn(() => {
    return <div>PaginationContainer</div>;
  })
);

describe("MediaView", () => {
  describe("when rendering default with movie as media in url params", () => {
    describe("when use trending as mediagenres in url params", () => {
      it("should show 'Peliculas que son tendencia' as a title", async () => {
        useParams.mockImplementation(() => ({
          media: "movie",
          mediagenres: "trending",
          numberPage: "1",
        }));
        render(<MediaView />);
        const CardContainerMoviePopular = await screen.findByText(
          "Peliculas que son tendencia"
        );
        await expect(CardContainerMoviePopular).toBeInTheDocument();
      });
    });
    describe("when use popular as mediagenres in url params", () => {
      it("should show 'Peliculas populares' as a title", async () => {
        useParams.mockImplementation(() => ({
          media: "movie",
          mediagenres: "popular",
          numberPage: "1",
        }));
        render(<MediaView />);
        const CardContainerMoviePopular = await screen.findByText(
          "Peliculas populares"
        );
        await expect(CardContainerMoviePopular).toBeInTheDocument();
      });
    });
    describe("when use top_rated as mediagenres in url params", () => {
      it("should show 'Peliculas con mejores Criticas' as a title", async () => {
        useParams.mockImplementation(() => ({
          media: "movie",
          mediagenres: "top_rated",
          numberPage: "1",
        }));
        render(<MediaView />);
        const CardContainerMovieTopRated = await screen.findByText(
          "Peliculas con mejores Criticas"
        );
        await expect(CardContainerMovieTopRated).toBeInTheDocument();
      });
    });
    describe("when use upcoming as mediagenres in url params", () => {
      it("should show 'Peliculas a estrenar' as a title", async () => {
        useParams.mockImplementation(() => ({
          media: "movie",
          mediagenres: "upcoming",
          numberPage: "1",
        }));
        render(<MediaView />);
        const CardContainerMovieUpcoming = await screen.findByText(
          "Peliculas a estrenar"
        );
        await expect(CardContainerMovieUpcoming).toBeInTheDocument();
      });
    });
    describe("when use now_playing as mediagenres in url params", () => {
      it("should show 'Peliculas en cine' as a title", async () => {
        useParams.mockImplementation(() => ({
          media: "movie",
          mediagenres: "now_playing",
          numberPage: "1",
        }));
        render(<MediaView />);

        const CardContainerMovieNowPlaying = await screen.findByText(
          "Peliculas en el cine"
        );
        await expect(CardContainerMovieNowPlaying).toBeInTheDocument();
      });
    });
  });
  describe("when rendering default with tv as media in url params", () => {
    describe("when use trending as mediagenres in url params", () => {
      it("should show 'Series que son tendencia' as a title", async () => {
        useParams.mockImplementation(() => ({
          media: "tv",
          mediagenres: "trending",
          numberPage: "1",
        }));
        render(<MediaView />);
        const CardContainerMoviePopular = await screen.findByText(
          "Series que son tendencia"
        );
        await expect(CardContainerMoviePopular).toBeInTheDocument();
      });
    });
    describe("when use popular as mediagenres in url params", () => {
      it("should show 'Series populares' as a title", async () => {
        useParams.mockImplementation(() => ({
          media: "tv",
          mediagenres: "popular",
          numberPage: "1",
        }));
        render(<MediaView />);
        const CardContainerMoviePopular = await screen.findByText(
          "Series populares"
        );
        await expect(CardContainerMoviePopular).toBeInTheDocument();
      });
    });
    describe("when use top_rated as mediagenres in url params", () => {
      it("should show 'Series con mejores Criticas' as a title", async () => {
        useParams.mockImplementation(() => ({
          media: "tv",
          mediagenres: "top_rated",
          numberPage: "1",
        }));
        render(<MediaView />);
        const CardContainerMovieTopRated = await screen.findByText(
          "Series con mejores Criticas"
        );
        await expect(CardContainerMovieTopRated).toBeInTheDocument();
      });
    });
    describe("when use on_the_air as mediagenres in url params", () => {
      it("should show 'Series en el aire' as a title", async () => {
        useParams.mockImplementation(() => ({
          media: "tv",
          mediagenres: "on_the_air",
          numberPage: "1",
        }));
        render(<MediaView />);
        const CardContainerMovieUpcoming = await screen.findByText(
          "Series en el aire"
        );
        await expect(CardContainerMovieUpcoming).toBeInTheDocument();
      });
    });
  });
  describe("when rendering default with search as media in url params", () => {
    describe("when use multi as mediagenres in url params", () => {
      it("should show the query parameter in the title", async () => {
        useParams.mockImplementation(() => ({
          media: "search",
          mediagenres: "multi",
          query: "harry",
          numberPage: "1",
        }));
        render(<MediaView />);
        const CardContainerMoviePopular = await screen.findByText(
          "Resultados para: harry"
        );
        await expect(CardContainerMoviePopular).toBeInTheDocument();
      });
    });
  });
  describe("when rendering default without search as media in url params", () => {
    describe("when use the type of genre as mediagenres in url params", () => {
      it("should show the type of genre in the title", async () => {
        useParams.mockImplementation(() => ({
          media: "movie",
          mediagenres: "Aventura",
          query: "12",
          numberPage: "1",
        }));
        render(<MediaView />);
        const CardContainerMoviePopular = await screen.findByText(
          "Genero Aventura"
        );
        await expect(CardContainerMoviePopular).toBeInTheDocument();
      });
    });
  });
});
