import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Parallax from "./Parallax";
import coffee from "./img/coffeeoverlay.jpg";
import "./Sass/CoffeeOverlay.scss";

function CoffeeOverlay() {
  return (
    <div className="coffee-overlay">
      <div className="coffee-overlay-flex">
          <div className="coffee-bg">
              <div className="coffee-overlay-gradient"></div>
        <ParallaxProvider>
          <Parallax imgsrc={coffee} height="85vh"></Parallax>
        </ParallaxProvider>
        </div>
        <div className="coffee-overlay-content">
        <h2>Premium Organic Coffee & Espresso</h2>
        <p>Try our delicious coffees, espressos and cappuccinos.  All our coffee products are fair trade & organically sourced.</p>
        <button className="hero-button">View Coffee Menu</button>
        </div>
      </div>
    </div>
  );
}

export default CoffeeOverlay;
