import CardContainer, {CardPresenter} from "./CardContainer.jsx";
import React from "react";
import { screen, render } from "@testing-library/react";

const mockProps = {
  info: [
    {
      id: 94997,
      media_type: "tv",
      original_name: "House of the Dragon",
      poster_path: "/xiB0hsxMpgxpJehYxUDhiUkg2w.jpg",
    },
    {
      id: 92783,
      media_type: "tv",
      original_name: "She-Hulk: Attorney at Law",
      poster_path: "/4ie82rXFa1rAJ9qTWoCvlljglLJ.jpg",
    },
    {
      id: 90802,
      media_type: "tv",
      original_name: "The Sandman",
      poster_path: "/b7EIwmXtQBEyrLHcUEyuJxPoARk.jpg",
    },
    {
      id: 84773,
      media_type: "tv",
      original_name: "The Lord of the Rings: The Rings of Power",
      poster_path: "/vet2jdd7A7rI4aswv32SxsZtnjX.jpg",
    },
    {
      id: 80752,
      media_type: "tv",
      original_name: "See",
      poster_path: "/lKDIhc9FQibDiBQ57n3ELfZCyZg.jpg",
    },
    {
      id: 1399,
      media_type: "tv",
      original_name: "Game of Thrones",
      poster_path: "/z9gCSwIObDOD2BEtmUwfasar3xs.jpg",
    },
  ],
  title: "Series que son tendencia",
  link: "tv/trending/page/1",
  mediaType: "tv",
};

describe("CardContainer", () => {
  describe("with Link prop", () => {
    it("should render a section title with arrow ", () => {
      render(
        <CardContainer
          info={mockProps.info}
          title={mockProps.title}
          link={mockProps.link}
          mediaType={mockProps.mediaType}
        />
      );
      expect(screen.getByText("Series que son tendencia")).toBeInTheDocument();
      expect(screen.getByTestId("blue-arrow")).toBeInTheDocument();
    });
    it("should render only 5 cards ", () => {
      render(
        <CardPresenter
          info={mockProps.info}
          link={mockProps.link}
          mediaType={mockProps.mediaType}
        />
      );
      expect(screen.getAllByRole("img")).toHaveLength(5);
    });
  });
  describe("without Link prop", () => {
    it("should render a section title without arrow ", () => {
      render(
        <CardContainer
          info={mockProps.info}
          title={mockProps.title}
          mediaType={mockProps.mediaType}
        />
      );
      expect(screen.getByText("Series que son tendencia")).toBeInTheDocument();
      expect(screen.queryByTestId("blue-arrow")).not.toBeInTheDocument();
    });
    it("should render all cards within info array ", () => {
        render(
          <CardPresenter
            info={mockProps.info}
            mediaType={mockProps.mediaType}
          />
        );
        const infoLength = mockProps.info.length
        expect(screen.getAllByRole("img")).toHaveLength(infoLength);
      });
  });
});
