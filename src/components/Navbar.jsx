import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-light">
      <NavLink className="navbar-brand" to='/' >Radnom generator </NavLink>

      <div className="navbar-collapse collapse">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item mx-auto">
            <NavLink to='/' className='nav-link'>Generator</NavLink>
          </li>
          <li className="nav-item mx-auto">
            <NavLink to='/graph' className='nav-link'>Graph</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
