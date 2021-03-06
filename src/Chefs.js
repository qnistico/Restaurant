import React from "react";
import "./Sass/Chefs.scss";
import chef1nobg from "./img/chef1nobg.png";
import chef3nobg from "./img/chef3nobg.png";
import chef1 from "./img/chef1.jpg";
import chef2 from "./img/chef2.jpg";
import chef3 from "./img/chef3.jpg";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { useHistory } from "react-router-dom";

function Chefs(props) {
  const history = useHistory();
  return (
    <div className="chefs" id="chefs">
      <div className="chefs-flex">
        <div className="chefs-top">
          <h3>Meet Our Chefs</h3>
          <h2>Cooking is more than a job. For us, it is a form of art.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
        </div>
        <div className="chefs-cards">
          <div className="chef-card">
            <div className="chef-card-img">
            <img
              src={chef1}
              alt="chef"
              onClick={() => history.push("/ChefProfile?ID=1")}
            />
            </div>
            <div className="chef-item-content">
              <h3>Chef Ricardo Ramiro</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Tempus quam pellentesque nec nam.{" "}
              </p>
              <div className="chef-item-bottom">
                <button
                  className="hero-button"
                  onClick={() => history.push("/ChefProfile?ID=1")}
                >
                  View Profile
                </button>
                <div>
                  <FacebookIcon />
                  <TwitterIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="chef-card">
          <div className="chef-card-img">

            <img
              src={chef2}
              alt="chef"
              onClick={() => history.push("/ChefProfile?ID=2")}
            />
            </div>
            <div className="chef-item-content">
              <h3>Chef Marco Spezzani</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Tempus quam pellentesque nec nam.{" "}
              </p>
              <div className="chef-item-bottom">
                <button
                  className="hero-button"
                  onClick={() => history.push("/ChefProfile?ID=2")}
                >
                  View Profile
                </button>
                <div>
                  <FacebookIcon />
                  <TwitterIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="chef-card ">
          <div className="chef-card-img">

            <img
              src={chef3}
              alt="chef"
              onClick={() => history.push("/ChefProfile?ID=3")}
            />
            </div>
            <div className="chef-item-content">
              <h3>Chef Maria Roletto</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Tempus quam pellentesque nec nam.{" "}
              </p>
              <div className="chef-item-bottom">
                <button
                  className="hero-button"
                  onClick={() => history.push("/ChefProfile?ID=3")}
                >
                  View Profile
                </button>
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
