import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSlider from "./HeroSlider";
import "./Sass/Hero.scss";
import herobg from "./img/herobg.jpg";
import { Parallax } from "react-parallax";
import { useHistory } from "react-router-dom";
import Fade from "react-reveal/Fade";



function Hero(props) {
  const history = useHistory();
  const ParallaxContainer = () => (
    <Fade duration="1210">

    <Parallax bgImage={herobg} bgImageAlt="restaurant" strength={300}>
      <div className="hero">
        <div className="hero-content">
          <h1>Authentic Italian Cuisine</h1>
          <p>Italian cuisine cooked to perfection</p>
          <a href="/MenuPage"><button className="hero-button">View Menu</button></a>
        </div>
      </div>
    </Parallax>
    </Fade>
  );
  return <div>
    {ParallaxContainer()}
  </div>;
}

export default Hero;
