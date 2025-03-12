import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./signup.css";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/accounts/signup/", {
        name,
        username,
        email,
        password,
      });
      setSuccessMessage(response.data.message);
      setErrorMessage(""); // Clear any previous errors
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Signup failed. Please try again.");
      setSuccessMessage(""); // Clear success message if any
    }
  };

  return (
    <div className="signup-container">
      <header className="text-center text-white py-3 bg-dark">
        Inventory Management System
      </header>

      <div className="signup-card">
        <h2 className="text-center">Create Account</h2>

        {errorMessage && (
          <div className="alert alert-danger text-center">
            <i className="fas fa-exclamation-circle"></i> {errorMessage}
          </div>
        )}

        {successMessage && (
          <div className="alert alert-success text-center">
            <i className="fas fa-check-circle"></i> {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Name input */}
          <div className="form-outline">
            <input
              type="text"
              id="nameInput"
              name="name"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Username input */}
          <div className="form-outline">
            <input
              type="text"
              id="userName"
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

          {/* Email input */}
          <div className="form-outline">
            <input
              type="email"
              id="emailInput"
              name="email"
              className="form-control"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Submit button */}
          <button type="submit" className="btn btn-secondary btn-block">
            Sign Up
          </button>

          <div className="text-center mt-3">
            <p>
              Already have an account? <a href="/login">Log in</a>
            </p>
          </div>
        </form>
      </div>

      <footer className="text-center py-2 bg-light">
        &copy; 2024 Inventory Management System. All rights reserved.
      </footer>
    </div>
  );
};

export default SignUp;
