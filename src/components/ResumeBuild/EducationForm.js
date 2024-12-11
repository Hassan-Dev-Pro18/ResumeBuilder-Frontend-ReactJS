import React, { useState, useEffect } from "react";
import { FaRegLightbulb} from "react-icons/fa"; // Import the icon
import "./Tips.css";
import { motion, AnimatePresence } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EducationForm = ({ formData, setFormData, errors, setErrors }) => {
  
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

    const { name } = e.target;
    // Clear errors as user types
    const newErrors = { ...errors };
    if (newErrors.education && newErrors.education[index]) {
      delete newErrors.education[index][name];
      setErrors(newErrors);
    }
  };

  const handleYearChange = (date, name, index) => {
    const year = date.getFullYear().toString(); // Convert year to string
    const newEducation = formData.education.map((item, i) =>
      i === index ? { ...item, [name]: year } : item
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
              <h3>Expert Guidance:</h3>
              <ul>
                <li>
                  <strong>Institute Name:</strong> Use the full name of the institution to establish credibility.
                  <b> Example:</b> "Massachusetts Institute of Technology (MIT)" instead of "MIT."
                </li>
                <li>
                  <strong>Degree:</strong> Clearly state the degree earned, showcasing its relevance to the job.
                  <b> Example:</b> "Bachelor of Science in Computer Science" rather than "B.Sc. in CS."
                </li>
                <li>
                  <strong>Start Year:</strong> Provide the year you began your program to outline your academic timeline.
                  <br/><b> Example:</b> "Start Year: 2018"
                </li>
                <li>
                  <strong>End Year:</strong> Specify when you completed or plan to complete your degree to reflect recency.
                  <br/><b> Example:</b> "End Year: 2022 (Expected)"
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
            <div className="form-group-container1">
              <div className="form-group">
                <div className="label-container-resume-build">
                  <label htmlFor={`InstituteName${index}`}>
                    Institute Name
                  </label>
                  {errors.education &&
                    errors.education[index]?.InstituteName && (
                      <span className="error-message">
                        {errors.education[index].InstituteName}
                      </span>
                    )}
                </div>

                <input
                  type="text"
                  name="InstituteName"
                  value={edu.InstituteName || ""}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              
            </div>
            <div className="form-group-container1">
            <div className="form-group">
                <div className="label-container-resume-build">
                  <label htmlFor={`Degree${index}`}>Degree</label>
                  {errors.education && errors.education[index]?.Degree && (
                    <span className="error-message">
                      {errors.education[index].Degree}
                    </span>
                  )}
                </div>

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
                <div className="label-container-resume-build">
                  <label htmlFor={`StartYear${index}`}>Start Year</label>
                  {errors.education && errors.education[index]?.StartYear && (
                    <span className="error-message">
                      {errors.education[index].StartYear}
                    </span>
                  )}
                </div>
                  <DatePicker
                    selected={edu.StartYear ? new Date(edu.StartYear, 0) : null}
                    onChange={(date) =>
                      handleYearChange(date, "StartYear", index)
                    }
                    showYearPicker
                    dateFormat="yyyy"
                    placeholderText="Select Start Year"
                    showIcon
                    calendarIconClassName="calendar-icon"
                  />
              </div>
              <div className="form-group">
                <div className="label-container-resume-build">
                  <label htmlFor={`PassOutYear${index}`}>End Year</label>
                  {errors.education && errors.education[index]?.PassOutYear && (
                    <span className="error-message">
                      {errors.education[index].PassOutYear}
                    </span>
                  )}
                </div>
                  <DatePicker
                    selected={
                      edu.PassOutYear ? new Date(edu.PassOutYear, 0) : null
                    }
                    onChange={(date) =>
                      handleYearChange(date, "PassOutYear", index)
                    }
                    showYearPicker
                    dateFormat="yyyy"
                    placeholderText="Select End Year"
                    showIcon
                    calendarIconClassName="calendar-icon"
                  />
              </div>
            </div>
            <div className="form-group-container1">
              
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
