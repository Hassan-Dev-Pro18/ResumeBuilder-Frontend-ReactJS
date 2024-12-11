import React, { useState, useEffect } from "react";
import axios from "./axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Loginsingup.css";
import { FaUser, FaEnvelope, FaLock,FaEyeSlash, FaEye } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignupForm = ({ switchToLogin }) => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleValidation = () => {
    // Reset toast notifications
    toast.dismiss(); // Clear any existing toasts
    if (!firstName.trim()) {
      toast.error("FirstName is required.");
      return false;
    }
    if (firstName.length < 3) {
      toast.error("First name must be at least 3 characters long.");
      return false;
    }
    if (!lastName.trim()) {
      toast.error("LastName is required.");
      return false;
    }
    if (lastName.length < 3) {
      toast.error("Last name must be at least 3 characters long.");
      return false;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }


    if (
      !password.trim() ||
      password.length < 6 ||
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)
    ) {
      toast.error(
        "Password must be at least 6 characters long, contain at least one uppercase letter, one lowercase letter, and one number."
      );
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validate input fields
    if (!handleValidation()) {
      return; // Stop submission if validation fails
    }
    try {
      const response = await axios.post(
        "http://localhost:4000/new-users/create-user",
        { firstName, lastName, email, password }
      );

      // navigate('/');
      toast.success("Signup Successful! Redirecting to login...", {
        autoClose: 2000,
        onClose: () => navigate("/"),
      });
      console.log(response.data);
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Something went wrong. Please try again later.');
      }
      console.error(error);
      
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="form-container1 motion"
    >
      <h2 className="loginh2">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <FaUser className="icon" />
          <input
            type="text"
            value={firstName}
            placeholder="First Name"
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className="input-container">
          <FaUser className="icon" />
          <input
            type="text"
            value={lastName}
            placeholder="Last Name"
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div className="input-container">
          <FaEnvelope className="icon" />
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <FaLock className="icon" />
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            className="eye-icon"
            onClick={() => setShowPassword((prevState) => !prevState)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>
        <button type="submit" className="btn">
          Sign Up
        </button>
        <ToastContainer />
      </form>
      <p className="para">
        Already have an account?{" "}
        <span onClick={switchToLogin} className="btn-span">
          Login
        </span>
      </p>
    </motion.div>
  );
};

export default SignupForm;
