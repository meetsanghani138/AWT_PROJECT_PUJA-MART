import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";
import "../css/Dashboard.css";

const Products = () => {
  return (
    <div className="admin-container">

      <AdminSidebar />

      <div className="admin-main">

        <AdminNavbar />

        <div className="dashboard-content">

          <h1>Products</h1>

          <div className="product-header">

            <input
              type="text"
              placeholder="Search Product..."
              className="search-box"
            />

            <button className="add-btn">
              ➕ Add Product
            </button>

          </div>

          <table className="product-table">

            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>🛕</td>
                <td>Ganesh Murti</td>
                <td>God Murti</td>
                <td>₹1500</td>
                <td>10</td>
                <td>
                  ✏ Edit | 🗑 Delete
                </td>
              </tr>

              <tr>
                <td>🪔</td>
                <td>Puja Thali</td>
                <td>Puja Items</td>
                <td>₹800</td>
                <td>5</td>
                <td>
                  ✏ Edit | 🗑 Delete
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default Products;