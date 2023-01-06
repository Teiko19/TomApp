import React from "react";

export const SearchCharacter = () => {
  return (
    <div className="input-group px-5">
      <label className="input-group-text">Options</label>
      <select className="form-select">
        <option value="" selected className="text-center">Select status</option>
        <option value="alive" className="text-center">Alive</option>
        <option value="dead" className="text-center">Dead</option>
        <option value="unknown" className="text-center">Unknown</option>
      </select>
    </div>
  )
};