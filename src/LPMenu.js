import React, { useState } from "react";
import "./Sass/LPMenu.scss";
import coffee1 from "./img/coffee.jpg";
import pasta1 from "./img/pasta.jpg";
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

function LPMenu(props) {
  window.onload = function() {
    sortPasta();
  };
  /*
  function activeButton() {
    var active = document.querySelectorAll(".filter-button");
    active.forEach((el) => el.classList.add("active"));
  }
  */
  function sortPasta() {
    var hideOthers1 = document.querySelectorAll(
      "div.fishitem, div.pizzaitem, div.wineitem, div.coffeeitem"
    );
    var showPasta = document.querySelectorAll("div.pastaitem");
    hideOthers1.forEach((el) => el.classList.remove("show"));
    hideOthers1.forEach((el) => el.classList.add("hide"));
    showPasta.forEach((el) => el.classList.add("show"));
    showPasta.forEach((el) => el.classList.remove("hide"));
  }
  function sortFish() {
    var hideOthers2 = document.querySelectorAll(
      "div.pastaitem, div.pizzaitem, div.wineitem, div.coffeeitem"
    );
    var showFish = document.querySelectorAll("div.fishitem");
    hideOthers2.forEach((el) => el.classList.remove("show"));
    hideOthers2.forEach((el) => el.classList.add("hide"));
    showFish.forEach((el) => el.classList.add("show"));
    showFish.forEach((el) => el.classList.remove("hide"));
  }
  function sortPizza() {
    var hideOthers3 = document.querySelectorAll(
      "div.pastaitem, div.fishitem, div.wineitem, div.coffeeitem"
    );
    var showPizza = document.querySelectorAll("div.pizzaitem");
    hideOthers3.forEach((el) => el.classList.remove("show"));
    hideOthers3.forEach((el) => el.classList.add("hide"));
    showPizza.forEach((el) => el.classList.add("show"));
    showPizza.forEach((el) => el.classList.remove("hide"));
  }
  function sortWine() {
    var hideOthers4 = document.querySelectorAll(
      "div.pastaitem, div.fishitem, div.pizzaitem, div.coffeeitem"
    );
    var showWine = document.querySelectorAll("div.wineitem");
    hideOthers4.forEach((el) => el.classList.remove("show"));
    hideOthers4.forEach((el) => el.classList.add("hide"));
    showWine.forEach((el) => el.classList.add("show"));
    showWine.forEach((el) => el.classList.remove("hide"));
  }
  function sortCoffee() {
    var hideOthers5 = document.querySelectorAll(
      "div.pastaitem, div.fishitem, div.pizzaitem, div.wineitem"
    );
    var showCoffee = document.querySelectorAll("div.coffeeitem");
    hideOthers5.forEach((el) => el.classList.remove("show"));
    hideOthers5.forEach((el) => el.classList.add("hide"));
    showCoffee.forEach((el) => el.classList.add("show"));
    showCoffee.forEach((el) => el.classList.remove("hide"));
  }
  const history = useHistory();
  return (
    <div className="lp-menu">
      <div className="menu-lists">
        <button
          onClick={() => {
            sortPasta();
          }}
          className="filter-button pasta"
        >
          Pasta
        </button>
        <button
          onClick={() => {
            sortFish();
          }}
          className="filter-button fish"
        >
          Fish
        </button>
        <button
          onClick={() => {
            sortPizza();
          }}
          className="filter-button pizza"
        >
          Pizza
        </button>
        <button
          onClick={() => {
            sortWine();
          }}
          className="filter-button wine"
        >
          Wine
        </button>
        <button
          onClick={() => {
            sortCoffee();
          }}
          className="filter-button coffee"
        >
          Coffee
        </button>
      </div>
      <div className="menu-items">
        <div className="menu-item">
          <div className="pastaitem">
            <div className="menu-item-img">
              <a href="#!">
                <img src={pasta1} alt="pasta" />
              </a>
            </div>
            <div className="menu-item-content">
              <a href="#!" className="menu-item-title">
                Penne Pasta
              </a>
              <p className="menu-item-ingredients">
                Wheat pasta, mushrooms, cream, oregeno and butter
              </p>
              <p className="menu-item-price">$23.00</p>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="pastaitem">
            <div className="menu-item-img">
              <a href="#!">
                <img src={pasta2} alt="pasta" />
              </a>
            </div>
            <div className="menu-item-content">
              <a href="#!" className="menu-item-title">
                Penne Pasta
              </a>
              <p className="menu-item-ingredients">
                Wheat pasta, mushrooms, cream, oregeno and butter
              </p>
              <p className="menu-item-price">$23.00</p>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="pastaitem">
            <div className="menu-item-img">
              <a href="#!">
                <img src={pasta3} alt="pasta" />
              </a>
            </div>
            <div className="menu-item-content">
              <a href="#!" className="menu-item-title">
                Penne Pasta
              </a>
              <p className="menu-item-ingredients">
                Wheat pasta, mushrooms, cream, oregeno and butter
              </p>
              <p className="menu-item-price">$23.00</p>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="pastaitem">
            <div className="menu-item-img">
              <a href="#!">
                <img src={pasta4} alt="pasta" />
              </a>
            </div>
            <div className="menu-item-content">
              <a href="#!" className="menu-item-title">
                Penne Pasta
              </a>
              <p className="menu-item-ingredients">
                Wheat pasta, mushrooms, cream, oregeno and butter
              </p>
              <p className="menu-item-price">$23.00</p>
            </div>
          </div>
        </div>
        {/* fish */}
        <div className="menu-item">
          <div className="fishitem">
            <div className="menu-item-img">
              <a href="#!">
                <img src={fish1} alt="pasta" />
              </a>
            </div>
            <div className="menu-item-content">
              <a href="#!" className="menu-item-title">
                Penne Pasta
              </a>
              <p className="menu-item-ingredients">
                Wheat pasta, mushrooms, cream, oregeno and butter
              </p>
              <p className="menu-item-price">$23.00</p>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="fishitem">
            <div className="menu-item-img">
              <a href="#!">
                <img src={fish2} alt="pasta" />
              </a>
            </div>
            <div className="menu-item-content">
              <a href="#!" className="menu-item-title">
                Penne Pasta
              </a>
              <p className="menu-item-ingredients">
                Wheat pasta, mushrooms, cream, oregeno and butter
              </p>
              <p className="menu-item-price">$23.00</p>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="fishitem">
            <div className="menu-item-img">
              <a href="#!">
                <img src={fish3} alt="pasta" />
              </a>
            </div>
            <div className="menu-item-content">
              <a href="#!" className="menu-item-title">
                Penne Pasta
              </a>
              <p className="menu-item-ingredients">
                Wheat pasta, mushrooms, cream, oregeno and butter
              </p>
              <p className="menu-item-price">$23.00</p>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="fishitem">
            <div className="menu-item-img">
              <a href="#!">
                <img src={fish4} alt="pasta" />
              </a>
            </div>
            <div className="menu-item-content">
              <a href="#!" className="menu-item-title">
                Penne Pasta
              </a>
              <p className="menu-item-ingredients">
                Wheat pasta, mushrooms, cream, oregeno and butter
              </p>
              <p className="menu-item-price">$23.00</p>
            </div>
          </div>
        </div>
        {/* pizza */}
        <div className="menu-item">
          <div className="pizzaitem">
            <div className="menu-item-img">
              <a href="#!">
                <img src={pizza1} alt="pasta" />
              </a>
            </div>
            <div className="menu-item-content">
              <a href="#!" className="menu-item-title">
                Penne Pasta
              </a>
              <p className="menu-item-ingredients">
                Wheat pasta, mushrooms, cream, oregeno and butter
              </p>
              <p className="menu-item-price">$23.00</p>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="pizzaitem">
            <div className="menu-item-img">
              <a href="#!">
                <img src={pizza2} alt="pasta" />
              </a>
            </div>
            <div className="menu-item-content">
              <a href="#!" className="menu-item-title">
                Penne Pasta
              </a>
              <p className="menu-item-ingredients">
                Wheat pasta, mushrooms, cream, oregeno and butter
              </p>
              <p className="menu-item-price">$23.00</p>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="pizzaitem">
            <div className="menu-item-img">
              <a href="#!">
                <img src={pizza3} alt="pasta" />
              </a>
            </div>
            <div className="menu-item-content">
              <a href="#!" className="menu-item-title">
                Penne Pasta
              </a>
              <p className="menu-item-ingredients">
                Wheat pasta, mushrooms, cream, oregeno and butter
              </p>
              <p className="menu-item-price">$23.00</p>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="pizzaitem">
            <div className="menu-item-img">
              <a href="#!">
                <img src={pizza4} alt="pasta" />
              </a>
            </div>
            <div className="menu-item-content">
              <a href="#!" className="menu-item-title">
                Penne Pasta
              </a>
              <p className="menu-item-ingredients">
                Wheat pasta, mushrooms, cream, oregeno and butter
              </p>
              <p className="menu-item-price">$23.00</p>
            </div>
          </div>
        </div>
        {/* wine */}
        <div className="menu-item">
          <div className="wineitem">
            <div className="menu-item-img">
              <a href="#!">
                <img src={wine1} alt="pasta" />
              </a>
            </div>
            <div className="menu-item-content">
              <a href="#!" className="menu-item-title">
                Penne Pasta
              </a>
              <p className="menu-item-ingredients">
                Wheat pasta, mushrooms, cream, oregeno and butter
              </p>
              <p className="menu-item-price">$23.00</p>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="wineitem">
            <div className="menu-item-img">
              <a href="#!">
                <img src={wine1} alt="pasta" />
              </a>
            </div>
            <div className="menu-item-content">
              <a href="#!" className="menu-item-title">
                Penne Pasta
              </a>
              <p className="menu-item-ingredients">
                Wheat pasta, mushrooms, cream, oregeno and butter
              </p>
              <p className="menu-item-price">$23.00</p>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="wineitem">
            <div className="menu-item-img">
              <a href="#!">
                <img src={wine1} alt="pasta" />
              </a>
            </div>
            <div className="menu-item-content">
              <a href="#!" className="menu-item-title">
                Penne Pasta
              </a>
              <p className="menu-item-ingredients">
                Wheat pasta, mushrooms, cream, oregeno and butter
              </p>
              <p className="menu-item-price">$23.00</p>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="wineitem">
            <div className="menu-item-img">
              <a href="#!">
                <img src={wine1} alt="pasta" />
              </a>
            </div>
            <div className="menu-item-content">
              <a href="#!" className="menu-item-title">
                Penne Pasta
              </a>
              <p className="menu-item-ingredients">
                Wheat pasta, mushrooms, cream, oregeno and butter
              </p>
              <p className="menu-item-price">$23.00</p>
            </div>
          </div>
        </div>
        {/* coffee */}
        <div className="menu-item">
          <div className="coffeeitem">
            <div className="menu-item-img">
              <a href="#!">
                <img src={coffee1} alt="pasta" />
              </a>
            </div>
            <div className="menu-item-content">
              <a href="#!" className="menu-item-title">
                Penne Pasta
              </a>
              <p className="menu-item-ingredients">
                Wheat pasta, mushrooms, cream, oregeno and butter
              </p>
              <p className="menu-item-price">$23.00</p>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="coffeeitem">
            <div className="menu-item-img">
              <a href="#!">
                <img src={coffee1} alt="pasta" />
              </a>
            </div>
            <div className="menu-item-content">
              <a href="#!" className="menu-item-title">
                Penne Pasta
              </a>
              <p className="menu-item-ingredients">
                Wheat pasta, mushrooms, cream, oregeno and butter
              </p>
              <p className="menu-item-price">$23.00</p>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="coffeeitem">
            <div className="menu-item-img">
              <a href="#!">
                <img src={coffee1} alt="pasta" />
              </a>
            </div>
            <div className="menu-item-content">
              <a href="#!" className="menu-item-title">
                Penne Pasta
              </a>
              <p className="menu-item-ingredients">
                Wheat pasta, mushrooms, cream, oregeno and butter
              </p>
              <p className="menu-item-price">$23.00</p>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="coffeeitem">
            <div className="menu-item-img">
              <a href="#!">
                <img src={coffee1} alt="pasta" />
              </a>
            </div>
            <div className="menu-item-content">
              <a href="#!" className="menu-item-title">
                Penne Pasta
              </a>
              <p className="menu-item-ingredients">
                Wheat pasta, mushrooms, cream, oregeno and butter
              </p>
              <p className="menu-item-price">$23.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LPMenu;
