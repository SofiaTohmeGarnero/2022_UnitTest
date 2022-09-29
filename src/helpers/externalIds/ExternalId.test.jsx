import ExternalId from "./ExternalId.jsx";
import React from "react";
import { screen, render, waitFor } from "@testing-library/react";

const mockPersonProps = {
  facebook_id: "TomHanks",
  freebase_id: "/en/tom_hanks",
  freebase_mid: "/m/0bxtg",
  id: 31,
  imdb_id: "nm0000158",
  instagram_id: "tomhanks",
  tvrage_id: 14293,
  twitter_id: "tomhanks",
};

const mockMovieProps = {
  facebook_id: "DisneyPinocchio",
  id: 532639,
  imdb_id: "tt4593060",
  instagram_id: "disneypinocchio",
  twitter_id: "DisneyPinocchio",
};

describe("ExternalId", () => {
  describe("when rendering a movie default", () => {
    it("should show imdb anchor", () => {
      render(
        <ExternalId
          data={['imdb_id', 'tt4593060']}
          key={1}
          person={""}
        />
      );
      const imdb = screen.getByRole(/link/i);
      expect(imdb).toBeInTheDocument();
      expect(imdb).toHaveAttribute('href', 'https://www.imdb.com/title/tt4593060')
    });
    it("should show facebook anchor", () => {
      render(
        <ExternalId
          data={['facebook_id', 'DisneyPinocchio']}
          key={1}
          person={""}
        />
      );
      const facebook = screen.getByRole(/link/i);
      expect(facebook).toBeInTheDocument();
      expect(facebook).toHaveAttribute('href', 'https://www.facebook.com/DisneyPinocchio')
    });
    it("should show instagram anchor", () => {
      render(
        <ExternalId
          data={['instagram_id', 'disneypinocchio']}
          key={1}
          person={""}
        />
      );
      const instagram = screen.getByRole(/link/i);
      expect(instagram).toBeInTheDocument();
      expect(instagram).toHaveAttribute('href', 'https://www.instagram.com/disneypinocchio')
    });
    it("should show twitter anchor", () => {
      render(
        <ExternalId
          data={['twitter_id', 'DisneyPinocchio']}
          key={1}
          person={""}
        />
      );
      const twitter = screen.getByRole(/link/i);
      expect(twitter).toBeInTheDocument();
      expect(twitter).toHaveAttribute('href', 'https://www.twitter.com/DisneyPinocchio')
    });
  });
  describe("when rendering a person default", () => {
    it("should show imdb anchor", () => {
      render(
        <ExternalId
          data={['imdb_id', 'nm0000158']}
          key={1}
          person={"person"}
        />
      );
      const imdb = screen.getByRole(/link/i);
      expect(imdb).toBeInTheDocument();
      expect(imdb).toHaveAttribute('href', 'https://www.imdb.com/name/nm0000158')
    });
});
});
