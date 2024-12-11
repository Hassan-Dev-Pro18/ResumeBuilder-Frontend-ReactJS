import React, { useState, useEffect } from "react";
import { FaRegLightbulb } from "react-icons/fa"; // Import the icon
import "./Tips.css";
import { motion, AnimatePresence } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ExperienceForm = ({ formData, setFormData, errors, setErrors }) => {
  const [currentFormIndex, setCurrentFormIndex] = useState(0);
  const [showTips, setShowTips] = useState(false); // State for managing tips visibility

  // Ensure at least one empty education form is shown
  useEffect(() => {
    if (formData.experience.length === 0) {
      addExperience();
    }
  }, [formData.experience.length]);

  const handleChange = (e, index) => {
    const newExperience = formData.experience.map((item, i) =>
      i === index ? { ...item, [e.target.name]: e.target.value } : item
    );
    setFormData({ ...formData, experience: newExperience });
    const { name } = e.target;
    // Clear errors as user types
    const newErrors = { ...errors };
    if (newErrors.experience && newErrors.experience[index]) {
      delete newErrors.experience[index][name];
      setErrors(newErrors);
    }
  };

  const handleYearChange = (date, name, index) => {
    const year = date.getFullYear().toString(); // Convert year to string
    const newExperience = formData.experience.map((item, i) =>
      i === index ? { ...item, [name]: year } : item
    );
    setFormData({ ...formData, experience: newExperience });
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      experience: [...formData.experience, {}],
    });
    setCurrentFormIndex(formData.experience.length);
  };

  const removeExperience = (index) => {
    const newExperience = formData.experience.filter((_, i) => i !== index);
    setFormData({ ...formData, experience: newExperience });
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
      <h2 className="form-title">Experience</h2>
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
                  <strong>Job Title:</strong> Clearly state your position to
                  highlight your role and responsibilities. Use
                  industry-standard titles to ensure clarity and alignment with
                  the job you're applying for.
                  <b> Example:</b> "Software Engineer"
                </li>
                <li>
                  <strong>Company Name:</strong> Use the full name of the
                  company to establish credibility. Including well-known or
                  reputable company names can enhance your professional image.{" "}
                  
                  <b> Example:</b> "Google LLC"
                </li>
                <li>
                  <strong>Start Year:</strong> Provide the year you began to
                  outline your career <timeline className=""></timeline>
                  <br />
                  <b> Example:</b> "Start Year: 2019"
                </li>
                <li>
                  <strong>End Year:</strong> Mention the year you left or
                  indicate "Present" if ongoing.
                  <br />
                  <b> Example:</b> "End Year: 2023"
                </li>
                <li>
                  <strong>Responsibilities:</strong> Summarize key
                  responsibilities and achievements relevant to the job. Tailor
                  this section to align with the job you’re targeting.<br />
                  <b> Example:</b> "Led the development of scalable web applications, improving user engagement by 30%."
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="AllForm-list">
        {formData.experience.map((_, index) => (
          <div key={index} className="AllForm-box">
            <span
              className={`AllForm-label ${
                currentFormIndex === index ? "active" : ""
              }`}
              onClick={() => navigateForm(index)}
            >
              {`Experience ${index + 1}`}
            </span>
            <button
              type="button"
              className="remove-button"
              onClick={() => removeExperience(index)}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
      {formData.experience.map((exp, index) =>
        currentFormIndex === index ? (
          <div key={index} className="AllForm-entry">
            <div className="form-group-container">
              <div className="form-group">
                <div className="label-container-resume-build">
                  <label htmlFor={`JobTitle${index}`}>Job Title</label>
                  {errors.experience && errors.experience[index]?.JobTitle && (
                    <span className="error-message">
                      {errors.experience[index].JobTitle}
                    </span>
                  )}
                </div>

                <input
                  type="text"
                  name="JobTitle"
                  value={exp.JobTitle || ""}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div className="form-group">
                <div className="label-container-resume-build">
                  <label htmlFor={`CompanyName${index}`}>Company Name</label>
                  {errors.experience &&
                    errors.experience[index]?.CompanyName && (
                      <span className="error-message">
                        {errors.experience[index].CompanyName}
                      </span>
                    )}
                </div>

                <input
                  type="text"
                  name="CompanyName"
                  value={exp.CompanyName || ""}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
            </div>
            <div className="form-group-container">
              <div className="form-group">
                <div className="label-container-resume-build">
                  <label htmlFor={`StartYear${index}`}>Start Year</label>
                  {errors.experience && errors.experience[index]?.StartYear && (
                    <span className="error-message">
                      {errors.experience[index].StartYear}
                    </span>
                  )}
                </div>

                <DatePicker
                  selected={exp.StartYear ? new Date(exp.StartYear, 0) : null}
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
                  <label htmlFor={`EndYear${index}`}>End Year</label>
                  {errors.experience && errors.experience[index]?.EndYear && (
                    <span className="error-message">
                      {errors.experience[index].EndYear}
                    </span>
                  )}
                </div>
                <DatePicker
                  selected={exp.EndYear ? new Date(exp.EndYear, 0) : null}
                  onChange={(date) => handleYearChange(date, "EndYear", index)}
                  showYearPicker
                  dateFormat="yyyy"
                  placeholderText="Select End Year"
                  showIcon
                  calendarIconClassName="calendar-icon"
                />
              </div>
            </div>
            <div className="form-group-container1">
              <div className="form-group">
                <div className="label-container-resume-build">
                  <label htmlFor={`Responsibilties${index}`}>
                    Responsibilties
                  </label>
                  {errors.experience &&
                    errors.experience[index]?.Responsibilties && (
                      <span className="error-message">
                        {errors.experience[index].Responsibilties}
                      </span>
                    )}
                </div>

                <input
                  type="text"
                  name="Responsibilties"
                  value={exp.Responsibilties || ""}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
            </div>
            <p className="add-AllForm-text" onClick={addExperience}>
              Add Another Experience
            </p>
          </div>
        ) : null
      )}
    </div>
  );
};

export default ExperienceForm;
