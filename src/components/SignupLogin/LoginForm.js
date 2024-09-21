import React, {useState, useEffect} from "react";
import axios from './axios';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "./Loginsingup.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const LoginForm = ({ switchToSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [error, setError] = useState('');
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
    try {
      const response = await axios.post('http://localhost:4000/auth/login', { username, password });
      localStorage.setItem('token', response.data.Token);
      const response1 = await axios.get(`http://localhost:4000/new-users/getsingleUserName/${username}`);
      const userRole = response1.data.User.role;
      console.log(response1.data.User.firstName);
      localStorage.setItem('firstname',response1.data.User.firstName)
      localStorage.setItem('email',response1.data.User.email);
      // localStorage.setItem('username', username); // Save username in localStorage
      setLoggedInUser(username); 
      // Display success toast
    toast.success('Login Successful!', {
      autoClose: 2000,
      onClose: () => {
        // Navigate based on user role
        if (userRole === 'admin') {
          navigate('/admin'); // Navigate to admin page
        } else {
          navigate('/'); // Navigate to home page
        }
      },
    });
      
      console.log(response.data);
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 401) {
        
        
        toast.error('Invalid Credentials', {
          autoClose: 5000,  // Show for 5 seconds
          pauseOnHover: true,  // Prevents it from closing when hovered
        });
        
        
      } else {
        alert("An unexpected error occurred. Please try again later.");
      }
    }
   
    
  };

  const Forget = async ()=>{
    navigate('/forgetPassword')
  }

  

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
          <input type="text" value={username} placeholder="Username" required onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="input-container">
          <FaLock className="icon" />
          <input type="password" value={password} placeholder="Password" required onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type="submit" className="btn" onClick={useEffect(()=>{
        // let login = localStorage.getItem('token')
        // if(login){
        //     navigate('/')
        // }
        
    })}>
          Login
        </button>
        <ToastContainer />
      </form>
      <p className="para">
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
