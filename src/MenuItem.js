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
      foodtitle: "Farfelle Pasta",
      fooddescription:
        "Wheat pasta with tomatoes, pesto, cream, oregeno and butter",
      foodingredients: "Wheat pasta, tomatoes, pesto, cream, oregeno and butter",
      foodallergens: "Gluten | Dairy",
      foodprice: "$17.00",
      foodID: "1",
    },
    {
      foodimg: pasta2,
      foodalt: "pasta",
      foodtitle: "Pasta with Shrimp",
      fooddescription: "Wheat pasta with shrimp, tomatoes, basil and butter",
      foodingredients: "Wheat pasta, shrimp, tomatoes, basil and butter",
      foodallergens: "Gluten | Dairy",
      foodprice: "$17.00",
      foodID: "2",
    },
    {
      foodimg: pasta3,
      foodalt: "pasta",
      foodtitle: "Linguine Pasta",
      fooddescription: "Wheat pasta with cheese, oregeno and butter",
      foodingredients: "Wheat pasta, cheese, oregeno and butter",
      foodallergens: "Gluten | Dairy",
      foodprice: "$14.00",
      foodID: "3",
    },
    {
      foodimg: pasta4,
      foodalt: "pasta",
      foodtitle: "Linguine Pasta",
      fooddescription: "Wheat pasta with cheese, basil and butter",
      foodingredients: "Wheat pasta, cheese, basil and butter",
      foodallergens: "Gluten | Dairy",
      foodprice: "$17.00",
      foodID: "4",
    },
    {
      foodimg: fish1,
      foodalt: "fish",
      foodtitle: "Halibut",
      fooddescription: "Halibut with edamame beans, avocado, tomatoes and scallions",
      foodingredients: "Halibut, edamame beans, avocado, tomatoes and scallions",
      foodallergens: "Allergen Free",
      foodprice: "$21.00",
      foodID: "5",
    },
    {
      foodimg: fish2,
      foodalt: "fish",
      foodtitle: "Cod Fish",
      fooddescription: "Cod fish with white rice, string beans and butter",
      foodingredients: "Cod fish, white rice, string beans and butter",
      foodallergens: "Allergen Free",
      foodprice: "$23.00",
      foodID: "6",
    },
    {
      foodimg: fish3,
      foodalt: "fish",
      foodtitle: "Salmon",
      fooddescription: "Salmon with spinach, carrots and cucumber",
      foodingredients: "Salmon, spinach, carrots and cucumber",
      foodallergens: "Allergen Free",
      foodprice: "$23.00",
      foodID: "7",
    },
    {
      foodimg: fish4,
      foodalt: "fish",
      foodtitle: "Breaded Salmon",
      fooddescription: "Salmon with tomatoes, potatoes and eggplant",
      foodingredients: "Salmon, tomatoes, potatoes and eggplant",
      foodallergens: "Allergen Free",
      foodprice: "$23.00",
      foodID: "8",
    },
    {
      foodimg: pizza1,
      foodalt: "pizza",
      foodtitle: "Margarita Pizza",
      fooddescription: "Pizza with mozzerella cheese, tomato sauce and basil",
      foodingredients: "Wheat, mozzerella cheese, tomato sauce and basil",
      foodallergens: "Gluten | Dairy",
      foodprice: "$14.00",
      foodID: "9",
    },
    {
      foodimg: pizza2,
      foodalt: "pizza",
      foodtitle: "Plain Pizza",
      fooddescription: "Pizza with mozzerella cheese",
      foodingredients: "Wheat and mozzerella cheese",
      foodallergens: "Gluten | Dairy",
      foodprice: "$14.00",
      foodID: "10",
    },
    {
      foodimg: pizza3,
      foodalt: "pizza",
      foodtitle: "Onion Pizza",
      fooddescription: "Pizza with mozzerella cheese, onions, green peppers and mushrooms",
      foodingredients: "Wheat, mozzerella cheese, onions, green peppers and mushrooms",
      foodallergens: "Gluten | Dairy",
      foodprice: "$14.00",
      foodID: "11",
    },
    {
      foodimg: pizza4,
      foodalt: "pizza",
      foodtitle: "Meat Pizza",
      fooddescription: "Pizza with Italian sausage, mozzerella cheese, tomatoes and tomato sauce",
      foodingredients: "Wheat, Italian sausage, mozzerella cheese, tomatoes and tomato sauce",
      foodallergens: "Gluten | Dairy",
      foodprice: "$13.00",
      foodID: "12",
    },
    {
      foodimg: wine1,
      foodalt: "wine",
      foodtitle: "Red Wine",
      fooddescription: "1 glass of red wine from a brand of your choosing",
      foodingredients: "Red Wine",
      foodallergens: "Alcohol",
      foodprice: "$12.00",
      foodID: "13",
    },
    {
      foodimg: wine2,
      foodalt: "wine",
      foodtitle: "Chablis White Wine",
      fooddescription: "Single bottle of Chablis white wine",
      foodingredients: "White Wine",
      foodallergens: "Alcohol",
      foodprice: "$26.00",
      foodID: "14",
    },
    {
      foodimg: wine3,
      foodalt: "wine",
      foodtitle: "Cabernet Sauvignon",
      fooddescription: "Single bottle of Cabernet Sauvignon",
      foodingredients: "Red Wine",
      foodallergens: "Alcohol",
      foodprice: "$65.00",
      foodID: "15",
    },
    {
      foodimg: wine4,
      foodalt: "champagne",
      foodtitle: "Champagne",
      fooddescription: "Single bottle of champagne",
      foodingredients: "Champagne",
      foodallergens: "Alcohol",
      foodprice: "$23.00",
      foodID: "16",
    },
    {
      foodimg: coffee1,
      foodalt: "coffee",
      foodtitle: "Columbian Coffee",
      fooddescription: "Columbian Coffee",
      foodingredients: "Coffee",
      foodallergens: "Caffeine",
      foodprice: "$2.50",
      foodID: "17",
    },
    {
      foodimg: coffee2,
      foodalt: "coffee",
      foodtitle: "Cappuccino",
      fooddescription: "Cappuccino with coffee and cream",
      foodingredients: "Coffee and cream",
      foodallergens: "Caffine | Dairy",
      foodprice: "$3.00",
      foodID: "18",
    },
    {
      foodimg: coffee3,
      foodalt: "coffee",
      foodtitle: "Espresso Single Shot",
      fooddescription: "Single shot of espresso",
      foodingredients: "Espresso",
      foodallergens: "Caffeine",
      foodprice: "$1.99",
      foodID: "19",
    },
    {
      foodimg: coffee4,
      foodalt: "coffee",
      foodtitle: "Espresso Double Shot",
      fooddescription: "Double shot of espresso",
      foodingredients: "Espresso",
      foodallergens: "Caffeine",
      foodprice: "$2.99",
      foodID: "20",
    },
  ];
  var foodID = new URLSearchParams(window.location.search).get("ID");
  const foodItem = menuData.find((food) => food.foodID == foodID);
  return (
    <div className="menu-item">
          <Fade duration="1210">

      <div className="menu-item-flex">
        <div className="button-flex">
      <h2 className="hero-button"><a href="/MenuPage" >Back to Menu</a></h2>
      </div>

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
