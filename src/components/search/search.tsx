import React from "react";
import Form from 'react-bootstrap/Form';

export const SearchCharacter = ({ filters, setFilters }) => {

  const handleEvent = (key, event) => {
    return setFilters({ ...filters, [key]: event.target.value });
  };

  const arr = [
    { handler: "status" , select: "Select Status" , arrInt: ["Alive","Dead","Unknown"] } , 
    { handler: "gender" , select: "Select Gender" , arrInt: ["Male","Female","Genderless","Unknown"]}
  ]

  return (
    <div className="d-flex justify-content-around">
      { 
        arr.map( ({ handler , select , arrInt }) => (
          <Form.Select className="mb-2 mx-5" onChange={(event => { handleEvent(handler, event) })}>
            <option value="" selected className="text-center">{select}</option>
            { arrInt.map(opt => ( <option value={opt} className="text-center"> {opt} </option> )) }
          </Form.Select>
        )) 
      }
    </div>
  )

};