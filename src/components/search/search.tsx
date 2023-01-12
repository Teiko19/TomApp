import React, { useEffect } from "react";

export const SearchCharacter = ({ filters, setFilters }) => {

  const handleEvent = (key, event) => {
    return setFilters(...filters, key = event.target.value );
  };

  return (
    <div className="d-flex justify-content-around">
      <div className="input-group px-5 mb-2">
        <label className="input-group-text">Status</label>
        <select className="form-select" onChange={(event => { handleEvent("status", event) })}>
          <option value="" selected className="text-center">Select status</option>
          <option value="alive" className="text-center">Alive</option>
          <option value="dead" className="text-center">Dead</option>
          <option value="unknown" className="text-center">Unknown</option>
        </select>
      </div>
      <div className="input-group px-5 mb-2">
        <label className="input-group-text">Gender</label>
        <select className="form-select" onChange={(event => { handleEvent("gender", event) })}>
          <option value="" selected className="text-center">Select gender</option>
          <option value="female" className="text-center">Female</option>
          <option value="male" className="text-center">Male</option>
          <option value="genderless" className="text-center">Genderless</option>
          <option value="unknown" className="text-center">Unknown</option>
        </select>
      </div>
    </div>
  )
};