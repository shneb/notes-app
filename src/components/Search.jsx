import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <MdSearch className="search-icone" size="1.3em" />
      <input
        onChange={(event) => handleSearchNote(event.target.value.toLowerCase())}
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
