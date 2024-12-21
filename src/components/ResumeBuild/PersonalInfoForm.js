import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./PersonalInfoForm.css";

const suggestions = [
  "Seeking a challenging position in a reputable organization to expand my learning, knowledge, and skills.",
  "To leverage my expertise in software development to contribute to innovative projects and drive success.",
  "Eager to apply my skills in a dynamic environment where I can grow both professionally and personally.",
  "Looking for a role that allows me to utilize my strengths in problem-solving and project management.",
  "Aspiring to work in a forward-thinking company where I can make a meaningful impact with my technical skills.",
  "Aiming to join a company where I can utilize my experience in project management to deliver high-quality results.",
  "To contribute to a team that values innovation and dedication, while pursuing personal and professional growth.",
  "Desiring a role that challenges me and offers opportunities for advancement in a collaborative and supportive environment.",
  "Passionate about joining a team where I can bring my analytical skills to solve complex problems and drive progress.",
  "Seeking an opportunity to apply my skills in a dynamic and fast-paced environment, contributing to company success.",
];

const PersonalInfoForm = ({ formData, setFormData, errors, setErrors }) => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [currentSuggestionIndex, setCurrentSuggestionIndex] = useState(0);
  const templateID = localStorage.getItem("selectedTemplateId");
  console.log(templateID);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      personalInfo: {
        ...formData.personalInfo,
        [e.target.name]: e.target.value,
      },
    });

    let newErrors = { ...errors };

    if (name === "firstName" && value.trim() !== "") {
      delete newErrors.firstName;
    }

    if (name === "lastName" && value.trim() !== "") {
      delete newErrors.lastName;
    }

    if (name === "email") {
      delete newErrors.email;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(value)) {
        delete newErrors.email;
      }
    }

    if (name === "contact") {
      const phoneRegex = /^[0-9]{11}$/;
      if (phoneRegex.test(value)) {
        delete newErrors.contact;
      }
    }

    if (name === "address" && value.trim() !== "") {
      delete newErrors.address;
    }

    if (name === "linkedin" && value.trim() !== "") {
      delete newErrors.linkedin;
    }

    if (name === "objective" && value.trim() !== "") {
      delete newErrors.objective;
    }

    setErrors(newErrors);
  };

  const handleObjectiveClick = () => {
    setShowPrompt(true);
    setCurrentSuggestionIndex(
      (prevIndex) => (prevIndex + 1) % suggestions.length
    );
  };

  const handlePromptClose = () => {
    setShowPrompt(false);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;

        localStorage.setItem("uploadedImage", base64String);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="form-section">
      <h2 className="form-title">Personal Information</h2>
      <div className="AllForm-entry">
        <div className="form-group-container">
          <div className="form-group form-half">
            <div className="label-container-resume-build">
              <label htmlFor="firstName">First Name</label>
              {errors.firstName && (
                <span className="error-message">{errors.firstName}</span>
              )}
            </div>

            <input
              type="text"
              name="firstName"
              value={formData.personalInfo.firstName || ""}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <div className="label-container-resume-build">
              <label htmlFor="lastName">Last Name</label>
              {errors.lastName && (
                <span className="error-message">{errors.lastName}</span>
              )}
            </div>

            <input
              type="text"
              name="lastName"
              value={formData.personalInfo.lastName || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group-container">
          <div className="form-group">
            <div className="label-container-resume-build">
              <label htmlFor="email">Email</label>
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            <input
              type="email"
              name="email"
              value={formData.personalInfo.email || ""}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <div className="label-container-resume-build">
              <label htmlFor="contact">Contact No.</label>
              {errors.contact && (
                <span className="error-message">{errors.contact}</span>
              )}
            </div>
            <div className="contact-container">
            <select
              name="countryCode"
              value={formData.personalInfo.countryCode || "+1"}
              onChange={handleChange}
              className="country-code-dropdown"
            >
              <option value="+1">+1 (USA)</option>
              
              <option value="+44">+44 (UK)</option>
              <option value="+91">+91 (IND)</option>
              
              <option value="+61">+61 (AUS)</option>
              <option value="+81">+81 (JAP)</option>
              <option value="+92">+92 (PK)</option>
              {/* Add more country codes as needed */}
            </select>

            <input
              type="text"
              name="contact"
              value={formData.personalInfo.contact || ""}
              onChange={handleChange}
              className="phone-input"
            />
            </div>
          </div>
        </div>
        <div className="form-group-container">
          <div className="form-group">
            <div className="label-container-resume-build">
              <label htmlFor="address">Address</label>
              {errors.address && (
                <span className="error-message">{errors.address}</span>
              )}
            </div>

            <input
              type="text"
              name="address"
              value={formData.personalInfo.address || ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <div className="label-container-resume-build">
              <label htmlFor="linkedin">Professional Title</label>
              {errors.linkedin && (
                <span className="error-message">{errors.linkedin}</span>
              )}
            </div>

            <input
              type="text"
              name="linkedin"
              value={formData.personalInfo.linkedin || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group-container">
          <div className="form-group">
            <div className="label-container-resume-build">
              <label htmlFor="objective">Objective</label>
              {errors.objective && (
                <span className="error-message">{errors.objective}</span>
              )}
            </div>

            <input
              type="text"
              name="objective"
              value={formData.personalInfo.objective || ""}
              onFocus={handleObjectiveClick}
              onChange={handleChange}
            />
            <AnimatePresence>
              {showPrompt && (
                <motion.div
                  className="prompt-box"
                  initial={{ opacity: 0, x: "100%" }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: "100%" }}
                  transition={{ duration: 0.4 }}
                >
                  <h3>Objective Suggestions</h3>
                  <p className="close-btn" onClick={handlePromptClose}>
                    X
                  </p>
                  <p>{suggestions[currentSuggestionIndex]}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {templateID == 1 || templateID == 2 || templateID == 3 ? ( // Show section only if id is 1, 2, or 3
            <div className="form-group">
              <div className="label-container-resume-build">
                <label htmlFor="profile_pic">Upload Image</label>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
