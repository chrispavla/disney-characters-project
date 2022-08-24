import React from "react";

function Filter({
  setSearchBar,
  handleSortBy,
  showVillains,
  handleShowVillains,
}) {
  function handleChange(e) {
    setSearchBar(e);
  }

  function handleToggleVillains(e) {
    handleShowVillains(e.target.checked);
  }

  function handleChange(e) {
    handleSortBy(e.target.value);
  }
  return (
    <div>
      <div>
        <label>Sort By</label>
        <select name="sort" onChange={handleChange}>
          <option></option>
          <option value="name">Name</option>
          <option value="likes">Likes</option>
        </select>
      </div>
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
