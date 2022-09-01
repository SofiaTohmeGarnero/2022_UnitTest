import React from "react";
import { useHistory } from "react-router-dom";
import {
  ContainerSection,
  TitleSection,
  ContainerArticles,
} from "./CardContainer.style";
import Card from "../card/Card";

const CardContainer = ({ info, title, link, mediaType }) => {
  const history = useHistory();

  return (
    <ContainerSection>
      {info && (
        <>
          <TitleSection>
            {link ? (
              <div onClick={() => history.push(`/${link}`)}>
                <h2>{title}</h2>
                <img
                  src="\assets\blue-arrow.svg"
                  className="card-container-arrow"
                  data-testid="blue-arrow"
                />
              </div>
            ) : (
              <h2>{title}</h2>
            )}
          </TitleSection>
          <ContainerArticles wrap={link ? 1 : 0}>
            <CardPresenter info={info} link={link} mediaType={mediaType} />
          </ContainerArticles>
        </>
      )}
    </ContainerSection>
  );
};

export const CardPresenter = ({ info, link, mediaType }) => {
  const isSearch = mediaType === "search";
  return info.map((element, i) => {
    if (link && i < 5) {
      return (
        <Card
          key={element.id}
          id={element.id}
          title={element.title ? element.title : element.original_name}
          img={element.poster_path}
          mediaType={isSearch ? element.media_type : mediaType}
        />
      );
    } else if (!link) {
      return (
        <Card
          key={element.id}
          id={element.id}
          title={element.title ? element.title : element.original_name}
          img={element.poster_path}
          mediaType={isSearch ? element.media_type : mediaType}
        />
      );
    }
  });
};
export default CardContainer;
