import SeasonTv from "./SeasonTv.jsx";
import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import useFetch from "../../hooks/useFetch";
import { useParams, useHistory } from "react-router-dom";

const mockSeasonsProps = [
  {
    air_date: "2010-12-05",
    episode_count: 260,
    id: 3627,
    name: "Especiales",
    overview: "",
    poster_path: "/kMTcwNRfFKCZ0O2OaBZS0nZ2AIe.jpg",
    season_number: 0,
  },
  {
    air_date: "2011-04-17",
    episode_count: 10,
    id: 3624,
    name: "Temporada 1",
    overview:
      "La lucha por el Trono de hierro está por empezar. Se desplegará desde el sur, donde el calor engendra conspiraciones, lujurias e intrigas, pasando por las vastas y salvajes tierras del este, hasta llegar al gélido norte, donde una pared de hielo de 800 pies protege al reino de las fuerzas del mal que yacen detrás. Reyes y reinas, caballeros y renegados, mentirosos, nobles y hombres de bien... Todos quieren jugar.",
    poster_path: "/uAWrtCFIJo6gUweHwuSSqRILaIX.jpg",
    season_number: 1,
  },
  {
    air_date: "2012-04-01",
    episode_count: 10,
    id: 3625,
    name: "Temporada 2",
    overview:
      "En la segunda temporada de la épica serie original de HBO Game of Thrones, reyes de todos los lugares del continente ficticio de Westeros luchan por el Trono de Hierro. A medida que el invierno se acerca, el cruel y joven Joffrey ocupa el Trono en King´s Landing, asesorado por su insidiosa madre Cersei y su tío Tyrion, quien ha sido nombrado la nueva Mano del Rey. Pero el poder que mantienen los Lannister se ve amenazado en varios frentes, con dos Baretheon proclamados reyes y Robb Stark luchando como el Rey del Norte. Mientras tanto, un nuevo líder está surgiendo entre los salvajes del norte del Muro, sumando nuevos peligros para Jon Snow y la Guardia Nocturna, mientras Daenerys Targaryen busca reforzar su reducido poder en el Este con sus dragones recién nacidos. Con rivalidades y acuerdos, rencores y alianzas, la Segunda Temporada es un emocionante viaje a través de un maravilloso e inolvidable paisaje. Basada en los best-sellers de George R.R. Martin, Game of Thrones es una historia de engaño y traición, nobleza y honor, conquista y triunfo.",
    poster_path: "/yZtRt90wNuKXuWWrmAnmDz4IEvL.jpg",
    season_number: 2,
  },
];

const mockFetchInfoSeason0 = {
  air_date: "2010-12-05",
  episodes: [
    {
      air_date: "2012-04-01",
      crew: [
        {
          job: "Director",
          department: "Directing",
          credit_id: "5256c8a619c2956ff6047255",
          adult: false,
        },
      ],
      episode_number: 1,
      guest_stars: [
        {
          character: "Jaime Lannister",
          credit_id: "5256c8ad19c2956ff604793e",
          order: 9,
          adult: false,
        },
      ],
      id: 63066,
      name: "El Norte no olvida",
      overview:
        "Tyrion llega para salvar la corona de Joffrey de viejas y nuevas amenazas. Daenerys busca agua y aliados en el Desierto Rojo. Jon Nieve y los miembros de la Guardia de la Noche se enfrentan a los salvajos más allá del Muro.",
      production_code: "201",
      runtime: 53,
      season_number: 0,
      show_id: 1399,
      still_path: "/gGHtlTvHpSGZ8DIrxMyK3Ewkc1Y.jpg",
      vote_average: 8,
      vote_count: 121,
    },
    {
      air_date: "2012-04-08",
      crew: [
        {
          job: "Director",
          department: "Directing",
          credit_id: "5256c8a619c2956ff6047255",
          adult: false,
        },
      ],
      episode_number: 2,
      guest_stars: [
        {
          character: "Jaime Lannister",
          credit_id: "5256c8ad19c2956ff604793e",
          order: 9,
          adult: false,
        },
      ],
      id: 974430,
      name: "Las tierras de la noche",
      overview:
        "Arya comparte un secreto con un recluta familiar. Un explorador regresa para darle noticias inesperadas a Dany. Theon vuelve a casa en las Islas del Hierro y a su familia verdadera. Tyrion imparte justicia y Jon es testigo de un terrible crímen.",
      production_code: "202",
      runtime: 54,
      season_number: 0,
      show_id: 1399,
      still_path: "/gGHtlTvHpSGZ8DIrxMyK3Ewkc1Y.jpg",
      vote_average: 7.9,
      vote_count: 111,
    },
    {
      air_date: "2011-04-10",
      crew: [],
      episode_number: 3,
      guest_stars: [],
      id: 2247123,
      name: "El juego comienza",
      overview:
        'Una producción española de "Canal +" con entrevistas a algunos directores de cine españoles famosos como Alex de La Iglesia y extractos del último especial "Cómo se hizo Juego de Tronos".',
      production_code: "",
      runtime: 54,
      season_number: 0,
      show_id: 1399,
      still_path: null,
      vote_average: 5,
      vote_count: 111,
    },
  ],
  id: 3627,
  name: "Especiales",
  overview: "",
  poster_path: "/kMTcwNRfFKCZ0O2OaBZS0nZ2AIe.jpg",
  season_number: 0,
  _id: "5256c8a019c2956ff6046dd7",
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

describe("SeasonTv", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    useParams.mockImplementation(() => ({
      media: "tv",
      id: "1399",
      seasonNumber: 0,
    }));
    mockUseFetch.mockReturnValue(mockFetchInfoSeason0);
    render(<SeasonTv seasons={mockSeasonsProps} />);
  });
  describe("when rendering default", () => {
    it("should correctly set default option and display the correct number of options", () => {
      expect(screen.getByRole("option", { name: "Temporada 0" }).selected).toBe(
        true
      );
      expect(screen.getAllByRole("option").length).toBe(3);
    });
    it("should show list of episodes", () => {
      expect(screen.getAllByRole("img")).toHaveLength(2);
      expect(screen.getByTestId("Not available")).toBeInTheDocument();
    });
  });
  describe("when clicking on select", () => {
    it("should allow user to change season", async () => {
      await userEvent.selectOptions(
        screen.getByRole("combobox"),
        screen.getByRole("option", { name: "Temporada 2" })
      );
      screen.debug();
      await expect(
        screen.getByRole("option", { name: "Temporada 2" }).selected
      ).toBe(true);
    });
  });
});
