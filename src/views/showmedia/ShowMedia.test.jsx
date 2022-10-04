import ShowMedia from "./ShowMedia.jsx";
import React from "react";
import { screen, render } from "@testing-library/react";

const searchParams = {
  media: "search",
  mediagenres: "multi",
  numberPage: "1",
  query: "harry",
};
const genreParams = {
  media: "movie",
  mediagenres: "Aventura",
  numberPage: "1",
  query: "12",
};
const trendingParams = {
  media: "movie",
  mediagenres: "trending",
  numberPage: "1",
  query: undefined,
};

describe("ShowMedia", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe("when testing the behavior of useFetch", () => {
    describe("when fetching some search with query and page", () => {
        it("should return a valid default page of media", async () => {
          render(
            <ShowMedia
              mediaType={searchParams}
              title={`Resultados para: ${searchParams.query}`}
            />
          );
          const title = await screen.findByRole("heading", {
            level: 2,
            name: "Resultados para: harry",
          });
          await expect(title).toBeInTheDocument();
        });
      });
      describe("when fetching media with specific genre", () => {
        it("should return a valid default page of media", async () => {
          render(
            <ShowMedia
              mediaType={genreParams}
              title={`Genero ${genreParams.mediagenres}`}
            />
          );
          const title = await screen.findByRole("heading", {
            level: 2,
            name: "Genero Aventura",
          });
          await expect(title).toBeInTheDocument();
        });
      });
  })
  describe("when fetching trending media with pagination", () => {
    it("should return a valid default page of media", async () => {
      render(
        <ShowMedia
          mediaType={trendingParams}
          title="Peliculas que son tendencia"
        />
      );
      const title = await screen.findByRole("heading", {
        level: 2,
        name: "Peliculas que son tendencia",
      });
      await expect(title).toBeInTheDocument();
    });
  });
});
