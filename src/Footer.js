import React from "react";
import "./Sass/Footer.scss";
import logo from "./img/logo.png";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import PhoneIcon from '@material-ui/icons/Phone';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


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
              nisi ut aliquip ex ea commodo.
            </p>
            <img src={logo} alt="" />
          </div>
          <div className="footer-item footer-contact">
              <h4>Contact Info</h4>
            <ul>
              <li></li>
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
                <li><a href="/MenuPage">Menu</a></li>
                <li><a href="">About</a></li>
                <li><a href="/Gallery">Gallery</a></li>
                <li><a href="">Chefs</a></li>
                <li><a href="/ContactUs">Contact Us</a></li>
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
