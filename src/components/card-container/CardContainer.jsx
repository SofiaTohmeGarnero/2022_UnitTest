import React from 'react';
import { Link } from 'react-router-dom';
import { ContainerSection, TitleSection, ContainerArticles } from './CardContainer.style';
import Card from '../card/Card';
import { ReactComponent as ArrowIcon } from '../../assets/flechas.svg';


const CardContainer = ({ info, title, link, mediaType }) => {

    const isSearch = mediaType === "search";

    const CardPresenter = ({ info }) => {
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
            }
            else if (!link) {
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
        })
    }

    return (
        <ContainerSection>
            {info &&
                <>
                    <TitleSection>
                        {link ?
                            <Link to={`/${link}`}>
                                <h2>{title}</h2>
                                <ArrowIcon className="card-container-arrow" />
                            </Link> :
                            <h2>{title}</h2>
                        }
                    </TitleSection>
                    <ContainerArticles wrap={link ? 1 : 0}>
                        <CardPresenter info={info} />
                    </ContainerArticles>
                </>
            }
        </ContainerSection >
    );
}

export default CardContainer;