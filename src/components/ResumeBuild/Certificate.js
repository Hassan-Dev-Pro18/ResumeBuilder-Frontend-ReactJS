import React, { useState, useEffect } from "react";
import { FaRegLightbulb } from "react-icons/fa"; // Import the icon
import "./Tips.css";
import { motion, AnimatePresence } from "framer-motion";

const CertificateForm = ({ formData, setFormData }) => {
  const [currentFormIndex, setCurrentFormIndex] = useState(0);
  const [showTips, setShowTips] = useState(false); // State for managing tips visibility

  // Ensure at least one empty certificate form is shown
  useEffect(() => {
    if (formData.certificate.length === 0) {
      addCertificate();
    }
  }, [formData.certificate.length]);

  const handleChange = (e, index) => {
    const newCertificates = formData.certificate.map((item, i) =>
      i === index ? { ...item, [e.target.name]: e.target.value } : item
    );
    setFormData({ ...formData, certificate: newCertificates });
  };

  const addCertificate = () => {
    setFormData({
      ...formData,
      certificate: [...formData.certificate, {}],
    });
    setCurrentFormIndex(formData.certificate.length);
  };

  const removeCertificate = (index) => {
    const newCertificates = formData.certificate.filter((_, i) => i !== index);
    setFormData({ ...formData, certificate: newCertificates });
    if (currentFormIndex === index && index > 0) {
      setCurrentFormIndex(index - 1);
    }
  };

  const navigateForm = (index) => {
    setCurrentFormIndex(index);
  };

  const toggleTips = () => setShowTips((prev) => !prev);
  const tipAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="form-section">
      <h2 className="form-title">Certificates </h2>
      <div className="tips-container">
        <FaRegLightbulb className="tips-icon" onClick={toggleTips} />
        <AnimatePresence>
          {showTips && (
            <motion.div
              className="tips-popup"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={tipAnimation}
              transition={{ duration: 0.3 }}
            >
              <h3>Certificate Tips:</h3>
              <ul>
                <li>
                  <strong>Certificate Name:</strong> Use the exact title as it
                  appears on the document to reflect relevant skills or
                  knowledge.
                </li>
                <li>
                  <strong>Issuing Organization:</strong> Provide the full name
                  of the issuing organization to add credibility and align with
                  company standards.
                </li>
                <li>
                  <strong>Issuing Date:</strong> Include the month and year to
                  indicate how current your qualifications are.
                </li>
                <li>
                  <strong>URL:</strong> If applicable, provide a direct link to
                  the certificate for easy verification.
                </li>
              </ul>
              <h3>Expert Guidance:</h3>
              <ul>
                <li>
                  {" "}
                  When listing certificates, focus on those that are directly
                  relevant to the job you're applying for.
                </li>
                <li>
                  Certificates that demonstrate skills or knowledge in
                  high-demand areas can significantly enhance your
                  attractiveness to potential employers.
                </li>
                <li>
                  If you have multiple certificates, prioritize those that align
                  with the job description and the company's goals. This shows
                  that you're not only qualified but also strategically aligned
                  with the company’s needs.
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="AllForm-list">
        {formData.certificate.map((_, index) => (
          <div key={index} className="AllForm-box">
            <span
              className={`AllForm-label ${
                currentFormIndex === index ? "active" : ""
              }`}
              onClick={() => navigateForm(index)}
            >
              {`Certificate ${index + 1}`}
            </span>
            <button
              type="button"
              className="remove-button"
              onClick={() => removeCertificate(index)}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
      {formData.certificate.map((cert, index) =>
        currentFormIndex === index ? (
          <div key={index} className="AllForm-entry">
            <div className="form-group-container">
              <div className="form-group">
                <label htmlFor={`certificateName${index}`}>
                  Certificate Name
                </label>
                <input
                  type="text"
                  name="certificateName"
                  value={cert.certificateName || ""}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div className="form-group">
                <label htmlFor={`IssuingOrg${index}`}>
                  Issuing Organization
                </label>
                <input
                  type="text"
                  name="IssuingOrg"
                  value={cert.IssuingOrg || ""}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
            </div>
            <div className="form-group-container1">
              {" "}
              {/*Extra*/}
              <div className="form-group">
                <label htmlFor={`IssueDate${index}`}>Issuing Date</label>
                <input
                  type="text"
                  name="IssueDate"
                  value={cert.IssueDate || ""}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div className="form-group">
                <label htmlFor={`Cert_URL${index}`}>URL</label>
                <input
                  type="text"
                  name="Cert_URL"
                  value={cert.Cert_URL || ""}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
            </div>
            <p className="add-AllForm-text" onClick={addCertificate}>
              Add Another Certificate
            </p>
          </div>
        ) : null
      )}
    </div>
  );
};

export default CertificateForm;
