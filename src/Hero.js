import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSlider from "./HeroSlider";
import "./Sass/Hero.scss";
import herobg from "./img/herobg.jpg";
import { ParallaxProvider } from "react-scroll-parallax";
import Parallax from "./Parallax";

function Hero(props) {
  return (
      <div>

    <div className="hero">
    <div className="hero-gradient"></div>

      <div className="hero-content">
          <h1>Authentic Italian Cuisine</h1>
          <p>We makea da good good italiano revioliiiiiiiiiiiiiiii</p>
          <button  className="hero-button">View Menu</button>
      </div>
      <ParallaxProvider>
        <Parallax imgsrc={herobg} height="100vh" />
      </ParallaxProvider>

    </div>

    </div>
  );
}

export default Hero;
