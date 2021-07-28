import React from "react";
import "./Sass/ContactUs.scss";

function ContactUs() {
  return (
    <div className="contact-us" id="contact-us">
      <div className="contact-us-flex">
        <div className="contact-left">
          <div className="contact-left-flex">
            <h2>Make A Reservation</h2>
            <p>
              Fill out this form to make a reservation with us on your preferred
              date & time.
            </p>
            <hr />
            <div className="hours-location-flex">
                <div className="hours">
            <h3>Hours & Location</h3>
            <ul>
              <li>Monday - Friday, 3pm - 10pm</li>
              <li>Saturday, 3pm - 10pm</li>
              <li>Sunday, 3pm - 10pm</li>
            </ul>
            </div>
            <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195601.28720359915!2d-75.25811239143708!3d40.00241367555988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b7d8d4b54beb%3A0x89f514d88c3e58c1!2sPhiladelphia%2C%20PA!5e0!3m2!1sen!2sus!4v1626930573030!5m2!1sen!2sus" width="400" height="300" loading="lazy" title="googlemaps"></iframe>
            </div>
          </div>
          </div>
        </div>
        <form className="contact-form">
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
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              aria-label="email"
              aria-required="true"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              aria-label="phone"
              aria-required="true"
              placeholder="Phone"
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Preferred Time</label>
            <input
              type="time"
              name="time"
              aria-label="time"
              aria-required="true"
              placeholder="Preferred Time"
            />
          </div>
          <button type="submit" className="send-button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
