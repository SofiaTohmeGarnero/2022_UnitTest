import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { SearchInput, Icons } from "./NavBar.style";

const SearchBar = () => {
  const history = useHistory();

  const location = useLocation();

  const [querySearch, setQuerySearch] = useState("");

  const handleChange = (e) => {
    setQuerySearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/multi/${querySearch}/page/1`);
    setQuerySearch("");
  };

  console.log(location);
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <Icons>
          <svg
            islocation={location.pathname.includes("/search") ? 1 : 0}
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 511.999 511.999"
            role="navbar-icon"
          >
            <g>
              <g>
                <path
                  d="M508.874,478.708L360.142,329.976c28.21-34.827,45.191-79.103,45.191-127.309c0-111.75-90.917-202.667-202.667-202.667
			S0,90.917,0,202.667s90.917,202.667,202.667,202.667c48.206,0,92.482-16.982,127.309-45.191l148.732,148.732
			c4.167,4.165,10.919,4.165,15.086,0l15.081-15.082C513.04,489.627,513.04,482.873,508.874,478.708z M202.667,362.667
			c-88.229,0-160-71.771-160-160s71.771-160,160-160s160,71.771,160,160S290.896,362.667,202.667,362.667z"
                />
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </Icons>

        <SearchInput
          type="text"
          placeholder="Search"
          onChange={handleChange}
          value={querySearch}
        />
      </label>
    </form>
  );
};

export default SearchBar;
