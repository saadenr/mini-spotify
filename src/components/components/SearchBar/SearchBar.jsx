import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./SearchBar.css";

const SearchBar = ({ searchAlbums }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const submitSearch = (event) => {
    event.preventDefault();
    searchAlbums(searchValue);
  };

  return (
    <section className="search section-p-top bg-black" id="searchBar">
      <form
        className="container flex flex-center"
        onSubmit={(event) => submitSearch(event)}
      >
        <input
          type="text"
          placeholder="Search your music ..."
          value={searchValue}
          onChange={(event) => handleInputChange(event)}
          className="form-control"
        />
        <button type="submit" className="submit-btn">
          <BsSearch />
        </button>
      </form>
    </section>
  );
};

export default SearchBar;
