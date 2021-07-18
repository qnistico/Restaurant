import React from 'react';
import "./Sass/FoodShowcase.scss";
import pasta1 from "./img/pasta1.jpg";

function FoodShowcase() {
    return (
        <div className="food-showcase">
            <h2>Authentic Italian Cuisine</h2>
            <div className="food-showcase-flex">
            <img src={pasta1} alt="italian pasta" />
            <div className="food-showcase-content">
                <h3>Homemade Pastas</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </div>
            <div className="food-showcase-flex food-showcase-flex-reverse">
            <img src={pasta1} alt="italian pasta" />
            <div className="food-showcase-content">
                <h3>Homemade Pastas</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </div>
        </div>
    )
}

export default FoodShowcase
