import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminPage.css";
import { FaSearch, FaFilter } from "react-icons/fa";
import Navbar1 from "../Navbar/Navbar1";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("");

  // Fetch users from backend

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/new-users/getallUser"
      ); // Replace with actual API endpoint
      setUsers(response.data.User);
      console.log(response.data.User);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const handleRoleChange = async (userId, newRole) => {
    try {
      await axios.patch(
        `http://localhost:4000/new-users/updateUser/${userId}`,
        { role: newRole }
      );
      setUsers(
        users.map((user) =>
          user.id === userId ? { ...user, role: newRole } : user
        )
      );
      await fetchUsers();
    } catch (error) {
      console.error("Error updating role:", error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:4000/new-users/${userId}`);
      setUsers(users.filter((user) => user.id !== userId));
      await fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Search and filter
  const filteredUsers = users.filter(
    (user) =>
      (user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filterRole === "" || user.role === filterRole)
  );

 

  return (
    <div><Navbar1/>
    <div className="user-management">
      
      <h2 className="userManagement-h2">User Management</h2>

      <div className="search-filter">
        <div className="search-input">
          <input
            type="text"
            placeholder="Search by name or email"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="search-icon" />
        </div>
        <select
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)}
        >
          <option value="">All Roles</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>
      {loading ? (
                    <div>Loading Users...</div>
                ) : (
      <div className="table-align">
        <table className="user-table">
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Role</th>
              <th>Username</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>
                  <select
                    value={user.role}
                    onChange={(e) => handleRoleChange(user._id, e.target.value)}
                  >
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </select>
                </td>
                <td>{user.username}</td>

                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteUser(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      )}
    </div>
    </div>
  );
};

export default UserManagement;
