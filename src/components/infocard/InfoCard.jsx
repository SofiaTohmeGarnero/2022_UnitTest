import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { InfoContainer, InfoDetails, ExternalIdContainer } from './InfoCard.styled';
import { ReactComponent as ImgNotAvailable } from '../../assets/img.svg';
import Rating from '@material-ui/lab/Rating';
import ExternalId from '../../helpers/externalIds/ExternalId';

const InfoCard = () => {

    const params = useParams();

    const isPerson = params.media === "person";

    const isTv = params.media === "tv";

    const isMovie = params.media === "movie";

    const info = useFetch([3, params.media, params.id]);

    const externalsIds = useFetch([3, params.media, params.id, "external_ids"]);

    const arrExt = externalsIds && Object.entries(externalsIds);

    return (
        <>
            {info &&
                <InfoContainer>
                    {info.poster_path || info.profile_path ?
                        <img src={`https://image.tmdb.org/t/p/w500${isPerson ?
                            info.profile_path
                            :
                            info.poster_path}`}
                            alt={isTv || isPerson ? info.name : info.title}
                        />
                        :
                        <ImgNotAvailable className="icon-img-card" alt="Not available" />
                    }
                    <InfoDetails>
                        <h3 className="info-card-title">
                            {isTv || isPerson ? info.name : info.title}
                        </h3>
                        {isPerson ||
                            <Rating
                                name="rating"
                                defaultValue={info.vote_average / 2}
                                precision={0.5} readOnly
                            />
                        }
                        <p>{isPerson ? info.biography : info.overview}</p>
                        {isTv &&
                            <>
                                <p>Temporadas: {info.number_of_seasons}</p>
                                <p>Episodios: {info.number_of_episodes}</p>
                            </>
                        }
                        {isPerson ||
                            <>
                                <p>Duracion:
                                    {isMovie ?
                                        info.runtime
                                        :
                                        info.episode_run_time[0]} min
                                    </p>
                                <p> Genero:
                                     {info.genres && info.genres.map((g, i) => {
                                    return (
                                        <Link
                                            key={i}
                                            to={`/${params.media}/${g.name}/${g.id}/page/1`}>
                                            {g.name}
                                        </Link>)
                                })}</p>
                            </>
                        }
                        {isMovie &&
                            <>{Boolean(info.budget) &&
                                <p>Presupuesto: $ {info.budget.toLocaleString('en')}</p>}
                                {Boolean(info.revenue) &&
                                    <p>Recaudacion: $ {info.revenue.toLocaleString('en')}</p>}
                            </>
                        }
                        {isPerson ||
                            <p>Produccion:
                                {info.production_companies &&
                                    info.production_companies.map(p => `${p.name}, `)}
                            </p>
                        }
                        {externalsIds &&
                            <ExternalIdContainer>
                                {
                                    arrExt.map((e, i) => (
                                        <ExternalId
                                            data={e}
                                            key={i}
                                            person={isPerson ? params.media
                                                :
                                                ""}
                                        />
                                    ))
                                }
                            </ExternalIdContainer>
                        }
                    </InfoDetails>
                </InfoContainer>
            }
        </>
    );
}

export default InfoCard;