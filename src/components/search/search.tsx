import React from "react";

export const SearchCharacter = ({ filters, setFilters }) => {

  const handleStatus = event => {
    filters.status = event.target.value
    console.log(filters)
    return setFilters(filters)
  };
  const handleGender = event => {
    filters.gender = event.target.value
    console.log(filters)
    return setFilters(filters)
  };

  return (
    <div className="d-flex justify-content-around">
      <div className="input-group px-5 mb-2">
        <label className="input-group-text">Options</label>
        <select className="form-select" value={filters.status} onChange={handleStatus}>
          <option value="" selected className="text-center">Select status</option>
          <option value="alive" className="text-center">Alive</option>
          <option value="dead" className="text-center">Dead</option>
          <option value="unknown" className="text-center">Unknown</option>
        </select>
      </div>
      <div className="input-group px-5 mb-2">
        <label className="input-group-text">Options</label>
        <select className="form-select" value={filters.gender} onChange={handleGender}>
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