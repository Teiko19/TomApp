import React from "react";

export const SearchCharacter = ({ status, setStatus }) => {

  const handleStatus = event => {
    console.log('event.target.value: ',event.target.value)
    return setStatus(event.target.value)
  };

  return (
    <div className="input-group px-5 mb-2">
      <label className="input-group-text">Options</label>
      <select className="form-select" value={status} onChange={handleStatus}>
        <option value="" selected className="text-center">Select status</option>
        <option value="alive" className="text-center">Alive</option>
        <option value="dead" className="text-center">Dead</option>
        <option value="unknown" className="text-center">Unknown</option>
      </select>
    </div>
  )
};