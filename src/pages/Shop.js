import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import "../css/Shop.css";

/* Images */
import ganesh from "../assets/images/GaneshIdol.jpg";
import diya from "../assets/images/AartiDiya.jpg";
import rudraksha from "../assets/images/rudraksha-mala.jpg";
import thali from "../assets/images/PujaThali.jpg";

function Shop() {

const festivals = [
"Diwali Collection",
"Navratri Puja Items",
"Ganesh Chaturthi Special",
"Mahashivratri Items"
];

const gods = [
"Ganesh",
"Shiva",
"Lakshmi",
"Krishna",
"Durga"
];

const pujaKits = [
"Satyanarayan Puja Kit",
"Mahashivratri Puja Kit",
"Navratri Puja Kit",
"Ganesh Puja Kit"
];

/* Best Seller Products */
const products = [
{
id:1,
name:"Ganesh Idol",
price:499,
rating:4.7,
offer:"10% OFF",
image:ganesh
},
{
id:2,
name:"Brass Diya",
price:199,
rating:4.5,
offer:"5% OFF",
image:diya
},
{
id:3,
name:"Rudraksha Mala",
price:299,
rating:4.6,
offer:"12% OFF",
image:rudraksha
},
{
id:4,
name:"Puja Thali Set",
price:599,
rating:4.8,
offer:"15% OFF",
image:thali
}
];

const combos = [
"Diya + Agarbatti Combo",
"Puja Thali + Flowers Combo",
"Rudraksha Mala + Bracelet Combo"
];

return (
<>
<Navbar />

<div className="shop-container">

<h1 className="shop-title">🛍️ Shop Puja Products</h1>

{/* Search */}
<div className="search-bar">
<input type="text" placeholder="Search Puja Products..." />
</div>

{/* Festival */}
<section className="shop-section">

<h2>🪔 Shop by Festival</h2>

<div className="card-grid">
{festivals.map((item,index)=>(
<div className="shop-card" key={index}>
{item}
</div>
))}
</div>

</section>

{/* Gods */}
<section className="shop-section">

<h2>🛕 Shop by God</h2>

<div className="card-grid">
{gods.map((god,index)=>(
<div className="shop-card" key={index}>
{god}
</div>
))}
</div>

</section>

{/* Puja Kits */}
<section className="shop-section">

<h2>📦 Ready Puja Kits</h2>

<div className="card-grid">

{pujaKits.map((kit,index)=>(
<div className="shop-card kit-card" key={index}>

<h4>{kit}</h4>

<p>Agarbatti, Diya, Kumkum, Flowers, Puja Thali</p>

<button>Add to Cart</button>

</div>
))}

</div>

</section>

{/* Best Sellers */}

<section className="shop-section">

<h2>🔥 Best Sellers</h2>

<div className="products-grid">

{products.map((item)=>(
<ProductCard
key={item.id}
item={item}
wishlist={[]}
addToWishlist={()=>{}}
/>
))}

</div>

</section>

{/* Combo Offers */}

<section className="shop-section">

<h2>🎁 Combo Offers</h2>

<div className="card-grid">

{combos.map((combo,index)=>(
<div className="shop-card combo-card" key={index}>

<h4>{combo}</h4>

<p>Special Price ₹799</p>

</div>
))}

</div>

</section>

{/* Help Section */}

<section className="puja-help">

<h2>❓ Don't know what items are needed for puja?</h2>

<button>View Complete Puja Kits</button>

</section>

</div>

<Footer />
</>
);

}

export default Shop;