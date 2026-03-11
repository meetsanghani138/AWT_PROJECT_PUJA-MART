import React, { useState } from "react";
import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";
import "../css/AddProduct.css";

const AddProduct = () => {

  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    image: "",
    description: ""
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Product Added:", product);

    alert("Product Added Successfully 🪔");

    setProduct({
      name: "",
      category: "",
      price: "",
      stock: "",
      image: "",
      description: ""
    });
  };

  return (
    <div className="admin-container">

      <AdminSidebar />

      <div className="admin-main">

        <AdminNavbar />

        <div className="add-product-container">

          <h2>Add New Product</h2>

          <form onSubmit={handleSubmit} className="product-form">

            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={product.name}
              onChange={handleChange}
              required
            />

            <select
              name="category"
              value={product.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="Puja Items">Puja Items</option>
              <option value="God Murti">God Murti</option>
              <option value="Puja Thali">Puja Thali</option>
              <option value="Rudraksha">Rudraksha</option>
            </select>

            <input
              type="number"
              name="price"
              placeholder="Price"
              value={product.price}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="stock"
              placeholder="Stock Quantity"
              value={product.stock}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={product.image}
              onChange={handleChange}
            />

            <textarea
              name="description"
              placeholder="Product Description"
              value={product.description}
              onChange={handleChange}
            />

            <button type="submit">
              Add Product
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default AddProduct;