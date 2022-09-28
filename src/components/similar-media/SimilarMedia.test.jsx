import SimilarMedia from "./SimilarMedia.jsx";
import React from "react";
import { screen, render } from "@testing-library/react";
import useFetch from "../../hooks/useFetch";
import { useParams, useHistory } from "react-router-dom";

const mockSimilarTv = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: "/c2tbGNRSPSFWYBrkAOwVhmfv2J7.jpg",
      first_air_date: "2007-09-19",
      genre_ids: [18, 9648],
      id: 1395,
      name: "Gossip Girl",
      origin_country: ["US"],
      original_language: "en",
      original_name: "Gossip Girl",
      overview:
        "Los niños pijos de un instituto privado de Manhattan se salen siempre con la suya, hasta que una bloguera anónima, llamada la Reina Cotilla, espía sus movimientos.",
      popularity: 127.847,
      poster_path: "/fmegxZBz7GF8k4eme4ZJXXGI0TO.jpg",
      vote_average: 8.353,
      vote_count: 1675,
    },
    {
      adult: false,
      backdrop_path: "/fIKc2cR1GglarzChMAb4BOP1qHP.jpg",
      first_air_date: "2006-10-01",
      genre_ids: [80, 18, 9648],
      id: 1405,
      name: "Dexter",
      origin_country: ["US"],
      original_language: "en",
      original_name: "Dexter",
      overview:
        "Serie de suspense que narra la historia de un hombre extraño llamado Dexter Morgan. Cuando era niño, Dexter fue maltratado y abandonado por sus padres, ahora es un exitoso e importante forense patológico... pero bajo su carismática personalidad, se esconde una terrible verdad. Dexter ha canalizado sus innatas necesidades homicidas en una segunda profesión que guarda celosamente en secreto: buscar, dar caza y asesinar brutalmente a despiadados criminales.",
      popularity: 136.672,
      poster_path: "/58H6Ctze1nnpS0s9vPmAAzPcipR.jpg",
      vote_average: 8.189,
      vote_count: 3203,
    },
  ],
  total_pages: 500,
  total_results: 10000,
};
const mockSimilarMovie = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: "/cWczNud8Y8i8ab0Z4bxos4myWYO.jpg",
      genre_ids: [16, 10751],
      id: 38757,
      original_language: "en",
      original_title: "Tangled",
      overview:
        "Flynn Rider, el más buscado -y encantador- bandido del reino, se esconde en una misteriosa torre y allí se encuentra con Rapunzel, una bella y avispada adolescente con una cabellera dorada de 21 metros de largo, que vive encerrada allí desde hace años. Ambos sellan un pacto y a partir de ese momento la pareja vivirá emocionantes aventuras en compañía de un caballo superpolicía, un camaleón sobreprotector y una ruda pandilla de matones",
      popularity: 153.15,
      poster_path: "/bFUreK1CxkUwk4y6W2Qoo88l0UF.jpg",
      release_date: "2010-11-24",
      title: "Enredados",
      video: false,
      vote_average: 7.582,
      vote_count: 9671,
    },
    {
      adult: false,
      backdrop_path: "/hhxoxYmmx92dKfyibeeBMU2GbC2.jpg",
      genre_ids: [878, 14, 10751, 10402],
      id: 37627,
      original_language: "en",
      original_title: "The Little Prince",
      overview:
        "Un piloto se ve forzado a aterrizar en mitad del desierto. Allí conocerá a un principito de otro planeta que le hará ver las cosas desde otro punto de vista.  Adaptada del magistral cuento de Saint-Exupery, esta mágica fábula musical fue dirigida por un especialista en el género, Stanley Donen, artífice de clásicos como \"Siete novias para siete hermanos\" o \"Cantando bajo la lluvia\".  La cinta fue nominada a la mejor música y canción original en la edición de los Oscars de 1975.",
      popularity: 15.956,
      poster_path: "/nHefFPcFkgqaVSYACIrx18VXRwM.jpg",
      release_date: "1974-11-06",
      title: "El principito",
      video: false,
      vote_average: 6.654,
      vote_count: 94,
    },
  ],
  total_pages: 500,
  total_results: 10000,
};

/**useFetch mock */
jest.mock("../../hooks/useFetch");
const mockUseFetch = useFetch;

/**router mock */
jest.mock("react-router-dom", () => ({
  useParams: jest.fn(),
  useHistory: jest.fn(),
}));

describe("SimilarMedia", () => {
  describe("when rendering a default", () => {
    it("should show a list of similar tv media", async () => {
      useParams.mockImplementation(() => ({
        media: "tv",
        id: "94997",
      }));
      mockUseFetch.mockReturnValue(mockSimilarTv);
      render(<SimilarMedia />);
      expect(
        screen.getByRole("heading", { level: 3, name: "Gossip Girl" })
      ).toBeInTheDocument();
      expect(screen.getAllByRole(/img/i)).toHaveLength(2);
    });
    it("should show a list of similar movie media", async () => {
      useParams.mockImplementation(() => ({
        media: "movie",
        id: "532639",
      }));
      mockUseFetch.mockReturnValue(mockSimilarMovie);
      render(<SimilarMedia />);
      expect(
        screen.getByRole("heading", { level: 3, name: "Enredados" })
      ).toBeInTheDocument();
      expect(screen.getAllByRole(/img/i)).toHaveLength(2);
    });
  });
});
