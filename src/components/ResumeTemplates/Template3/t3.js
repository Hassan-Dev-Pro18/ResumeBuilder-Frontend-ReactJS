import React, { useEffect, useState } from "react";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./t3.css";
import UserImage from "../../Template/assets/user.jpg";

import {
  FaHome,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaEdit,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import LoadingData from "../LoadingData";
const Template3 = () => {
  //Use Axios to get data from the backend
  const [edu1Details, setedu1Details] = useState("");
  const [edu2Details, setedu2Details] = useState("");
  const [edu3Details, setedu3Details] = useState("");
  const [cert1Detail, setcert1Details] = useState("");
  const [cert2Detail, setcert2Details] = useState("");
  const [cert3Detail, setcert3Details] = useState("");
  const [pro1Detail, setpro1Details] = useState("");
  const [pro2Detail, setpro2Details] = useState("");
  const [pro3Detail, setpro3Details] = useState("");
  const [exp1Detail, setexp1Details] = useState("");
  const [exp2Detail, setexp2Details] = useState("");
  const [exp3Detail, setexp3Details] = useState("");
  const [personalInfo, setPersonalInfo] = useState("");
  const [skillData, setSkillData] = useState("");
  const [hobbiesData, setHobbiesData] = useState("");
  const [referenceData, setReferenceData] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
      const fetchDetails = async () => {
      setLoading(true);
      // //Education Data IDs
      const EducationIDs = JSON.parse(localStorage.getItem("educationIDs"));
      const firstEDID = EducationIDs[0];
      const secondEDID = EducationIDs[1];
      const thirdEDID = EducationIDs[2];

      // //Certificate Data IDs
      const CertificateIDs = JSON.parse(localStorage.getItem("certificateIDs"));
      const firstCertID = CertificateIDs[0];
      const secondCertID = CertificateIDs[1];
      const thirdCertID = CertificateIDs[2];

      // //Project Data IDs
      const ProjectIDs = JSON.parse(localStorage.getItem("projectIDs"));
      const firstProID = ProjectIDs[0];
      const secondProID = ProjectIDs[1];
      const thirdProID = ProjectIDs[2];

      // //Experience Data IDs
      const ExperienceIDs = JSON.parse(localStorage.getItem("experienceIDs"));
      const firstExpID = ExperienceIDs[0];
      const secondExpID = ExperienceIDs[1];
      const thirdExpID = ExperienceIDs[2];

      // //Personal Info Data ID
      const PersonalInfoID = localStorage.getItem("personalInfoID");

      // //Skill Data ID
      const SkillID = localStorage.getItem("skillsID");

      // //Hobbies Data ID
      const HobbiesID = localStorage.getItem("HobbiesID");

      // //Reference Data ID
      const ReferenceID = localStorage.getItem("ReferenceID");
      try {
        //   //-----------------------------Education Data Get-------------------------------------
        if (firstEDID) {
          const education1 = await axios.get(
            `http://localhost:4000/education/${firstEDID}`
          );
          setedu1Details(education1.data.Education);
        }

        if (secondEDID) {
          const education2 = await axios.get(
            `http://localhost:4000/education/${secondEDID}`
          );
          setedu2Details(education2.data.Education);
        }
        if (thirdEDID) {
          const education3 = await axios.get(
            `http://localhost:4000/education/${thirdEDID}`
          );
          setedu3Details(education3.data.Education);
        }

        //   //-----------------------------Certificate Data Get-----------------------------------
        if (firstCertID) {
          const certificate1 = await axios.get(
            `http://localhost:4000/certificate/${firstCertID}`
          );
          setcert1Details(certificate1.data.Certificate);
        }
        if (secondCertID) {
          const certificate2 = await axios.get(
            `http://localhost:4000/certificate/${secondCertID}`
          );
          setcert2Details(certificate2.data.Certificate);
        }
        if (thirdCertID) {
          const certificate3 = await axios.get(
            `http://localhost:4000/certificate/${thirdCertID}`
          );
          setcert3Details(certificate3.data.Certificate);
        }

        //   //-----------------------------Project Data Get---------------------------------------
        if (firstProID) {
          const project1 = await axios.get(
            `http://localhost:4000/project/${firstProID}`
          );
          setpro1Details(project1.data.Project);
        }
        if (secondProID) {
          const project2 = await axios.get(
            `http://localhost:4000/project/${secondProID}`
          );
          setpro2Details(project2.data.Project);
        }
        if (thirdProID) {
          const project3 = await axios.get(
            `http://localhost:4000/project/${thirdProID}`
          );
          setpro3Details(project3.data.Project);
        }

        //   //-----------------------------Experience Data Get---------------------------------------
        if (firstExpID) {
          const experience1 = await axios.get(
            `http://localhost:4000/Experience/${firstExpID}`
          );
          setexp1Details(experience1.data.Experience);
        }

        if (secondExpID) {
          const experience2 = await axios.get(
            `http://localhost:4000/Experience/${secondExpID}`
          );
          setexp2Details(experience2.data.Experience);
        }

        if (thirdExpID) {
          const experience3 = await axios.get(
            `http://localhost:4000/Experience/${thirdExpID}`
          );
          setexp3Details(experience3.data.Experience);
        }

        //   //-----------------------------Personal Info Data Get---------------------------------
        const personal = await axios.get(
          `http://localhost:4000/personal-info/${PersonalInfoID}`
        );
        setPersonalInfo(personal.data.PersonalInfo);
        console.log(personal.data.PersonalInfo);

        //-----------------------------SKill Data Get-----------------------------------------
        if (SkillID) {
          const skill = await axios.get(
            `http://localhost:4000/skill/${SkillID}`
          );
          setSkillData(skill.data.Skill);
        }

        //-----------------------------Hobbies Data Get---------------------------------------
        if (HobbiesID) {
          const hobbies = await axios.get(
            `http://localhost:4000/hobbies/${HobbiesID}`
          );
          setHobbiesData(hobbies.data.hobbies);
        }

        //-----------------------------Reference Data Get-------------------------------------
        if (ReferenceID) {
          const reference = await axios.get(
            `http://localhost:4000/Reference/${ReferenceID}`
          );
          setReferenceData(reference.data.Reference);
        }
        } catch (error) {
          console.log("Failed to fetch resume details.", error);
        } finally {
          setLoading(false); // Hide loading screen
        }
      };

      fetchDetails();
    const storedImage = localStorage.getItem("uploadedImage");
    if (storedImage) {
      setImage(storedImage);
    }
  }, []);

  const downloadPDF = () => {
    localStorage.clear();
    const input = document.getElementById("resume");

    html2canvas(input, { scale: 2 }) // Increase the scale for better quality
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;

        const ratio = Math.min(
          pdfWidth / canvasWidth,
          pdfHeight / canvasHeight
        );

        const width = canvasWidth * ratio;
        const height = canvasHeight * ratio;

        pdf.addImage(imgData, "PNG", 0, 0, width, height);
        pdf.save("My_Resume.pdf");
      });
  };
  const downloadImage = () => {
    localStorage.clear();
    const input = document.getElementById("resume");

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "My_Resume.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };
  const navigate = useNavigate();
  const handleEditClick = () => {
    navigate("/resumeBuild"); // Navigate to resume builder page
  };
  if (loading) {
    return <LoadingData />;
  }
  const changeTemplate = () =>{
    
    navigate('/changeTemplate', { replace: true })
  }
  return (
    <div>
      <div className="button-containers">
        <p onClick={downloadPDF} className="download-btn">
          Download as PDF
        </p>
        <p onClick={downloadImage} className="download-btn">
          Download as Image
        </p>
        <p onClick={changeTemplate} className="download-btn">
          Change Template
        </p>
      </div>
    <div className="body1">
      <div className="t2_container" id="resume">
        <FaEdit className="edit-icon" onClick={handleEditClick} />
        <div className="resume-t3-main">
          <div class="t3-left-column">
            <div class="t3-profile-pic">
              <img src={image || UserImage} alt="Khalil Richardson" className="t3-img"/>
            </div>
            <h1 className="t3-left-h1">
              {" "}
              {personalInfo.firstName || "KHALIL"}{" "}
              {personalInfo.lastName || "RICHARDSON"}
            </h1>
            <p>{personalInfo.linkedin || "Project Manager"}</p>
            <div class="t3-contact">
              <h3 className="t3-left-h3">CONTACT</h3>
              <p>{personalInfo.address || "12-B Gulberg,Lahore"}</p>
              <p>{personalInfo.countryCode} {" "}{personalInfo.contact || "0300-*******"}</p>
              <p>{personalInfo.email || "example@email.com"}</p>
            </div>
            <div class="t3-about-me">
              <h3 className="t3-left-h3">PROFILE</h3>
              <p>
                {personalInfo.objective ||
                  "As a seasoned journalist with over 7 years of experience in delivering impactful and thought-provoking stories, I am passionate about investigating and uncovering the truth. I am committed to producing high-quality, accurate, and engaging content that informs, educates, and inspires readers."}
              </p>
            </div>
            <div class="t3-skills">
              <h3 className="t3-left-h3">PROFESSIONAL SKILLS</h3>
              <ul className="t3-skill-ul">
                <li className="t3-skill-li">{skillData.skill1 || "Teamwork"}</li>
                <li className="t3-skill-li">{skillData.skill2 || "Communication"}</li>
                <li className="t3-skill-li">{skillData.skill3 || "Data visualization"}</li>
                <li className="t3-skill-li">{skillData.skill4 || "Skill 4"}</li>
                <li className="t3-skill-li">{skillData.skill5 || "Skill 5"}</li>
              </ul>
            </div>
            <div className="t3-skills">
              <h3 className="t3-left-h3">HOBBIES</h3>
              <ul className="t3-skill-ul">
                <li className="t3-skill-li">{hobbiesData.hobby1 || "Hobby1"}</li>
                <li className="t3-skill-li">{hobbiesData.hobby2 || "Hobby2"}</li>
                <li className="t3-skill-li">{hobbiesData.hobby3 || "Hobby3"}</li>
              </ul>
            </div>
          </div>
          <div class="t3-right-column">
            <div class="t3-work-experience">
              <h3 className="t3-rigth-h3">WORK EXPERIENCE</h3>
              <div class="t3-job">
                <h4 className="t3-job-h4">
                  {exp1Detail.JobTitle || "The Virginian Pilot"} |{" "}
                  <em>
                    ({exp1Detail.StartYear || "2012"} -{" "}
                    {exp1Detail.EndYear || "Present"})
                  </em>
                </h4>
                <p>{exp1Detail.CompanyName || "ABC Software House"}</p>
                <ul className="t3-job-ul">
                  <li>
                    {exp1Detail.Responsibilties ||
                      "Responsibilities in particular job. Like senior front end developer to create user friendly interfaces"}
                  </li>
                </ul>
              </div>
              
              <div class="t3-job">
                <h4 className="t3-job-h4">
                  {exp2Detail.JobTitle || "The Virginian Pilot"} |{" "}
                  <em>
                    ({exp2Detail.StartYear || "2012"} -{" "}
                    {exp2Detail.EndYear || "Present"})
                  </em>
                </h4>
                <p>{exp2Detail.CompanyName || "ABC Software House"}</p>
                <ul className="t3-job-ul">
                  <li>
                    {exp2Detail.Responsibilties ||
                      "Responsibilities in particular job. Like senior front end developer to create user friendly interfaces"}
                  </li>
                </ul>
              </div>
            </div>
            
            <div class="t3-education">
              <h3 className="t3-rigth-h3">EDUCATION</h3>
              <div class="t3-degree">
                <h4 className="t3-degree-h4">{edu1Details.Degree || "Bacholer of science in IT"}</h4>
                <p className="t3-degree-p">{edu1Details.InstituteName || "Example Unversity of Lahore"}</p>
                <p className="t3-degree-p"><em>
                  ({edu1Details.StartYear ||"2012"} -{" "}
                  {edu1Details.PassOutYear || "Present"} )
                </em></p>
              </div>
              <div class="t3-degree">
                <h4 className="t3-degree-h4">{edu2Details.Degree || "Bacholer of science in SE"}</h4>
                <p className="t3-degree-p">{edu2Details.InstituteName || "Example COMSATS Lahore"}</p>
                <p className="t3-degree-p"><em>
                  ({edu2Details.StartYear ||"2012"} -{" "}
                  {edu2Details.PassOutYear || "Present"} )
                </em></p>
              </div>
            </div>

            <div className="t3-education">
              <h3 className="t3-rigth-h3">PROJECTS</h3>
              <p>
                <strong>{pro1Detail.ProjectName || "Your Project Name"} | ({pro1Detail.languageFramework || "Language/Framework Used"})</strong>
              </p>
              <ul>
                <li>{pro1Detail.Description ||"Sample description of your project"}</li>
              </ul>
              <p>
                <strong>{pro2Detail.ProjectName || "Your Project Name"} | ({pro2Detail.languageFramework || "Language/Framework Used"})</strong>
              </p>
              <ul>
                <li>{pro2Detail.Description ||"Sample description of your project"}</li>
              </ul>
            </div>

            <div className="t3-education">
              <h3 className="t3-rigth-h3">CERTIFICATE</h3>
              <p>
                <strong>{cert1Detail.certificateName || "Your certificate Name"}</strong>
              </p>
              <p>
                {cert1Detail.IssuingOrg || "Issuing Org Name"} <em>({cert1Detail.IssueDate || "12-12-2012"})</em>
              </p>
              <p></p>
              <p>
                <strong>{cert2Detail.certificateName|| "Your certificate Name"}</strong>
              </p>
              <p>
                {cert2Detail.IssuingOrg || "Issuing Org Name"} <em>({cert2Detail.IssueDate || "12-12-2012"})</em>
              </p>
            </div>
            <div class="languages">
              <h3 className="t3-rigth-h3">REFERENCE</h3>
              <ul>
                <li>{referenceData.reference1 ||"your reference here"}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      
      </div>
    </div>
  );
};
export default Template3;
