import React, { useEffect, useState } from "react";
import axios from "axios";

const CertificateDetails = () => {
  const [certificateDetails, setCertificateDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCertificateDetails = async () => {
      const certificateID = localStorage.getItem("certificateID");

      if (!certificateID) {
        setError("No Certificate ID found in local storage.");
        setLoading(false);
        return;
      }

      try {
        console.log(certificateID);
        const response = await axios.get(
          `http://localhost:4000/certificate/${certificateID}`
        );
        setCertificateDetails(response.data.Certificate);
        console.log(certificateDetails);
      } catch (err) {
        setError("Failed to fetch certificate details.");
        // console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCertificateDetails();
  }, []);

  const containerStyle = {
    paddingTop: '200px', // Adjust this value to fit below your navbar
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  };

  const linkStyle = {
    color: '#007bff',
    textDecoration: 'none'
  };

  const linkHoverStyle = {
    textDecoration: 'underline'
  };

  if (loading) {
    return <div style={{ paddingTop: '80px' }}>Loading...</div>;
  }

  if (error) {
    return <div style={{ paddingTop: '80px' }}>Error: {error}</div>;
  }

  if (!certificateDetails) {
    return <div style={{ paddingTop: '80px' }}>No Certificate Details Available</div>;
  }

  return (
    <div style={containerStyle}>
      <h2>Certificate Details</h2>
      <p><strong>Name:</strong> {certificateDetails.certificateName || 'N/A'}</p>
      <p><strong>Issuing Organization:</strong> {certificateDetails.IssuingOrg || 'N/A'}</p>
      <p><strong>Issue Date:</strong> {certificateDetails.IssueDate || 'N/A'}</p>
      <p><strong>URL:</strong> 
        <a 
          href={certificateDetails.Cert_URL || '#'} 
          target="_blank" 
          rel="noopener noreferrer"
          style={linkStyle}
          onMouseOver={(e) => e.target.style.textDecoration = linkHoverStyle.textDecoration}
          onMouseOut={(e) => e.target.style.textDecoration = 'none'}
        >
          {certificateDetails.Cert_URL || 'N/A'}
        </a>
      </p>
    </div>
  );
};

export default CertificateDetails;
