import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import "./Loginsingup.css";

import SignupForm from "../SignupLogin/SignupForm";
import LoginForm from "../SignupLogin/LoginForm";
import Navbar2 from "../Navbar/Navbar2";
import Footer1 from "../Footer/footor1";

const Main = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchToSignup = () => setIsLogin(false);
  const switchToLogin = () => setIsLogin(true);

  return (
    <>
      <Navbar2 />
      <div className="container">
        <AnimatePresence mode="wait">
          {isLogin ? (
            <LoginForm key="login" switchToSignup={switchToSignup} />
          ) : (
            <SignupForm key="signup" switchToLogin={switchToLogin} />
          )}
        </AnimatePresence>
      </div>
      <Footer1 />
    </>
  );
};

export default Main;
