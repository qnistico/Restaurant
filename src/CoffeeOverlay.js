import React, { useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import coffee from "./img/coffeeoverlay.jpg";
import "./Sass/CoffeeOverlay.scss";
import { Parallax } from "react-parallax";

function CoffeeOverlay(props) {
  const [menuCategory, setMenuCategory] = useState(false);

  const ParallaxContainer = () => (
    <Parallax bgImage={coffee} bgImageAlt="coffee" strength={300}>
      <div className="coffee-overlay">
        <div className="coffee-overlay-flex">
          <div className="coffee-overlay-content">
            <h2>Premium Organic Coffee & Espresso</h2>
            <p>
              Try our delicious coffees, espressos and cappuccinos. All our
              coffee products are fair trade & organically sourced.
            </p>
            <a href="#coffee-scroll">
              <button
                className="hero-button"
                onClick={() => props.setMenuCategory("coffee")}
              >
                View Coffee Menu
              </button>
            </a>
          </div>
        </div>
      </div>
    </Parallax>
  );

  return <div>{ParallaxContainer()}</div>;
}

export default CoffeeOverlay;
