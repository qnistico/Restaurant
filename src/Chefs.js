import React from "react";
import "./Sass/Chefs.scss";
import chef1nobg from "./img/chef1nobg.png";
import chef3nobg from "./img/chef3nobg.png";
import chef1 from "./img/chef1.jpg";
import chef3 from "./img/chef3.jpg";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

function Chefs() {
  return (
    <div className="chefs">
      <div className="chefs-flex">
        <div className="chefs-left">
          <h3>Meet Our Chefs</h3>
          <h2>Cooking is more than a job. For us, it is a form of art.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
          <button className="hero-button">Read More</button>
        </div>
        <div className="chefs-right">
          <div className="chef-item">
            <img src={chef1} alt="" />
            <div className="chef-item-content">
              <h3>Chef Ricardo Ramiro</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Tempus quam pellentesque nec nam.{" "}
              </p>
              <div className="chef-item-bottom">
              <button className="hero-button">View Profile</button>
              <div>
              <FacebookIcon />
              <TwitterIcon />
              </div>
            </div>
            </div>
          </div>
          <div className="chef-item">
            <img src={chef3} alt="" />
            <div className="chef-item-content">
              <h3>Chef Maria Roletto</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Tempus quam pellentesque nec nam.{" "}
              </p>
              <div className="chef-item-bottom">
              <button className="hero-button">View Profile</button>
              <div>
              <FacebookIcon />
              <TwitterIcon />
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chefs;
