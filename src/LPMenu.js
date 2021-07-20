
import React, { useState } from "react";
import "./Sass/LPMenu.scss";
import coffee1 from "./img/coffee.jpg";
import pasta1 from "./img/pasta1.jpg";
import pasta2 from "./img/pasta2.jpg";
import pasta3 from "./img/pasta3.jpg";
import pasta4 from "./img/pasta4.jpg";
import pizza1 from "./img/margaritapizza.jpg";
import pizza2 from "./img/pizza2.jpg";
import pizza3 from "./img/pizza3.jpg";
import pizza4 from "./img/pizza4.jpg";
import wine1 from "./img/wine1.jpg";
import fish1 from "./img/fish1.jpg";
import fish2 from "./img/fish2.jpg";
import fish3 from "./img/fish3.jpg";
import fish4 from "./img/fish4.jpg";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function LPMenu(props) {
  let animationTime = 0.8
  let animationDelay = 0
  
  let menuItems = document.getElementsByClassName("menuItem")
  let menuButtons = document.getElementsByClassName("menuButton")
  
  window.onload = function() {
  
      for (let item of menuItems) {
  
          item.style.animation = "fadeIn " + animationTime + "s"
      }
      for (let button of menuButtons) {
  
          if (button.classList.contains("menuItemButton")) {
  
              button.classList.add("menuButtonActive")
          }
      }
  }
  
  function menuSortItems(category) {
  
      let i = 0
      let height
  
      for (let item of menuItems) {
  
          i++
          height = item.scrollHeight
  
          item.classList.add("menuItemHide")
      }
  
      for (let item of menuItems) {
  
          if (item.classList.contains(category)) {
  
              item.classList.remove("menuItemHide")
          } else {
  
              item.classList.add("menuItemHide")
          }
      }
  
      for (let button of menuButtons) {
  
          if (button.classList.contains(category + "Button")) {
  
              button.classList.add("menuButtonActive")
          } else {
  
              button.classList.remove("menuButtonActive")
          }
      }
  }
  /*
  function activeButton() {
    var active = document.querySelectorAll(".filter-button");
    active.forEach((el) => el.classList.add("active"));
  }
  */

  
  const history = useHistory();
  return (
    <div className="lp-menu">
      <div className="menu-buttons">
        <h2>Browse Our Menu</h2>
<div>
            <button className="menuButton menuItemButton" onClick={() => menuSortItems('menuItem')}>All</button>
            <button className="menuButton pastaButton" onClick={() => menuSortItems('pasta')}>Pasta</button>
            <button className="menuButton fishButton" onClick={() => menuSortItems('fish')}>Fish</button>
            <button className="menuButton pizzaButton" onClick={() => menuSortItems('pizza')}>Pizza</button>
            <button className="menuButton wineButton" onClick={() => menuSortItems('wine')}>Wine</button>
            <button className="menuButton coffeeButton" onClick={() => menuSortItems('coffee')}>Coffee</button>
            </div>
        </div>
 
      <div className="lp-menu-items">
        <h2 className="menuItem pasta">Pasta</h2>
      <div className=" menuItem pasta lp-menu-items-flex">

        <div className="lp-menu-item">
          <div className="pastaitems">
            <div className="lp-menu-item-img">
              <img src={pasta1} alt="pasta" />
              <div
                className="menu-img-overlay"
                onClick={() => history.push("/PennePasta")}
              >
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
              <p className="lp-menu-item-price">$23.00</p>
            </div>
          </div>
        </div>
        <div className="lp-menu-item">
          <div className="pastaitems">
            <div className="lp-menu-item-img">
              <img src={pasta2} alt="pasta" />
              <div
                className="menu-img-overlay"
                onClick={() => history.push("/PennePasta")}
              >
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
              <p className="lp-menu-item-price">$23.00</p>
            </div>
          </div>
        </div>
        <div className="lp-menu-item">
          <div className="pastaitems">
            <div className="lp-menu-item-img">
              <img src={pasta3} alt="pasta" />
              <div
                className="menu-img-overlay"
                onClick={() => history.push("/PennePasta")}
              >
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
              <p className="lp-menu-item-price">$23.00</p>
            </div>
          </div>
        </div>
        <div className="lp-menu-item">
          <div className="pastaitems">
            <div className="lp-menu-item-img">
              <img src={pasta4} alt="pasta" />
              <div
                className="menu-img-overlay"
                onClick={() => history.push("/PennePasta")}
              >
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
              <p className="lp-menu-item-price">$23.00</p>
            </div>
          </div>
        </div>
        </div>
        </div>
        {/* fish */}
        <div className="lp-menu-items">
          <h2 className="menuItem fish ">Fish</h2>
<div className=" menuItem fish lp-menu-items-flex">
        <div className="lp-menu-item">
          <div className="fishitems">
            <div className="lp-menu-item-img">
              <img src={fish1} alt="pasta" />
              <div
                className="menu-img-overlay"
                onClick={() => history.push("/PennePasta")}
              >
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
              <p className="lp-menu-item-price">$23.00</p>
            </div>
          </div>
        </div>
        <div className="lp-menu-item">
          <div className="fishitems">
            <div className="lp-menu-item-img">
              <img src={fish2} alt="pasta" />
              <div
                className="menu-img-overlay"
                onClick={() => history.push("/PennePasta")}
              >
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
              <p className="lp-menu-item-price">$23.00</p>
            </div>
          </div>
        </div>
        <div className="lp-menu-item">
          <div className="fishitems">
            <div className="lp-menu-item-img">
              <img src={fish3} alt="pasta" />
              <div
                className="menu-img-overlay"
                onClick={() => history.push("/PennePasta")}
              >
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
              <p className="lp-menu-item-price">$23.00</p>
            </div>
          </div>
        </div>
        <div className="lp-menu-item">
          <div className="fishitems">
            <div className="lp-menu-item-img">
              <img src={fish4} alt="pasta" />
              <div
                className="menu-img-overlay"
                onClick={() => history.push("/PennePasta")}
              >
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
              <p className="lp-menu-item-price">$23.00</p>
            </div>
          </div>
        </div>
        </div>
        </div>
        {/* pizza */}
        <div className="lp-menu-items">
          <h2 className="pizza menuItem">Pizza</h2>
        <div className=" menuItem pizza lp-menu-items-flex">

        <div className="lp-menu-item">
          <div className="pizzaitems">
            <div className="lp-menu-item-img">
              <img src={pizza1} alt="pasta" />
              <div
                className="menu-img-overlay"
                onClick={() => history.push("/PennePasta")}
              >
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
              <p className="lp-menu-item-price">$23.00</p>
            </div>
          </div>
        </div>
        <div className="lp-menu-item">
          <div className="pizzaitems">
            <div className="lp-menu-item-img">
              <img src={pizza2} alt="pasta" />
              <div
                className="menu-img-overlay"
                onClick={() => history.push("/PennePasta")}
              >
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
              <p className="lp-menu-item-price">$23.00</p>
            </div>
          </div>
        </div>
        <div className="lp-menu-item">
          <div className="pizzaitems">
            <div className="lp-menu-item-img">
              <img src={pizza3} alt="pasta" />
              <div
                className="menu-img-overlay"
                onClick={() => history.push("/PennePasta")}
              >
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
              <p className="lp-menu-item-price">$23.00</p>
            </div>
          </div>
        </div>
        <div className="lp-menu-item">
          <div className="pizzaitems">
            <div className="lp-menu-item-img">
              <img src={pizza4} alt="pasta" />
              <div
                className="menu-img-overlay"
                onClick={() => history.push("/PennePasta")}
              >
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
              <p className="lp-menu-item-price">$23.00</p>
            </div>
          </div>
        </div>
        </div>
        </div>
        {/* wine */}
        <div className="lp-menu-items">
          <h2 className="wine menuItem">Wine</h2>
        <div className=" menuItem wine lp-menu-items-flex">

        <div className="lp-menu-item">
          <div className="wineitems">
            <div className="lp-menu-item-img">
              <img src={wine1} alt="pasta" />
              <div
                className="menu-img-overlay"
                onClick={() => history.push("/PennePasta")}
              >
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
              <p className="lp-menu-item-price">$23.00</p>
            </div>
          </div>
        </div>
        <div className="lp-menu-item">
          <div className="wineitems">
            <div className="lp-menu-item-img">
              <img src={wine1} alt="pasta" />
              <div
                className="menu-img-overlay"
                onClick={() => history.push("/PennePasta")}
              >
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
              <p className="lp-menu-item-price">$23.00</p>
            </div>
          </div>
        </div>
        <div className="lp-menu-item">
          <div className="wineitems">
            <div className="lp-menu-item-img">
              <img src={wine1} alt="pasta" />
              <div
                className="menu-img-overlay"
                onClick={() => history.push("/PennePasta")}
              >
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
              <p className="lp-menu-item-price">$23.00</p>
            </div>
          </div>
        </div>
        <div className="lp-menu-item">
          <div className="wineitems">
            <div className="lp-menu-item-img">
              <img src={wine1} alt="pasta" />
              <div
                className="menu-img-overlay"
                onClick={() => history.push("/PennePasta")}
              >
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
              <p className="lp-menu-item-price">$23.00</p>
            </div>
          </div>
        </div>
        </div>
        </div>
        {/* coffee */}
        <div className="lp-menu-items">
          <h2 className="coffee menuItem">Coffee</h2>
        <div className=" menuItem coffee lp-menu-items-flex">

        <div className="lp-menu-item">
          <div className="coffeeitems">
            <div className="lp-menu-item-img">
              <img src={coffee1} alt="pasta" />
              <div
                className="menu-img-overlay"
                onClick={() => history.push("/PennePasta")}
              >
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
              <p className="lp-menu-item-price">$23.00</p>
            </div>
          </div>
        </div>
        <div className="lp-menu-item">
          <div className="coffeeitems">
            <div className="lp-menu-item-img">
              <img src={coffee1} alt="pasta" />
              <div
                className="menu-img-overlay"
                onClick={() => history.push("/PennePasta")}
              >
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
              <p className="lp-menu-item-price">$23.00</p>
            </div>
          </div>
        </div>
        <div className="lp-menu-item">
          <div className="coffeeitems">
            <div className="lp-menu-item-img">
              <img src={coffee1} alt="pasta" />
              <div
                className="menu-img-overlay"
                onClick={() => history.push("/PennePasta")}
              >
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
              <p className="lp-menu-item-price">$23.00</p>
            </div>
          </div>
        </div>
        <div className="lp-menu-item">
          <div className="coffeeitems">
            <div className="lp-menu-item-img">
              <img src={coffee1} alt="pasta" />
              <div
                className="menu-img-overlay"
                onClick={() => history.push("/PennePasta")}
              >
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
