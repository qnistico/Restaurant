import React, { useState, useEffect } from "react";
import About from "./About";
import Chefs from "./Chefs";
import CoffeeOverlay from "./CoffeeOverlay";
import ContactUs from "./ContactUs";
import CustomerReviews from "./CustomerReviews";
import FoodShowcase from "./FoodShowcase";
import Hero from "./Hero";
import LPMenu from "./LPMenu";

function LandingPage(props) {
  const [menuCategory, setMenuCategory] = useState(false);

  return (
    <div className="landing-page">
      <Hero />
      <About />
      <LPMenu menuCategory={menuCategory} setMenuCategory={setMenuCategory} />

      <Chefs />
      <CoffeeOverlay setMenuCategory={setMenuCategory} />
      <ContactUs />
      <CustomerReviews />
    </div>
  );
}

export default LandingPage;
