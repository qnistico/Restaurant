import React, { useState } from "react";
import "./Sass/LPMenu.scss";
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


import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function LPMenu(props) {
  let animationTime = 1;
  let animationDelay = 0;

  let menuItems = document.getElementsByClassName("menuItem");
  let menuButtons = document.getElementsByClassName("menuButton");

  const menuCategory = props.menuCategory;
  const setMenuCategory = props.setMenuCategory;
  window.onload = function () {
    for (let item of menuItems) {
      item.style.animation = "fadeIn " + animationTime + "s";
    }
  };

  const history = useHistory();
  return (
    <div className="lp-menu">
      <div className="menu-buttons">
        <h2>Browse Our Menu</h2>
        <div>
          <button
            className={`menuButton ${
              menuCategory == 0 ? "menuButtonActive" : ""
            }`}
            onClick={() => setMenuCategory(0)}
          >
            All
          </button>
          <button
            className={`menuButton ${
              menuCategory == "pasta" ? "menuButtonActive" : ""
            }`}
            onClick={() => setMenuCategory("pasta")}
          >
            Pasta
          </button>
          <button
            className={`menuButton ${
              menuCategory == "fish" ? "menuButtonActive" : ""
            }`}
            onClick={() => setMenuCategory("fish")}
          >
            Fish
          </button>
          <button
            className={`menuButton ${
              menuCategory == "pizza" ? "menuButtonActive" : ""
            }`}
            onClick={() => setMenuCategory("pizza")}
          >
            Pizza
          </button>
          <button
            className={`menuButton ${
              menuCategory == "wine" ? "menuButtonActive" : ""
            }`}
            onClick={() => setMenuCategory("wine")}
          >
            Wine
          </button>
          <button
            className={`menuButton ${
              menuCategory == "coffee" ? "menuButtonActive" : ""
            }`}
            onClick={() => setMenuCategory("coffee")}
          >
            Coffee
          </button>
        </div>
      </div>

      <div className="lp-menu-items">
        <h3
          className={`${
            !menuCategory || menuCategory == "pasta" ? "" : "menuItemHide"
          } menuItem pasta lp-menu-items-flex`}
        >
          Pasta
        </h3>
        <div
          className={`${
            !menuCategory || menuCategory == "pasta" ? "" : "menuItemHide"
          } menuItem pasta lp-menu-items-flex`}
        >
          <div
            className="lp-menu-item"
            onClick={() => history.push("/MenuItem?ID=1")}
          >
            <div className="pastaitems">
              <div className="lp-menu-item-img">
                <img src={pasta1} alt="pasta" />
                <div className="menu-img-overlay">
                  <button className="menu-img-overlay-button">View</button>
                </div>
              </div>
              <div className="lp-menu-item-content">
                <a href="#!" className="lp-menu-item-title">
                  Penne Pasta
                </a>
                <p className="lp-menu-item-ingredients">
                  Wheat pasta, mushrooms, cream, oregeno and butter
                </p>
                <p className="lp-menu-item-allergens">Gluten | Dairy</p>
                <p className="lp-menu-item-price">$17.00</p>
              </div>
            </div>
          </div>
          <div
            className="lp-menu-item"
            onClick={() => history.push("/MenuItem?ID=2")}
          >
            <div className="pastaitems">
              <div className="lp-menu-item-img">
                <img src={pasta2} alt="pasta" />
                <div className="menu-img-overlay">
                  <button className="menu-img-overlay-button">View</button>
                </div>
              </div>
              <div className="lp-menu-item-content">
                <a href="#!" className="lp-menu-item-title">
                  Pasta with Shrimp
                </a>
                <p className="lp-menu-item-ingredients">
                  Wheat pasta, tomatoes, basil and butter
                </p>
                <p className="lp-menu-item-allergens">Gluten | Dairy</p>

                <p className="lp-menu-item-price">$23.00</p>
              </div>
            </div>
          </div>
          <div
            className="lp-menu-item"
            onClick={() => history.push("/MenuItem?ID=3")}
          >
            <div className="pastaitems">
              <div className="lp-menu-item-img">
                <img src={pasta3} alt="pasta" />
                <div className="menu-img-overlay">
                  <button className="menu-img-overlay-button">View</button>
                </div>
              </div>
              <div className="lp-menu-item-content">
                <a href="#!" className="lp-menu-item-title">
                  Linguine Pasta
                </a>
                <p className="lp-menu-item-ingredients">
                  Wheat pasta, mushrooms, cream, oregeno and butter
                </p>
                <p className="lp-menu-item-allergens">Gluten | Dairy</p>

                <p className="lp-menu-item-price">$23.00</p>
              </div>
            </div>
          </div>
          <div
            className="lp-menu-item"
            onClick={() => history.push("/MenuItem?ID=4")}
          >
            <div className="pastaitems">
              <div className="lp-menu-item-img">
                <img src={pasta4} alt="pasta" />
                <div className="menu-img-overlay">
                  <button className="menu-img-overlay-button">View</button>
                </div>
              </div>
              <div className="lp-menu-item-content">
                <a href="#!" className="lp-menu-item-title">
                  Penne Pasta
                </a>
                <p className="lp-menu-item-ingredients">
                  Wheat pasta, mushrooms, cream, oregeno and butter
                </p>
                <p className="lp-menu-item-allergens">Gluten | Dairy</p>

                <p className="lp-menu-item-price">$23.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* fish */}
      <div className="lp-menu-items">
        <h3
          className={`${
            !menuCategory || menuCategory == "fish" ? "" : "menuItemHide"
          } menuItem fish lp-menu-items-flex`}
        >
          Fish
        </h3>
        <div
          className={`${
            !menuCategory || menuCategory == "fish" ? "" : "menuItemHide"
          } menuItem fish lp-menu-items-flex`}
        >
          <div
            className="lp-menu-item"
            onClick={() => history.push("/MenuItem?ID=5")}
          >
            <div className="fishitems">
              <div className="lp-menu-item-img">
                <img src={fish1} alt="pasta" />
                <div className="menu-img-overlay">
                  <button className="menu-img-overlay-button">View</button>
                </div>
              </div>
              <div className="lp-menu-item-content">
                <a href="#!" className="lp-menu-item-title">
                  Penne Pasta
                </a>
                <p className="lp-menu-item-ingredients">
                  Wheat pasta, mushrooms, cream, oregeno and butter
                </p>
                <p className="lp-menu-item-allergens">Gluten | Dairy</p>

                <p className="lp-menu-item-price">$23.00</p>
              </div>
            </div>
          </div>
          <div
            className="lp-menu-item"
            onClick={() => history.push("/MenuItem?ID=6")}
          >
            <div className="fishitems">
              <div className="lp-menu-item-img">
                <img src={fish2} alt="pasta" />
                <div className="menu-img-overlay">
                  <button className="menu-img-overlay-button">View</button>
                </div>
              </div>
              <div className="lp-menu-item-content">
                <a href="#!" className="lp-menu-item-title">
                  Penne Pasta
                </a>
                <p className="lp-menu-item-ingredients">
                  Wheat pasta, mushrooms, cream, oregeno and butter
                </p>
                <p className="lp-menu-item-allergens">Gluten | Dairy</p>

                <p className="lp-menu-item-price">$23.00</p>
              </div>
            </div>
          </div>
          <div
            className="lp-menu-item"
            onClick={() => history.push("/MenuItem?ID=7")}
          >
            <div className="fishitems">
              <div className="lp-menu-item-img">
                <img src={fish3} alt="pasta" />
                <div className="menu-img-overlay">
                  <button className="menu-img-overlay-button">View</button>
                </div>
              </div>
              <div className="lp-menu-item-content">
                <a href="#!" className="lp-menu-item-title">
                  Penne Pasta
                </a>
                <p className="lp-menu-item-ingredients">
                  Wheat pasta, mushrooms, cream, oregeno and butter
                </p>
                <p className="lp-menu-item-allergens">Gluten | Dairy</p>

                <p className="lp-menu-item-price">$23.00</p>
              </div>
            </div>
          </div>
          <div
            className="lp-menu-item"
            onClick={() => history.push("/MenuItem?ID=8")}
          >
            <div className="fishitems">
              <div className="lp-menu-item-img">
                <img src={fish4} alt="pasta" />
                <div className="menu-img-overlay">
                  <button className="menu-img-overlay-button">View</button>
                </div>
              </div>
              <div className="lp-menu-item-content">
                <a href="#!" className="lp-menu-item-title">
                  Penne Pasta
                </a>
                <p className="lp-menu-item-ingredients">
                  Wheat pasta, mushrooms, cream, oregeno and butter
                </p>
                <p className="lp-menu-item-allergens">Gluten | Dairy</p>

                <p className="lp-menu-item-price">$23.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* pizza */}
      <div className="lp-menu-items">
        <h3
          className={`${
            !menuCategory || menuCategory == "pizza" ? "" : "menuItemHide"
          } menuItem pizza lp-menu-items-flex`}
        >
          Pizza
        </h3>
        <div
          className={`${
            !menuCategory || menuCategory == "pizza" ? "" : "menuItemHide"
          } menuItem pizza lp-menu-items-flex`}
        >
          <div
            className="lp-menu-item"
            onClick={() => history.push("/MenuItem?ID=9")}
          >
            <div className="pizzaitems">
              <div className="lp-menu-item-img">
                <img src={pizza1} alt="pasta" />
                <div className="menu-img-overlay">
                  <button className="menu-img-overlay-button">View</button>
                </div>
              </div>
              <div className="lp-menu-item-content">
                <a href="#!" className="lp-menu-item-title">
                  Penne Pasta
                </a>
                <p className="lp-menu-item-ingredients">
                  Wheat pasta, mushrooms, cream, oregeno and butter
                </p>
                <p className="lp-menu-item-allergens">Gluten | Dairy</p>

                <p className="lp-menu-item-price">$23.00</p>
              </div>
            </div>
          </div>
          <div
            className="lp-menu-item"
            onClick={() => history.push("/MenuItem?ID=10")}
          >
            <div className="pizzaitems">
              <div className="lp-menu-item-img">
                <img src={pizza2} alt="pasta" />
                <div className="menu-img-overlay">
                  <button className="menu-img-overlay-button">View</button>
                </div>
              </div>
              <div className="lp-menu-item-content">
                <a href="#!" className="lp-menu-item-title">
                  Penne Pasta
                </a>
                <p className="lp-menu-item-ingredients">
                  Wheat pasta, mushrooms, cream, oregeno and butter
                </p>
                <p className="lp-menu-item-allergens">Gluten | Dairy</p>

                <p className="lp-menu-item-price">$23.00</p>
              </div>
            </div>
          </div>
          <div
            className="lp-menu-item"
            onClick={() => history.push("/MenuItem?ID=11")}
          >
            <div className="pizzaitems">
              <div className="lp-menu-item-img">
                <img src={pizza3} alt="pasta" />
                <div className="menu-img-overlay">
                  <button className="menu-img-overlay-button">View</button>
                </div>
              </div>
              <div className="lp-menu-item-content">
                <a href="#!" className="lp-menu-item-title">
                  Penne Pasta
                </a>
                <p className="lp-menu-item-ingredients">
                  Wheat pasta, mushrooms, cream, oregeno and butter
                </p>
                <p className="lp-menu-item-allergens">Gluten | Dairy</p>

                <p className="lp-menu-item-price">$23.00</p>
              </div>
            </div>
          </div>
          <div
            className="lp-menu-item"
            onClick={() => history.push("/MenuItem?ID=12")}
          >
            <div className="pizzaitems">
              <div className="lp-menu-item-img">
                <img src={pizza4} alt="pasta" />
                <div className="menu-img-overlay">
                  <button className="menu-img-overlay-button">View</button>
                </div>
              </div>
              <div className="lp-menu-item-content">
                <a href="#!" className="lp-menu-item-title">
                  Penne Pasta
                </a>
                <p className="lp-menu-item-ingredients">
                  Wheat pasta, mushrooms, cream, oregeno and butter
                </p>
                <p className="lp-menu-item-allergens">Gluten | Dairy</p>

                <p className="lp-menu-item-price">$23.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* wine */}
      <div className="lp-menu-items">
        <h3
          className={`${
            !menuCategory || menuCategory == "wine" ? "" : "menuItemHide"
          } menuItem wine lp-menu-items-flex`}
        >
          Wine
        </h3>
        <div
          className={`${
            !menuCategory || menuCategory == "wine" ? "" : "menuItemHide"
          } menuItem wine lp-menu-items-flex`}
        >
          <div
            className="lp-menu-item"
            onClick={() => history.push("/MenuItem?ID=13")}
          >
            <div className="wineitems">
              <div className="lp-menu-item-img">
                <img src={wine1} alt="pasta" />
                <div className="menu-img-overlay">
                  <button className="menu-img-overlay-button">View</button>
                </div>
              </div>
              <div className="lp-menu-item-content">
                <a href="#!" className="lp-menu-item-title">
                  Penne Pasta
                </a>
                <p className="lp-menu-item-ingredients">
                  Wheat pasta, mushrooms, cream, oregeno and butter
                </p>
                <p className="lp-menu-item-allergens">Gluten | Dairy</p>

                <p className="lp-menu-item-price">$23.00</p>
              </div>
            </div>
          </div>
          <div
            className="lp-menu-item"
            onClick={() => history.push("/MenuItem?ID=14")}
          >
            <div className="wineitems">
              <div className="lp-menu-item-img">
                <img src={wine2} alt="pasta" />
                <div className="menu-img-overlay">
                  <button className="menu-img-overlay-button">View</button>
                </div>
              </div>
              <div className="lp-menu-item-content">
                <a href="#!" className="lp-menu-item-title">
                  Penne Pasta
                </a>
                <p className="lp-menu-item-ingredients">
                  Wheat pasta, mushrooms, cream, oregeno and butter
                </p>
                <p className="lp-menu-item-allergens">Gluten | Dairy</p>

                <p className="lp-menu-item-price">$23.00</p>
              </div>
            </div>
          </div>
          <div
            className="lp-menu-item"
            onClick={() => history.push("/MenuItem?ID=15")}
          >
            <div className="wineitems">
              <div className="lp-menu-item-img">
                <img src={wine3} alt="pasta" />
                <div className="menu-img-overlay">
                  <button className="menu-img-overlay-button">View</button>
                </div>
              </div>
              <div className="lp-menu-item-content">
                <a href="#!" className="lp-menu-item-title">
                  Penne Pasta
                </a>
                <p className="lp-menu-item-ingredients">
                  Wheat pasta, mushrooms, cream, oregeno and butter
                </p>
                <p className="lp-menu-item-allergens">Gluten | Dairy</p>

                <p className="lp-menu-item-price">$23.00</p>
              </div>
            </div>
          </div>
          <div
            className="lp-menu-item"
            onClick={() => history.push("/MenuItem?ID=16")}
          >
            <div className="wineitems">
              <div className="lp-menu-item-img">
                <img src={wine4} alt="pasta" />
                <div className="menu-img-overlay">
                  <button className="menu-img-overlay-button">View</button>
                </div>
              </div>
              <div className="lp-menu-item-content">
                <a href="#!" className="lp-menu-item-title">
                  Penne Pasta
                </a>
                <p className="lp-menu-item-ingredients">
                  Wheat pasta, mushrooms, cream, oregeno and butter
                </p>
                <p className="lp-menu-item-allergens">Gluten | Dairy</p>

                <p className="lp-menu-item-price">$23.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* coffee */}
      <div className="lp-menu-items" id="coffee-scroll">
        <h3
          className={`${
            !menuCategory || menuCategory == "coffee" ? "" : "menuItemHide"
          } menuItem coffee lp-menu-items-flex`}
        >
          Coffee
        </h3>
        <div
          className={`${
            !menuCategory || menuCategory == "coffee" ? "" : "menuItemHide"
          } menuItem coffee lp-menu-items-flex`}
        >
          <div
            className="lp-menu-item"
            onClick={() => history.push("/MenuItem?ID=17")}
          >
            <div className="coffeeitems">
              <div className="lp-menu-item-img">
                <img src={coffee1} alt="pasta" />
                <div className="menu-img-overlay">
                  <button className="menu-img-overlay-button">View</button>
                </div>
              </div>
              <div className="lp-menu-item-content">
                <a href="#!" className="lp-menu-item-title">
                  Penne Pasta
                </a>
                <p className="lp-menu-item-ingredients">
                  Wheat pasta, mushrooms, cream, oregeno and butter
                </p>
                <p className="lp-menu-item-allergens">Gluten | Dairy</p>

                <p className="lp-menu-item-price">$23.00</p>
              </div>
            </div>
          </div>
          <div
            className="lp-menu-item"
            onClick={() => history.push("/MenuItem?ID=18")}
          >
            <div className="coffeeitems">
              <div className="lp-menu-item-img">
                <img src={coffee2} alt="pasta" />
                <div className="menu-img-overlay">
                  <button className="menu-img-overlay-button">View</button>
                </div>
              </div>
              <div className="lp-menu-item-content">
                <a href="#!" className="lp-menu-item-title">
                  Penne Pasta
                </a>
                <p className="lp-menu-item-ingredients">
                  Wheat pasta, mushrooms, cream, oregeno and butter
                </p>
                <p className="lp-menu-item-allergens">Gluten | Dairy</p>

                <p className="lp-menu-item-price">$23.00</p>
              </div>
            </div>
          </div>
          <div
            className="lp-menu-item"
            onClick={() => history.push("/MenuItem?ID=19")}
          >
            <div className="coffeeitems">
              <div className="lp-menu-item-img">
                <img src={coffee3} alt="pasta" />
                <div className="menu-img-overlay">
                  <button className="menu-img-overlay-button">View</button>
                </div>
              </div>
              <div className="lp-menu-item-content">
                <a href="#!" className="lp-menu-item-title">
                  Penne Pasta
                </a>
                <p className="lp-menu-item-ingredients">
                  Wheat pasta, mushrooms, cream, oregeno and butter
                </p>
                <p className="lp-menu-item-allergens">Gluten | Dairy</p>

                <p className="lp-menu-item-price">$23.00</p>
              </div>
            </div>
          </div>
          <div
            className="lp-menu-item"
            onClick={() => history.push("/MenuItem?ID=20")}
          >
            <div className="coffeeitems">
              <div className="lp-menu-item-img">
                <img src={coffee4} alt="pasta" />
                <div className="menu-img-overlay">
                  <button className="menu-img-overlay-button">View</button>
                </div>
              </div>
              <div className="lp-menu-item-content">
                <a href="#!" className="lp-menu-item-title">
                  Penne Pasta
                </a>
                <p className="lp-menu-item-ingredients">
                  Wheat pasta, mushrooms, cream, oregeno and butter
                </p>
                <p className="lp-menu-item-allergens">Gluten | Dairy</p>

                <p className="lp-menu-item-price">$23.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LPMenu;
