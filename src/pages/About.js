import React from "react";
import "../css/About.css"; // optional if you have styling

function About() {
  return (
    <section id="about" className="about">

      <h2 className="about-title">About Us</h2>

      <div className="about-container">

        {/* Image */}
        <div className="about-image">
          <img 
            src="https://pujasamagrionline.in/wp-content/uploads/2020/11/diwali-rangoli-RAFUHGW.png" 
            alt="Puja Samagri"
          />
        </div>

        {/* Text */}
        <div className="about-text">

          <h3>Namaste!</h3>

          <p>
            Welcome to the world of <strong>Puja Samagri Online</strong>.
          </p>

          <p>
            Puja Samagri Online is a venture by <strong>Mr. Meet Sanghani</strong> and 
            <strong> Mr. Nikhil Bhanderi</strong> aimed at a retirement business plan 
            of sorts, which flourished into becoming one of the pioneer names in the 
            Indian devotional sphere.
          </p>

          <p>
            We specialize in providing daily pooja essentials like oil wicks, desi ghee 
            wicks, diyas, incense sticks, and other spiritual products to homes across 
            the nation.
          </p>

          <p>
            Currently, the operations are handled by <strong>Nikhil Bhanderi</strong>, keeping 
            everything within the family to maintain the purity, authenticity, and safe 
            delivery of every product.
          </p>

          <p>
            With hundreds of satisfied customers every month, we continue to grow while 
            staying rooted in devotion and tradition.
          </p>

        </div>

      </div>

    </section>
  );
}

export default About;