import React, { useState, useEffect } from "react";
import { FaRegLightbulb } from "react-icons/fa"; // Import the icon
import "./Tips.css";
import { motion, AnimatePresence } from "framer-motion";

const ExperienceForm = ({ formData, setFormData }) => {
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
  };

  const handleDateChange = (date, name, index) => {
    const newExperience = formData.experience.map((item, i) =>
      i === index ? { ...item, [name]: date } : item
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
                    <strong>Job Title:</strong> Clearly state your job title.
                    This ensures that recruiters can quickly identify your role
                    and responsibilities in previous positions, which helps in
                    assessing your suitability for the role you're applying for.
                  </li>
                  <li>
                    <strong>Company Name:</strong> Include the full name of the
                    company. Mentioning reputable or well-known companies adds
                    credibility to your work history and helps interviewers
                    recognize your experience with established organizations.
                  </li>
                  <li>
                    <strong>Start Year:</strong> Specify the year you began your
                    position. This provides a clear timeline of your employment
                    history and allows interviewers to understand your career
                    progression and stability.
                  </li>
                  <li>
                    <strong>End Year:</strong> Indicate the year you ended the
                    position. This helps interviewers gauge the duration of your
                    employment and understand your career development.
                  </li>
                  <li>
                    <strong>Responsibilities:</strong> Describe your key
                    responsibilities and achievements in the role. Highlighting
                    specific contributions and skills relevant to the job you're
                    applying for demonstrates your value and expertise.
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
                <label htmlFor={`JobTitle${index}`}>Job Title</label>
                <input
                  type="text"
                  name="JobTitle"
                  value={exp.JobTitle || ""}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div className="form-group">
                <label htmlFor={`CompanyName${index}`}>Company Name</label>
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
                <label htmlFor={`StartYear${index}`}>Start Year</label>
                {/* <DatePicker
                  selected={exp.StartYear}
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
                  value={exp.StartYear || ""}
                  onChange={(e) => handleChange(e, index)}
                  maxLength={4}
                />
              </div>
              <div className="form-group">
                <label htmlFor={`EndYear${index}`}>End Year</label>
                <input
                  type="text"
                  name="EndYear"
                  value={exp.EndYear || ""}
                  onChange={(e) => handleChange(e, index)}
                  maxLength={4}
                />
              </div>
            </div>
            <div className="form-group-container">
              <div className="form-group">
                <label htmlFor={`Responsibilties${index}`}>
                  Responsibilties
                </label>
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
