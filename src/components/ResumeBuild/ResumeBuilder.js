// ResumeBuilder.js
import React, { useState } from "react";
import axios from "axios";
import PersonalInfoForm from "./PersonalInfoForm";
import EducationForm from "./EducationForm";
import CertificateForm from "./Certificate";
import SkillsForm from "./SkillsForm";
import HobbiesForm from "./HobbiesForm";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaBook,
  FaPencilAlt,
  FaLanguage,
  FaAward,
  FaCheck,
  FaBriefcase,
  FaAddressCard,
  FaHeart,
  FaTools,
  FaTasks,
  FaCertificate,
  FaGraduationCap,
  FaUserFriends,
  FaArrowRight,
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
  const [completedSteps, setCompletedSteps] = useState([1]); // Track completed steps, starting with step 1 completed by default
  const [formData, setFormData] = useState({
    education: [{}],
    certificate: [{}],
    experience: [{}],
    projects: [{}],
    experience: [{}],
    skill: [],
    hobbies: [],
    reference: [],
    personalInfo: [],
  });

  const [errors, setErrors] = useState({});
  // All Steps of Resume
  const steps = [
    {
      name: "Personal Info.",
      description: "",
      icon: <FaAddressCard />,
      component: (
        <PersonalInfoForm
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
        />
      ),
    },
    {
      name: "Education",
      description: "",
      icon: <FaGraduationCap />,
      component: (
        <EducationForm
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
        />
      ),
    },
    {
      name: "Certificate",
      description: "",
      icon: <FaCertificate />,
      component: (
        <CertificateForm
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
        />
      ),
    },
    {
      name: "Experirence",
      description: "",
      icon: <FaBriefcase />,
      component: (
        <ExperienceForm
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
        />
      ),
    },
    {
      name: "Skills",
      description: "",
      icon: <FaTools />,
      component: (
        <SkillsForm
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
        />
      ),
    },
    {
      name: "Project",
      description: "",
      icon: <FaTasks />,
      component: (
        <ProjectForm
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
        />
      ),
    },
    {
      name: "Hobbies/Interest",
      description: "",
      icon: <FaHeart />,
      component: (
        <HobbiesForm
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
        />
      ),
    },
    {
      name: "Reference",
      description: "",
      icon: <FaUserFriends />,
      component: (
        <ReferenceForm
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
        />
      ),
    },
  ];


  //Next steps and Validate all forms
  const nextStep = () => {
    const isValid = validateCurrentStep();
    if (isValid) {
      setCompletedSteps((prevSteps) => {
        if (!prevSteps.includes(step)) {
          return [...prevSteps, step];
        }
        return prevSteps;
      });
      setStep((prevStep) => prevStep + 1);
      setErrors({}); // Clear errors
    }
  };
  const handleStepClick = (index) => {
    const stepNumber = index + 1;
    if (completedSteps.includes(stepNumber) || stepNumber === step) {
      setStep(stepNumber); // Navigate to step if it's completed or the current step
    }
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  //All Steps Validation Using Switch
  const validateCurrentStep = () => {
    let isValid = true;
    let newErrors = {};

    switch (step) {
      case 1:
        // Validate personalInfo
        const personalInfo = formData.personalInfo || {};
        if (!personalInfo.firstName || personalInfo.firstName.trim() === "") {
          newErrors.firstName = "*Required";
          isValid = false;
        } else {
          const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:\s[A-Za-zÀ-ÖØ-öø-ÿ]+)*$/; // Includes accented letters and spaces
          if (!nameRegex.test(personalInfo.firstName)) {
            newErrors.firstName = "*Only letters and single space";
            isValid = false;
          }
        }
        if (!personalInfo.lastName || personalInfo.lastName.trim() === "") {
          newErrors.lastName = "*Required";
          isValid = false;
        } else {
          // Validate that the first name contains only alphabetic characters (letters)
          const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:\s[A-Za-zÀ-ÖØ-öø-ÿ]+)*$/; // Includes accented letters and spaces
          if (!nameRegex.test(personalInfo.lastName)) {
            newErrors.lastName = "*Only letters and single space";
            isValid = false;
          }
        }
        if (!personalInfo.email || personalInfo.email.trim() === "") {
          newErrors.email = "*Required";
          isValid = false;
        } else {
          // Validate email format
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(personalInfo.email)) {
            newErrors.email = "Invalid email address";
            isValid = false;
          }
        }
        if (!personalInfo.contact || personalInfo.contact.trim() === "") {
          newErrors.contact = "*Required";
          isValid = false;
        } else {
          // Define regex patterns for different country codes
          const phoneRegexPatterns = {
            "+1": /^[2-9][0-9]{2}[2-9][0-9]{2}[0-9]{4}$/, // USA: 10 digits
            "+44": /^(\d{10}|\d{11})$/, // UK: 10 or 11 digits
            "+91": /^[6-9]\d{9}$/, // India: Starts with 6-9 and 10 digits
            "+61": /^\d{9}$/, // Australia: 9 digits
            "+81": /^\d{10}$/, // Japan: 10 digits
            "+92": /^[3][0-9]{9}$/, // Pakistan: Starts with 3 and 10 digits (e.g., 3001234567)
            "+33": /^\d{9}$/, // France: 9 digits
            "+49": /^\d{10,11}$/, // Germany: 10-11 digits
            "+86": /^\d{11}$/ // China: 11 digits
          };
        
          // Get the selected country code
          const countryCode = personalInfo.countryCode;
        
          // Get the regex for the selected country code
          const regex = phoneRegexPatterns[countryCode];
        
          // Validate contact number based on selected country code
          if (regex && !regex.test(personalInfo.contact)) {
            newErrors.contact = `*Invalid contact number for ${countryCode}`;
            isValid = false;
          } else if (!regex) {
            newErrors.contact = "*Unsupported country code";
            isValid = false;
          }
        }
        if (!personalInfo.address || personalInfo.address.trim() === ""){
          newErrors.address = "*Required";
          isValid = false;
        }else{
        if (
        !/^[A-Za-zÀ-ÖØ-öø-ÿ0-9]+(?:\s[A-Za-zÀ-ÖØ-öø-ÿ0-9]+)*$/.test(personalInfo.address)) {
          newErrors.address = "*Only single space";
          isValid = false;
        }}
        if (!personalInfo.linkedin || personalInfo.linkedin.trim() === "") {
          newErrors.linkedin = "*Required";
          isValid = false;
        }else{
        if (
        !/^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:\s[A-Za-zÀ-ÖØ-öø-ÿ]+)*$/.test(personalInfo.linkedin)) {
          newErrors.linkedin = "*Letters/single space";
          isValid = false;
        }}
         if (!personalInfo.objective || personalInfo.objective.trim() === ""){
          newErrors.objective = "*Required";
          isValid = false;
         }else {
        if (!/^[A-Za-zÀ-ÖØ-öø-ÿ.,-_/]+(?:\s[A-Za-zÀ-ÖØ-öø-ÿ.,-_/]+)*$/.test(personalInfo.objective)) {
          newErrors.objective = "*Only single space";
          isValid = false;
        }}
        break;
      case 2:
        // Validate education fields
        const educationErrors = formData.education.map((edu, index) => {
          let error = {};
          if (!edu.InstituteName || edu.InstituteName.trim() === "") {
            error.InstituteName = "*Required";
            isValid = false;
          } else {
            // Validate that the first name contains only alphabetic characters (letters)
            const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:\s[A-Za-zÀ-ÖØ-öø-ÿ]+)*$/; // Includes accented letters and spaces
            if (!nameRegex.test(edu.InstituteName)) {
              error.InstituteName = "*Use only letters and single space";
              isValid = false;
            }
          }
          if (!edu.Degree || edu.Degree.trim() === "") {
            error.Degree = "*Required";
            isValid = false;
          } else {
            // Validate that the first name contains only alphabetic characters (letters)
            const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ.,-_/]+(?:\s[A-Za-zÀ-ÖØ-öø-ÿ.,-_/]+)*$/; // Includes accented letters and spaces
            if (!nameRegex.test(edu.Degree)) {
              error.Degree = "*Only letters and single space";
              isValid = false;
            }
          }
          if (!edu.StartYear || edu.StartYear.trim() === "") {
            error.StartYear = "*Required";
            isValid = false;
          } else if (!/^\d{4}$/.test(edu.StartYear)) {
            error.StartYear = "Invalid year format (YYYY)";
            isValid = false;
          }
          if (!edu.PassOutYear || edu.PassOutYear.trim() === "") {
            error.PassOutYear = "*Required";
            isValid = false;
          } else if (!/^\d{4}$/.test(edu.PassOutYear)) {
            error.PassOutYear = "Invalid year format (YYYY)";
            isValid = false;
          }
          return error;
        });
        newErrors.education = educationErrors;
        break;
        case 3:
          // Certificate Fields
          const certificateErrors = formData.certificate.map((cer, index) => {
              let error = {};
      
              // Validate certificateName
              if (cer.certificateName && cer.certificateName.trim() !== "") {
                  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:\s[A-Za-zÀ-ÖØ-öø-ÿ]+)*$/; // Includes accented letters and single spaces
                  if (!nameRegex.test(cer.certificateName)) {
                      error.certificateName = "*Only letters & single space allowed";
                      isValid = false;
                  }
              }
      
              // Validate IssuingOrg
              if (cer.IssuingOrg && cer.IssuingOrg.trim() !== "") {
                  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:\s[A-Za-zÀ-ÖØ-öø-ÿ]+)*$/; // Includes accented letters and single spaces
                  if (!nameRegex.test(cer.IssuingOrg)) {
                      error.IssuingOrg = "*Only letters & single space allowed";
                      isValid = false;
                  }
              }
      
              // Validate IssueDate (not required, only invalid format check)
              if (cer.IssueDate && cer.IssueDate.trim() !== "") {
                  if (!/^\d{2}-\d{2}-\d{4}$/.test(cer.IssueDate)) {
                      error.IssueDate = "*Invalid format. Use dd-MM-yyyy";
                      isValid = false;
                  }
              }
      
              return error;
          });
          newErrors.certificate = certificateErrors;
          break;
      
      case 4:
        // Validate education fields
        const experienceErrors = formData.experience.map((exp, index) => {
          let error = {};
          if (exp.JobTitle && exp.JobTitle.trim() !== "") {
            
            // Validate that the first name contains only alphabetic characters (letters)
            const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:\s[A-Za-zÀ-ÖØ-öø-ÿ]+)*$/; // Includes accented letters and spaces
            if (!nameRegex.test(exp.JobTitle)) {
              error.JobTitle = "*Only letters & single space";
              isValid = false;
            }
          }
          if (exp.CompanyName && exp.CompanyName.trim() !== "") {
            
            // Validate that the first name contains only alphabetic characters (letters)
            const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:\s[A-Za-zÀ-ÖØ-öø-ÿ]+)*$/; // Includes accented letters and spaces
            if (!nameRegex.test(exp.CompanyName)) {
              error.CompanyName = "*Only letters & Space";
              isValid = false;
            }
          }
          if (exp.StartYear && exp.StartYear.trim() !== "") {
             if (!/^\d{4}$/.test(exp.StartYear)) {
            error.StartYear = "*Invalid Format";
            isValid = false;
          }}
          if (exp.EndYear && exp.EndYear.trim() !== "") {
            if (!/^\d{4}$/.test(exp.EndYear)) {
            error.EndYear = "*Invalid Format";
            isValid = false;
          }}
          if (exp.Responsibilties && exp.Responsibilties.trim() !== "" ) {
            const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ.,-_/]+(?:\s[A-Za-zÀ-ÖØ-öø-ÿ.,-_/]+)*$/;
            if(!nameRegex.test(exp.Responsibilties)){
            error.Responsibilties = "*Only single space";
            isValid = false;}
          }
          return error;
        });
        newErrors.experience = experienceErrors;
        break;
      case 5:
        // Validate skill
        const skill = formData.skill || {};
        if (!skill.skill1 || skill.skill1.trim() === "") {
          newErrors.skill1 = "*Required";
          isValid = false;
        }
        else if(skill.skill1 && skill.skill1.trim() !== "") {
          
          const skillRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:\s[A-Za-zÀ-ÖØ-öø-ÿ]+)*$/; // Includes accented letters and spaces
          if (!skillRegex.test(skill.skill1)) {
            newErrors.skill1 = "*Only letters and single space";
            isValid = false;
          }
        }
        if (skill.skill2 && skill.skill2.trim() !== "") {
          
          const skillRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:\s[A-Za-zÀ-ÖØ-öø-ÿ]+)*$/; // Includes accented letters and spaces
          if (!skillRegex.test(skill.skill2)) {
            newErrors.skill2 = "*Only letters and single space";
            isValid = false;
          }
        }
        if (skill.skill3 && skill.skill3.trim() !== "") {
          
          const skillRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:\s[A-Za-zÀ-ÖØ-öø-ÿ]+)*$/; // Includes accented letters and spaces
          if (!skillRegex.test(skill.skill3)) {
            newErrors.skill3 = "*Only letters and single space";
            isValid = false;
          }
        }
        if (skill.skill4 && skill.skill4.trim() !== "") {
          const skillRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:\s[A-Za-zÀ-ÖØ-öø-ÿ]+)*$/; // Includes accented letters and spaces
          if (!skillRegex.test(skill.skill4)) {
            newErrors.skill4 = "*Only letters and single space";
            isValid = false;
          }
        }
        if (skill.skill5 && skill.skill5.trim() !== "") {
          const skillRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:\s[A-Za-zÀ-ÖØ-öø-ÿ]+)*$/; // Includes accented letters and spaces
          if (!skillRegex.test(skill.skill5)) {
            newErrors.skill5 = "*Only letters and single space";
            isValid = false;
          }
        }
        if (skill.skill6 && skill.skill6.trim() !== "") {
          const skillRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:\s[A-Za-zÀ-ÖØ-öø-ÿ]+)*$/; // Includes accented letters and spaces
          if (!skillRegex.test(skill.skill6)) {
            newErrors.skill6 = "*Only letters and single space";
            isValid = false;
          }
        }
        break;
      case 6:
        //Project Fields
        const projectErrors = formData.projects.map((pro, index) => {
          let error = {};
          if (pro.ProjectName && pro.ProjectName.trim() !== "" ) {
            if(!/^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:\s[A-Za-zÀ-ÖØ-öø-ÿ]+)*$/.test(pro.ProjectName)){
              error.ProjectName = "*Only letters and single Space";
            isValid = false;
            }
            
          }
          if (pro.languageFramework && pro.languageFramework.trim() !== "" ) {
            if(!/^[A-Za-zÀ-ÖØ-öø-ÿ.,/]+(?:\s[A-Za-zÀ-ÖØ-öø-ÿ.,/]+)*$/.test(pro.languageFramework)){
              error.languageFramework = "*Only letters and single Space";
            isValid = false;
            }
          }
          if (pro.Description && pro.Description.trim() !== "" ) {
            if(!/^[A-Za-zÀ-ÖØ-öø-ÿ.,-_/]+(?:\s[A-Za-zÀ-ÖØ-öø-ÿ.,-_/]+)*$/.test(pro.Description)){
              error.Description = "*Only letters and single Space";
            isValid = false;
            }
          }
          return error;
        });
        newErrors.projects = projectErrors;
        break;
      case 7:
        // Validate hobbies
        const hobbies = formData.hobbies || {};
        if (!hobbies.hobby1 || hobbies.hobby1.trim() === "") {
          newErrors.hobby1 = "*Required";
          isValid = false;
        }
        else if (hobbies.hobby1 && hobbies.hobby1.trim() !== "") {
          const skillRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:\s[A-Za-zÀ-ÖØ-öø-ÿ]+)*$/; // Includes accented letters and spaces
          if (!skillRegex.test(hobbies.hobby1)) {
            newErrors.hobby1 = "*Only letters and single Space";
            isValid = false;
          }
        }
        if (hobbies.hobby2 && hobbies.hobby2.trim() !== "") {
          const skillRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:\s[A-Za-zÀ-ÖØ-öø-ÿ]+)*$/; // Includes accented letters and spaces
          if (!skillRegex.test(hobbies.hobby2)) {
            newErrors.hobby2 = "*Only letters and single Space";
            isValid = false;
          }
        }
        if (hobbies.hobby3 && hobbies.hobby3.trim() !== "") {
          const skillRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:\s[A-Za-zÀ-ÖØ-öø-ÿ]+)*$/; // Includes accented letters and spaces
          if (!skillRegex.test(hobbies.hobby3)) {
            newErrors.hobby3 = "*Only letters and single Space";
            isValid = false;
          }
        }
        if (hobbies.hobby4 && hobbies.hobby4.trim() !== "") {
          const skillRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:\s[A-Za-zÀ-ÖØ-öø-ÿ]+)*$/; // Includes accented letters and spaces
          if (!skillRegex.test(hobbies.hobby4)) {
            newErrors.hobby4 = "*Only letters and single Space";
            isValid = false;
          }
        }
        if (hobbies.hobby5 && hobbies.hobby5.trim() !== "") {
          const skillRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:\s[A-Za-zÀ-ÖØ-öø-ÿ]+)*$/; // Includes accented letters and spaces
          if (!skillRegex.test(hobbies.hobby5)) {
            newErrors.hobby5 = "*Only letters and single Space";
            isValid = false;
          }
        }
        break;
      case 8:
        // Validate reference
        const references = formData.reference || {};
        if (!references.reference1 || references.reference1.trim() === "") {
          newErrors.reference1 = "*Required";
          isValid = false;
        }
        else if (references.reference1 && references.reference1.trim() !== "") {
          const refRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:\s[A-Za-zÀ-ÖØ-öø-ÿ]+)*$/; // Includes accented letters and spaces
          if (!refRegex.test(references.reference1)) {
            newErrors.reference1 = "*Only letters and single Space";
            isValid = false;
          }
        }
        if (references.reference2 && references.reference2.trim() !== "") {
          const refRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:\s[A-Za-zÀ-ÖØ-öø-ÿ]+)*$/; // Includes accented letters and spaces
          if (!refRegex.test(references.reference2)) {
            newErrors.reference2 = "*Only letters and single Space";
            isValid = false;
          }
        }
        if (references.reference3 && references.reference3.trim() !== "") {
          const refRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:\s[A-Za-zÀ-ÖØ-öø-ÿ]+)*$/; // Includes accented letters and spaces
          if (!refRegex.test(references.reference3)) {
            newErrors.reference3 = "*Only letters and single Space";
            isValid = false;
          }
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
    return isValid;
  };

  //This line of code will handle the submission and integrate with backend apis using axios
  const handleSubmit = async () => {
    const isValid = validateCurrentStep();
    if(isValid){
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

      // // //Handle Certifcate Submission
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

      // // //Start of Project Submission
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
      
      // // //Handle Experience Submission
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

      // // // Start of Skills Submission
      const skillsResponse = await axios.post(
        "http://localhost:4000/skill/create-skill",
        formData.skill
      );
      const skillsID = skillsResponse.data.id;
      localStorage.setItem("skillsID", skillsID);
      console.log("Skills ID:", skillsID);

      // // // Start of Hobbies Submission
      const hobbiesResponse = await axios.post(
        "http://localhost:4000/hobbies/createHobby",
        formData.hobbies
      );
      const hobbiesID = hobbiesResponse.data.id;
      localStorage.setItem("HobbiesID", hobbiesID);
      console.log("Hobbies ID:", hobbiesID);

      // // // Start of Reference Submission
      const referenceResponse = await axios.post(
        "http://localhost:4000/Reference/create-reference",
        formData.reference
      );
      const referenceID = referenceResponse.data.id;
      localStorage.setItem("ReferenceID", referenceID);
      console.log("Reference ID:", referenceID);

      // Start Personal Info Submission
      console.log(formData.personalInfo)
      const personalInfoResponse = await axios.post(
        "http://localhost:4000/personal-info/create-info",
        formData.personalInfo
      );
      const personalInfoID = personalInfoResponse.data.id;
      localStorage.setItem("personalInfoID", personalInfoID);
      console.log("Personal Info ID:", personalInfoID);

      // alert("All data submitted successfully!");
    } catch (error) {
      console.error("Error submitting resume:", error);
    } finally {
      setLoading(false); // Hide loading screen
    }
    navigate("/display");
  }
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
            {steps.map((item, index) => {
              const stepNumber = index + 1;
              const isCompleted = completedSteps.includes(stepNumber);
              const isActive = step === stepNumber;

              return (
                <React.Fragment key={index}>
                  <div
                    className={`progress-step ${
                      isCompleted ? "completed" : ""
                    } ${isActive ? "active" : ""}`}
                    onClick={() => handleStepClick(index)}
                    style={{
                      cursor: completedSteps.includes(stepNumber)
                        ? "pointer"
                        : "not-allowed",
                      opacity:
                        completedSteps.includes(stepNumber) || isActive
                          ? 1
                          : 0.5,
                    }}
                  >
                    <div className="progress-icon">
                      {isCompleted ? (
                        <FaCheck className="completed-icon" />
                      ) : (
                        item.icon
                      )}
                    </div>
                    <div className="progress-details">
                      <div className="step-name">{item.name}</div>
                      <div className="step-description">{item.description}</div>
                    </div>
                  </div>
                  {index !== steps.length - 1 && (
                    <div className="progress-line"></div>
                  )}
                </React.Fragment>
              );
            })}
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
