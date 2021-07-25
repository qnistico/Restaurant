import React from "react";
import Parallax1 from "./Parallax1";
import "./Sass/PagesHero.scss";
import { ParallaxProvider } from "react-scroll-parallax";

function PagesHero(props) {
  return (
    <div className="pages-hero">
      <ParallaxProvider>
        <Parallax1 imgsrc={props.phimg} height="75vh"></Parallax1>
      </ParallaxProvider>
      <div className="pages-hero-content">
        <h1>{props.phheader}</h1>
      </div>
      <div className="pages-hero-gradient"></div>
    </div>
  );
}

export default PagesHero;
