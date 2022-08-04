import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { CastSection } from './CastContainer.style';
import Card from '../card/Card';

const CastContainer = () => {

    const params = useParams();

    const info = useFetch([3, params.media, params.id, 'credits']);

    return (
        <CastSection>
            {info && info.cast.map(element => {
                return (
                    <Card
                        key={element.id}
                        id={element.id}
                        title={element.name}
                        img={element.profile_path}
                        subtitle={element.character}
                        mediaType="person"
                    />
                );
            })}
        </CastSection>
    );
}

export default CastContainer;