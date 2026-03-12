import React, { useState } from "react";
import "../css/users.css";

const Users = () => {

  const [search, setSearch] = useState("");

  const usersData = [
    {
      id: 1,
      name: "Meet Sanghani",
      email: "meet@gmail.com",
      phone: "9876543210",
      role: "Customer",
      status: "Active",
    },
    {
      id: 2,
      name: "Rahul Patel",
      email: "rahul@gmail.com",
      phone: "9876543211",
      role: "Customer",
      status: "Blocked",
    },
    {
      id: 3,
      name: "Priya Shah",
      email: "priya@gmail.com",
      phone: "9876543212",
      role: "Customer",
      status: "Active",
    },
  ];

  const filteredUsers = usersData.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="users-container">

      <h1 className="users-title">Users Management</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search user..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Users Table */}
      <table className="users-table">

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>

              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.role}</td>

              <td>
                <span
                  className={
                    user.status === "Active"
                      ? "status active"
                      : "status blocked"
                  }
                >
                  {user.status}
                </span>
              </td>

              <td>
                <button className="btn edit">Edit</button>
                <button className="btn delete">Delete</button>
              </td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
};

export default Users;