import React,{useState, useEffect} from "react";
import axios from './axios';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import "./Loginsingup.css";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
const SignupForm = ({ switchToLogin }) => {
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/new-users/create-user', {firstName,lastName,email, username, password });
      
      navigate('/');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="form-container motion"
    >
      <h2 className="loginh2">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <FaUser className="icon" />
          <input type="text" value={firstName} placeholder="Email" required onChange={(e) => setFirstname(e.target.value)} />
        </div>
        <div className="input-container">
          <FaUser className="icon" />
          <input type="text" value={lastName} placeholder="Email" required onChange={(e) => setLastname(e.target.value)}/>
        </div>
        <div className="input-container">
          <FaEnvelope className="icon" />
          <input type="email" value={email} placeholder="Email" required onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="input-container">
          <FaUser className="icon" />
          <input type="text" value={username} placeholder="Username" required onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="input-container">
          <FaLock className="icon" />
          <input type="password" value={password} placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn">
          Sign Up
        </button>
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
