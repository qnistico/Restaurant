import React, { useEffect } from "react";
import About from "./About";
import Chefs from "./Chefs";
import CoffeeOverlay from "./CoffeeOverlay";
import CustomerReviews from "./CustomerReviews";
import FoodShowcase from "./FoodShowcase";
import Hero from "./Hero";
import LPMenu from "./LPMenu";

function LandingPage() {
  
  
  return (
    <div className="landing-page">
      <Hero />
      <About />
      <Chefs />
      <CoffeeOverlay />
      <LPMenu />
      <CustomerReviews />

    </div>
  );
}

export default LandingPage;
