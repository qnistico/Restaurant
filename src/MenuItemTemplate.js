import React from "react";
import "./Sass/MenuItemTemplate.scss";


function MenuItemTemplate(props) {
  return (
    <div className="menu-item">
      <div className="menu-item-flex">
        <div className="menu-item-content">
        <img src={props.foodimg} alt={props.foodalt} />
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
