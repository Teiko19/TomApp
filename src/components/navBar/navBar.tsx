import React from 'react'

export const NavBar = () => {
  return (
      <nav className={`navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between`}>
        <div>
          <a className="navbar-brand" href="#">Home</a>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Characters</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Episodes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Locations</a>
            </li>
          </ul>
        </div>
      </nav>
  )
};