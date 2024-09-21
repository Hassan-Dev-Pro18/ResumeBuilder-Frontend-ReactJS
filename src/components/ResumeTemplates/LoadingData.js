// Loading.js
import React from "react";
import "./LoadingData.css";

const LoadingData = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-spinner"></div>
      <p className="loading-text">Geting Ready your resume...</p>
    </div>
  );
};

export default LoadingData;
