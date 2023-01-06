import React from 'react'
import { SearchCharacter } from '../../search/search'

export const NavBar = () => {
  return (
    <div className="mb-3">
      <nav className="d-flex align-items-center justify-content-around mb-3">
        <div>
          <a className="navbar-brand" href="#">Home</a>
        </div>

        <div>
          <ul className="navbar-nav me-auto d-flex flex-row">
            <li className="nav-item mx-5">
              <a className="nav-link" href="#">Characters</a>
            </li>
            <li className="nav-item mx-5">
              <a className="nav-link" href="#">Episodes</a>
            </li>
            <li className="nav-item mx-5">
              <a className="nav-link" href="#">Locations</a>
            </li>
          </ul>
        </div>
      </nav>

      <SearchCharacter />
    </div>
  )
};