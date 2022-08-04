import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Nav, HomeIcons, Projector, Tv } from './NavBar.style';
import SearchBar from './SearchBar';


const NavBar = () => {

    const location = useLocation();

    return (
        <Nav>
            <Link to="/"  >
                <HomeIcons
                    islocation={location.pathname === "/"? 1: 0}
                />
            </Link>
            <Link to="/movie"  >
                <Projector
                    islocation={location.pathname.includes("/movie")? 1: 0}
                />
            </Link>
            <Link to="/tv" >
                <Tv
                    islocation={location.pathname.includes("/tv")? 1: 0}
                />
            </Link>
            <SearchBar />
        </Nav >
    );
}

export default NavBar;