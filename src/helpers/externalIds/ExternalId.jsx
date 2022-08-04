import React from 'react';
import { StyledLink } from './ExternalId.style';
import { FaImdb, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';

const ExternalId = ({ data, person }) => {

    const [id, value] = data;

    const title = person ? 'name' : 'title';

    let url = '';

    switch (id) {
        case 'imdb_id':
            url = `https://www.imdb.com/${title}`
            break;
        case 'facebook_id':
            url = "https://www.facebook.com"
            break;
        case 'instagram_id':
            url = "https://www.instagram.com"
            break;
        case 'twitter_id':
            url = "https://www.twitter.com"
            break;
        default:
            url = "/"
            break;
    }

    return (
        <>
            {id !== "id" && value ?
                <StyledLink href={`${url}/${value}`}>
                    {id === 'imdb_id' && <FaImdb className='icon-ext-id' />}
                    {id === 'facebook_id' && <FaFacebookSquare className='icon-ext-id' />}
                    {id === 'twitter_id' && <FaTwitterSquare className='icon-ext-id' />}
                    {id === 'instagram_id' && <FaInstagramSquare className='icon-ext-id' />}
                </StyledLink> :
                null
            }
        </>
    );
}

export default ExternalId;