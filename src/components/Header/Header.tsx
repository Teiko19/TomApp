import React, { useState, useEffect } from "react";
import styles from './Header.module.scss';
import { API_CHARACTERS } from "../../API/constant";
import 'bootstrap/dist/css/bootstrap.css'

export const Header = () => {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const json = await fetch(API_CHARACTERS);
      const data = await json.json();
      setCharacters(data.results);
    }
    fetchData()
      .catch(console.error);;
  }, []);

  return (
    <header className="">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {
          characters.map((x) => (
            <div className="border border-black rounded bg-black text-white">
              <div className="">
                <p className="lead text-center"><u>{x.name}</u></p>
                <ul className="list-group">
                  <li className="list-group-item"><p><b>Gender:</b> {x.gender} </p></li>
                  <li className="list-group-item"><p><b>Status:</b> {x.status} </p></li>
                  <li className="list-group-item"><p><b>Species:</b> {x.species} </p></li>
                  <li className="list-group-item"><p><b>Origin:</b> {x.origin.name} </p></li>
                  <li className="list-group-item"><p><b>Location:</b> {x.location.name} </p></li>
                </ul>
              </div>
              <div className="d-flex justify-content-center mb-1 mt-1">
                <img src={x.image} className="img-responsive rounded-circle" alt="Responsive image"></img>
              </div>
            </div>
          ))
        }
      </div>
    </header>
  )

};