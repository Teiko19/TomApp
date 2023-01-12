import React, { useState, useEffect } from "react";
import { API_CHARACTERS } from "../../constants/url";
import { Character } from "./character";
import queryString from 'query-string';

export const CharacterList = ({ filters }) => {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const json = await fetch(`${API_CHARACTERS}/?` + queryString.stringify(filters, { skipEmptyString: true }));
      const data = await json.json();
      setCharacters(data.results);
    };
    fetchData()
      .catch(console.error);
  }, [filters]);

  return (
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {  characters.map((x) => <Character character={x} key={`character-${x.id}`}/>) }
      </div>
  )

};