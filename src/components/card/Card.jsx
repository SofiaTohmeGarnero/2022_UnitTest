import React from 'react';
import { StyledArticle } from './Card.style';
import { ReactComponent as ImgNotAvailable } from '../../assets/img.svg';
import { Link } from 'react-router-dom';


const Card = ({ id, title, img, subtitle, mediaType }) => {
    return (
        <StyledArticle>
            <Link to={`/${mediaType}/${id}/info`}>
                {img ?
                    <img src={`https://image.tmdb.org/t/p/original${img}`} alt={title} />
                    :
                    <div className="image-not-available">
                        <ImgNotAvailable className="icon-img-card" alt="Not available" />
                    </div>
                }
                <h3>{title}</h3>
                {
                    subtitle &&
                    <h4>{subtitle}</h4>
                }
            </Link>
        </StyledArticle>
    );
}

export default Card;