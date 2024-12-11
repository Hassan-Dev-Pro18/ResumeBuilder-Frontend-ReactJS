import React, { useEffect, useState } from "react";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./t5.css";
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
const Template5 = () => {
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
        setLoading(false);
      }
    };

    fetchDetails();
    const storedImage = localStorage.getItem("uploadedImage");
    if (storedImage) {
      setImage(storedImage);
    }
  }, []);

  const downloadPDF = () => {
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
  return (
    <div>
      <div className="button-containers">
        <p onClick={downloadPDF} className="download-btn">
          Download as PDF
        </p>
        <p onClick={downloadImage} className="download-btn">
          Download as Image
        </p>
      </div>
    <div className="body1">
      <div className="t2_container" id="resume">
        <FaEdit className="edit-icon" onClick={handleEditClick} />
        <div class="t5-resume">
          <div class="t5-left-section">
            <div class="t5-profile-picture">
            <img src={image || UserImage} alt="Khalil Richardson" />
            </div>
            <div class="t5-contact">
              <h2 className="t5-left-h2">Contact</h2>
              <p>
                <i class="icon">&#9993;</i> {personalInfo.email || "example@email.com"}
              </p>
              <p>
                <i class="icon">&#9742;</i> {personalInfo.contact || "0300*******"}
              </p>
              <p>
                <i class="icon">&#127968;</i> {personalInfo.address || "12-B Gulberg,Lahore"}
              </p>
            </div>
            <div class="t5-skills">
              <h2 className="t5-left-h2">Skills</h2>
              <div class="t5-skill">
                <span>{skillData.skill1 || "Teamwork"}</span>
                <div class="t5-skill-bar">
                  <div class="t5-fill" style={{ width: "100%" }}></div>
                </div>
              </div>
              <div class="t5-skill">
                <span>{skillData.skill2 || "Communication"}</span>
                <div class="t5-skill-bar">
                  <div class="t5-fill" style={{ width: "100%" }}></div>
                </div>
              </div>
              <div class="t5-skill">
                <span>{skillData.skill3 || "Data visualization"}</span>
                <div class="t5-skill-bar">
                  <div class="t5-fill" style={{ width: "100%" }}></div>
                </div>
              </div>
              <div class="t5-skill">
                <span>{skillData.skill4 || "React JS"}</span>
                <div class="t5-skill-bar">
                  <div class="t5-fill" style={{ width: "100%" }}></div>
                </div>
              </div>
              <div class="t5-skill">
                <span>{skillData.skill5 || "Data Transformation"}</span>
                <div class="t5-skill-bar">
                  <div class="t5-fill" style={{ width: "100%" }}></div>
                </div>
              </div>
            </div>
            <div class="t5-reference">
              <h2 className="t5-left-h2">Certificates</h2>
              <p>
                <strong>{cert1Detail.certificateName || "Your certificate Name"}</strong>
              </p>
              <p>{cert1Detail.IssuingOrg || "Issuing Org Name"} <em>({cert1Detail.IssueDate || "12-12-2012"})</em></p>
              <p>
                <strong>{cert2Detail.certificateName || "Your certificate Name"}</strong>
              </p>
              <p>{cert2Detail.IssuingOrg || "Issuing Org Name"} <em>({cert1Detail.IssueDate || "12-12-2012"})</em></p>
            </div>
            <div class="t5-interest">
              <h2 className="t5-left-h2">Interest</h2>
              
              <ul className="t5-interest-ul">
                <li style={{listStyle:'disc'}}>{hobbiesData.hobby1 || "Hobby1"}</li>
                <li style={{listStyle:'disc'}}>{hobbiesData.hobby2 || "Hobby2"}</li>
                <li style={{listStyle:'disc'}}>{hobbiesData.hobby3 || "Hobby3"}</li>
                </ul>
              </div>
            
            <div class="t5-reference">
              <h2 className="t5-left-h2">Reference</h2>
              <p>
              {referenceData.reference1 ||"your reference here"}
              </p>
            </div>
          </div>
          <div class="t5-right-section">
            <div class="t5-header">
              <h1 className="t5-header-h1">{" "}
              {personalInfo.firstName || "KHALIL"}{" "}
              {personalInfo.lastName || "RICHARDSON"}</h1>
              <p style={{marginTop:"-1.5rem",fontSize:"1.15rem"}}>{personalInfo.linkedin || "Software Engineer"}</p>
            </div>
            <section class="t5-about-me t5-section">
              <h2 className="t5-section-h2">About Me</h2>
              <p>
                  {" "}
                  {personalInfo.objective ||
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."}
                </p>
            </section>
            <section class="t5-work-experience t5-section">
              <h2 className="t5-section-h2">Work Experience</h2>
              <div class="t5-container">
                <div class="t5-year">{exp1Detail.StartYear || "2012"} -{" "}
                {exp1Detail.EndYear || "Present"}</div>
                <div class="t5-content">
                  <strong className="t5-section-strong">{exp1Detail.JobTitle || "Job Position Here"}</strong>
                  <br />
                  <em>{exp1Detail.CompanyName || "ABC Software House"}</em>
                  <br />
                  {exp1Detail.Responsibilties ||
                      "Responsibilities in particular job. Like senior front end developer to create user friendly interfaces"}
                </div>
              </div>
              <div class="t5-container">
                <div class="t5-year">{exp2Detail.StartYear || "2012"} -{" "}
                {exp1Detail.EndYear || "Present"}</div>
                <div class="t5-content">
                  <strong className="t5-section-strong">{exp2Detail.JobTitle || "Job Position Here"}</strong>
                  <br />
                  <em>{exp2Detail.CompanyName || "ABC Software House"}</em>
                  <br />
                  {exp2Detail.Responsibilties ||
                      "Responsibilities in particular job. Like senior front end developer to create user friendly interfaces"}
                </div>
              </div>
            </section>

            <section class="t5-education t5-section">
              <h2 className="t5-section-h2">Education</h2>
              <div class="t5-container">
                <div class="t5-year">{edu1Details.StartYear ||"2012"} -{" "}
                {edu1Details.PassOutYear || "Present"}</div>
                <div class="t5-content">
                  <strong className="t5-section-strong">{edu1Details.Degree || "Bacholer of science in IT"}</strong>
                  <br />
                  <em>{edu1Details.InstituteName || "Example Unversity of Lahore"}</em>
                </div>
              </div>
              <div class="t5-container">
                <div class="t5-year">{edu2Details.StartYear ||"2012"} -{" "}
                {edu1Details.PassOutYear || "Present"}</div>
                <div class="t5-content">
                  <strong className="t5-section-strong">{edu2Details.Degree || "Bacholer of science in IT"}</strong>
                  <br />
                  <em>{edu2Details.InstituteName || "Example Unversity of Lahore"}</em>
                </div>
              </div>
            </section>

            <section class="t5-education t5-section">
              <h2 className="t5-section-h2">Personal Projects</h2>
              <div class="t5-container">
                <div class="t5-year">{pro1Detail.languageFramework || "Language Used"}</div>
                <div class="t5-content">
                  <strong className="t5-section-strong">{pro1Detail.ProjectName || "Your Project Name"}</strong>
                  <br />
                  <em>{pro1Detail.Description ||"Sample description of your project"}</em>
                </div>
              </div>
              <div class="t5-container">
                <div class="t5-year">{pro2Detail.languageFramework || "Language Used"}</div>
                <div class="t5-content">
                  <strong className="t5-section-strong">{pro2Detail.ProjectName || "Your Project Name"}</strong>
                  <br />
                  <em>{pro2Detail.Description ||"Sample description of your project"}</em>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      
      </div>
    </div>
  );
};
export default Template5;
