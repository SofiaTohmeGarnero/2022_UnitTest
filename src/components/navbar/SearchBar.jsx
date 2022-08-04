import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { SearchInput, SearchIcon } from './NavBar.style';


const SearchBar = () => {

    const history = useHistory();

    const location = useLocation();

    const [querySearch, setQuerySearch] = useState('');

    const handleChange = (e) => {
        setQuerySearch(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/search/multi/${querySearch}/page/1`);
        setQuerySearch('')
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label>
                <SearchIcon islocation={location.pathname.includes('/search')? 1: 0}
                />
                <SearchInput
                    type="text"
                    placeholder="Search"
                    onChange={handleChange}
                    value={querySearch}
                />
            </label>
        </form>
    );
}

export default SearchBar;