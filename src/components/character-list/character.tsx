import React from "react";
import Image from "next/image";

export const Character = ({ character }) => {
  return (
    <div className="border border-black rounded bg-black text-white">
      <div className="">
        <p className="lead text-center"><u>{character.name}</u></p>
        <ul className="list-group">
          <li className="list-group-item"><p><b>Gender:</b> {character.gender} </p></li>
          <li className="list-group-item"><p><b>Status:</b> {character.status} </p></li>
          <li className="list-group-item"><p><b>Species:</b> {character.species} </p></li>
          <li className="list-group-item"><p><b>Origin:</b> {character.origin.name} </p></li>
          <li className="list-group-item"><p><b>Location:</b> {character.location.name} </p></li>
        </ul>
      </div>
      <div className="d-flex justify-content-center mb-1 mt-1">
        <Image  src={character.image} 
                className="img-responsive rounded-circle" 
                alt="Responsive image" 
                width={250}
                height={250}/>
      </div>
    </div>
  )
};