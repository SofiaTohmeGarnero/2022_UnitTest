import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { SimilarMediaContainer } from './SimilarMedia.style';
import Card from '../card/Card';


const SimilarMedia = () => {

    const params = useParams();
    
    const isTv = params.media === "tv";

    const info = useFetch([3, params.media, params.id, 'similar']);
 
    return (
       <SimilarMediaContainer>
            {info && info.results.map(element => {
                return (
                    <Card
                        key={element.id}
                        id={element.id}
                        title={isTv ? element.name : element.title}
                        img={element.poster_path}
                        mediaType={params.media}
                    />
                );
            })}   
       </SimilarMediaContainer>
    );
}

export default SimilarMedia;