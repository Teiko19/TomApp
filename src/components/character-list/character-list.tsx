import React, { useState, useEffect } from "react";
import { API_CHARACTERS } from "../../api/constant";
import 'bootstrap/dist/css/bootstrap.css'
import { Character } from "./character";

export const CharacterList = () => {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const json = await fetch(API_CHARACTERS);
      const data = await json.json();
      setCharacters(data.results);
    }
    fetchData()
      .catch(console.error);
  }, []);

  return (
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {  characters.map((x) => <Character character={x} key={`character-${x.id}`}/>) }
      </div>
  )

};