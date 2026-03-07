import React from "react";
import Navbar from "../components/Navbar";
import "../css/Home.css";
import Footer from "../components/Footer";

function Home() {

const firstRow = [
"Ganesh Idol",
"Puja Thali",
"Agarbatti",
"Aarti Diya",
"Jap Mala"
];

const secondRow = [
"Puja Kits",
"Dresses",
"Devotional Books",
"Prashad"
];

return (
<>
<Navbar />

{/* Hero Section */}
<section className="hero">
<div className="hero-content">
<h1>Everything You Need for Daily Puja & Festivals</h1>
<p>
Discover authentic puja items, spiritual essentials, and festival
products all in one place.
</p>

<div className="hero-buttons">
<button className="shop-btn">Shop Now</button>
<button className="explore-btn">Explore Products</button>
</div>
</div>
</section>

{/* Featured Puja Items */}

<section className="featured">

<h2 className="featured-title">Featured Puja Items</h2>

{/* First Row */}
<div className="row-five">
{firstRow.map((item,index)=>(
<div className="circle-item" key={index}>
<div className="circle"></div>
<p>{item}</p>
</div>
))}
</div>

{/* Second Row */}

<div className="row-four">
{secondRow.map((item,index)=>(
<div className="circle-item" key={index}>
<div className="circle"></div>
<p>{item}</p>
</div>
))}
</div>

</section>


{/* Festival Special Section */}


<section className="festival">

<h2 className="festival-title">🎉 Festival Special Offers</h2>

<div className="festival-grid">

{[
{title:"Navratri Special Kit",offer:"🔥 20% OFF"},
{title:"Diwali Puja Combo",offer:"🔥 25% OFF"},
{title:"Ganesh Chaturthi Items",offer:"🔥 15% OFF"},
{title:"Raksha Bandhan Puja Kit",offer:"🔥 10% OFF"},
{title:"Janmashtami Puja Set",offer:"🔥 18% OFF"},
{title:"Maha Shivratri Kit",offer:"🔥 22% OFF"},
{title:"Durga Puja Essentials",offer:"🔥 20% OFF"},
{title:"Karva Chauth Puja Thali",offer:"🔥 17% OFF"},
{title:"Holi Festival Combo",offer:"🔥 12% OFF"},
].map((item,index)=>(
<div className="festival-card" key={index}>

<span className="offer-badge">{item.offer}</span>

<div className="festival-img"></div>

<h3>{item.title}</h3>

<button className="festival-btn">Shop Now</button>

</div>
))}

</div>

</section>

{/* Best Selling Products */}

<section className="bestseller">

<h2 className="bestseller-title">⭐ Best Selling Products</h2>

<div className="bestseller-grid">

{[
{name:"Brass Diya",price:"₹199"},
{name:"Ganesh Idol",price:"₹499"},
{name:"Puja Thali",price:"₹349"},
{name:"Agarbatti Pack",price:"₹99"},
{name:"Rudraksha Mala",price:"₹259"},
{name:"Camphor Pack",price:"₹79"}
].map((item,index)=>(

<div className="product-card" key={index}>

<div className="product-img"></div>

<div className="product-info">
<h3>{item.name}</h3>

<div className="rating">
⭐⭐⭐⭐☆
</div>

<p className="price">{item.price}</p>

<button className="cart-btn">Add to Cart</button>

</div>

</div>

))}

</div>

</section>


{/* Why Choose Us */}

<section className="trust">

<h2 className="trust-title">❤️ Why Choose PujaMart</h2>

<div className="trust-grid">

<div className="trust-card">
<div className="trust-icon">🚚</div>
<h3>Fast Delivery</h3>
<p>Get your puja essentials delivered quickly to your doorstep.</p>
</div>

<div className="trust-card">
<div className="trust-icon">🛕</div>
<h3>Pure & Traditional</h3>
<p>Authentic spiritual items crafted for true devotion.</p>
</div>

<div className="trust-card">
<div className="trust-icon">🔒</div>
<h3>Secure Payment</h3>
<p>Safe and trusted payment options for worry-free shopping.</p>
</div>

<div className="trust-card">
<div className="trust-icon">⭐</div>
<h3>Quality Products</h3>
<p>Premium quality puja products carefully selected.</p>
</div>

</div>

</section>





{/* About Us Section */}

<section  id="about" className="about">

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
<strong> Mr.Nikhil Bhanderi</strong> aimed at a retirement business plan 
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


{/* Modern Contact Section */}
<section id="contact" className="contact-modern">

<h2 className="contact-title">📍 Contact Us</h2>

<div className="contact-wrapper">

{/* Contact Form */}

<div className="contact-card">

<h3>Send us a Message</h3>

<form>

<input type="text" placeholder="Your Name" required />

<input type="email" placeholder="Your Email" required />

<textarea placeholder="Your Message" rows="5"></textarea>

<button type="submit">Send Message</button>

</form>

</div>

{/* Map */}

<div className="map-card">

<iframe
src="https://www.google.com/maps?q=Gandhidham,Gujarat&output=embed"
loading="lazy"
title="map"
></iframe>

</div>

</div>

</section>


{/* Customer Reviews */}

<section className="reviews">

<h2 className="reviews-title">🌸 What Our Customers Say</h2>

<div className="reviews-grid">

{[
{
name:"Priya Sharma",
review:"Amazing quality puja items. The diya and agarbatti were perfect for my home temple.",
rating:"⭐⭐⭐⭐⭐"
},
{
name:"Rahul Patel",
review:"Fast delivery and authentic products. PujaMart is now my go-to store.",
rating:"⭐⭐⭐⭐⭐"
},
{
name:"Anita Verma",
review:"Beautiful Ganesh idol and great packaging. Highly recommended!",
rating:"⭐⭐⭐⭐"
}
].map((item,index)=>(

<div className="review-card" key={index}>

<div className="review-avatar">
{item.name.charAt(0)}
</div>

<p className="review-text">“{item.review}”</p>

<div className="review-rating">{item.rating}</div>

<h4 className="review-name">{item.name}</h4>

</div>

))}

</div>

</section>


<Footer/>






</>
);
}

export default Home;