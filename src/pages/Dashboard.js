// src/pages/Dashboard.js
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import UserList from "../components/UserList";
import UserCreate from "../components/UserCreate";
import UserUpdate from "../components/UserUpdate";
import UserDelete from "../components/UserDelete";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [isNewUserButtonClicked, setNewUserButtonClicked] = useState(false);
  const navigate = useNavigate();

  const handleNewUserClick = () => {
    navigate("/dashboard/userCreate");
    setNewUserButtonClicked(true);
  };
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Dashboard</h2>
      {!isNewUserButtonClicked && (
        <button onClick={handleNewUserClick}>New User</button>
      )}
      <Routes>
        <Route path="userList" element={<UserList />} />
        <Route path="userCreate" element={<UserCreate />} />
        <Route path="userUpdate" element={<UserUpdate />} />
        <Route path="userDelete" element={<UserDelete />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
