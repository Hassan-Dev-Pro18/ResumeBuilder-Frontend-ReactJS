import React, { useState, useEffect } from "react";
import { FaRegLightbulb } from "react-icons/fa"; // Import the icon
import "./Tips.css";
import { motion, AnimatePresence } from "framer-motion";

const ProjectForm = ({ formData, setFormData, errors, setErrors }) => {
  const [currentFormIndex, setCurrentFormIndex] = useState(0);
  const [showTips, setShowTips] = useState(false); // State for managing tips visibility

  // Ensure at least one empty project form is shown
  useEffect(() => {
    if (formData.projects.length === 0) {
      addProject();
    }
  }, [formData.projects.length]);

  const handleChange = (e, index) => {
    const newProjects = formData.projects.map((item, i) =>
      i === index ? { ...item, [e.target.name]: e.target.value } : item
    );
    setFormData({ ...formData, projects: newProjects });
    const { name } = e.target;
    // Clear errors as user types
    const newErrors = { ...errors };
    if (newErrors.projects && newErrors.projects[index]) {
      delete newErrors.projects[index][name];
      setErrors(newErrors);
    }
  };

  const addProject = () => {
    setFormData({
      ...formData,
      projects: [...formData.projects, {}],
    });
    setCurrentFormIndex(formData.projects.length);
  };

  const removeProject = (index) => {
    const newProjects = (formData.projects || []).filter((_, i) => i !== index);
    setFormData({ ...formData, projects: newProjects });
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
      <h2 className="form-title">Projects</h2>
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
                  <strong>Project Name:</strong> Clearly state the project's
                  name for easy reference and discussion. Use concise,
                  descriptive titles that reflect the project's purpose or
                  outcome.
                  <b> Example:</b> "E-Commerce Website Development"
                </li>
                <li>
                  <strong>Language/Framework Used:</strong> Highlight the
                  programming languages, frameworks, or tools you utilized.
                  Mention technologies relevant to the job you're applying for
                  to demonstrate alignment with employer needs. <br />
                  <b> Example:</b>
                  "ReactJS, Node.js, MongoDB"
                </li>
                <li>
                  <strong>Project Description:</strong> Provide a concise
                  summary of the project, focusing on your role, key
                  contributions, and outcomes. Emphasize measurable results and
                  your problem-solving approach to showcase your impact.
                  <br />
                  <b> Example:</b> "Developed a scalable e-commerce platform and
                  integrating payment gateways."
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="AllForm-list">
        {(formData.projects || []).map((_, index) => (
          <div key={index} className="AllForm-box">
            <span
              className={`AllForm-label ${
                currentFormIndex === index ? "active" : ""
              }`}
              onClick={() => navigateForm(index)}
            >
              {`Project ${index + 1}`}
            </span>
            <button
              type="button"
              className="remove-button"
              onClick={() => removeProject(index)}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
      {(formData.projects || []).map((pro, index) =>
        currentFormIndex === index ? (
          <div key={index} className="AllForm-entry">
            <div className="form-group-container">
              <div className="form-group">
                <div className="label-container-resume-build">
                  <label htmlFor={`ProjectName${index}`}>Project Name</label>
                  {errors.projects && errors.projects[index]?.ProjectName && (
                    <span className="error-message">
                      {errors.projects[index].ProjectName}
                    </span>
                  )}
                </div>

                <input
                  type="text"
                  name="ProjectName"
                  value={pro.ProjectName || ""}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div className="form-group">
                <div className="label-container-resume-build">
                  <label htmlFor={`languageFramework${index}`}>Technology</label>
                  {errors.projects &&
                    errors.projects[index]?.languageFramework && (
                      <span className="error-message">
                        {errors.projects[index].languageFramework}
                      </span>
                    )}
                </div>

                <input
                  type="text"
                  name="languageFramework"
                  value={pro.languageFramework || ""}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
            </div>
            <div className="form-group-container1">
              {/* Extra */}
              <div className="form-group">
                <div className="label-container-resume-build">
                  <label htmlFor={`description${index}`}>
                    Project Description
                  </label>
                  {errors.projects && errors.projects[index]?.Description && (
                    <span className="error-message">
                      {errors.projects[index].Description}
                    </span>
                  )}
                </div>

                <textarea
                  name="Description"
                  value={pro.Description || ""}
                  onChange={(e) => handleChange(e, index)}
                  rows="4" // Adjust the number of rows to control the height
                  cols="50" // Adjust the number of columns to control the width
                  placeholder="Enter description here..." // Optional placeholder
                />
              </div>
            </div>
            <p className="add-AllForm-text" onClick={addProject}>
              Add Another Project
            </p>
          </div>
        ) : null
      )}
    </div>
  );
};

export default ProjectForm;
