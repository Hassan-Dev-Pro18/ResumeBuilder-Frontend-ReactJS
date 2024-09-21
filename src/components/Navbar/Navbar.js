import "./Navbarstyle.css";
import { Component } from "react";
import { MenuItems } from "../MenuItems/MenuItems";
import { Link, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
class Navbar extends Component {
  state = { clicked: false,
    loggedInUser: null,
    showPrompt: false
  }
  componentDidMount() {
    const username = localStorage.getItem('firstname');
    
    if (username) {
      this.setState({ loggedInUser: username });
    }
  }
  
  handleClick = ()=>{
    this.setState({ clicked: !this.state.clicked})
  }

  togglePrompt = () => {
    this.setState({ showPrompt: !this.state.showPrompt });
  }

  handleLogout = () => {
    localStorage.removeItem('firstname');
    localStorage.removeItem('token');
    this.setState({ loggedInUser: null, showPrompt: false });
    // Optionally navigate to the login page or home page
    <Navigate to="/login" replace={true} />;
  }

  render() {
    const promptVariants = {
      hidden: { opacity: 0, y: -20 },
      visible: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
    };
    return (
      <nav className="NavbarItems">
        
        <h1 className="navbar-logo">Resumeify.</h1>
        <div className="menu-icon" onClick={this.handleClick}>
        <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu actives" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
           {this.state.loggedInUser ? (
            <li className="nav-item">
              <span className="username-circle clickable"  onClick={this.togglePrompt}>{this.state.loggedInUser.charAt(0)}</span>
              <AnimatePresence>
                {this.state.showPrompt && (
                  <motion.div
                    className="prompt-box1"
                    variants={promptVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                  >
                    <p className="close-prompt" onClick={this.togglePrompt}>
                      &times;
                    </p>
                    
                    <div className="profile-icon-container">
                      <div className="profile-icon">
                        <span>{this.state.loggedInUser.charAt(0)}</span>
                        {/* <button className="edit-button">
                          <i className="fas fa-pencil-alt"></i>
                        </button> */}
                      </div>
                      <p className="greeting">
                        Hi, {this.state.loggedInUser.split(" ")[0]}!
                      </p>
                      <p className="email">{localStorage.getItem("email")}</p>
                    </div>
                    <button onClick={this.handleLogout} className="sign-out">
                      <i className="fas fa-sign-out-alt"></i> Sign out
                    </button>
                    <div className="privacy-links">
                      <Link to="/privacy-policy">Privacy Policy</Link> &bull;
                      <Link to="/terms-of-service">Terms of Service</Link>
                    </div>
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
  }
}
// class Navbar extends Component {
//   state = {clicked: false};
//   handleClick = () =>{
//     this.setState({clicked:
//     !this.state.clicked})
//   }
//   render(){
//   return (
//     <>
//       <nav>
//         <a href="index.html">
          
//         </a>

//         <div>
//           <ul id="navbar" className={this.state.clicked ? "#nmavbar active" : "#navbar"}>
//             <li>
//               <a className="active" href="index.html">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="index.html">Template</a>
//             </li>
//             <li>
//               <a href="index.html">Resume</a>
//             </li>
//             <li>
//               <a href="index.html">Blog</a>
//             </li>
//             <li>
//               <a href="index.html">About</a>
//             </li>
//             <li>
//               <a href="index.html">Contact</a>
//             </li>
//           </ul>
//         </div>

//         <div id="mobile" onClick={this.handleClick}>
//           <i id="bar" className={
//             this.state.clicked?
//             "fas fa-times" :
//             "fas fa-bars"
//           }></i>
//         </div>
//       </nav>
//     </>
//   );
// }
// }
export default Navbar;
