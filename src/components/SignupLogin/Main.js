import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import './Loginsingup.css';

import SignupForm from '../SignupLogin/SignupForm';
import LoginForm from '../SignupLogin/LoginForm';

const Main = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchToSignup = () => setIsLogin(false);
  const switchToLogin = () => setIsLogin(true);

  return (
    <div className="container">
      <AnimatePresence mode="wait">
        {isLogin ? (
            <LoginForm key="login" switchToSignup={switchToSignup}/>
            
        ) : (
            <SignupForm key="signup" switchToLogin={switchToLogin}/>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Main;
