import { rest } from "msw";
import { setupServer } from "msw/node";

export const handlers = [
  rest.get(
    "https://api.themoviedb.org/3/:media/:mediagenres",
    async (req, res, ctx) => {
      const media = req.params.media;
      const mediagenres = req.params.mediagenres;
      const query = req.url.searchParams;

      if (
        media === "search" &&
        mediagenres === "multi" &&
        query.get("api_key") === "84e25ac11ad6125024e1d376337be05f" &&
        query.get("language") === "es-ES" &&
        query.get("page") === "1" &&
        query.get("query") === "harry"
      ) {
        return res(
          ctx.json({
            page: 1,
            results: [],
            total_pages: 1000,
            total_results: 20000,
          })
        );
      }
    }
  ),
  rest.get(
    "https://api.themoviedb.org/3/discover/:media",
    async (req, res, ctx) => {
      const media = req.params.media;
      const query = req.url.searchParams;
      if (
        media === "movie" &&
        query.get("api_key") === "84e25ac11ad6125024e1d376337be05f" &&
        query.get("language") === "es-ES" &&
        query.get("page") === "1" &&
        query.get("with_genres") === "12"
      ) {
        return res(
          ctx.json({
            page: 1,
            results: [],
            total_pages: 1000,
            total_results: 20000,
          })
        );
      }
    }
  ),
  rest.get(
    "https://api.themoviedb.org/3/:mediagenres/:media/week",
    async (req, res, ctx) => {
      const media = req.params.media;
      const mediagenres = req.params.mediagenres;
      const query = req.url.searchParams;
      /*para testear <ShoeMedia/> trending media with pagination*/
      if (
        media === "movie" &&
        mediagenres === "trending" &&
        query.get("api_key") === "84e25ac11ad6125024e1d376337be05f" &&
        query.get("language") === "es-ES" &&
        query.get("page") === "1"
      ) {
        return res(
          ctx.json({
            page: 1,
            results: [],
            total_pages: 1000,
            total_results: 20000,
          })
        );
      }

      /*para testear <Home/> que no le pasa al hook la variable page*/
      if (
        media === "movie" &&
        mediagenres === "trending" &&
        query.get("api_key") === "84e25ac11ad6125024e1d376337be05f" &&
        query.get("language") === "es-ES"
      ) {
        return res(
          ctx.json({
            page: 1,
            results: [],
            total_pages: 1000,
            total_results: 20000,
          })
        );
      }
      if (
        media === "tv" &&
        mediagenres === "trending" &&
        query.get("api_key") === "84e25ac11ad6125024e1d376337be05f" &&
        query.get("language") === "es-ES"
      ) {
        return res(
          ctx.json({
            page: 1,
            results: [],
            total_pages: 1000,
            total_results: 20000,
          })
        );
      }
    }
  ),
  rest.get(
    "https://api.themoviedb.org/3/:media/:data",
    async (req, res, ctx) => {
      const media = req.params.media;
      const data = req.params.data;
      const query = req.url.searchParams;

      if (
        (media === "movie" || media === "tv" ) &&
        (data === "popular" ||
          data === "top_rated" ||
          data === "upcoming" ||
          data === "on_the_air" ||
          data === "now_playing") &&
        query.get("api_key") === "84e25ac11ad6125024e1d376337be05f" &&
        query.get("language") === "es-ES"
      ) {
        return res(
          ctx.json({
            page: 1,
            results: [],
            total_pages: 1000,
            total_results: 20000,
          })
        );
      }
    }
  ),
];

const server = setupServer(...handlers);
export { server, rest };
