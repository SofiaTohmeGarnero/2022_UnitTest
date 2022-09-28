import CardContainer, {CardPresenter} from "./CardContainer.jsx";
import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useHistory } from "react-router-dom";

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
const mockSearchProps = {
  info: [
    {
      id: 616037,
      media_type: "movie",
      title: "Thor: Love and Thunder",
      poster_path: "/xiB0hsxMpgxpJehYxUDhiUkg2w.jpg",
    },
    {
      id: 718930,
      media_type: "movie",
      title: "Bullet Train",
      poster_path: "/4ie82rXFa1rAJ9qTWoCvlljglLJ.jpg",
    },
    {
      id: 361743,
      media_type: "movie",
      title: "Top Gun: Maverick",
      poster_path: "/b7EIwmXtQBEyrLHcUEyuJxPoARk.jpg",
    },
    {
      id: 532639,
      media_type: "movie",
      title: "Pinocho",
      poster_path: "/lKDIhc9FQibDiBQ57n3ELfZCyZg.jpg",
    }
  ],
  title: "Resultados para: pinocho",
  link: "/search/multi/pinocho/page/1",
  mediaType: "search",
};

/**router mock */
jest.mock("react-router-dom", () => ({
  useHistory: jest.fn(),
}));

const mockPush = jest.fn();
useHistory.mockImplementation(() => ({
  push: mockPush,
}));

describe("CardContainer", () => {
  describe("when tv or movie mediaType with Link prop", () => {
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
    it("should change url when clicking on a section title", async () => {
      render(
        <CardContainer
          info={mockProps.info}
          title={mockProps.title}
          link={mockProps.link}
          mediaType={mockProps.mediaType}
        />
      );
      userEvent.click(screen.getByText("Series que son tendencia"));
      await waitFor(() => {
        expect(mockPush).toHaveBeenNthCalledWith(1, "/tv/trending/page/1");
      });
    });
  });
  describe("when tv or movie mediaType without Link prop", () => {
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
  describe("when search mediaType with Link prop", () => {
    it('should show a Pinocho title', ()=>{
      render(
        <CardContainer
          info={mockSearchProps.info}
          title={mockSearchProps.title}
          link={mockSearchProps.link}
          mediaType={mockSearchProps.mediaType}
        />
      );
      expect(screen.getByRole("heading", { level: 3, name: "Pinocho" })).toBeInTheDocument();
    })

  });
  describe("when search mediaType without Link prop", () => {
    it('should show a Pinocho title', ()=>{
      render(
        <CardContainer
          info={mockSearchProps.info}
          title={mockSearchProps.title}
          mediaType={mockSearchProps.mediaType}
        />
      );
      expect(screen.getByRole("heading", { level: 3, name: "Pinocho" })).toBeInTheDocument();
    })
  });
});
