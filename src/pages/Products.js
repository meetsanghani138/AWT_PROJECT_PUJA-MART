import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../css/Products.css";

const Products = () => {

const products = [
{
id:1,
name:"Lord Ganesha Murti",
price:599,
category:"murti",
rating:4.5,
offer:"10% OFF",
image:"https://m.media-amazon.com/images/I/71m2F4JYxIL._AC_UF1000,1000_QL80_.jpg"
},
{
id:2,
name:"Krishna Idol",
price:799,
category:"murti",
rating:4.7,
offer:"15% OFF",
image:"https://m.media-amazon.com/images/I/71tqS3R+FJL._AC_UF1000,1000_QL80_.jpg"
},
{
id:3,
name:"Brass Puja Thali",
price:499,
category:"thali",
rating:4.4,
offer:"20% OFF",
image:"https://m.media-amazon.com/images/I/71vN9nK9v+L._AC_UF1000,1000_QL80_.jpg"
},
{
id:4,
name:"Decorative Puja Thali",
price:399,
category:"thali",
rating:4.2,
offer:"10% OFF",
image:"https://m.media-amazon.com/images/I/71yI4zYtEAL._AC_UF1000,1000_QL80_.jpg"
},
{
id:5,
name:"Brass Diya",
price:199,
category:"diya",
rating:4.6,
offer:"5% OFF",
image:"https://m.media-amazon.com/images/I/71xjzJf7JDL._AC_UF1000,1000_QL80_.jpg"
},
{
id:6,
name:"Agarbatti Pack",
price:99,
category:"agarbatti",
rating:4.3,
offer:"10% OFF",
image:"https://m.media-amazon.com/images/I/81C3U2Pz0VL._AC_UF1000,1000_QL80_.jpg"
}
];

const [category,setCategory] = useState("all");
const [search,setSearch] = useState("");
const [wishlist,setWishlist] = useState([]);

const addToWishlist = (id) => {
if(wishlist.includes(id)){
setWishlist(wishlist.filter(item => item !== id));
}else{
setWishlist([...wishlist,id]);
}
};

const filteredProducts = products
.filter(item => category === "all" || item.category === category)
.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

return (

<>
<Navbar/>

<div className="products-page">

<h1 className="products-title">🛍️ PujaMart Products</h1>

{/* Search Bar */}

<div className="search-box">
<input
type="text"
placeholder="Search puja items..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>
</div>

{/* Category Filter */}

<div className="category-filter">

<button onClick={()=>setCategory("all")}>All</button>
<button onClick={()=>setCategory("murti")}>God Murtis</button>
<button onClick={()=>setCategory("thali")}>Puja Thali</button>
<button onClick={()=>setCategory("diya")}>Diyas</button>
<button onClick={()=>setCategory("agarbatti")}>Agarbatti</button>

</div>

{/* Products */}

<div className="products-grid">

{filteredProducts.map((item)=>(
<div key={item.id} className="product-card">

<span className="offer-badge">{item.offer}</span>

<img src={item.image} alt={item.name}/>

<h3>{item.name}</h3>

<p className="rating">⭐ {item.rating}</p>

<p className="price">₹{item.price}</p>

<div className="product-buttons">

<button className="cart-btn">Add to Cart</button>

<button
className="wish-btn"
onClick={()=>addToWishlist(item.id)}
>
{wishlist.includes(item.id) ? "❤️" : "🤍"}
</button>

</div>

</div>
))}

</div>

</div>

</>

);

};

export default Products;