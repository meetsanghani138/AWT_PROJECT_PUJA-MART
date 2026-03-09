import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/ProductDetail.css";

function ProductDetail() {

const [quantity, setQuantity] = useState(1);

const increaseQty = () => {
setQuantity(quantity + 1);
};

const decreaseQty = () => {
if(quantity > 1){
setQuantity(quantity - 1);
}
};

const relatedProducts = [
{
name: "Brass Diya",
price: "₹199",
image: "https://m.media-amazon.com/images/I/61Gk4SRrPED._AC_UL320_.jpg"
},
{
name: "Rudraksha Mala",
price: "₹299",
image: "https://m.media-amazon.com/images/I/61jL2bS8z-L._AC_UL320_.jpg"
},
{
name: "Puja Thali",
price: "₹599",
image: "https://m.media-amazon.com/images/I/71s5k4z9GQL._AC_UL320_.jpg"
}
];

return (
<>
<Navbar />

<div className="product-detail-container">

{/* Product Section */}
<div className="product-main">

<div className="product-image">
<img
src="https://m.media-amazon.com/images/I/71YJY6P+gPL._AC_UL320_.jpg"
alt="Ganesh Idol"
/>
</div>

<div className="product-info">

<h2>Ganesh Idol (Brass)</h2>

<p className="rating">⭐⭐⭐⭐☆ 4.5</p>

<p className="price">₹499</p>

<p className="description">
Beautiful handcrafted brass Ganesh idol perfect for home temple
and puja rituals.
</p>

{/* Quantity */}
<div className="quantity">
<button onClick={decreaseQty}>-</button>
<span>{quantity}</span>
<button onClick={increaseQty}>+</button>
</div>

{/* Buttons */}
<div className="buttons">
<button className="cart-btn">🛒 Add to Cart</button>
<button className="wish-btn">❤️ Wishlist</button>
</div>

</div>

</div>

{/* Product Details */}
<div className="product-extra">

<h3>Product Details</h3>

<ul>
<li>Material: Brass</li>
<li>Height: 6 inches</li>
<li>Weight: 300g</li>
<li>Usage: Home temple / puja rituals</li>
</ul>

</div>

{/* Related Products */}
<div className="related-products">

<h3>Related Products</h3>

<div className="related-grid">

{relatedProducts.map((product, index) => (

<div className="related-card" key={index}>

<img src={product.image} alt={product.name} />

<h4>{product.name}</h4>

<p>{product.price}</p>

<button>Add to Cart</button>

</div>

))}

</div>

</div>

</div>

<Footer />
</>
);
}

export default ProductDetail;