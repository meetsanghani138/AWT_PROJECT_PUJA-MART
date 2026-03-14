import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/Pandit.css";

import ramesh from "../assets/images/rameshpandit.png";
import mahesh from "../assets/images/maheshjoshi.png";
import harish from "../assets/images/harish.png";

function Pandit() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pandit-hero">
        <h1>Book Experienced Pandits</h1>
        <p>Perform your rituals with authentic Vedic traditions.</p>
        <button className="book-btn">Book Now</button>
      </section>

      {/* Pandit Cards */}
     <section className="pandit-section">
<h2 className="section-title">Our Pandits</h2>

<div className="pandit-grid">

<div className="pandit-card">

<img src={ramesh} alt="Pandit Ramesh Sharma" className="pandit-img" />

<h3>Pandit Ramesh Sharma</h3>
<p>Experience: 15 Years</p>
<p>Speciality: Satyanarayan Katha</p>

<button>Book Pandit</button>

</div>

<div className="pandit-card">

<img src={mahesh} alt="Pandit Mahesh Joshi" className="pandit-img" />

<h3>Pandit Mahesh Joshi</h3>
<p>Experience: 12 Years</p>
<p>Speciality: Navgraha Puja</p>

<button>Book Pandit</button>

</div>

<div className="pandit-card">

<img src={harish} alt="Pandit Harish Bhatt" className="pandit-img" />

<h3>Pandit Harish Bhatt</h3>
<p>Experience: 10 Years</p>
<p>Speciality: Rudrabhishek</p>

<button>Book Pandit</button>

</div>

</div>
</section>

      {/* Puja Services */}
      <section className="puja-services">
        <h2 className="section-title">Popular Puja Services</h2>

        <div className="services-grid">
          <div className="service-card">Griha Pravesh Puja</div>
          <div className="service-card">Satyanarayan Katha</div>
          <div className="service-card">Rudrabhishek</div>
          <div className="service-card">Vivah Puja</div>
          <div className="service-card">Navgraha Shanti</div>
          <div className="service-card">Lakshmi Puja</div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="booking-section">
        <h2>Book a Pandit</h2>

        <form className="booking-form">
          <input type="text" placeholder="Your Name" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="text" placeholder="City" required />
          <input type="date" required />

          <select>
            <option>Select Puja Type</option>
            <option>Griha Pravesh</option>
            <option>Satyanarayan Katha</option>
            <option>Rudrabhishek</option>
            <option>Vivah Puja</option>
          </select>

          <textarea placeholder="Address"></textarea>

          <button type="submit">Confirm Booking</button>
        </form>
      </section>

      <Footer />
    </>
  );
}

export default Pandit;