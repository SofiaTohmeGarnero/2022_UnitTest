import styled from 'styled-components';

export const InfoContainer = styled.article`
display: flex;
align-items: flex-start;
padding: 20px;
color: rgb(220, 221, 222);
img {
    width: 350px;
    height: auto;
}

@media (max-width: 770px) {
    img {
        width: 280px;
    }
}
@media (max-width: 685px) {
        flex-direction: column;
        align-items: center;
        padding: 0px;
 }
`;

export const InfoDetails = styled.div`
width: 50%;
margin-left: 30px;
display: flex;
flex-direction: column;
.info-card-title {
    font-size: 50px;
    margin-top: 0;
    margin-bottom: 10px;
    font-weight: lighter;
}
.MuiRating-root {
    color: rgb(33, 150, 243);
}
p {
    font-size: 20px;
    font-weight: lighter;
    line-height: 20px;
    span {
    color: rgb(33, 150, 243);
    cursor: pointer;
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
        color: rgb(33, 150, 243);
    }
   }
   
}
@media (max-width: 770px) {
     .info-card-title {
           font-size: 40px;
       }
       p {
           font-size: 15px;
           display: flex;
           flex-wrap: wrap;
       }
}
@media (max-width: 685px) {
    .info-card-title {
           font-size: 35px;
       }
  width: 85%;
  margin-left: 0px;
}
`;

export const ExternalIdContainer = styled.div`
display:flex;
padding-left: 0px;
`;