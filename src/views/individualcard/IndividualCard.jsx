import React from 'react';
import { Link, Switch, Route, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { IndividualSection, ContainerImg, ContainerLinks } from './IndividualCard.style';
import { ReactComponent as ImgNotAvailable } from '../../assets/img.svg';
import InfoCard from '../../components/infocard/InfoCard';
import CastContainer from '../../components/castcontainer/CastContainer';
import MoviesVideos from '../../components/movies-videos/MoviesVideos';
import SimilarMedia from '../../components/similar-media/SimilarMedia';
import SeasonTv from '../../components/season/SeasonTv';


const IndividualCard = () => {

    const params = useParams();

    const info = useFetch([3, params.media, params.id]);

    return (
        <IndividualSection>
            {info &&
                <>
                    <ContainerImg>
                        {info.backdrop_path ?
                            <img src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`}
                                alt={params.media === "movie" ?
                                    info.title
                                    :
                                    info.name} />
                            :
                            <ImgNotAvailable className="icon-img-card" />
                        }
                    </ContainerImg>
                    <ContainerLinks>
                        <Link to={`/${params.media}/${params.id}/info`}>
                            INFO
                </Link>
                        {params.media === "tv" &&
                            <Link to={`/${params.media}/${params.id}/seasons/1`}>
                                EPISODIOS
                </Link>
                        }
                        <Link to={`/${params.media}/${params.id}/cast`}>
                            REPARTO
                </Link>
                        {params.media === "movie" &&
                            <Link to={`/${params.media}/${params.id}/videos`}>
                                VIDEOS
                </Link>
                        }
                        <Link to={`/${params.media}/${params.id}/similar`}>
                            SIMILARES
                </Link>
                    </ContainerLinks>
                    <Switch>
                        <Route path="/:media/:id/info" component={InfoCard} />
                        <Route path="/:media/:id/seasons/:seasonNumber"
                            render={(props) => <SeasonTv seasons={info.seasons} />}
                        />
                        <Route path="/:media/:id/cast" component={CastContainer} />
                        <Route path="/:media/:id/videos" component={MoviesVideos} />
                        <Route path="/:media/:id/similar" component={SimilarMedia} />
                    </Switch>
                </>
            }
        </IndividualSection>
    );
}

export default IndividualCard;