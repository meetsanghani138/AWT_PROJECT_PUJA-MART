import React from "react";
import { Routes, Route } from "react-router-dom";

import AdminLogin from "../pages/AdminLogin";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import AddProduct from "../pages/AddProduct";
import Orders from "../pages/Orders";
import Users from "../pages/Users";

const AdminRoutes = () => {
  return (
    <Routes>

      <Route path="/admin/login" element={<AdminLogin />} />

      <Route path="/admin/pages/dashboard" element={<Dashboard />} />

      <Route path="/admin/products" element={<Products />} />

      <Route path="/admin/add-product" element={<AddProduct />} />

      <Route path="/admin/orders" element={<Orders />} />

      <Route path="/admin/users" element={<Users />} />

    </Routes>
  );
};

export default AdminRoutes;