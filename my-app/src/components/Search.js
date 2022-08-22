import React from "react";

function Search({ setSearchBar }) {
  function handleChange(e) {
    setSearchBar(e);
  }
  return (
    <div>
      <label htmlFor="search">Search Characters:</label>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Type a name to search..."
      />
    </div>
  );
}

export default Search;
