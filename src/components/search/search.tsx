import React from "react";

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { ARR } from "../../constants/arrays";

export const SearchCharacter = ({ filters, setFilters }) => {

  const handleEvent = (key, event) => {
    return setFilters({ ...filters, [key]: event });
  };

  return (
    <div className="d-flex justify-content-around">
      { 
        ARR.map( ( { name , select , arrInt } ) => (
          <DropdownButton 
            className="my-2"
            drop="down-centered"
            key={name}
            title={select}
            variant="dark"
            menuVariant="dark"
            onSelect={(event => { handleEvent(name, event) })}>
              { arrInt.map(opt => ( <Dropdown.Item eventKey={opt} key={opt} className="text-center"> {opt} </Dropdown.Item> )) }
          </DropdownButton>
        ))
      }
    </div>
  )

};