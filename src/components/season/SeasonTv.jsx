import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { SeasonTvContainer, EpisodeCardContainer, EpisodeCard } from './SeasonTV.style';
import { ReactComponent as ImgNotAvailable } from '../../assets/img.svg';

const SeasonTv = ({ seasons }) => {

    const history = useHistory();

    const params = useParams();

    const [seasonNumber, setSeasonNumber] = useState(params.seasonNumber);

    const info = useFetch([3, params.media, params.id, "season", seasonNumber]);

    const handleChange = (e) => {
        setSeasonNumber(e.target.value);
        history.push(e.target.value);
    }

    return (
        <SeasonTvContainer>
            <select value={seasonNumber} onChange={handleChange}>
                {
                    seasons.map(element => {
                        return (
                            <option
                                value={element.season_number}
                            >Temporada {element.season_number}
                            </option>
                        );
                    })
                }
            </select>
            <EpisodeCardContainer>
                {info &&
                    info.episodes.map(e => {
                        return (
                            <EpisodeCard key={e.id}>
                                {e.still_path ?
                                    <img
                                        src={`https://image.tmdb.org/t/p/original${e.still_path}`}
                                        alt={e.name} /> :
                                    <div className="image-not-available">
                                        <ImgNotAvailable className="icon-img-card" alt="Not available" />
                                    </div>
                                }
                                <h3>
                                    <span>
                                        S{e.season_number}E{e.episode_number}
                                    </span>
                                    {e.name}
                                </h3>
                                <p>{e.overview}</p>
                            </EpisodeCard>
                        );
                    })
                }
            </EpisodeCardContainer>
        </SeasonTvContainer>
    );
}

export default SeasonTv;