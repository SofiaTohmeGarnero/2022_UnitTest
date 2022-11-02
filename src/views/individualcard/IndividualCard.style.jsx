import styled from 'styled-components';

export const IndividualSection = styled.section`
width: 100%;
margin: 0;
display: flex;
flex-direction: column;
`;

export const ContainerImg = styled.div`
width: 100%;
img {
    width:100%;
    height: 735px;
    object-fit: cover;
    
}
.icon-img-card svg{
        width:100px;
        height:200px;
        fill:rgb(168, 170, 173);
    }
    
`;

export const ContainerLinks = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
font-size: 28px;
font-weight: bold;
padding: 20px;
 a {
    color: rgb(168, 170, 173);
    margin: 10px;
    text-decoration: none;
    :focus {
        color: #FAFAFA;
        text-decoration: underline;
    }
    :visited {
        text-decoration: none;
    }
    :hover {
        color: #FAFAFA;
    }
}
@media (max-width: 485px) {
  padding: 0px;
  flex-direction: column;
  align-items:center;
  font-size:18px;
}
`;