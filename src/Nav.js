import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import RestaurantIcon from '@material-ui/icons/Restaurant';
import { useHistory } from "react-router-dom";
import "./Sass/Nav.scss";
import MenuIcon from '@material-ui/icons/Menu';
import logo from "./img/logo.png";


function Nav() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const [showBasic, setShowBasic] = useState(false);

  function fixHeaderOnScoll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      fixOn = 450,
      headerEl = document.getElementById("navbar");

    if (distanceY > fixOn) {
      headerEl.classList.add("fix_nav");
    } else {
      headerEl.classList.remove("fix_nav");
    }
  }

  window.addEventListener("scroll", fixHeaderOnScoll);
  const [show, handleShow] = useState(false);
  const history = useHistory();

  return (
    <div>
      <>
        <nav className="navbar" id="navbar">
          <div className="nav-container">
            <a href="/" className="nav-logo"> 
              <img src={logo} alt="logo" />
              </a>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/Menu"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Menu
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/About"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/Gallery"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Gallery
                </NavLink>
              </li>
              
              
              <li className="nav-item">
                <NavLink
                  exact
                  to="/Chefs"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Chefs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/Blog"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item mobile_show">
                <a className="nav-links reservations_mobile" href="/Reservations">
                  <RestaurantIcon />
                  Reservations
                </a>
              </li>
            </ul>
            <ul className="nav-menu-2 mobile_hide">
              <li className="nav-item">
                
                    <a className="reservations" href="/Reservations">
                      <RestaurantIcon />
                      Reservations
                    </a>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <MenuIcon />
            </div>
          </div>
        </nav>
      </>
    </div>
  );
}

export default Nav
