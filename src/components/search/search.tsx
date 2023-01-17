import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { ARR_STATUS , ARR_GENDER } from "../../constants/arrays";

export const SearchCharacter = ({ filters, setFilters }) => {

  const handleEvent = (key, event) => {
    return setFilters({ ...filters, [key]: event });
  };

  return (
    <div className="d-flex justify-content-around">
      <DropdownButton 
        className="my-2"
        drop="down-centered"
        key="status"
        title="Select Status"
        variant="dark"
        menuVariant="dark"
        onSelect={(event => { handleEvent("status", event) })}>
          { ARR_STATUS.map(opt => ( <Dropdown.Item eventKey={opt} key={opt} className="text-center"> {opt} </Dropdown.Item> )) }
      </DropdownButton>
      <DropdownButton 
        className="my-2"
        drop="down-centered"
        key="Gender"
        title="Select Gender"
        variant="dark"
        menuVariant="dark"
        onSelect={(event => { handleEvent("gender", event) })}>
          { ARR_GENDER.map(opt => ( <Dropdown.Item eventKey={opt} key={opt} className="text-center"> {opt} </Dropdown.Item> )) }
      </DropdownButton>
    </div>
  );

};