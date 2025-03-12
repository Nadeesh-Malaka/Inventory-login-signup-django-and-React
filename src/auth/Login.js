import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "font-awesome/css/font-awesome.min.css";
import "./login.css"; 
import axios from "axios"; 

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/accounts/login/", {
        username,
        password,
      });

      // Save tokens to localStorage or sessionStorage
      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);

      // Redirect or show success message
      alert("Login successful!");
      // Redirect to a different page or dashboard
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <header>Inventory Management System</header>

      <div className="login-card">
        <h2 className="text-center">Sign In</h2>

        {errorMessage && (
          <div className="alert alert-danger text-center">
            <i className="fas fa-exclamation-circle"></i> {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Username input */}
          <div className="form-outline">
            <input
              type="text"
              id="emailInput"
              name="username"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {/* Password input */}
          <div className="form-outline">
            <input
              type="password"
              id="passwordInput"
              name="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit button */}
          <button type="submit" className="btn btn-secondary btn-block">
            Sign In
          </button>

          <div className="text-center mt-3">
            <p>
              Don't have an account? <a href="/signup">Sign up</a>
            </p>
          </div>
        </form>
      </div>

      <footer>&copy; 2024 Inventory Management System. All rights reserved.</footer>
    </div>
  );
};

export default Login;
