import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { ARR_STATUS , ARR_GENDER } from "../../constants/arrays";

export const SearchCharacter = ({ filters, setFilters }) => {

  const handleEvent = (key, event) => {
    (key === "status") ? 
      setStatus(event) : setGender(event)
    ;
    if ((event === "All Status") || (event === "All Genders")) event = "";
    setFilters({ ...filters, [key]: event });
  };

  const [status, setStatus] = useState("Select Status");
  const [gender, setGender] = useState("Select Gender");

  return (
    <div className="d-flex justify-content-around">
      <DropdownButton className="my-2" drop="down-centered" key="status" title={status} variant="dark" menuVariant="dark" onSelect={(event => { handleEvent("status", event) })}>
        { ARR_STATUS.map(opt => ( <Dropdown.Item eventKey={opt}  key={opt}className="text-center"> {opt} </Dropdown.Item> )) }
      </DropdownButton>
      <DropdownButton  className="my-2" drop="down-centered" key="Gender"  title={gender} variant="dark" menuVariant="dark" onSelect={(event => { handleEvent("gender", event) })}>
        { ARR_GENDER.map(opt => ( <Dropdown.Item eventKey={opt} key={opt} className="text-center"> {opt} </Dropdown.Item> )) }
      </DropdownButton>
    </div>
  );

};
