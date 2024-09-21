// Loading.js
import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-spinner"></div>
      <p className="loading-text">Uploading your resume...</p>
    </div>
  );
};

export default Loading;
