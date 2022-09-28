import InfoCard from "./InfoCard.jsx";
import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import useFetch from "../../hooks/useFetch";
import { useParams, useHistory } from "react-router-dom";

const mockPersonData = {
  biography:
    "William Bradley Pitt (Shawnee, Oklahoma; 18 de diciembre de 1963) es un actor y productor de cine estadounidense. Además de por su trabajo interpretativo, por el que ha sido nominado en tres ocasiones a los Premios Óscar y en cuatro a los Premios Globo de Oro.\n\nPitt comenzó su carrera interpretativa al aparecer como invitado en programas de televisión, entre los cuales se incluye un papel en el serial televisivo de CBS, Dallas (1987). Posteriormente, obtuvo reconocimiento de la prensa con la interpretación del cowboy autoestopista que seduce al personaje de Geena Davis en la película Thelma & Louise (1991). Los primeros papeles protagónicos de Pitt en producciones de alto presupuesto fueron A River Runs Through It (1992) y Entrevista con el vampiro (1994). También participó junto con Anthony Hopkins en el drama Leyendas de pasión (1994), papel que le hizo obtener su primera nominación a los Premios Globo de Oro.\n\nEn 1995 recibió aclamación de la crítica por sus interpretaciones en el filme de suspense Se7en y en el de ciencia ficción Doce monos, siendo esta última la que lo hizo ganar un Globo de Oro en la categoría de «mejor actor de reparto» y una nominación al Premio Óscar. Cuatro años más tarde, protagonizó el éxito de culto Fight Club (1999), y poco después actuó en el exitoso filme Ocean's Eleven (2001).",
  birthday: "1963-12-18",
  deathday: null,
  gender: 2,
  homepage: null,
  id: 287,
  imdb_id: "nm0000093",
  known_for_department: "Acting",
  name: "Brad Pitt",
  place_of_birth: "Shawnee, Oklahoma, USA",
  popularity: 88.319,
  profile_path: "/lnMiSPqrDDvA1juXYc8pnnyKmo9.jpg",
};

const mockPersonIncompleteData = {
  biography: "",
  birthday: "",
  deathday: null,
  gender: 0,
  homepage: null,
  id: 22287,
  imdb_id: null,
  known_for_department: "Sound",
  name: "Polio Brezin",
  place_of_birth: null,
  popularity: 0.6,
  profile_path: null,
};

const mockMovieData = {
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

const mockTvData = {
  adult: false,
  backdrop_path: "/pdfCr8W0wBCpdjbZXSxnKhZtosP.jpg",
  episode_run_time: [60],
  first_air_date: "2022-09-01",
  genres: [
    { id: 10765, name: "Sci-Fi & Fantasy" },
    { id: 10759, name: "Action & Adventure" },
    { id: 18, name: "Drama" },
  ],
  homepage: "https://www.amazon.com/dp/B09QHC2LZM",
  id: 84773,
  in_production: true,
  languages: ["en"],
  last_air_date: "2022-09-22",
  last_episode_to_air: {
    air_date: "2022-09-22",
    episode_number: 5,
    id: 3894853,
    name: "Despedidas",
    overview:
      "Nori cuestiona su instinto. Elrond lucha por mante…os habitantes del sur se preparan para el ataque.",
  },
  name: "El Señor de los Anillos: Los anillos de poder",
  networks: [
    {
      id: 1024,
      name: "Amazon",
      logo_path: "/ifhbNuuVnlwYy5oXA5VIb2YR8AZ.png",
      origin_country: "",
    },
  ],
  next_episode_to_air: {
    air_date: "2022-09-29",
    episode_number: 6,
    id: 3894854,
    name: "Episodio 6",
    overview: "",
  },
  number_of_episodes: 8,
  number_of_seasons: 1,
  origin_country: ["US"],
  original_language: "en",
  original_name: "The Lord of the Rings: The Rings of Power",
  overview:
    "Un reparto coral de personajes —unos conocidos y otros nuevos— debe afrontar la reaparición del mal en la Tierra Media. Desde las profundidades más oscuras de las Montañas Nubladas hasta los majestuosos bosques de Lindon, desde el reino insular de Númenor hasta los extremos más remotos del mapa, estos parajes y personajes forjarán los legados que perdurarán más allá de su desaparición.",
  popularity: 4150.076,
  poster_path: "/k6Reu01wavDga2nMOSCKjg3Npdu.jpg",
  vote_average: 7.658,
  vote_count: 812,
};

/**useFetch mock */
jest.mock("../../hooks/useFetch");
const mockUseFetch = useFetch;

/**router mock */
jest.mock("react-router-dom", () => ({
  useParams: jest.fn(),
  useHistory: jest.fn(),
}));

const mockPush = jest.fn();
useHistory.mockImplementation(() => ({
  push: mockPush,
}));

describe("InfoCard", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe("when rendering a person default", () => {
    it("should show a profile image", () => {
      useParams.mockImplementation(() => ({
        media: "person",
      }));
      mockUseFetch.mockReturnValue(mockPersonData);
      render(<InfoCard />);
      const profileImage = screen.getByAltText(mockPersonData.name);
      expect(profileImage).toBeInTheDocument();
    });
  });
  describe("when rendering an incomplete person", () => {
    it("should show not available image", () => {
      useParams.mockImplementation(() => ({
        media: "person",
      }));
      mockUseFetch.mockReturnValue(mockPersonIncompleteData);
      render(<InfoCard />);
      expect(screen.getByTestId("Not available")).toBeInTheDocument();
    });
  });
  describe("when rendering a movie", () => {
    beforeEach(() => {
      useParams.mockImplementation(() => ({
        media: "movie",
        id: "532639",
      }));
      mockUseFetch.mockReturnValue(mockMovieData);
      render(<InfoCard />);
    });
    it("should show a poster image", () => {
      const posterImage = screen.getByAltText(mockMovieData.title);
      expect(posterImage).toBeInTheDocument();
    });
    it("should show length of a movie", () => {
      expect(screen.getByText(/Duracion:105 min/i)).toBeInTheDocument();
    });
    it("should show budget and revenue of a movie", () => {
      expect(
        screen.getByText("Presupuesto: $ 250,000,000")
      ).toBeInTheDocument();
      expect(
        screen.getByText("Recaudacion: $ 758,004,063")
      ).toBeInTheDocument();
    });
  });
  describe("when clicking on a movie genre", () => {
    it("should go to the list of movies of the selected genre", async () => {
      useParams.mockImplementation(() => ({
        media: "movie",
        id: "532639",
      }));
      mockUseFetch.mockReturnValue(mockMovieData);
      render(<InfoCard />);
      const genreLink = screen.getByText("Fantasía");
      userEvent.click(genreLink);
      await waitFor(() => {
        expect(mockPush).toHaveBeenNthCalledWith(
          1,
          "/movie/Fantasía/14/page/1"
        );
      });
      expect(genreLink).toBeInTheDocument();
    });
  });
  describe("when rendering a tv serie", () => {
    beforeEach(() => {
      useParams.mockImplementation(() => ({
        media: "tv",
        id: "84773",
      }));
      mockUseFetch.mockReturnValue(mockTvData);
      render(<InfoCard />);
    });
    it("should show length of a serie", () => {
      expect(screen.getByText(/Duracion:60 min/i)).toBeInTheDocument();
    });
    it("should show number of episodes and number of seasons", () => {
      expect(
        screen.getByText("Temporadas: 1")
      ).toBeInTheDocument();
      expect(
        screen.getByText("Episodios: 8")
      ).toBeInTheDocument();
    });
  });
});
