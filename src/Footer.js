import React from "react";
import "./Sass/Footer.scss";
import logo from "./img/logo.png";

import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import PhoneIcon from "@material-ui/icons/Phone";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import Socialmediaicons from "./components/Socialmediaicons";



function Footer(props) {
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
              <li>
                <LocationOnOutlinedIcon />
                123 Lorem Ave, PA, 12345 USA
              </li>
              <li>
                <PhoneIcon />
                <a href="tel:610-123-4567">(610)-123-4567</a>
              </li>
              <li>
                <QueryBuilderIcon />
                Open Hours: Monday - Sunday, 5pm - 10pm
              </li>
            </ul>
          </div>

          <div className="footer-item footer-nav">
            <h3>Useful Links</h3>
            <ul>
              <li>
                <a href="/MenuPage">Menu</a>
              </li>
              <li>
                <a href="/AboutPage">About</a>
              </li>
              <li>
                <a href="/Gallery">Gallery</a>
              </li>
              <li>
                <a href="/#Chefs">Chefs</a>
              </li>
              <li>
                <a href="/ContactUs">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-flex">
            <p>
              &copy; 2021 | Avellino's Italian Cuisine | All Rights Reserved
            </p>
            <div className="footer-bottom-icons">
            <Socialmediaicons
                weburl="https://facebook.com/"
                webtitle="Facebook"
                socialmedia="facebook"
              />
              <Socialmediaicons
                weburl="https://twitter.com/"
                webtitle="Twitter"
                socialmedia="twitter"
              />
              <Socialmediaicons
                weburl="https://linkedin.com/"
                webtitle="Linkedin"
                socialmedia="linkedin"
              />
              <Socialmediaicons
                weburl="https://pinterest.com/"
                webtitle="Pinterest"
                socialmedia="pinterest"
              />
              <Socialmediaicons
                weburl="https://instagram.com/"
                webtitle="Instagram"
                socialmedia="instagram"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
