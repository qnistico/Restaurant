import React, { useState } from 'react'
import LPMenu from './LPMenu';
import "./Sass/MenuPage.scss";
import { Parallax } from "react-parallax";
import herobg from "./img/herobg.jpg";


function MenuPage(props) {
    const [menuCategory, setMenuCategory] = useState(false);
    const ParallaxContainer = () => (
        <Parallax bgImage={herobg} bgImageAlt="restaurant" strength={300}>
            <div className="menu-page">
          <div className="menu-page-hero">
                <div className="menu-page-hero-content">
<h1>Menu</h1>
                </div>
            </div>
            </div>
        </Parallax>
    );

    return (
        <div className="menu-page">
            {ParallaxContainer()}
            <LPMenu menuCategory={menuCategory} setMenuCategory={setMenuCategory}/>
        </div>
    )
}

export default MenuPage
