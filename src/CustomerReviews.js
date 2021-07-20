import React from "react";
import Slider from "react-slick";
import "./Sass/CustomerReviews.scss";
import reviewportrait1 from "./img/reviewportrait1.jpg"
import reviewsbgimg from "./img/reviewsbgimg.jpg"
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
  return (
    <div className="customer-reviews">
      <h2>Customer Reviews</h2>

      <Slider {...settings}>
        <div className="customer-reviews-item">
          <p>
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            "
          </p>
          <div className="customer-reviews-bottom">
          <h3>- John Scorzetti</h3>
          <img src={reviewportrait1} alt="woman" />
          </div>
        </div>
        <div className="customer-reviews-item">
          <p>
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            "
          </p>
          <div className="customer-reviews-bottom">
          <h3>- John Scorzetti</h3>
          <img src={reviewportrait1} alt="man" />
          </div>
        </div>
        <div className="customer-reviews-item">
          <p>
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            "
          </p>
          <div className="customer-reviews-bottom">
          <h3>- John Scorzetti</h3>
          <img src={reviewportrait1} alt="woman" />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default CustomerReviews;
