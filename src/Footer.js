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
              <h3>About</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo.
            </p>
            <img src={logo} alt="" />
          </div>
          <div className="footer-item footer-contact">
              <h3>Contact Info</h3>
            <ul>
              <li><LocationOnOutlinedIcon />123 Lorem Ave, PA, 12345 USA</li>
              <li><PhoneIcon /><a href="tel:610-123-4567">(610)-123-4567</a></li>
              <li><QueryBuilderIcon />Open Hours: Monday - Sunday, 5pm - 10pm</li>
            </ul>
          </div>
          
          <div className="footer-item footer-nav">
              <h3>Useful Links</h3>
            <ul>
                <li><a href="/MenuPage">Menu</a></li>
                <li><a href="/AboutPage">About</a></li>
                <li><a href="/Gallery">Gallery</a></li>
                <li><a href="/#Chefs">Chefs</a></li>
                <li><a href="/ContactUs">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-flex">
          <p>&copy; 2021 | Avellino's Italian Cuisine | All Rights Reserved</p>
          <div className="footer-bottom-icons">
          <a href="https://facebook.com/" rel="noopener" target="_blank"><FacebookIcon /></a> <a href="https://twitter.com/" rel="noopener" target="_blank"><TwitterIcon /></a> <a href="https://www.linkedin.com/" rel="noopener" target="_blank"><LinkedInIcon /></a> <a href="https://www.pinterest.com/" rel="noopener" target="_blank"><PinterestIcon /></a> <a href="https://www.instagram.com/" rel="noopener" target="_blank"><InstagramIcon /></a>
          </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
