import React, { useState } from "react";
import LPMenu from "./LPMenu";
import "./Sass/MenuPage.scss";
import herobg from "./img/herobg.jpg";
import Fade from "react-reveal/Fade";
import { ParallaxProvider } from "react-scroll-parallax";
import PagesHero from "./PagesHero";
import { Helmet } from "react-helmet";

function MenuPage(props) {
  const [menuCategory, setMenuCategory] = useState(false);

  return (
    <div className="menu-page">
      <Helmet>
        <title>Avellino's Menu - Avellino's Italian Cuisine</title>
        <meta name="description" content="Avellino's Menu" />
      </Helmet>
      <Fade duration="1210">
        <PagesHero phimg={herobg} phheader="Our Menu" />
        <LPMenu menuCategory={menuCategory} setMenuCategory={setMenuCategory} />
      </Fade>
    </div>
  );
}

export default MenuPage;
