import React from "react";
import "./Sass/MenuItemTemplate.scss";
import { ParallaxProvider } from "react-scroll-parallax";
import Parallax from "./Parallax";

function MenuItemTemplate(props) {
  return (
    <div className="menu-item">
      <div className="menu-item-flex">
        <div className="menu-item-content">
        <ParallaxProvider>
          <Parallax imgsrc={props.foodimg} height="62vh"></Parallax>
        </ParallaxProvider>
        <h1 className="food-title">{props.foodtitle}</h1>
        <p className="food-description"><span>Description </span>{props.fooddescription}</p>
        <p className="food-ingredients"><span>Ingredients </span>{props.foodingredients}</p>
        <p className="food-allergies"><span>Allergens </span>{props.foodallergens}</p>
        <p className="food-price"><span>Price</span> {props.foodprice}</p>
        </div>
        </div>
        </div>
  );
}

export default MenuItemTemplate;
