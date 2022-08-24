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

  function handleSortChange(e) {
    handleSortBy(e.target.value);
  }

  return (
    <div style={{display: "flex", justifyContent: "space-around", marginTop: "20px", alignItems: "center"}}>
      <div>
        <label className="mx-2">Sort By</label>
        <select name="sort" onChange={handleSortChange}>
          <option></option>
          <option value="name">Name</option>
          <option value="likes">Likes</option>
        </select>
      </div>
      <div>
        <label className="mx-2">Show Villains</label>
        <input
          type="checkbox"
          checked={showVillains}
          onChange={handleToggleVillains}
        ></input>
      </div>
      <div>
        <label className="mx-2" htmlFor="search">Search Characters:</label>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Type a name to search..."
        />
      </div>
    </div>
  );
}

export default Filter;
