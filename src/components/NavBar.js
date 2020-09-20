import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logo.png"


const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div style={{alignSelf: "center"}}>
        <Link className="logo" to='/'>
          <img className="logo-icon" src={logo} alt="logo" />
          <div style={{alignSelf: "center"}}>HeroloWeather</div>
        </Link>
      </div>
      <div style={{alignSelf: "center"}}>
        <Link to='/'>Home  </Link>
        <Link to='/favorites'>  Favorite</Link>
      </div>
    </nav>
  )
}

export default NavBar;
