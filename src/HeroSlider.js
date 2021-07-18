import React from "react";
import Slider from "react-slick";
import herobg from "./img/herobg.jpg";
import pasta1 from "./img/pasta1.jpg";
import "./Sass/HeroSlider.scss";
import herobg5 from "./img/herobg5.jpg";

export default function HeroSlider() {
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
    <Slider {...settings}>
      <div>
          <img src={herobg} alt="restaurant" className="hero-slider-img" />
      </div>
      <div>
      <img src={herobg} alt="restaurant" className="hero-slider-img" />
      </div>
      <div>
      <img src={herobg} alt="restaurant" className="hero-slider-img" />
      </div>
      <div>
      <img src={herobg} alt="restaurant" className="hero-slider-img" />
      </div>
      <div>
      <img src={herobg} alt="restaurant" className="hero-slider-img" />
      </div>
      
    </Slider>
  );
}