import React from "react"
import { Link } from "react-router-dom"
// import About from '../pages/About'

const Nav = ({ user, handleLogOut }) => {
  return (
    <header>
      <div className="logo-wrapper">
        <Link to="/student">
          <img
            className="logo"
            src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/567/953/datas/original.png"
            alt="Logo"
          />
        </Link>
      </div>
      <nav className="nav-links">
        <Link to="/About" className="nav-link">
          About Us
        </Link>
        {user ? (
          <>
            <Link to="/" className="nav-link" onClick={handleLogOut}>
              Sign Out
            </Link>
          </>
        ) : (
          <>
            <Link to="/register" className="nav-link">
              Register
            </Link>
            <Link to="/signin" className="nav-link">
              Sign In
            </Link>
          </>
        )}
      </nav>
    </header>
  )
}

export default Nav
