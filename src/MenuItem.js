import React from "react";
import { useParams } from "react-router";
import "./Sass/MenuItem.scss";
import pasta1 from "./img/pasta1.jpg";
import pasta2 from "./img/pasta2.jpg";
import pasta3 from "./img/pasta3.jpg";
import pasta4 from "./img/pasta4.jpg";
import fish1 from "./img/fish1.jpg";
import fish2 from "./img/fish2.jpg";
import fish3 from "./img/fish3.jpg";
import fish4 from "./img/fish4.jpg";
import pizza1 from "./img/margaritapizza.jpg";
import pizza2 from "./img/pizza2.jpg";
import pizza3 from "./img/pizza3.jpg";
import pizza4 from "./img/pizza4.jpg";
import wine1 from "./img/wine1.jpg";
import coffee1 from "./img/coffee.jpg";


function MenuItem(props) {
  const { handle } = useParams();

  const menuData = [
    {
      foodimg: pasta1,
      foodalt: "beans",
      foodtitle: "beans",
      fooddescription: "beans",
      foodingredients: "beans",
      foodallergens: "beans",
      foodprice: "beans",
      foodID: "1",
    },
    {
      foodimg: pasta2,
      foodalt: "greenbeans",
      foodtitle: "greenbeans",
      fooddescription: "greenbeans",
      foodingredients: "greenbeans",
      foodallergens: "greenbeans",
      foodprice: "greenbeans",
      foodID: "2",
    },
    {
      foodimg: pasta3,
      foodalt: "pintobeans",
      foodtitle: "pintobeans",
      fooddescription: "pintobeans",
      foodingredients: "pintobeans",
      foodallergens: "pintobeans",
      foodprice: "pintobeans",
      foodID: "3",
    },
    {
      foodimg: pasta4,
      foodalt: "pintobeans",
      foodtitle: "pintobeans",
      fooddescription: "pintobeans",
      foodingredients: "pintobeans",
      foodallergens: "pintobeans",
      foodprice: "pintobeans",
      foodID: "3",
    },
  ];
  var foodID = new URLSearchParams(window.location.search).get("ID");
  const foodItem = menuData.find((food) => food.foodID==foodID);
  return (
    <div className="menu-item">
      <div className="menu-item-flex">
        <div className="menu-item-content">
          <img src={foodItem.foodimg} alt={foodItem.foodalt} />
          <h1 className="food-title">{foodItem.foodtitle}</h1>
          <p className="food-description">
            <span>Description </span>
            {foodItem.fooddescription}
          </p>
          <p className="food-ingredients">
            <span>Ingredients </span>
            {foodItem.foodingredients}
          </p>
          <p className="food-allergies">
            <span>Allergens </span>
            {foodItem.foodallergens}
          </p>
          <p className="food-price">
            <span>Price</span> {foodItem.foodprice}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
