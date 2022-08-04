import styled from 'styled-components';


export const ErrorContainer = styled.div`
width: 100%;
height: 600px;
display: flex;
justify-content: center;
align-items: center;
img{
    width: 35%; 
    border-radius: 50%;     
}
@media (max-width: 770px) {
    height: 350px;
    img {
        width: 55%;
    }
}
`;