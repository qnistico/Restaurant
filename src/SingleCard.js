import React from 'react';
import aboutimg1 from "./img/aboutimg1.jpg";
import aboutsidebarimg from "./img/aboutsidebarimg.jpg";
import margaritapizza from "./img/margaritapizza.jpg";
import "./Sass/SingleCard.scss";

function SingleCard(props) {
    return (
        <div className="single-card">
            <div className="single-card-body">
                <div className="single-card-img">
            <img src={props.scimg} alt="" />
            </div>
            <div className="single-card-content">
            <p className="single-card-title">
                {props.sctitle}
            </p>
            <p className="single-card-description">
                {props.scdescription}
            </p>
            <p className="single-card-ingredients">
                <span>Ingredients:</span> {props.scingredients}
            </p>
            <p className="single-card-allergies">
                <span>Allergen Info:</span> {props.scallergies}
            </p>
            <div className="single-card-bottom">
                <p className="single-card-price">{props.scprice}</p>
            <button className="single-card-button">View Menu</button>
            </div>
            </div>


            </div>
        </div>
    )
}

export default SingleCard
