import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Zynx Logo.png";
import heart from "../assets/heart.png";
import cart from "../assets/shopping cart.png";
import icon from "../assets/account icon.png";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/home">
          <img src={logo} alt="Zynx Logo" />
        </Link>
      </div>
      <ul className="nav-list">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/catalog">Catalog</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/terms">Terms and Conditions</Link>
        </li>
      </ul>
      <div className="nav-input">
        <input type="text" placeholder="What are you looking for?" />
      </div>
      <div className="nav-icons">
        <img src={heart} alt="heart" />
        <Link to="/cart">
          <img src={cart} alt="shopping cart" />
        </Link>
        <img
          src={icon}
          alt="icon"
          onClick={() => setShowDropdown(!showDropdown)}
        />
        {showDropdown && (
          <div className="dropdown-content">
            <Link to="/" className="logout-link">
              Log Out
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
