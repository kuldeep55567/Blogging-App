import React from 'react';
import { Link } from 'react-router-dom'; 
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="https://blog.hubspot.com/hubfs/assets/hubspot.com/web-team/WBZ/Blog%202021/Images/Logos/HubSpot%20Logo.svg" alt="Logo" height="30" />
      </div>
      <ul className="navbar__links">
        <li className="navbar__item">
          <Link to="/"><i class="fa-solid fa-house"></i> Home</Link>
        </li>
        <li className="navbar__item">
          <Link to="/about"><i class="fa-solid fa-address-card"></i> About</Link>
        </li>
        <li className="navbar__item">
          <Link to="/contact"><i class="fa-solid fa-address-book"></i> Contact Us</Link>
        </li>
        <li className="navbar__item">
          <Link to="/login"><i class="fa-solid fa-right-to-bracket"></i> Login</Link>
        </li>
        <li className="navbar__item">
          <Link to="/profile"><i class="fa-solid fa-user"></i> Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
