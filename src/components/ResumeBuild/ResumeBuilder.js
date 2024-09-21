// ResumeBuilder.js
import React, { useState } from "react";
import axios from "axios";
import PersonalInfoForm from "./PersonalInfoForm";
import EducationForm from "./EducationForm";
import CertificateForm from "./Certificate";
import SkillsForm from "./SkillsForm";
import HobbiesForm from "./HobbiesForm";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import {
  FaUser,
  FaBook,
  FaPencilAlt,
  FaLanguage,
  FaAward,
  FaBriefcase,
  FaAddressCard,
  FaHeart,
  FaTools,
  FaTasks,
  FaCertificate,
  FaGraduationCap,
  FaUserFriends,
} from "react-icons/fa";
import "./ResumeBuilder.css";
import Navbar1 from "../Navbar/Navbar1";
import ExperienceForm from "./ExperienceForm";
import ProjectForm from "./ProjectForm";
import ReferenceForm from "./Reference";
import Loading from "./Loading";

const ResumeBuilder = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    education: [{}],
    certificate: [{}],
    experience: [{}],
    projects: [{}],
    experience:[{}],
    skill: [],
    hobbies:[],
    reference:[],
    personalInfo: [],
  });

  const steps = [
    {
      name: "Personal Info.",
      description: "",
      icon: <FaAddressCard />,
      component: (
        <PersonalInfoForm formData={formData} setFormData={setFormData} />
      ),
    },
    {
      name: "Education",
      description: "",
      icon: <FaGraduationCap />,
      component: (
        <EducationForm formData={formData} setFormData={setFormData} />
      ),
    },
    {
      name: "Certificate",
      description: "",
      icon: <FaCertificate />,
      component: (
        <CertificateForm formData={formData} setFormData={setFormData} />
      ),
    },
    {
      name: "Experirence",
      description: "",
      icon: <FaBriefcase />,
      component: (
        <ExperienceForm formData={formData} setFormData={setFormData} />
      ),
    },
    {
      name: "Skills",
      description: "",
      icon: <FaTools />,
      component: <SkillsForm formData={formData} setFormData={setFormData} />,
    },
    {
      name: "Project",
      description: "",
      icon: <FaTasks />,
      component: <ProjectForm formData={formData} setFormData={setFormData} />,
    },
    {
      name: "Hobbies/Interest",
      description: "",
      icon: <FaHeart />,
      component: <HobbiesForm formData={formData} setFormData={setFormData} />,
    },
    {
      name: "Reference",
      description: "",
      icon: <FaUserFriends />,
      component: (
        <ReferenceForm formData={formData} setFormData={setFormData} />
      ),
    },
  ];

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  //This line of code will handle the submission and integrate with backend apis using axios
  const handleSubmit = async () => {
    setLoading(true);
    try {
      // Handle education submissions
      const educationIDs = [];
      for (let i = 0; i < formData.education.length; i++) {
        console.log(formData.education[i]);
        const educationResponse = await axios.post(
          "http://localhost:4000/education/create",
          formData.education[i]
        );
        educationIDs.push(educationResponse.data.id);
      }
      localStorage.setItem("educationIDs", JSON.stringify(educationIDs));
      console.log("Education IDs:", educationIDs);
      const EducationIDs = JSON.parse(localStorage.getItem("educationIDs"));
      const firstID = EducationIDs[0];
      const secondID = EducationIDs[1];
      console.log("First", firstID);
      console.log("Second", secondID);
      //Education Submission End

      //Handle Certifcate Submission
      const certificateIDs = [];
      for (let i = 0; i < formData.certificate.length; i++) {
        const certificateResponse = await axios.post(
          "http://localhost:4000/certificate/create",
          formData.certificate[i]
        );
        certificateIDs.push(certificateResponse.data.id);
      }
      localStorage.setItem("certificateIDs", JSON.stringify(certificateIDs));
      console.log("Certificate IDs:", certificateIDs);
      const CertificateIDs = JSON.parse(localStorage.getItem("certificateIDs"));
      const firstCertID = CertificateIDs[0];
      const secondCertID = CertificateIDs[1];
      console.log("First", firstCertID);
      console.log("Second", secondCertID);
      //End of Certificate Submission

      //Start of Project Submission
      const porjectIDs = [];
      for (let i = 0; i < formData.projects.length; i++) {
        const projectResponse = await axios.post(
          "http://localhost:4000/project/create-Project",
          formData.projects[i]
        );
        porjectIDs.push(projectResponse.data.id);
      }
      localStorage.setItem("projectIDs", JSON.stringify(porjectIDs));
      console.log("Project IDs:", porjectIDs);
      const PorjectIDs = JSON.parse(localStorage.getItem("projectIDs"));
      const firstProID = PorjectIDs[0];
      const secondProID = PorjectIDs[1];
      console.log("First", firstProID);
      console.log("Second", secondProID);
      //End of Project Submission

       //Handle Experience Submission
      const experienceIDs = [];
      for (let i = 0; i < formData.experience.length; i++) {
        const experienceResponse = await axios.post(
          "http://localhost:4000/Experience/create-Experience",
          formData.experience[i]
        );
        experienceIDs.push(experienceResponse.data.id);
      }
      localStorage.setItem("experienceIDs", JSON.stringify(experienceIDs));
      console.log("Experience IDs:", experienceIDs);
      const ExperienceIDs = JSON.parse(localStorage.getItem("experienceIDs"));
      const firstExpID = ExperienceIDs[0];
      const secondExpID = ExperienceIDs[1];
      console.log("First", firstExpID);
      console.log("Second", secondExpID);
      //End of Experience Submission

      // Start of Skills Submission
      const skillsResponse = await axios.post(
        "http://localhost:4000/skill/create-skill",
        formData.skill
      );
      const skillsID = skillsResponse.data.id;
      localStorage.setItem("skillsID", skillsID);
      console.log("Skills ID:", skillsID);
      // End of Skills Submission

       // Start of Hobbies Submission
      const hobbiesResponse = await axios.post(
        "http://localhost:4000/hobbies/createHobby",
        formData.hobbies
      );
      const hobbiesID = hobbiesResponse.data.id;
      localStorage.setItem("HobbiesID", hobbiesID);
      console.log("Hobbies ID:", hobbiesID);
      // End of Hobbies Submission

      // Start of Reference Submission
      const referenceResponse = await axios.post(
        "http://localhost:4000/Reference/create-reference",
        formData.reference
      );
      const referenceID = referenceResponse.data.id;
      localStorage.setItem("ReferenceID", referenceID);
      console.log("Reference ID:", referenceID);
      // End of Reference Submission

      // Start Personal Info Submission
      const personalInfoResponse = await axios.post(
        "http://localhost:4000/personal-info/create-info",
        formData.personalInfo
      );
      const personalInfoID = personalInfoResponse.data.id;
      localStorage.setItem("personalInfoID", personalInfoID);
      console.log("Personal Info ID:", personalInfoID);
      // End Personal Info Submission

      // alert("All data submitted successfully!");
    } catch (error) {
      console.error("Error submitting resume:", error);
    }
    finally {
      setLoading(false); // Hide loading screen
    }
    navigate('/display');
  };
  if (loading) {
    return <Loading />; // Render loading screen if loading state is true
  }

  return (
    <>
      <Navbar1 />
      <div className="resume_builder">
        <div className="progress-container">
          <div className="progress-grid">
            {steps.map((item, index) => (
              <div
                key={index}
                className={`progress-step ${
                  index + 1 <= step ? "completed" : ""
                }`}
              >
                <div className="progress-icon">{item.icon}</div>
                <div className="progress-details">
                  <div className="step-name">{item.name}</div>
                  <div className="step-description">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="form_container">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
            >
              {steps[step - 1].component}
            </motion.div>
          </AnimatePresence>
          <div className="button-container">
            {step > 1 && (
              <button onClick={prevStep} className="nav-button">
                Previous
              </button>
            )}
            {step < steps.length ? (
              <button onClick={nextStep} className="nav-button">
                Next
              </button>
            ) : (
              <button onClick={handleSubmit} className="nav-button">
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeBuilder;
