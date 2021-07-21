import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSlider from "./HeroSlider";
import "./Sass/Hero.scss";
import herobg from "./img/herobg.jpg";
import { Parallax } from "react-parallax";


function Hero(props) {
  const ParallaxContainer = () => (
    <Parallax bgImage={herobg} bgImageAlt="restaurant" strength={300}>
      <div className="hero">
        <div className="hero-gradient"></div>
        <div className="hero-content">
          <h1>Authentic Italian Cuisine</h1>
          <p>Italian cuisine cooked to perfection</p>
          <button className="hero-button">View Menu</button>
        </div>
      </div>
    </Parallax>
  );
  return <div>
    {ParallaxContainer()}
  </div>;
}

export default Hero;
