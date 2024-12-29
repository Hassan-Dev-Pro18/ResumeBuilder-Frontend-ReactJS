import "./Navbarstyle.css";
import { useState, useEffect } from "react";
import { MenuItems } from "../MenuItems/MenuItems";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const navigate = useNavigate(); // Use the useNavigate hook

  useEffect(() => {
    const username = localStorage.getItem('firstname');
    if (username) {
      setLoggedInUser(username);
    }
  }, []);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const togglePrompt = () => {
    setShowPrompt(!showPrompt);
  };

  const handleLogout = () => {
    localStorage.removeItem('firstname');
    localStorage.removeItem('token');
    setLoggedInUser(null);
    setShowPrompt(false);
    navigate('/'); // Navigate to the home page on logout
  };

  const promptVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo" onClick={navigate('/')}>Resume Builder</h1>
      
    </nav>
  );
};

export default Navbar;
