import React from "react";
import "./Sass/Footer.scss";
import logo from "./img/logo.png";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';


function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-flex">
          <div className="footer-item footer-about">
              <h4>About</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <img src={logo} alt="" />
          </div>
          <div className="footer-item footer-contact">
              <h4>Contact Info</h4>
            <ul>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </div>
          <div className="footer-item footer-foods">
              <h4>Featured</h4>
            <ul>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </div>
          <div className="footer-item footer-nav">
              <h4>Useful Links</h4>
            <ul>
              <a href="">
                <li>Menu</li>
              </a>
              <a href="">
                <li>About</li>
              </a>
              <a href="">
                <li>Gallery</li>
              </a>
              <a href="">
                <li>Chefs</li>
              </a>
              <a href="">
                <li>Blog</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-flex">
          <p>&copy; 2021 | Avellino's Italian Cuisine | All Rights Reserved</p>
          <div className="footer-bottom-icons">
          <FacebookIcon />
          <InstagramIcon />
          </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
