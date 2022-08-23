import React from "react";

function Filter({ setSearchBar, showVillains, handleShowVillains }) {
  function handleChange(e) {
    setSearchBar(e);
  }

  function handleToggleVillains(e) {
    handleShowVillains(e.target.checked);
  }
  return (
    <div>
      <div>
        <label>Show Villains</label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={showVillains}
          onChange={handleToggleVillains}
        ></input>
      </div>
      <label htmlFor="search">Search Characters:</label>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Type a name to search..."
      />
    </div>
  );
}

export default Filter;
