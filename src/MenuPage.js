import React, { useState } from 'react'
import LPMenu from './LPMenu';
import "./Sass/MenuPage.scss";
import { Parallax } from "react-parallax";
import herobg from "./img/herobg.jpg";
import Fade from "react-reveal/Fade";



function MenuPage(props) {
    const [menuCategory, setMenuCategory] = useState(false);
    const ParallaxContainer = () => (
        <div className="menu-page">

        <Parallax bgImage={herobg} bgImageAlt="restaurant" strength={300} className="wtf">
          <div className="menu-page-hero">
                <div className="menu-page-hero-content">
<h1>Menu</h1>
                </div>
            </div>
        </Parallax>
        </div>
    );

    return (
        <div className="menu-page">
            <Fade duration="1210">
            {ParallaxContainer()}
            <LPMenu menuCategory={menuCategory} setMenuCategory={setMenuCategory}/>
            </Fade>
        </div>
    )
}

export default MenuPage
