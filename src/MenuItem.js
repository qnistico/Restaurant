import React from "react";
import { useParams } from "react-router";
import "./Sass/MenuItem.scss";
import pasta1 from "./img/pasta1.jpg";
import pasta2 from "./img/pasta2.jpg";
import pasta3 from "./img/pasta3.jpg";
import pasta4 from "./img/pasta4.jpg";
import pizza1 from "./img/pizza1.jpg";
import pizza2 from "./img/pizza2.jpg";
import pizza3 from "./img/pizza3.jpg";
import pizza4 from "./img/pizza4.jpg";
import fish1 from "./img/fish1.jpg";
import fish2 from "./img/fish2.jpg";
import fish3 from "./img/fish3.jpg";
import fish4 from "./img/fish4.jpg";
import wine1 from "./img/wine1.jpg";
import wine2 from "./img/wine2.jpg";
import wine3 from "./img/wine3.jpg";
import wine4 from "./img/wine4.jpg";
import coffee1 from "./img/coffee.jpg";
import coffee2 from "./img/coffee2.jpg";
import coffee3 from "./img/coffee3.jpg";
import coffee4 from "./img/coffee4.jpg";
import Fade from "react-reveal/Fade";


function MenuItem(props) {
  const { handle } = useParams();

  const menuData = [
    {
      foodimg: pasta1,
      foodalt: "pasta",
      foodtitle: "Penne Pasta",
      fooddescription:
        "Penne pasta with tomatoes and parmesan cheese served on a bed of lettuce",
      foodingredients: "Wheat pasta, tomatoes, cream, oregeno and butter",
      foodallergens: "Gluten | Dairy",
      foodprice: "$17.00",
      foodID: "1",
    },
    {
      foodimg: pasta2,
      foodalt: "pasta",
      foodtitle: "Pasta with Shrimp",
      fooddescription: "Penne pasta with tomatoes, shrimp basil and butter",
      foodingredients: "Wheat pasta, tomatoes, shrimp, basil and butter",
      foodallergens: "Gluten | Dairy",
      foodprice: "$23.00",
      foodID: "2",
    },
    {
      foodimg: pasta3,
      foodalt: "pasta",
      foodtitle: "Linguine Pasta",
      fooddescription: "Linguine with mushrooms, cream, parmesan cheese, tomato sauce and basil",
      foodingredients: "Wheat pasta, mushrooms, cream, parmesan cheese, tomato suace and basil",
      foodallergens: "Gluten | Dairy",
      foodprice: "$22.00",
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
      foodID: "4",
    },
    {
      foodimg: fish1,
      foodalt: "pintobeans",
      foodtitle: "pintobeans",
      fooddescription: "pintobeans",
      foodingredients: "pintobeans",
      foodallergens: "pintobeans",
      foodprice: "pintobeans",
      foodID: "5",
    },
    {
      foodimg: fish2,
      foodalt: "pintobeans",
      foodtitle: "pintobeans",
      fooddescription: "pintobeans",
      foodingredients: "pintobeans",
      foodallergens: "pintobeans",
      foodprice: "pintobeans",
      foodID: "6",
    },
    {
      foodimg: fish3,
      foodalt: "pintobeans",
      foodtitle: "pintobeans",
      fooddescription: "pintobeans",
      foodingredients: "pintobeans",
      foodallergens: "pintobeans",
      foodprice: "pintobeans",
      foodID: "7",
    },
    {
      foodimg: fish4,
      foodalt: "pintobeans",
      foodtitle: "pintobeans",
      fooddescription: "pintobeans",
      foodingredients: "pintobeans",
      foodallergens: "pintobeans",
      foodprice: "pintobeans",
      foodID: "8",
    },
    {
      foodimg: pizza1,
      foodalt: "pintobeans",
      foodtitle: "pintobeans",
      fooddescription: "pintobeans",
      foodingredients: "pintobeans",
      foodallergens: "pintobeans",
      foodprice: "pintobeans",
      foodID: "9",
    },
    {
      foodimg: pizza2,
      foodalt: "pintobeans",
      foodtitle: "pintobeans",
      fooddescription: "pintobeans",
      foodingredients: "pintobeans",
      foodallergens: "pintobeans",
      foodprice: "pintobeans",
      foodID: "10",
    },
    {
      foodimg: pizza3,
      foodalt: "pintobeans",
      foodtitle: "pintobeans",
      fooddescription: "pintobeans",
      foodingredients: "pintobeans",
      foodallergens: "pintobeans",
      foodprice: "pintobeans",
      foodID: "11",
    },
    {
      foodimg: pizza4,
      foodalt: "pintobeans",
      foodtitle: "pintobeans",
      fooddescription: "pintobeans",
      foodingredients: "pintobeans",
      foodallergens: "pintobeans",
      foodprice: "pintobeans",
      foodID: "12",
    },
    {
      foodimg: wine1,
      foodalt: "pintobeans",
      foodtitle: "pintobeans",
      fooddescription: "pintobeans",
      foodingredients: "pintobeans",
      foodallergens: "pintobeans",
      foodprice: "pintobeans",
      foodID: "13",
    },
    {
      foodimg: wine2,
      foodalt: "pintobeans",
      foodtitle: "pintobeans",
      fooddescription: "pintobeans",
      foodingredients: "pintobeans",
      foodallergens: "pintobeans",
      foodprice: "pintobeans",
      foodID: "14",
    },
    {
      foodimg: wine3,
      foodalt: "pintobeans",
      foodtitle: "pintobeans",
      fooddescription: "pintobeans",
      foodingredients: "pintobeans",
      foodallergens: "pintobeans",
      foodprice: "pintobeans",
      foodID: "15",
    },
    {
      foodimg: wine4,
      foodalt: "pintobeans",
      foodtitle: "pintobeans",
      fooddescription: "pintobeans",
      foodingredients: "pintobeans",
      foodallergens: "pintobeans",
      foodprice: "pintobeans",
      foodID: "16",
    },
    {
      foodimg: coffee1,
      foodalt: "pintobeans",
      foodtitle: "pintobeans",
      fooddescription: "pintobeans",
      foodingredients: "pintobeans",
      foodallergens: "pintobeans",
      foodprice: "pintobeans",
      foodID: "17",
    },
    {
      foodimg: coffee2,
      foodalt: "pintobeans",
      foodtitle: "pintobeans",
      fooddescription: "pintobeans",
      foodingredients: "pintobeans",
      foodallergens: "pintobeans",
      foodprice: "pintobeans",
      foodID: "18",
    },
    {
      foodimg: coffee3,
      foodalt: "pintobeans",
      foodtitle: "pintobeans",
      fooddescription: "pintobeans",
      foodingredients: "pintobeans",
      foodallergens: "pintobeans",
      foodprice: "pintobeans",
      foodID: "19",
    },
    {
      foodimg: coffee4,
      foodalt: "pintobeans",
      foodtitle: "pintobeans",
      fooddescription: "pintobeans",
      foodingredients: "pintobeans",
      foodallergens: "pintobeans",
      foodprice: "pintobeans",
      foodID: "20",
    },
  ];
  var foodID = new URLSearchParams(window.location.search).get("ID");
  const foodItem = menuData.find((food) => food.foodID == foodID);
  return (
    <div className="menu-item">
          <Fade duration="1210">

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
      </Fade>
    </div>
  );
}

export default MenuItem;
