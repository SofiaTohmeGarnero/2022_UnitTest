import styled from 'styled-components';

export const MoviesVideosContainer = styled.article`
display: flex;
flex-wrap: wrap;
justify-content: center;
`;

export const VideoDetails =styled.div`
display: flex; 
flex-direction: column;
font-size: 30px;
font-weight: lighter;
color: #FAFAFA;
margin: 10px;
h4 {
    width: 450px;
}
@media (max-width: 780px) {
    iframe {
        width: 300px;
        height: 300px;
    }
    h4 {
        width: 270px;
        font-size: 20px;
    }
}
`;