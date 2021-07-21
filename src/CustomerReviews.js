import React from "react";
import Slider from "react-slick";
import "./Sass/CustomerReviews.scss";
import reviewportrait1 from "./img/reviewportrait1.jpg";
import reviewsimg from "./img/reviewsimg.jpg";
import { Parallax } from "react-parallax";

function CustomerReviews() {
  var settings = {
    accessibility: true,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 618,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  const ParallaxContainer = () => (
    
      
    <Parallax
      bgImage={reviewsimg}
      bgImageAlt="people eating in a restaurant"
      strength={300}
    >
            <div className="parallax-overlay-gradient"></div>


<Slider {...settings}>
  <div className="customer-reviews-item">
        <h2>Customer Reviews</h2>

    <p>
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      "
    </p>
    <div className="customer-reviews-bottom">
      <h3>- John Scorzetti</h3>
      <img src={reviewportrait1} alt="woman" className="customer-reviews-img"/>
    </div>
  </div>
  <div className="customer-reviews-item">
        <h2>Customer Reviews</h2>

    <p>
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      "
    </p>
    <div className="customer-reviews-bottom">
      <h3>- John Scorzetti</h3>
      <img src={reviewportrait1} alt="man" className="customer-reviews-img"/>
    </div>
  </div>
  <div className="customer-reviews-item">
        <h2>Customer Reviews</h2>

    <p>
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      "
    </p>
    <div className="customer-reviews-bottom">
      <h3>- John Scorzetti</h3>
      <img src={reviewportrait1} alt="woman" className="customer-reviews-img"/>
    </div>
  </div>
</Slider>
</Parallax>
    
  );
  return (
    <div className="customer-reviews">
      {ParallaxContainer()}
      
    </div>
  );
}

export default CustomerReviews;
