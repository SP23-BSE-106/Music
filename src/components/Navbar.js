import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
      MusicMash
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>  
        <li><Link to="/play">Music Player</Link></li> 
        <li><Link to="/about">About</Link></li>
        <li><Link to="/pricing">Pricing</Link></li> 
      </ul>
      <button className="download-btn">
        Download App
      </button>
    </nav>
  );
};

export default Navbar;
