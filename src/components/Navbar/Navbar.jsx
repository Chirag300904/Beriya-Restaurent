import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setTogleMenu] = useState(false);
  return (
    <nav className="app-navbar">
      <div className="app-navbar-logo">
        <img src={images.beriya} alt="AppLog" />
      </div>
      <ul className="app-navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contacts">Contacts</a>
        </li>
      </ul>
      <div className="app-navbar-login">
        <a href="#login" className="p__opensans">
          Log-In / Register
        </a>
        <div />
        <a href="/" className="p__opensans">
          Dine Now
        </a>
      </div>
      <div className="app-navbar-smallscreen">
        <GiHamburgerMenu
          fontSize={27}
          color="#fff"
          onClick={() => setTogleMenu(true)}
        />
        {toggleMenu && (
          <div className="app-navbar-smallscreen-overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              className="overlay-close"
              fontSize={27}
              onClick={() => setTogleMenu(false)}
            />
            <ul className="app-navbar-smallscreen-links">
              <li className="p__opensans">
                <a href="#home">Home</a>
              </li>
              <li className="p__opensans">
                <a href="#about">About</a>
              </li>
              <li className="p__opensans">
                <a href="#menu">Menu</a>
              </li>
              <li className="p__opensans">
                <a href="#awards">Awards</a>
              </li>
              <li className="p__opensans">
                <a href="#contacts">Contacts</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
