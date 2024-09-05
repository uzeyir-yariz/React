import { useState } from "react"
import { NavLink } from "react-router-dom"

const Nav = () => {

  const [isActive, setIsActive] = useState(false);
  const handleToggle = () => {
    setIsActive(!isActive);
  }
  
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" style={{fontSize: "30px"}} href="https://bulma.io">BookShelf 📚</a>

        <a role="button" className="navbar-burger" onClick={handleToggle} >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${isActive ? "is-active" : ""}`} id="navMenu">
        <div className="navbar-end">
          <NavLink to="/" className="navbar-item">Home</NavLink>
          <NavLink to="/about" className="navbar-item">About</NavLink>
          <NavLink to="/contact" className="navbar-item">Contact</NavLink>
          <NavLink to="/bookshelf" className="navbar-item">Bookshelf</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Nav
