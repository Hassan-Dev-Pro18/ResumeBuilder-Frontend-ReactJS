import React, { useState, useEffect } from "react";
import { FaRegLightbulb } from "react-icons/fa"; // Import the icon
import "./Tips.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import CSS for the date picker
import { format } from "date-fns"; // To format the date into dd-MM-yyyy
import { motion, AnimatePresence } from "framer-motion";

const CertificateForm = ({ formData, setFormData, errors, setErrors }) => {
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
    const { name } = e.target;
    // Clear errors as user types
    const newErrors = { ...errors };
    if (newErrors.certificate && newErrors.certificate[index]) {
      delete newErrors.certificate[index][name];
      setErrors(newErrors);
    }
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
  const handleDateChange = (date, index) => {
    const formattedDate = format(date, "dd-MM-yyyy"); // Format the date to dd-MM-yyyy
    const newCertificates = formData.certificate.map((item, i) =>
      i === index ? { ...item, IssueDate: formattedDate } : item
    );
    setFormData({ ...formData, certificate: newCertificates });
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
                  <strong>Certificate Name:</strong> Use the exact title from the document to ensure accuracy and relevance.
                  <br/><b> Example:</b> "Google Data Analytics Professional Certificate."
                </li>
                <li>
                  <strong>Issuing Organization:</strong> Provide the full name of the organization to establish credibility.
                  <br/><b> Example:</b> "Coursera, offered by Google."
                </li>
                <li>
                  <strong>Issuing Date:</strong> Include the month and year to highlight the recency of your certification.
                  <br/><b> Example:</b> "Issued: August 2023."
                </li>
              </ul>
              <h3>Expert Guidance:</h3>
              <ul>
                <li>
                  {" "}
                  Highlight certificates relevant to the job to emphasize applicable skills.
                </li>
                <li>
                Prioritize certifications in high-demand areas to stand out to employers.
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
            <div className="form-group-container1">
              <div className="form-group">
                <div className="label-container-resume-build">
                  <label htmlFor={`certificateName${index}`}>
                    Certificate Name
                  </label>
                  {errors.certificate &&
                    errors.certificate[index]?.certificateName && (
                      <span className="error-message">
                        {errors.certificate[index].certificateName}
                      </span>
                    )}
                </div>

                <input
                  type="text"
                  name="certificateName"
                  value={cert.certificateName || ""}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              
            </div>
            <div className="form-group-container1"><div className="form-group">
                <div className="label-container-resume-build">
                  <label htmlFor={`IssuingOrg${index}`}>
                    Issuing Org.
                  </label>
                  {errors.certificate &&
                    errors.certificate[index]?.IssuingOrg && (
                      <span className="error-message">
                        {errors.certificate[index].IssuingOrg}
                      </span>
                    )}
                </div>

                <input
                  type="text"
                  name="IssuingOrg"
                  value={cert.IssuingOrg || ""}
                  onChange={(e) => handleChange(e, index)}
                />
              </div></div>
            <div className="form-group-container1">
              {" "}
              {/*Extra*/}
              <div className="form-group">
                <div className="label-container-resume-build">
                  <label htmlFor={`IssueDate${index}`}>Issuing Date</label>
                  {errors.certificate &&
                    errors.certificate[index]?.IssueDate && (
                      <span className="error-message">
                        {errors.certificate[index].IssueDate}
                      </span>
                    )}
                </div>
                <DatePicker
                  selected={
                    cert.IssueDate
                      ? new Date(cert.IssueDate.split("-").reverse().join("-"))
                      : null
                  } // Convert stored string to Date object
                  onChange={(date) => handleDateChange(date, index)} // Call the handleDateChange function
                  dateFormat="dd-MM-yyyy" // Format the date
                  placeholderText="Select Issue Date"
                  showIcon
                  calendarIconClassName="calendar-icon"
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
