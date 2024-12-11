import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Loginsingup.css"; // Assuming you save the CSS in ForgotPassword.css
import { FaEnvelope, FaKey, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import Navbar2 from "../Navbar/Navbar2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Spinner = () => (
  <div className="loading-overlay">
    <div className="spinner"></div>
  </div>
);
function ForgotPassword() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleValidation = () => {
    toast.dismiss();
    if (!email.trim()) {
      toast.error("Email is Required");
    }
  };
  const handleTokenValidation = () => {
    if (!token.trim()) {
      toast.error("Token is Required");
    }
  };
  // const handlePasswordValidation = () => {
  //   if (!password.trim()) {
  //     toast.error("Password is Required");
  //   }
  // };
  const handleEmailSubmit = async () => {
    setLoading(true);
    try {
      await axios.post(
        `http://localhost:4000/new-users/forget-password/${email}`
      );
      setStep(2);
    } catch (error) {
      toast.error(`${error}`);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleTokenSubmit = async () => {
    try {
      setStep(3);
    } catch (error) {
      setMessage("Invalid token. Please try again.");
    }
  };

  const handleResetPassword = async () => {
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }
    setLoading(true);
    try {
      //   await axios.post('/api/auth/reset-password', { email, token, password });
      const response = await axios.patch(
        `http://localhost:4000/new-users/reset-password/${token}`,
        { newPassword: password }
      );
      setMessage("Password reset successfully!");
      navigate("/login");
    } catch (error) {
      console.log(error.response.data);
      setMessage("Error resetting password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar2 />
      <div className="container">
        <ToastContainer />
        {loading && <Spinner />}
        <div className="form-container motion">
          {step === 1 && (
            <div>
              <h2 className="loginh2">Forgot Password</h2>
              <p className="upper-display-text">
                Please enter the email address for reset password token....
              </p>
              <form>
                <div className="input-container">
                  <FaEnvelope className="icon" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  className="btn"
                  onClick={handleEmailSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="loginh2">Enter Token</h2>
              <p className="upper-display-text">
                Reset password token sent, please check your mail.
              </p>
              <form>
                <div className="input-container">
                  <FaKey className="icon" />
                  <input
                    type="text"
                    placeholder="Enter the token"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  className="btn"
                  onClick={handleTokenSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="loginh2">Reset Password</h2>
              <form>
                <div className="input-container">
                  <FaLock className="icon" />
                  <input
                    F
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter new password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div
                    className="eye-icon"
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
                <div className="input-container">
                  <FaLock className="icon" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <div
                    className="eye-icon"
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
                <button
                  type="button"
                  className="btn"
                  onClick={handleResetPassword}
                >
                  Reset Password
                </button>
              </form>
            </div>
          )}

          {message && <p className="error-message">{message}</p>}
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
