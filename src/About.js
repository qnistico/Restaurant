import React from "react";
import "./Sass/About.scss";
import pasta1 from "./img/pasta1.jpg";
import pasta2 from "./img/pasta2.jpg";
import pasta3 from "./img/pasta3.jpg";
import pasta4 from "./img/pasta4.jpg";
import pizza1 from "./img/pizza1.jpg";
import pizza2 from "./img/pizza2.jpg";
import pizza3 from "./img/pizza3.jpg";
import pizza4 from "./img/pizza4.jpg";
import wine1 from "./img/wine1.jpg";
import fish1 from "./img/fish1.jpg";
import fish2 from "./img/fish2.jpg";
import fish3 from "./img/fish3.jpg";
import fish4 from "./img/fish4.jpg";
import herobg5 from "./img/herobg5.jpg";
import SingleCard from "./SingleCard";

function About(props) {
  return (
    <div className="about">
      <div className="about-top">
        <p className="about-header">Welcome to Avellino's</p>
        <h2>We are a modern Italian restaurant in Somewhere</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Sollicitudin tempor id eu nisl nunc mi ipsum. Venenatis tellus in
          metus vulputate eu scelerisque felis imperdiet proin. Tincidunt ornare
          massa eget egestas purus viverra accumsan in nisl.{" "}
        </p>
      </div>
      <div className="lp-gallery">
        <div className="lp-gallery-flex">
        <a href="/Gallery">

          <div className="lp-gallery-overlay">
              <button>View Gallery</button>
          </div>
          </a>
          <img src={pizza4} alt="" />
          <img src={pizza1} alt="" />
          <img src={fish1} alt="" />
          <img src={pizza2} alt="" />
          <img src={pasta2} alt="" />
          <img src={pizza3} alt="" />
          <img src={pasta3} alt="" />
          <img src={fish2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
