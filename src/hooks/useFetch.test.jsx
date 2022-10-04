import React from "react";
import useFetch from "./useFetch";
import { useState, useEffect } from "react";

import { screen, render, waitFor } from "@testing-library/react";
import { renderHook } from "@testing-library/react";

const mockPinochoData = {
  adult: false,
  backdrop_path: "/nnUQqlVZeEGuCRx8SaoCU4XVHJN.jpg",
  belongs_to_collection: null,
  budget: 250000000,
  genres: [
    { id: 14, name: "Fantasía" },
    { id: 12, name: "Aventura" },
    { id: 10751, name: "Familia" },
  ],
  homepage: "",
  id: 532639,
  imdb_id: "tt4593060",
  original_language: "en",
  original_title: "Pinocchio",
  overview:
    "Versión en acción real del aclamado cuento sobre una marioneta que se embarca en una trepidante aventura para convertirse en un niño de verdad. La historia también presenta a otros personajes, como Gepetto, el carpintero que fabrica a Pinocho y lo trata como a su propio hijo; Pepito Grillo, que hace las veces de guía y “conciencia” de Pinocho; el Hada Azul; el Honrado Juan; la gaviota Sofía, y el cochero.",
  popularity: 3811.061,
  poster_path: "/1yIM2QL0qLzWMjTGuMX12yZnBtb.jpg",
  production_companies: [
    {
      id: 2,
      logo_path: "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
      name: "Walt Disney Pictures",
      origin_country: "US",
    },
    { id: 1473, logo_path: null, name: "Depth of Field", origin_country: "US" },
  ],
  production_countries: [
    { iso_3166_1: "US", name: "United States of America" },
  ],
  release_date: "2022-09-07",
  revenue: 758004063,
  runtime: 105,
  spoken_languages: [
    { english_name: "English", iso_639_1: "en", name: "English" },
  ],
  status: "Released",
  tagline: "El clásico eterno.",
  title: "Pinocho",
  video: false,
  vote_average: 6.761,
  vote_count: 722,
};

/* useFetch mock  */
jest.mock("./useFetch");
const mockUseFetch = useFetch;

describe("useFetch", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe("when fetching media", () => {
    describe("when fetching with query, page and with_genres", () => {
      it("should return a valid default page of media", async () => {
        mockUseFetch.mockReturnValue({
          page: 1,
          results: [mockPinochoData],
          total_pages: 1000,
          total_results: 20000,
        });
        const { result } = renderHook(() =>
          useFetch([3, "search", "multi"], {
            query: "pinocho",
            page: "1",
            with_genres: "",
          })
        );
        expect(result.current).toStrictEqual({
          page: 1,
          results: [mockPinochoData],
          total_pages: 1000,
          total_results: 20000,
        });
    });
      
    });
})
})
