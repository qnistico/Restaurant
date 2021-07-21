import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import coffee from "./img/coffeeoverlay.jpg";
import "./Sass/CoffeeOverlay.scss";
import { Parallax } from "react-parallax";

function CoffeeOverlay(props) {
  const ParallaxContainer = () => (
    <Parallax bgImage={coffee} bgImageAlt="coffee" strength={300}>
      <div className="coffee-overlay">
      <div className="coffee-overlay-gradient"></div>
      <div className="coffee-overlay-flex">
        <div className="coffee-overlay-content">
          <h2>Premium Organic Coffee & Espresso</h2>
          <p>
            Try our delicious coffees, espressos and cappuccinos. All our coffee
            products are fair trade & organically sourced.
          </p>
          <button className="hero-button">View Coffee Menu</button>
        </div>
      </div>
      </div>
    </Parallax>
  );

  return <div>{ParallaxContainer()}</div>;
}

export default CoffeeOverlay;
