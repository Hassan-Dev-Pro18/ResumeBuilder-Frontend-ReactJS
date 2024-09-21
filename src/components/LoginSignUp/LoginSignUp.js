import React from "react";
import "./loginSignUp.css";

const LoginSignUp = () => {
  return (
    <>
      <div className="container">
        <div className="form-container">
          <div className="login-singup">
            <form action="" className="login-form">
              <h2 className="title">Login</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username"></input>
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password"></input>
              </div>
              <input type="submit" value="Login" className="btn solid"></input>
            </form>
            <form action="" className="signup-form">
              <h2 className="title">SignUp</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Fullname"></input>
              </div>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username"></input>
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="text" placeholder="Email"></input>
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password"></input>
              </div>
              <input type="submit" value="SignUp" className="btn solid"></input>
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New Here ?</h3>
              <p>Please firstly create account....</p>
              <button
                className="btn transparent"
                id="sign-up-btn"
                onClick={() => {
                  const container = document.querySelector(".container");
                  container.classList.add("sign-up-mode");
                }}
              >
                SignUp
              </button>
            </div>
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of Us ?</h3>
              <p>Please Login....</p>
              <button className="btn transparent" id="login-in-btn" onClick={()=>{
                  const container = document.querySelector(".container");
                  container.classList.remove("sign-up-mode");

              }}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignUp;
