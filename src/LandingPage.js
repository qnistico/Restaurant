import React, { useState, useEffect } from "react";
import About from "./About";
import Chefs from "./Chefs";
import CoffeeOverlay from "./CoffeeOverlay";
import ContactUs from "./ContactUs";
import CustomerReviews from "./CustomerReviews";
import FoodShowcase from "./FoodShowcase";
import Hero from "./Hero";
import LPMenu from "./LPMenu";
import ScrollToTop from "./ScrollToTop";
import { Helmet } from "react-helmet";

function LandingPage(props) {
  const [menuCategory, setMenuCategory] = useState(false);

  return (
    <div>
      <Helmet>
        <title>Avellino's Italian Cuisine</title>
        <meta
          name="description"
          content="Avellino's Italian Cuisine.  Delicious italian food restaurant."
        />
        <meta
          name="keywords"
          content="Restaurant, food, Italian Food, Restaurant Near Me, Gourmet Food"
        />
      </Helmet>
    <div className="landing-page">
      
      <ScrollToTop />
      <Hero />
      <About />
      <LPMenu menuCategory={menuCategory} setMenuCategory={setMenuCategory} />

      <Chefs />
      <CoffeeOverlay setMenuCategory={setMenuCategory} />
      <ContactUs />
      <CustomerReviews />
    </div>
    </div>
  );
}

export default LandingPage;
