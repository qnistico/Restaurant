import React from "react";
import "./Sass/ContactPage.scss";
import { ParallaxProvider } from "react-scroll-parallax";
import Parallax1 from "./Parallax1";
import PagesHero from "./PagesHero";
import contactbg from "./img/contactbg.jpg";
import { Helmet } from "react-helmet";
function ContactPage(props) {
    
  return (
    <div>
      <Helmet>
        <title>Contact Us - Avellino's Italian Cuisine</title>
        <meta name="description" content="Contact Avellino's Italian Cuisine" />  
      </Helmet>
    <div className="contact-page">
        <PagesHero phimg={contactbg} phheader="Contact Us" />
        <div className="contact-page-content">
      <div className="contact-page-top">
        <h2>Have something to tell us? We would love to hear from you!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <form>
          <div className="form-group-flex">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            aria-label="name"
            aria-required="true"
            placeholder="Name"
          />
        </div>
        <div className="form-group fg1">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            aria-label="email"
            aria-required="true"
            placeholder="Email"
          />
        </div>
        <div className="form-group fg2">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            aria-label="phone"
            aria-required="true"
            placeholder="Phone"
          />
        </div>
        </div>

        <div className="form-group fg-textarea">
              <label htmlFor="message">Your Message</label>
              <textarea
                type="text"
                name="message"
                aria-label="message"
                aria-required="true"
                placeholder="Message"
              />
              </div>
              <button className="send-button">Send</button>
      </form>
      </div>
    </div>
    </div>
  );
}

export default ContactPage;
