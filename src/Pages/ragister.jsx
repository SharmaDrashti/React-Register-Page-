import React from "react";
import "../CSS/ragister.css";

function Register() {
  return (
    <div className="register-page">
      <div className="register-box">
        <h2>Create Account</h2>
        <p>Register to get started</p>

        <form>
          <div className="input-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="input-group">
            <label>Contact</label>
            <input type="tel" placeholder="Enter contact number" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter password" />
          </div>

          <button type="submit">Register</button>

          <p className="login-text">
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;