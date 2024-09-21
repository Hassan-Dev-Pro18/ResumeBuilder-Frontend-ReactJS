import React, { useState, useEffect } from "react";
import { FaRegLightbulb } from "react-icons/fa"; // Import the icon
import "./Tips.css";
import { motion, AnimatePresence } from "framer-motion";
import "react-datepicker/dist/react-datepicker.css";

const EducationForm = ({ formData, setFormData }) => {
  const [currentFormIndex, setCurrentFormIndex] = useState(0);
  const [showTips, setShowTips] = useState(false); // State for managing tips visibility

  // Ensure at least one empty education form is shown
  useEffect(() => {
    if (formData.education.length === 0) {
      addEducation();
    }
  }, [formData.education.length]);

  const handleChange = (e, index) => {
    const newEducation = formData.education.map((item, i) =>
      i === index ? { ...item, [e.target.name]: e.target.value } : item
    );
    setFormData({ ...formData, education: newEducation });
  };

  const handleDateChange = (date, name, index) => {
    const newEducation = formData.education.map((item, i) =>
      i === index ? { ...item, [name]: date } : item
    );
    setFormData({ ...formData, education: newEducation });
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [...formData.education, {}],
    });
    setCurrentFormIndex(formData.education.length);
  };

  const removeEducation = (index) => {
    const newEducation = formData.education.filter((_, i) => i !== index);
    setFormData({ ...formData, education: newEducation });
    if (currentFormIndex === index && index > 0) {
      setCurrentFormIndex(index - 1);
    }
  };

  const navigateForm = (index) => {
    setCurrentFormIndex(index);
  };

  const toggleTips = () => setShowTips((prev) => !prev);
  const tipAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="form-section">
      <h2 className="form-title">Education</h2>
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
              <h3>Expert Guidance and Tips:</h3>
              <ul>
                <li>
                  <strong>Institute Name:</strong> Mention the full name of the
                  institute. Employers often prioritize candidates from
                  recognized and reputable institutions, so this can strengthen
                  your application.
                </li>
                <li>
                  <strong>Degree:</strong> Clearly state the degree you earned.
                  Employers look for degrees that align with the job
                  requirements and reflect relevant knowledge or specialization.
                </li>
                <li>
                  <strong>Start Year:</strong> Include the year you started the
                  degree. This provides context for your educational timeline
                  and helps interviewers assess your academic progression.
                </li>
                <li>
                  <strong>End Year:</strong> Specify the year you completed or
                  expect to complete the degree. Employers value up-to-date
                  qualifications, so ensuring the timeline is clear is
                  important.
                </li>
                <li>
                  <strong>CGPA/Grades:</strong> Include your final CGPA or
                  grades if they are strong. High academic performance can be a
                  differentiator, especially for recent graduates or entry-level
                  positions.
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="AllForm-list">
        {formData.education.map((_, index) => (
          <div key={index} className="AllForm-box">
            <span
              className={`AllForm-label ${
                currentFormIndex === index ? "active" : ""
              }`}
              onClick={() => navigateForm(index)}
            >
              {`Education ${index + 1}`}
            </span>
            <button
              type="button"
              className="remove-button"
              onClick={() => removeEducation(index)}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
      {formData.education.map((edu, index) =>
        currentFormIndex === index ? (
          <div key={index} className="AllForm-entry">
            <div className="form-group-container">
              <div className="form-group">
                <label htmlFor={`InstituteName${index}`}>Institute Name</label>
                <input
                  type="text"
                  name="InstituteName"
                  value={edu.InstituteName || ""}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div className="form-group">
                <label htmlFor={`Degree${index}`}>Degree</label>
                <input
                  type="text"
                  name="Degree"
                  value={edu.Degree || ""}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
            </div>
            <div className="form-group-container">
              <div className="form-group">
                <label htmlFor={`StartYear${index}`}>Start Year</label>
                {/* <DatePicker
                  selected={edu.StartYear}
                  onChange={(date) =>
                    handleDateChange(date, "StartYear", index)
                  }
                  showYearPicker
                  dateFormat="yyyy"
                  yearItemNumber={9}
                  placeholderText="Select Start Year"
                /> */}
                <input
                  type="text"
                  name="StartYear"
                  value={edu.StartYear || ""}
                  onChange={(e) => handleChange(e, index)}
                  maxLength={4}
                  placeholder="Enter Start Year"
                />
              </div>
              <div className="form-group">
                <label htmlFor={`PassOutYear${index}`}>End Year</label>
                <input
                  type="text"
                  name="PassOutYear"
                  value={edu.PassOutYear || ""}
                  onChange={(e) => handleChange(e, index)}
                  maxLength={4}
                  placeholder="Enter PassOut Year"
                />
              </div>
            </div>
            <div className="form-group-container">
              <div className="form-group">
                <label htmlFor={`CGPA${index}`}>CGPA/Grades</label>
                <input
                  type="text"
                  name="CGPA"
                  value={edu.CGPA || ""}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
            </div>
            <p className="add-AllForm-text" onClick={addEducation}>
              Add Another Education
            </p>
          </div>
        ) : null
      )}
    </div>
  );
};

export default EducationForm;
