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
      <h1 className="navbar-logo">Resume Builder</h1>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu actives" : "nav-menu"}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            {/* Render Menu Items here if needed */}
          </li>
        ))}
        {loggedInUser ? (
          <li className="nav-item">
            <span className="username-circle clickable" onClick={togglePrompt}>
              {loggedInUser.charAt(0)}
            </span>
            <AnimatePresence>
              {showPrompt && (
                <motion.div
                  className="prompt-box1"
                  variants={promptVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <p className="close-prompt" onClick={togglePrompt}>
                    &times;
                  </p>
                  <div className="profile-icon-container">
                    <div className="profile-icon">
                      <span>{loggedInUser.charAt(0)}</span>
                      
                    </div>
                    <p className="greeting">
                      Hi, {loggedInUser.split(" ")[0]}!
                    </p>
                    <p className="email">{localStorage.getItem("email")}</p>
                  </div>
                  <button onClick={handleLogout} className="sign-out">
                    <i className="fas fa-sign-out-alt"></i> Sign out
                  </button>
                  
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ) : (
          <li>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
