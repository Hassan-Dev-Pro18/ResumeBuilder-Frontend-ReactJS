import React, { useState, useEffect } from "react";
import axios from "./axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock,FaEye, FaEyeSlash } from "react-icons/fa";
import "./Loginsingup.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const LoginForm = ({ switchToSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     // Fetch user information using the token or assume user is logged in
  //     const savedUsername = localStorage.getItem('username');
  //     if (savedUsername) {
  //       setLoggedInUser(savedUsername);
  //       navigate('/login');
  //     }
  //   }
  // }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validate input fields
    if (!handleValidation()) {
      return; // Stop the submission if validation fails
    }

    try {
      const response = await axios.post("http://localhost:4000/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.Token);
      const response1 = await axios.get(
        `http://localhost:4000/new-users/getsingleUserName/${email}`
      );
      const userRole = response1.data.User.role;
      console.log(response1.data.User.firstName);
      localStorage.setItem("firstname", response1.data.User.firstName);
      localStorage.setItem("email", response1.data.User.email);
      // localStorage.setItem('username', username); // Save username in localStorage
      // setLoggedInUser(username);
      // Display success toast
      toast.success("Login Successful!", {
        autoClose: 2000,
        onClose: () => {
          // Navigate based on user role
          if (userRole === "admin") {
            navigate("/admin"); // Navigate to admin page
          } else {
            navigate("/"); // Navigate to home page
          }
        },
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 401) {
        toast.error("Invalid Credentials", {
          autoClose: 5000, // Show for 5 seconds
          pauseOnHover: true, // Prevents it from closing when hovered
        });
      } else {
        toast.error("An unexpected error occurred. Please try again later.", {
          autoClose: 5000, // Show for 5 seconds
          pauseOnHover: true, // Prevents it from closing when hovered
        });
      }
    }
  };

  const Forget = async () => {
    navigate("/forgetPassword");
  };

  const handleValidation = () => {
    toast.dismiss(); // Clear any existing toasts
    setError(""); // Reset error message

    if (!email.trim()) {
      toast.error("Email are required.");
      return false;
    }
    if (!password.trim()) {
      toast.error("Password are required.");
      return false;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return false;
    }

    // Add more complexity checks if needed, e.g., numbers or special characters

    return true;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      className="form-container motion"
    >
      <h2 className="loginh2">Login</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="error-message">{error}</div>}
        <div className="input-container">
          <FaEnvelope className="icon" />
          <input
            type="text"
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
        <button
          type="submit"
          className="btn"
          onClick={useEffect(() => {
            // let login = localStorage.getItem('token')
            // if(login){
            //     navigate('/')
            // }
          })}
        >
          Login
        </button>
        <ToastContainer />
      </form>
      <p className="para1">
        Don't have an account?{" "}
        <span onClick={switchToSignup} className="btn-span">
          Sign Up
        </span>
      </p>
      <p className="forget" onClick={Forget}>
        Forget Password?
      </p>
    </motion.div>
  );
};

export default LoginForm;
