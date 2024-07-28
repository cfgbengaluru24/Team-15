/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Modal from "react-modal";
import "./Navbar.css"; // Make sure to create and import this CSS file for styling
import userIcon from "./profile_icon.png"; // Importing the user icon

Modal.setAppElement("#root");

const Navbar = () => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/admin/login",
        loginForm
      );
      console.log("Login successful", response.data);
      setIsLoggedIn(true);
      setIsLoginOpen(false);
    } catch (error) {
      console.error("Error logging in", error);
    }
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/admin/register",
        registerForm
      );
      console.log("Registration successful", response.data);
      setIsRegisterOpen(false);
    } catch (error) {
      console.error("Error registering", error);
    }
  };

  return (
    <nav>
      <div className="logo">
        <img
          src="https://pbs.twimg.com/profile_images/1276595758934953990/NbHzzi7h_400x400.jpg"
          className="logo"
          alt="Expa Logo"
          style={{ maxWidth: "100px", maxHeight: "100px" }}
        />
      </div>

      <ul>
        <li>
          <Link to="/trainee">Trainee</Link>
        </li>
        <li>
          <Link to="/trainer">Trainer</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
      </ul>
      <div className="auth-buttons">
        {isLoggedIn ? (
          <img src={userIcon} alt="User Icon" className="user-icon" />
        ) : (
          <>
            <button onClick={() => setIsLoginOpen(true)}>Login</button>
            <button onClick={() => setIsRegisterOpen(true)}>Sign Up</button>
          </>
        )}
      </div>

      <Modal
        isOpen={isLoginOpen}
        onRequestClose={() => setIsLoginOpen(false)}
        contentLabel="Login Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Login</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={loginForm.email}
            onChange={handleLoginChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginForm.password}
            onChange={handleLoginChange}
            required
          />
          <button type="submit">Login</button>
          <label>
            <input type="checkbox" required /> By continuing, I agree to the
            terms of use & privacy policy.
          </label>
          <p>
            Create a new account?{" "}
            <span
              onClick={() => {
                setIsLoginOpen(false);
                setIsRegisterOpen(true);
              }}
              className="link"
            >
              Click Here
            </span>
          </p>
          <button type="button" onClick={() => setIsLoginOpen(false)}>
            Close
          </button>
        </form>
      </Modal>

      <Modal
        isOpen={isRegisterOpen}
        onRequestClose={() => setIsRegisterOpen(false)}
        contentLabel="Register Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Sign Up</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSignUp();
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={registerForm.name}
            onChange={handleRegisterChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={registerForm.email}
            onChange={handleRegisterChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={registerForm.phone}
            onChange={handleRegisterChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={registerForm.password}
            onChange={handleRegisterChange}
            required
          />
          <button type="submit">Sign Up</button>
          <button type="button" onClick={() => setIsRegisterOpen(false)}>
            Close
          </button>
        </form>
      </Modal>
    </nav>
  );
};

export default Navbar;
