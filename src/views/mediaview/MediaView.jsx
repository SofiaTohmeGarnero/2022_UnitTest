import React from 'react';
import { MediaContainerSection } from './MediaView.styled';
import { useParams } from 'react-router-dom';
import ShowMedia from '../showmedia/ShowMedia';


const MediaView = () => {

    const params = useParams();

    const arrGenresDefault = [
        "trending",
        "popular",
        "top_rated",
        "upcoming",
        "now_playing",
        "on_the_air"
    ];

    return (
        <MediaContainerSection>
            {params.media === "movie" &&
                <>
                    {params.mediagenres === "trending" &&
                        <ShowMedia mediaType={params} title="Peliculas que son tendencia" />
                    }
                    {params.mediagenres === "popular" &&
                        <ShowMedia mediaType={params} title="Peliculas populares" />
                    }
                    {params.mediagenres === "top_rated" &&
                        <ShowMedia mediaType={params} title="Peliculas con mejores Criticas" />
                    }
                    {params.mediagenres === "upcoming" &&
                        <ShowMedia mediaType={params} title="Peliculas a estrenar" />
                    }
                    {params.mediagenres === "now_playing" &&
                        <ShowMedia mediaType={params} title="Peliculas en el cine" />
                    }
                </>
            }
            {params.media === "tv" &&
                <>
                    {params.mediagenres === "trending" &&
                        <ShowMedia mediaType={params} title="Series que son tendencia" />
                    }
                    {params.mediagenres === "popular" &&
                        <ShowMedia mediaType={params} title="Series populares" />
                    }
                    {params.mediagenres === "top_rated" &&
                        <ShowMedia mediaType={params} title="Series con mejores Criticas" />
                    }
                    {params.mediagenres === "on_the_air" &&
                        <ShowMedia mediaType={params} title="Series en el aire" />
                    }
                </>
            }
            {params.media === "search" &&
                <ShowMedia mediaType={params} title={`Resultados para: ${params.query}`} />
            }
            {!arrGenresDefault.includes(params.mediagenres) &&
                params.media !== "search" &&
                <ShowMedia mediaType={params} title={`Genero ${params.mediagenres}`} />
            }
        </MediaContainerSection>
    );
}

export default MediaView;