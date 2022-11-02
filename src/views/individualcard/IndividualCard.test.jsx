import IndividualCard from "./IndividualCard.jsx";
import React from "react";
import { screen, render } from "@testing-library/react";
import useFetch from "../../hooks/useFetch";
import { createMemoryHistory } from "history";
import { Router, Route } from "react-router-dom";

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
  backdrop_path: "/84XPpjGvxNyExjSuLQe0SzioErt.jpg",
  genres: [{ id: 18, name: "Drama" }],
  id: 1396,
  name: "Breaking Bad",
  seasons: [
    {
      air_date: "2009-02-17",
      episode_count: 11,
      id: 3577,
      name: "Especiales",
      overview: "",
      poster_path: "/AngNuUbXSciwLnUXtdOBHqphxNr.jpg",
      season_number: 0,
    },
    {
      air_date: "2008-01-20",
      episode_count: 7,
      id: 3572,
      name: "Temporada 1",
      overview:
        "Bryan Cranston, ganador de un Emmy, interpreta a Walter White, un profesor de química venido a menos que lucha por llegar a fin de mes y mantener a su esposa (Anna Gunn) y a un hijo incapacitado (RJ Mitte). Todo cambia cuando a Walter le diagnostican un cáncer terminal de pulmón. Como sólo le quedan unos cuantos años de vida y no tiene nada que perder, Walter usa sus conocimientos de química para fabricar y vender metanfetamina a uno de sus antiguos estudiantes (Aaron Paul). A medida que el negocio crece, también lo hacen las mentiras, pero Walt hará lo que sea para asegurar el futuro de su familia aunque para ello tenga que arriesgar sus vidas.",
      poster_path: "/kmMkmUOdDzbYNFKkMLSRpxEgsvQ.jpg",
      season_number: 1,
    },
    {
      air_date: "2009-03-08",
      episode_count: 13,
      id: 3573,
      name: "Temporada 2",
      overview:
        'Walt (interpretado por Bryan Cranston, ganador de dos Premios Emmy) y Jesse (Aaron Paul) están con el agua al cuello en la segunda temporada de "Breaking Bad". A medida que se estrecha su relación, Walt y Jesse empiezan a ver el lado más oscuro del narcotráfico. Aunque ha hecho fortuna gracias a su metanfetamina azul, a Walt le resulta cada vez más difícil ocultarle la verdad a su esposa Skyler (Anna Gunn), a su hijo Walter Jr. (RJ Mitte) y a su cuñado Hank (Dean Norris), el agente de la D.E.A. Walt lucha por mantener su vida bajo control al lidiar con narcotraficantes despiadados, con una esposa e hijo cada vez más distantes, con el nacimiento inminente de su hija y con un socio drogadicto, y eso sin contar con que debe enfrentarse a un cáncer terminal de pulmón.',
      poster_path: "/j5L399rdZOm2zdiBn08ixLomthC.jpg",
      season_number: 2,
    },
  ],
};
const mockTvDataWithoutImg = {
  adult: false,
  genres: [{ id: 18, name: "Drama" }],
  id: 1396,
  name: "Breaking Bad",
  seasons: [
    {
      air_date: "2009-02-17",
      episode_count: 11,
      id: 3577,
      name: "Especiales",
      overview: "",
      poster_path: "/AngNuUbXSciwLnUXtdOBHqphxNr.jpg",
      season_number: 0,
    },
    {
      air_date: "2008-01-20",
      episode_count: 7,
      id: 3572,
      name: "Temporada 1",
      overview:
        "Bryan Cranston, ganador de un Emmy, interpreta a Walter White, un profesor de química venido a menos que lucha por llegar a fin de mes y mantener a su esposa (Anna Gunn) y a un hijo incapacitado (RJ Mitte). Todo cambia cuando a Walter le diagnostican un cáncer terminal de pulmón. Como sólo le quedan unos cuantos años de vida y no tiene nada que perder, Walter usa sus conocimientos de química para fabricar y vender metanfetamina a uno de sus antiguos estudiantes (Aaron Paul). A medida que el negocio crece, también lo hacen las mentiras, pero Walt hará lo que sea para asegurar el futuro de su familia aunque para ello tenga que arriesgar sus vidas.",
      poster_path: "/kmMkmUOdDzbYNFKkMLSRpxEgsvQ.jpg",
      season_number: 1,
    },
    {
      air_date: "2009-03-08",
      episode_count: 13,
      id: 3573,
      name: "Temporada 2",
      overview:
        'Walt (interpretado por Bryan Cranston, ganador de dos Premios Emmy) y Jesse (Aaron Paul) están con el agua al cuello en la segunda temporada de "Breaking Bad". A medida que se estrecha su relación, Walt y Jesse empiezan a ver el lado más oscuro del narcotráfico. Aunque ha hecho fortuna gracias a su metanfetamina azul, a Walt le resulta cada vez más difícil ocultarle la verdad a su esposa Skyler (Anna Gunn), a su hijo Walter Jr. (RJ Mitte) y a su cuñado Hank (Dean Norris), el agente de la D.E.A. Walt lucha por mantener su vida bajo control al lidiar con narcotraficantes despiadados, con una esposa e hijo cada vez más distantes, con el nacimiento inminente de su hija y con un socio drogadicto, y eso sin contar con que debe enfrentarse a un cáncer terminal de pulmón.',
      poster_path: "/j5L399rdZOm2zdiBn08ixLomthC.jpg",
      season_number: 2,
    },
  ],
};

jest.mock("../../components/infocard/InfoCard.jsx", () =>
  jest.fn(() => {
    return <div>InfoCard</div>;
  })
);

jest.mock("../../components/season/SeasonTv", () =>
  jest.fn(() => {
    return <div>SeasonTv</div>;
  })
);
jest.mock("../../components/castcontainer/CastContainer", () =>
  jest.fn(() => {
    return <div>CastContainer</div>;
  })
);
jest.mock("../../components/movies-videos/MoviesVideos", () =>
  jest.fn(() => {
    return <div>MoviesVideos</div>;
  })
);
jest.mock("../../components/similar-media/SimilarMedia", () =>
  jest.fn(() => {
    return <div>SimilarMedia</div>;
  })
);


/**useFetch mock */
jest.mock("../../hooks/useFetch");
const mockUseFetch = useFetch;

describe("IndividualCard", () => {
  describe("when rendering default with tv as a media parameter in the url", () => {
    it("should rendering huge image, menu and InfoCard component", () => {
      mockUseFetch.mockReturnValue(mockTvData);
      const history = createMemoryHistory();
      history.push('/tv/1396/info');
       render(
        <Router history={history}>
          <Route path={'/:media/:id/:section'} component={IndividualCard} />
        </Router>
      ); 
      const hugeImage = screen.getByAltText(mockTvData.name);
      expect(hugeImage).toBeInTheDocument();
      expect(screen.getByText("INFO")).toBeInTheDocument();
      expect(screen.getByText(/EPISODIOS/i)).toBeInTheDocument();
      expect(screen.getByText(/REPARTO/i)).toBeInTheDocument();
      expect(screen.getByText(/SIMILARES/i)).toBeInTheDocument();
      expect(screen.getByText(/InfoCard/i)).toBeInTheDocument();
    });
    
  });
  describe("when rendering default with tv as a media parameter in the url but without img", () => {
    it("should rendering 'Not available' image", () => {
      mockUseFetch.mockReturnValue(mockTvDataWithoutImg);
      const history = createMemoryHistory();
      history.push('/tv/1396/info');
       render(
        <Router history={history}>
          <Route path={'/:media/:id/:section'} component={IndividualCard} />
        </Router>
      ); 
      const hugeImage = screen.queryByAltText(mockTvDataWithoutImg.name);
      expect(hugeImage).not.toBeInTheDocument();
      expect(screen.getByTestId("Not available")).toBeInTheDocument();
    });
    
  });
  describe("when rendering default with movie as a media parameter in the url", () => {
    it("should rendering huge image, menu and InfoCard component", () => {
      mockUseFetch.mockReturnValue(mockMovieData);
      const history = createMemoryHistory();
      history.push('/movie/532639/info');
       render(
        <Router history={history}>
          <Route path={'/:media/:id/:section'} component={IndividualCard} />
        </Router>
      );
      const hugeImage = screen.getByAltText(mockMovieData.title);
      expect(hugeImage).toBeInTheDocument();
      expect(screen.getByText("INFO")).toBeInTheDocument();
      expect(screen.getByText(/REPARTO/i)).toBeInTheDocument();
      expect(screen.getByText(/VIDEOS/i)).toBeInTheDocument();
      expect(screen.getByText(/SIMILARES/i)).toBeInTheDocument();
      expect(screen.getByText(/InfoCard/i)).toBeInTheDocument();
    });
    
  });
  describe("when rendering with '/tv/1396/seasons/1' in the url ", () => {
    it("should rendering huge image, menu and SeasonTv component", () => {
      mockUseFetch.mockReturnValue(mockTvData);
      const history = createMemoryHistory();
      history.push('/tv/1396/seasons/1');
       render(
        <Router history={history}>
          <Route path={'/:media/:id/seasons/:seasonNumber'} component={IndividualCard} />
        </Router>
      ); 
      const hugeImage = screen.getByAltText(mockTvData.name);
      expect(hugeImage).toBeInTheDocument();
      expect(screen.getByText("INFO")).toBeInTheDocument();
      expect(screen.getByText(/EPISODIOS/i)).toBeInTheDocument();
      expect(screen.getByText(/REPARTO/i)).toBeInTheDocument();
      expect(screen.getByText(/SIMILARES/i)).toBeInTheDocument();
      expect(screen.getByText(/SeasonTv/i)).toBeInTheDocument();
    });
    
  });
  describe("when rendering with '/tv/1396/cast' in the url ", () => {
    it("should rendering huge image, menu and CastContainer component", () => {
      mockUseFetch.mockReturnValue(mockTvData);
      const history = createMemoryHistory();
      history.push('/tv/1396/cast');
       render(
        <Router history={history}>
          <Route path={'/:media/:id/cast'} component={IndividualCard} />
        </Router>
      ); 
      const hugeImage = screen.getByAltText(mockTvData.name);
      expect(hugeImage).toBeInTheDocument();
      expect(screen.getByText("INFO")).toBeInTheDocument();
      expect(screen.getByText(/EPISODIOS/i)).toBeInTheDocument();
      expect(screen.getByText(/REPARTO/i)).toBeInTheDocument();
      expect(screen.getByText(/SIMILARES/i)).toBeInTheDocument();
      expect(screen.getByText(/CastContainer/i)).toBeInTheDocument();
    });
    
  });
  describe("when rendering with '/movie/532639/videos' in the url ", () => {
    it("should rendering huge image, menu and MoviesVideos component", () => {
      mockUseFetch.mockReturnValue(mockMovieData);
      const history = createMemoryHistory();
      history.push('/movie/532639/videos');
       render(
        <Router history={history}>
          <Route path={'/:media/:id/videos'} component={IndividualCard} />
        </Router>
      ); 
      screen.debug()
      const hugeImage = screen.getByAltText(mockMovieData.title);
      expect(hugeImage).toBeInTheDocument();
      expect(screen.getByText("INFO")).toBeInTheDocument();
      expect(screen.getByText("VIDEOS")).toBeInTheDocument();
      expect(screen.getByText(/REPARTO/i)).toBeInTheDocument();
      expect(screen.getByText(/SIMILARES/i)).toBeInTheDocument();
      expect(screen.getByText(/MoviesVideos/i)).toBeInTheDocument();
    });
    
  });
  describe("when rendering with '/tv/1396/similar' in the url ", () => {
    it("should rendering huge image, menu and SimilarMedia component", () => {
      mockUseFetch.mockReturnValue(mockTvData);
      const history = createMemoryHistory();
      history.push('/tv/1396/similar');
       render(
        <Router history={history}>
          <Route path={'/:media/:id/similar'} component={IndividualCard} />
        </Router>
      ); 
      const hugeImage = screen.getByAltText(mockTvData.name);
      expect(hugeImage).toBeInTheDocument();
      expect(screen.getByText("INFO")).toBeInTheDocument();
      expect(screen.getByText(/EPISODIOS/i)).toBeInTheDocument();
      expect(screen.getByText(/REPARTO/i)).toBeInTheDocument();
      expect(screen.getByText(/SIMILARES/i)).toBeInTheDocument();
      expect(screen.getByText(/SimilarMedia/i)).toBeInTheDocument();
    });
    
  });
});
