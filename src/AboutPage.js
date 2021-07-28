import React from "react";
import PagesHero from "./PagesHero";
import aboutimg from "./img/aboutimg.jpg";
import "./Sass/AboutPage.scss";
import herobg from "./img/herobg.jpg";
import Slider from "react-slick";
import Chefs from "./Chefs";
import { Parallax } from "react-parallax";
import aboutslideimg from "./img/aboutslideimg.jpg";
import { Fade } from "react-reveal";
import { Helmet } from "react-helmet";


function AboutPage() {
  var settings = {
    accessibility: true,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 618,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  const ParallaxContainer = () => (
    <Parallax
      bgImage={aboutslideimg}
      bgImageAlt="people eating in a restaurant"
      strength={300}
    >
      <div className="our-history">
        <div className="our-history-gradient"></div>
        <Slider className="slide" {...settings}>
          <div className="our-history-item">
            <h2>Avellino's History</h2>
            <h3>Our Beginning</h3>
            <p className="date">May 5, 2003</p>
            <p>
              Avellino's opened in 2003 when our family decided to pursue their
              dream of sharing our authentic Italian cuisine with the world.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </div>
          <div className="our-history-item">
            <h2>Avellino's History</h2>
            <h3>Lorem Ipsum</h3>
            <p className="date">June 23, 2005</p>
            <p>
              Fringilla urna porttitor rhoncus dolor purus non enim praesent
              elementum. In tellus integer feugiat scelerisque varius morbi enim
              nunc. Suscipit tellus mauris a diam maecenas sed enim.
            </p>
          </div>
          <div className="our-history-item">
          <h2>Avellino's History</h2>
            <h3>Lorem Ipsum</h3>
            <p className="date">June 23, 2005</p>
            <p>
              Fringilla urna porttitor rhoncus dolor purus non enim praesent
              elementum. In tellus integer feugiat scelerisque varius morbi enim
              nunc. Suscipit tellus mauris a diam maecenas sed enim.
            </p>
          </div>
          <div className="our-history-item">
          <h2>Avellino's History</h2>
            <h3>Lorem Ipsum</h3>
            <p className="date">June 23, 2005</p>
            <p>
              Fringilla urna porttitor rhoncus dolor purus non enim praesent
              elementum. In tellus integer feugiat scelerisque varius morbi enim
              nunc. Suscipit tellus mauris a diam maecenas sed enim.
            </p>
          </div>
          <div className="our-history-item">
          <h2>Avellino's History</h2>
            <h3>Lorem Ipsum</h3>
            <p className="date">June 23, 2005</p>
            <p>
              Fringilla urna porttitor rhoncus dolor purus non enim praesent
              elementum. In tellus integer feugiat scelerisque varius morbi enim
              nunc. Suscipit tellus mauris a diam maecenas sed enim.
            </p>
          </div>
        </Slider>
      </div>
    </Parallax>
  );

  return (
    <div>
      <Helmet>
        <title>About Avellino's - Avellino's Italian Cuisine</title>
        <meta name="description" content="Information about Avellino's" />
      </Helmet>
    <Fade duration="1210">
      <div className="about-page">
        <PagesHero phimg={herobg} phheader="About Avellino's" />
        <div className="about-page-left">
          <div className="about-page-left-content">
            <h2>About Avellino's</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Velit aliquet sagittis id consectetur purus ut faucibus pulvinar
              elementum. Vulputate odio ut enim blandit volutpat maecenas. Quis
              lectus nulla at volutpat diam ut. Quis blandit turpis cursus in
              hac habitasse platea dictumst quisque. Sed id semper risus in
              hendrerit gravida rutrum quisque non. Malesuada pellentesque elit
              eget gravida cum sociis. Sit amet risus nullam eget felis eget
              nunc.
            </p>
          </div>
        </div>
        {ParallaxContainer()}
        <Chefs />
      </div>
    </Fade>
    </div>
  );
}

export default AboutPage;
