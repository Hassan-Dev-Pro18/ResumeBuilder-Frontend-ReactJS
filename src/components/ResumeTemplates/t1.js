import React, { useEffect, useState } from "react";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./t1.css";

import {
  FaHome,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaEdit,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import LoadingData from "./LoadingData";
const Template1 = () => {
  //Use Axios to get data from the backend
  const [edu1Details, setedu1Details] = useState("");
  const [edu2Details, setedu2Details] = useState("");
  const [cert1Detail, setcert1Details] = useState("");
  const [cert2Detail, setcert2Details] = useState("");
  const [pro1Detail, setpro1Details] = useState("");
  const [pro2Detail, setpro2Details] = useState("");
  const [exp1Detail, setexp1Details] = useState("");
  const [exp2Detail, setexp2Details] = useState("");
  const [personalInfo, setPersonalInfo] = useState("");
  const [skillData, setSkillData] = useState("");
  const [hobbiesData, setHobbiesData] = useState("");
  const [referenceData, setReferenceData] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      //Education Data IDs
      const EducationIDs = JSON.parse(localStorage.getItem("educationIDs"));
      const firstEDID = EducationIDs[0];
      const secondEDID = EducationIDs[1];

      //Certificate Data IDs
      const CertificateIDs = JSON.parse(localStorage.getItem("certificateIDs"));
      const firstCertID = CertificateIDs[0];
      const secondCertID = CertificateIDs[1];

      //Project Data IDs
      const ProjectIDs = JSON.parse(localStorage.getItem("projectIDs"));
      const firstProID = ProjectIDs[0];
      const secondProID = ProjectIDs[1];

      //Experience Data IDs
      const ExperienceIDs = JSON.parse(localStorage.getItem("experienceIDs"));
      const firstExpID = ExperienceIDs[0];
      const secondExpID = ExperienceIDs[1];

      //Personal Info Data ID
      const PersonalInfoID = localStorage.getItem("personalInfoID");

      //Skill Data ID
      const SkillID = localStorage.getItem("skillsID");

      //Hobbies Data ID
      const HobbiesID = localStorage.getItem("HobbiesID");

      //Reference Data ID
      const ReferenceID = localStorage.getItem("ReferenceID");
      try {
        //-----------------------------Education Data Get-------------------------------------
        const education1 = await axios.get(
          `http://localhost:4000/education/${firstEDID}`
        );
        setedu1Details(education1.data.Education);

        const education2 = await axios.get(
          `http://localhost:4000/education/${secondEDID}`
        );
        setedu2Details(education2.data.Education);

        //-----------------------------Certificate Data Get-----------------------------------
        const certificate1 = await axios.get(
          `http://localhost:4000/certificate/${firstCertID}`
        );
        setcert1Details(certificate1.data.Certificate);

        const certificate2 = await axios.get(
          `http://localhost:4000/certificate/${secondCertID}`
        );
        setcert2Details(certificate2.data.Certificate);

        //-----------------------------Project Data Get---------------------------------------
        const project1 = await axios.get(
          `http://localhost:4000/project/${firstProID}`
        );
        setpro1Details(project1.data.Project);

        const project2 = await axios.get(
          `http://localhost:4000/project/${secondProID}`
        );
        setpro2Details(project2.data.Project);

        //-----------------------------Experience Data Get---------------------------------------
        const experience1 = await axios.get(
          `http://localhost:4000/Experience/${firstExpID}`
        );
        setexp1Details(experience1.data.Experience);

        const experience2 = await axios.get(
          `http://localhost:4000/Experience/${secondExpID}`
        );
        setexp2Details(experience2.data.Experience);

        //-----------------------------Personal Info Data Get---------------------------------
        const personal = await axios.get(
          `http://localhost:4000/personal-info/${PersonalInfoID}`
        );
        setPersonalInfo(personal.data.PersonalInfo);

        //-----------------------------SKill Data Get-----------------------------------------
        const skill = await axios.get(`http://localhost:4000/skill/${SkillID}`);
        setSkillData(skill.data.Skill);
        console.log(skillData);

        //-----------------------------Hobbies Data Get---------------------------------------
        const hobbies = await axios.get(
          `http://localhost:4000/hobbies/${HobbiesID}`
        );
        setHobbiesData(hobbies.data.hobbies);

        //-----------------------------Reference Data Get-------------------------------------
        const reference = await axios.get(
          `http://localhost:4000/Reference/${ReferenceID}`
        );
        setReferenceData(reference.data.Reference);
      } catch (error) {
        console.log("Failed to fetch resume details.", error);
      } finally {
        setLoading(false); // Hide loading screen
      }
    };

    fetchDetails();
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
    <div className="body1">
      <div className="t1_container" id="resume">
        <FaEdit className="edit-icon" onClick={handleEditClick} />
        <div className="header">
          <div className="name-title">
            <h1>
              {personalInfo.firstName || "Your"} {personalInfo.lastName || "Name"}
            </h1>
          </div>
          <div className="contact-info">
            <p>
              <FaHome className="icon"/> {personalInfo.address || "12-B Gulberg,Lahore"}
            </p>
            <p>
              <FaPhone className="icon"/> {personalInfo.contact || "0300-*******"}
            </p>
            <p>
              <FaEnvelope className="icon"/> {personalInfo.email || "example@email.com"}
            </p>
            <p>
              {personalInfo.linkedin || "https://www.linkedin.com/in/example"}
            </p>
          </div>
        </div>
        <div className="content">
          <div className="sidebar">
            <div className="profile">
              <h3>OBJECTIVE</h3>
              <p>{personalInfo.objective || "To leverage my expertise in software development to contribute to innovative projects and drive success."}</p>
            </div>
            <div className="skills">
              <h3>SKILLS</h3>
              <ul>
                <li>{skillData.skill1 ||"Skill1"}</li>
                <li>{skillData.skill2 ||"Skill2"}</li>
                <li>{skillData.skill3 ||"Skill3"}</li>
                <li>{skillData.skill4 ||"Skill4"}</li>
                <li>{skillData.skill5 ||"Skill5"}</li>
              </ul>
            </div>

            <div className="hobbies">
              <h3>HOBBIES</h3>
              <ul>
                <li>{hobbiesData.hobby1 ||"Hobby1"}</li>
                <li>{hobbiesData.hobby2 ||"Hobby2"}</li>
                <li>{hobbiesData.hobby3 ||"Hobby3"}</li>
              </ul>
            </div>
            <div className="hobbies">
              <h3>Refernce</h3>
              <ul>
                <li>{referenceData.reference1 ||"your reference here"}</li>
              </ul>
            </div>
          </div>
          <div className="main-content">
            <div className="experience">
              <h3>EXPERIENCE</h3>
              <div className="job">
                <p>
                  <strong>{exp1Detail.JobTitle || "Job Title"}</strong>
                  <em>
                    ({exp1Detail.StartYear|| "2012"} - {exp1Detail.EndYear || "Present"})
                  </em>
                </p>
                <p>
                  <span>{exp1Detail.CompanyName ||"Company Name"}</span>
                </p>
                <ul>
                  <li>{exp1Detail.Responsibilties ||"Responsibilities in particular job."}</li>
                </ul>
                <p>
                  <strong>{exp2Detail.JobTitle || "Job Title"}</strong>
                  <em>
                    ({exp2Detail.StartYear ||"2012"} - {exp2Detail.EndYear || "Present"})
                  </em>
                </p>
                <p>
                  <span>{exp2Detail.CompanyName || "Company Name"}</span>
                </p>
                <ul>
                  <li>{exp2Detail.Responsibilties || "Responsibilities in particular job."}</li>
                </ul>
              </div>
            </div>
            <div className="education">
              <h3>EDUCATION</h3>
              <p>
                <strong>{edu1Details.InstituteName || "Example Unversity Lahore"}</strong>
              </p>
              <p>{edu1Details.Degree || "Bacholer of science in IT"}</p>
              <p>
                <em>
                  ({edu1Details.StartYear ||"2012"} -{" "}
                  {edu1Details.PassOutYear || "Present"} )
                </em>
              </p>
              <p>
                <strong>{edu2Details.InstituteName||"Example School System"}</strong>
              </p>
              <p>{edu2Details.Degree || "FSc in Pre-Engineering"}</p>
              <p>
                <em>
                  ({edu2Details.StartYear || "2012"} -{" "}
                  {edu2Details.PassOutYear || "Present"})
                </em>
              </p>
            </div>
            <div className="projects">
              <h3>PROJECTS</h3>
              <p>
                <strong>{pro1Detail.ProjectName || "Your Project Name"}</strong>
              </p>
              <p>({pro1Detail.languageFramework || "Language/Framework Used"})</p>
              <ul>
                <li>{pro1Detail.Description ||"Sample description of your project"}</li>
              </ul>
              <p>
                <strong>{pro2Detail.ProjectName || "Your Project Name"}</strong>
              </p>
              <p>({pro2Detail.languageFramework || "Language/Framework Used"})</p>
              <ul>
                <li>{pro2Detail.Description ||"Sample description of your project"}</li>
              </ul>
            </div>
            <div className="projects">
              <h3>CERTIFICATE</h3>
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
          </div>
        </div>
      </div>
      <div className="button-containers">
        <p onClick={downloadPDF} className="download-btn">
          Download as PDF
        </p>
        <p onClick={downloadImage} className="download-btn">
          Download as Image
        </p>
      </div>
    </div>
  );
};
export default Template1;
// import React, { useState } from 'react';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
// import './t1.css';
// import htmlDocx from 'html-docx-js/dist/html-docx';

// const Template1 = () => {
//     // State for editing
//     const [profileText, setProfileText] = useState('Creative and dedicated graphic designer with a keen eye for detail and a passion for visual storytelling. Experienced in Adobe Creative Suite and adept at creating designs that resonate with the target audience.');
//     const [profileFontSize, setProfileFontSize] = useState('14px');
//     const [profileFontStyle, setProfileFontStyle] = useState('normal');
//     const [profileColor, setProfileColor] = useState('#000000');

//     const downloadPDF = () => {
//         const input = document.getElementById('resume');

//         html2canvas(input, { scale: 2 })
//           .then((canvas) => {
//             const imgData = canvas.toDataURL('image/png');
//             const pdf = new jsPDF('p', 'mm', 'a4');
//             const pdfWidth = pdf.internal.pageSize.getWidth();
//             const pdfHeight = pdf.internal.pageSize.getHeight();

//             const canvasWidth = canvas.width;
//             const canvasHeight = canvas.height;

//             const ratio = Math.min(pdfWidth / canvasWidth, pdfHeight / canvasHeight);

//             const width = canvasWidth * ratio;
//             const height = canvasHeight * ratio;

//             pdf.addImage(imgData, 'PNG', 0, 0, width, height);
//             pdf.save('My_Resume.pdf');
//           });
//       };
//       const downloadDOC = () => {
//         const content = document.getElementById('resume').innerHTML;
//         const blob = htmlDocx.asBlob(content);
//         const url = URL.createObjectURL(blob);
//         const link = document.createElement('a');
//         link.href = url;
//         link.download = 'My_Resume.docx';
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//       };

//       const downloadImage = () => {
//         const input = document.getElementById('resume');

//         html2canvas(input, { scale: 2 })
//           .then((canvas) => {
//             const link = document.createElement('a');
//             link.href = canvas.toDataURL('image/png');
//             link.download = 'My_Resume.png';
//             document.body.appendChild(link);
//             link.click();
//             document.body.removeChild(link);
//           });
//       };

//     return (
//         <div className='body1'>
//             <div className="t1_container" id="resume">
//                 <div className="header">
//                     <div className="name-title">
//                         <h1>JOHN RESUMGO</h1>
//                         <h2>Graphic Designer</h2>
//                     </div>
//                     <div className="contact-info">
//                         <p>Street Address | City State Zip Code</p>
//                         <p>(123) 456-7890</p>
//                         <p>email@address.com</p>
//                     </div>
//                 </div>
//                 <div className="content">
//                     <div className="sidebar">
//                         <div className="profile">
//                             <h3>PROFILE</h3>
//                             <p
//                                 className='profile-para'
//                                 style={{
//                                     fontSize: profileFontSize,
//                                     fontStyle: profileFontStyle,
//                                     color: profileColor
//                                 }}
//                                 contentEditable
//                                 onBlur={(e) => setProfileText(e.target.innerText)}
//                             >
//                                 {profileText}
//                             </p>
//                             <div>
//                                 <label>Font Size:
//                                     <input
//                                         type="number"
//                                         value={parseInt(profileFontSize)}
//                                         onChange={(e) => setProfileFontSize(`${e.target.value}px`)}
//                                     />
//                                 </label>
//                                 <label>Font Style:
//                                     <select
//                                         value={profileFontStyle}
//                                         onChange={(e) => setProfileFontStyle(e.target.value)}
//                                     >
//                                         <option value="normal">Normal</option>
//                                         <option value="italic">Italic</option>
//                                     </select>
//                                 </label>
//                                 <label>Color:
//                                     <input
//                                         type="color"
//                                         value={profileColor}
//                                         onChange={(e) => setProfileColor(e.target.value)}
//                                     />
//                                 </label>
//                             </div>
//                         </div>
//                         {/* Add similar sections for skills, certificates, etc. */}
//                     </div>
//                     <div className="main-content">
//                         {/* Add your other sections here */}
//                     </div>
//                 </div>
//             </div>
//             <div className="button-container">
//                 <button onClick={downloadPDF} className="download-btn">Download as PDF</button>
//                 <button onClick={downloadDOC} className="download-btn">Download as DOC</button>
//                 <button onClick={downloadImage} className="download-btn">Download as Image</button>
//             </div>
//         </div>
//     );
// };

// export default Template1;
