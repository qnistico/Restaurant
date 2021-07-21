import React from 'react';
import "./Sass/ContactUs.scss";

function ContactUs() {
    return (
        <div className="contact-us">
            <div className="contact-us-flex">
            <div className="contact-left">
                <div className="contact-left-flex">
<h2>Make A Reservation</h2>
<p>Fill out this form to make a reservation with us on your preferred date & time.</p>
                </div>
            </div>
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" aria-label="name" aria-required="true" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" aria-label="email" aria-required="true" placeholder="Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone" aria-label="phone" aria-required="true" placeholder="Phone" />
                </div>
                <div className="form-group">
                    <label htmlFor="time">Preferred Time</label>
                    <input type="time" name="time" aria-label="time" aria-required="true" placeholder="Preferred Time" />
                </div>
            </form>
            </div>
        </div>
    )
}

export default ContactUs
