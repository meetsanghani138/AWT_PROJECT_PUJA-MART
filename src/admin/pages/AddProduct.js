import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";
import "../css/AddProduct.css";

function AddProduct() {

  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
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
    console.log(product);
    alert("Product Added Successfully!");
  };

  return (
    <div className="admin-container">

      <AdminSidebar />

      <div className="admin-main">

        <AdminNavbar />

        <div className="add-product">

          <h2>Add New Product</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Product Name"
              onChange={handleChange}
              required
            />

            <select name="category" onChange={handleChange} required>

              <option value="">Select Category</option>
              <option value="diyas">Diyas</option>
              <option value="incense">Incense</option>
              <option value="puja-kit">Puja Kit</option>
              <option value="idols">Idols</option>

            </select>

            <input
              type="number"
              name="price"
              placeholder="Price"
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="stock"
              placeholder="Stock Quantity"
              onChange={handleChange}
              required
            />

            <input type="file" />

            <textarea
              name="description"
              placeholder="Product Description"
              onChange={handleChange}
            ></textarea>

            <button type="submit">Add Product</button>

          </form>

        </div>

      </div>
    </div>
  );
}

export default AddProduct;