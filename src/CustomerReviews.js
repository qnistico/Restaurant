import React from 'react';
import Slider from 'react-slick';
import "./Sass/CustomerReviews.scss";

function CustomerReviews() {
    var settings = {
        accessibility: true,
        dots: true,
        arrows: true,
        infinite: true,
        speed: 618,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
      };
    return (
        <div className="customer-reviews">
            <Slider>
                <div className="customer-reviews-item">
                    <h2>Customer Reviews</h2>
                    <h3>John Scorzetti</h3>
                    <p>"Lorem Ipsum"</p>
                </div>
            </Slider>
        </div>
    )
}

export default CustomerReviews
