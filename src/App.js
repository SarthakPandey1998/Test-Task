// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const [isLoggedIn, setLoggedIn] = React.useState(false);

  const handleLogin = (values) => {
    // Check if the entered credentials are valid
    if (values.email === "admin@gmail.com" && values.password === "admin") {
      setLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Routes>
      <Route
        path="/login"
        element={
          !isLoggedIn ? (
            <LoginForm handleLogin={handleLogin} />
          ) : (
            <Navigate to="/dashboard/userList" />
          )
        }
      />
      <Route
        path="/dashboard/*"
        element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
      />
      <Route index element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default App;
