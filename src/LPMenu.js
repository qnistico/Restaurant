import React, { useState } from "react";
import "./Sass/LPMenu.scss";
import coffee1 from "./img/coffee.jpg";
import pasta1 from "./img/pasta.jpg";
import pizza1 from "./img/margaritapizza.jpg";
import wine1 from "./img/wine1.jpg";
import fish1 from "./img/fish1.jpg";
import { useHistory } from "react-router-dom";

function LPMenu(props) {
  var tabs = document.querySelectorAll(".menu-lists button");
  var pasta = document.querySelectorAll(".pastaitem");
  var fish = document.querySelectorAll(".fishitem");
  var pizza = document.querySelectorAll(".pizzaitem");
  var wine = document.querySelectorAll(".wineitem");
  var coffee = document.querySelectorAll(".coffeeitem");
  var all = document.querySelectorAll(".menu-item");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      console.log("clicked");
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      tab.classList.add("active");

      var tabvalue = tab.getAttribute("data-tabs");
      
      all.forEach((item) => {
        item.style.display = "none";
      })

      if (tabvalue == "pasta") {
        pasta.forEach((pasta) => {
          pasta.style.display = "flex";
        });
      } else if (tabvalue == "fish") {
        fish.forEach((fish) => {
          fish.style.display = "flex";
        });
      } else if (tabvalue == "pizza") {
        pizza.forEach((pizza) => {
          pizza.style.display = "flex";
        });
      } else if (tabvalue == "wine") {
        wine.forEach((wine) => {
          wine.style.display = "flex";
        });
      } else if (tabvalue == "coffee") {
        coffee.forEach((coffee) => {
          coffee.style.display = "flex";
        });
      }
    });
  });
  const history = useHistory();
  return (
    <div className="lp-menu">
      <div className="menu-lists">
          <button data-tabs="pasta" className="active">
            Pasta
          </button>
          <button data-tabs="fish">Fish</button>
          <button data-tabs="pizza">Pizza</button>
          <button data-tabs="wine">Wine</button>
          <button data-tabs="coffee">Coffee</button>
      </div>
      <div className="menu-items">
        <div className="menu-item pastaitem">
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
        <div className="menu-item pastaitem">
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
        <div className="menu-item pastaitem">
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
        <div className="menu-item pastaitem">
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
        {/* fish */}
        <div className="menu-item fishitem">
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
        <div className="menu-item fishitem">
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
        <div className="menu-item fishitem">
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
        <div className="menu-item fishitem">
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
        {/* pizza */}
        <div className="menu-item pizzaitem">
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
        <div className="menu-item pizzaitem">
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
        <div className="menu-item pizzaitem">
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
        <div className="menu-item pizzaitem">
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
        {/* wine */}
        <div className="menu-item wineitem">
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
        <div className="menu-item wineitem">
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
        <div className="menu-item wineitem">
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
        <div className="menu-item wineitem">
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
        {/* coffee */}
        <div className="menu-item coffeeitem">
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
        <div className="menu-item coffeeitem">
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
        <div className="menu-item coffeeitem">
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
        <div className="menu-item coffeeitem">
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
  );
}

export default LPMenu;
