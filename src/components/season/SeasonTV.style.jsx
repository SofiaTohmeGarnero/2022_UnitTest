import styled from 'styled-components';

export const SeasonTvContainer = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
select {
    width: 250px;
    height: 50px;
    font-size: 25px;
    font-weight: 300;
    line-height: 30px;
    color: rgb(220, 221, 222);
    background-color: rgb(35, 39, 42);
    cursor: pointer;
    border-radius: 6px;
    padding: 3px 31px 3px 16px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(220, 221, 222);
    margin-left: 37px;
}
@media (max-width: 770px) {
   select {
       width: 150px;
       height: 45px;
       font-size: 13px;
   }
}
`;

export const EpisodeCardContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`;

export const EpisodeCard = styled.article`
width: 400px;
margin: 10px;
display: flex;
flex-direction: column;
color: #FAFAFA;
font-weight: lighter;
img {
    width: 100%;
    height: auto;
}
.image-not-available {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
    .icon-img-card {
        width:40px;
        height:50px;
        fill:rgb(168, 170, 173);
    }
}
h3 {
    margin: 5px;
    font-size: 28px;
    span {
        margin-right: 5px;
        color: rgb(33, 150, 243);
    } 
}
@media (max-width: 770px) {
 width: 300px;    
}
`;