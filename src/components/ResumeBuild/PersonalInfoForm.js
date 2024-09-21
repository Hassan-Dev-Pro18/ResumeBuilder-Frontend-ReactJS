// import React from "react";

// const PersonalInfoForm = ({ formData, setFormData }) => {
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       personalInfo: {
//         ...formData.personalInfo,
//         [e.target.name]: e.target.value,
//       },
//     });
//   };

//   return (
//     <div className="form-section">
//       <h2 className="form-title">Personal Information</h2>
//       <p className="form-desc">
//         Please enter your personal detail here (e.g. First & Last Name, Contact, etc.)
//       </p>
//       <div className="AllForm-entry">
//         <div className="form-group-container">
//           <div className="form-group form-half">
//             <label htmlFor="firstName">First Name</label>
//             <input
//               type="text"
//               name="firstName"
//               value={formData.personalInfo.firstName || ""}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="lastName">Last Name</label>
//             <input
//               type="text"
//               name="lastName"
//               value={formData.personalInfo.lastName || ""}
//               onChange={handleChange}
//             />
//           </div>
//         </div>
//         <div className="form-group-container">
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.personalInfo.email || ""}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="contact">Contact No.</label>
//             <input
//               type="text"
//               name="contact"
//               value={formData.personalInfo.contact || ""}
//               onChange={handleChange}
//             />
//           </div>
//         </div>
//         <div className="form-group-container">
//           <div className="form-group">
//             <label htmlFor="address">Address</label>
//             <input
//               type="text"
//               name="address"
//               value={formData.personalInfo.address || ""}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="linkedin">LinkedIn</label>
//             <input
//               type="text"
//               name="linkedin"
//               value={formData.personalInfo.linkedin || ""}
//               onChange={handleChange}
//             />
//           </div>
//         </div>
//         <div className="form-group">
//           <label htmlFor="objective">Objective</label>
//           <input
//             type="text"
//             name="objective"
//             value={formData.personalInfo.objective || ""}
//             onChange={handleChange}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PersonalInfoForm;
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './PersonalInfoForm.css';

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
  "Seeking an opportunity to apply my skills in a dynamic and fast-paced environment, contributing to company success."
];

const PersonalInfoForm = ({ formData, setFormData }) => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [currentSuggestionIndex, setCurrentSuggestionIndex] = useState(0);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      personalInfo: {
        ...formData.personalInfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleObjectiveClick = () => {
    setShowPrompt(true);
    setCurrentSuggestionIndex((prevIndex) => (prevIndex + 1) % suggestions.length);
  };

  const handlePromptClose = () => {
    setShowPrompt(false);
  };

  return (
    <div className="form-section">
      <h2 className="form-title">Personal Information</h2>
      <div className="AllForm-entry">
        <div className="form-group-container">
          <div className="form-group form-half">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.personalInfo.firstName || ""}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
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
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.personalInfo.email || ""}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact">Contact No.</label>
            <input
              type="text"
              name="contact"
              value={formData.personalInfo.contact || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group-container">
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              value={formData.personalInfo.address || ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="linkedin">LinkedIn</label>
            <input
              type="text"
              name="linkedin"
              value={formData.personalInfo.linkedin || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="objective">Objective</label>
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
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -400 }}
                transition={{ duration: 0.4 }}
              >
                <h3>Objective Suggestions</h3>
                <p className="close-btn" onClick={handlePromptClose}>x</p>
                <p>{suggestions[currentSuggestionIndex]}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;

