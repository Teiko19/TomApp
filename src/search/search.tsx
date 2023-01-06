import React from "react";

export const SearchCharacter = () => {
  return (
    <div className="input-group px-5">
      <label className="input-group-text">Options</label>
      <select className="form-select">
        <option selected className="text-center">Select Filter</option>
        <option value="1" className="text-center">Name</option>
        <option value="2" className="text-center">Alive</option>
        <option value="3" className="text-center">Status</option>
        <option value="4" className="text-center">Species</option>
        <option value="5" className="text-center">Origin</option>
        <option value="5" className="text-center">Location</option>
      </select>
    </div>
  )
};