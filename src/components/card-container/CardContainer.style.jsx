import styled from 'styled-components';

export const ContainerSection = styled.section`
display: flex;
flex-direction: column;
`;

export const TitleSection = styled.div`
margin: 10px;
display: flex;
align-items: center;
h2 {
font-weight: lighter;
font-size: 32px;
margin: 2px;
color: #FAFAFA;
}
a {
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    :visited {
        color: #FAFAFA;

    }
}

.card-container-arrow {
 width: 20px;
 height: 20px;
 margin: 10px;
 fill: rgb(33, 150, 243);
}
`;

export const ContainerArticles = styled.div`
width: 100%;
display: flex;
flex-wrap: ${props => props.wrap ? 'no-wrap' : 'wrap'};
justify-content:center;
align-items: flex-start;
@media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;    
}
`;