import React from "react";
import Navbar from "../components/Navbar";
import "../css/Home.css";

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

</>
);
}

export default Home;