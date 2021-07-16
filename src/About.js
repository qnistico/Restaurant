import React from "react";
import "./Sass/About.scss";
import aboutimg1 from "./img/aboutimg1.jpg";
import margaritapizza from "./img/margaritapizza.jpg";
import pasta from "./img/pasta.jpg";
import herobg5 from "./img/herobg5.jpg";
import SingleCard from "./SingleCard";

function About(props) {
  return (
    <div className="about">
      <div className="about-flex">
        <div className="about-left">
          <p className="about-header">Welcome to Ravioliiiii</p>
          <h2>
            We are a modern Italian restaurant in Somewhere specializing in
            authentic Italian cuisine
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. 
          </p>
          <p>Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.</p>
          <img src={aboutimg1} alt="" />
        </div>
        <div className="about-right">
          <h2>Featured Specials</h2>
          <SingleCard
            scimg={margaritapizza}
            sctitle="Margarita Pizza"
            scdescription="Margarita pizza freshly baked in our brick oven"
            scingredients="Wheat, olive oil, mozzarella cheese, tomatoes, tomato sauce and basil."
            scallergies="Gluten & Dairy"
            scprice="$14.00"
          />
          <SingleCard
            scimg={pasta}
            sctitle="Margarita Pizza"
            scdescription="Margarita pizza freshly baked in our brick oven"
            scingredients="Wheat, olive oil, mozzarella cheese, tomatoes, tomato sauce and basil."
            scallergies="Gluten & Dairy"
            scprice="$14.00"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
