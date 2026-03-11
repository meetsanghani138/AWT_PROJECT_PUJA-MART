import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";
import StatsCard from "../components/StatsCard";
import "../css/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="admin-container">

      <AdminSidebar />

      <div className="admin-main">

        <AdminNavbar />

        <div className="dashboard-content">

          <h1>Admin Dashboard</h1>

          <div className="stats-container">

            <StatsCard
              title="Total Products"
              value="120"
              icon="📦"
            />

            <StatsCard
              title="Orders"
              value="350"
              icon="🛒"
            />

            <StatsCard
              title="Users"
              value="210"
              icon="👥"
            />

            <StatsCard
              title="Revenue"
              value="₹1,25,000"
              icon="💰"
            />

          </div>

          <div className="recent-orders">

            <h2>Recent Orders</h2>

            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Product</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>#101</td>
                  <td>Rahul</td>
                  <td>Puja Thali</td>
                  <td>₹800</td>
                  <td>Delivered</td>
                </tr>

                <tr>
                  <td>#102</td>
                  <td>Priya</td>
                  <td>Ganesh Murti</td>
                  <td>₹1500</td>
                  <td>Pending</td>
                </tr>

              </tbody>
            </table>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;