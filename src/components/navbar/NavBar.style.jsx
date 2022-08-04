import styled, { css } from 'styled-components';
import { ReactComponent as HomeIcon } from './../../assets/home.svg';
import { ReactComponent as ProjectorIcon } from './../../assets/movie.svg';
import { ReactComponent as TvIcon } from './../../assets/tv.svg';
import { ReactComponent as SearchImage} from './../../assets/lupa.svg';

const complexMixin = css`
  margin: 5px 15px;
  width: 30px;
  height: 30px;
  fill: ${props => props.islocation ? 'rgb(33, 150, 243)' : 'white'};
  cursor: pointer;
  :hover {
    fill: rgb(33, 150, 243);
  }
`;

export const Nav = styled.nav`
width: 100%;
margin: 0px;
padding: 10px;
background-color: #141414;
display: flex;
align-items: center;
label {
    display: flex;
    align-items: center;
}
@media (max-width: 510px) {
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 0px;
}
`;

export const HomeIcons = styled(HomeIcon)`
${complexMixin}
`;
export const Projector = styled(ProjectorIcon)`
${complexMixin}
`;
export const Tv = styled(TvIcon)`
${complexMixin}
`;
export const SearchIcon = styled(SearchImage)`
${complexMixin}
`;

export const SearchInput = styled.input`
width: 250px;
height: 28px;
font-size: 28px;
background-color: #141414;
color: #ffff;
border: none;
@media (max-width: 510px) {
  width: 240px;
  font-size: 18px;
}
`;