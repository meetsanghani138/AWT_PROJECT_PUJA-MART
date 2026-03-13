import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";
import "../css/Products.css";

function Products() {

  const products = [
    { id: 1, name: "Brass Diya", price: 120, stock: 30 },
    { id: 2, name: "Incense Sticks", price: 60, stock: 50 },
    { id: 3, name: "Puja Thali", price: 250, stock: 10 },
    { id: 4, name: "Camphor", price: 40, stock: 70 }
  ];

  return (
    <div className="admin-container">

      <AdminSidebar />

      <div className="admin-main">

        <AdminNavbar />

        <div className="products-page">

          <h2>Products</h2>

          <input
            type="text"
            placeholder="Search product..."
            className="product-search"
          />

          <table className="products-table">

            <thead>
              <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {products.map((product) => (
                <tr key={product.id}>

                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>₹{product.price}</td>
                  <td>{product.stock}</td>

                  <td>
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
}

export default Products;