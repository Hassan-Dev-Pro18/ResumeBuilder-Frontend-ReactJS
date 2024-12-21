import React, { useEffect, useState } from "react";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./t2.css";
import UserImage from "../../Template/assets/user.jpg";

import { FaTrash, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import LoadingData from "../LoadingData";
const Template2 = () => {
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
  const [showDeletePro, setShowDeletePro] = useState(false);
  const [showDeleteExp, setShowDeleteExp] = useState(false);
  const [showDeleteEdu, setShowDeleteEdu] = useState(false);
  const [showDeleteProj, setShowDeleteProj] = useState(false);
  const [showDeleteCert, setShowDeleteCert] = useState(false);
  const [showDeleteIcon, setShowDeleteIcon] = useState(false);
  const [showDeleteHobbies, setShowDeleteHobbies] = useState(false);
  const [showDeleteRef, setShowDeleteRef] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      //Education Data IDs
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
  const handleDeleteSection = (section) => {
    if (section === "skills") {
      setSkillData(null);
    } else if (section === "profile") {
      const { objective, ...rest } = personalInfo;
      setPersonalInfo(rest);
    } else if (section === "education") {
      setedu1Details(null);
      setedu2Details(null);
      setedu3Details(null);
    } else if (section === "experience") {
      setexp1Details(null);
      setexp2Details(null);
      setexp3Details(null);
    } else if (section === "reference") {
      setReferenceData(null);
    } else if (section === "hobbies") {
      setHobbiesData(null);
    } else if (section === "project") {
      setpro1Details(null);
      setpro2Details(null);
      setpro3Details(null);
    } else if (section === "certificate") {
      setcert1Details(null);
      setcert2Details(null);
      setcert3Details(null);
    }
  };
  const downloadPDF = () => {
    localStorage.clear();
    const input = document.getElementById("resume");

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      const ratio = Math.min(pdfWidth / canvasWidth, pdfHeight / canvasHeight);

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
          <div class="t2-container">
            <div class="t2-header">
              <div>
                <h1 className="t2-header-h1">
                  {" "}
                  {personalInfo.firstName} {personalInfo.lastName}
                </h1>
                <h4 className="t2-header-h4">{personalInfo.linkedin}</h4>
                <p className="t2-header-p">
                {personalInfo.countryCode} {" "}{personalInfo.contact} | {personalInfo.email}
                </p>
                <p className="t2-header-p">{personalInfo.address}</p>
              </div>
              <div class="t2-image">
                <img
                  src={image || UserImage}
                  alt="profile pic"
                  className="t2-img"
                />
              </div>
            </div>

            <div class="t2-content">
              <div class="t2-sidebar">
                {skillData && (
                  <section
                    class="t2-skills"
                    onMouseEnter={() => setShowDeleteIcon(true)}
                    onMouseLeave={() => setShowDeleteIcon(false)}
                  >
                    <div className="t1-delete-header">
                      <h2 className="t2-section-h2">Skills</h2>
                      {showDeleteIcon && (
                        <span
                          className="t1-delete-icon"
                          onClick={() => handleDeleteSection("skills")}
                          title="Delete Skills Section"
                        >
                          <FaTrash />
                        </span>
                      )}
                    </div>
                    <ul className="t2-section-ul">
                      {skillData.skill1 && (
                        <li className="t2-section-li">{skillData.skill1}</li>
                      )}
                      {skillData.skill2 && (
                        <li className="t2-section-li">{skillData.skill2}</li>
                      )}
                      {skillData.skill3 && (
                        <li className="t2-section-li">{skillData.skill3}</li>
                      )}
                      {skillData.skill4 && (
                        <li className="t2-section-li">{skillData.skill4}</li>
                      )}
                      {skillData.skill5 && (
                        <li className="t2-section-li">{skillData.skill5}</li>
                      )}
                      {skillData.skill6 && (
                        <li className="t2-section-li">{skillData.skill6}</li>
                      )}
                    </ul>
                  </section>
                )}
                {(edu1Details || edu2Details || edu3Details) && (
                  <section
                    class="t2-education"
                    onMouseEnter={() => setShowDeleteEdu(true)}
                    onMouseLeave={() => setShowDeleteEdu(false)}
                  >
                    <div className="t1-delete-header">
                      <h2 className="t2-section-h2">Education</h2>
                      {showDeleteEdu && (
                        <span
                          className="t1-delete-icon"
                          onClick={() => handleDeleteSection("education")}
                          title="Delete Education Section"
                        >
                          <FaTrash />
                        </span>
                      )}
                    </div>
                    {edu1Details && (
                      <div>
                        <p className="t2-section-p">
                          <strong>{edu1Details.Degree}</strong>
                        </p>
                        <p className="t2-section-p">
                          {edu1Details.InstituteName}
                        </p>
                        {edu1Details && (
                          <p className="t2-section-p">
                            <em>
                              {edu1Details.StartYear} -{" "}
                              {edu1Details.PassOutYear}
                            </em>
                          </p>
                        )}
                      </div>
                    )}
                    <p className="t2-section-p">
                      <strong>{edu2Details.Degree}</strong>
                    </p>
                    <p className="t2-section-p">{edu2Details.InstituteName}</p>
                    {edu2Details && (
                      <p className="t2-section-p">
                        <em>
                          {edu2Details.StartYear} - {edu2Details.PassOutYear}
                        </em>
                      </p>
                    )}
                    <p className="t2-section-p">
                      <strong>{edu3Details.Degree}</strong>
                    </p>
                    <p className="t2-section-p">{edu3Details.InstituteName}</p>
                    {edu3Details && (
                      <p className="t2-section-p">
                        <em>
                          {edu3Details.StartYear} - {edu3Details.PassOutYear}
                        </em>
                      </p>
                    )}
                  </section>
                )}
                {(cert1Detail || cert2Detail || cert3Detail) && (
                  <section
                    class="t2-education"
                    onMouseEnter={() => setShowDeleteCert(true)}
                    onMouseLeave={() => setShowDeleteCert(false)}
                  >
                    <div className="t1-delete-header">
                      <h2 className="t2-section-h2">Certificates</h2>
                      {showDeleteCert && (
                        <span
                          className="t1-delete-icon"
                          onClick={() => handleDeleteSection("certificate")}
                          title="Delete Certificate Section"
                        >
                          <FaTrash />
                        </span>
                      )}
                    </div>
                    <p className="t2-section-p">
                      <strong>{cert1Detail.certificateName}</strong>
                    </p>
                    <p className="t2-section-p">{cert1Detail.IssuingOrg}</p>
                    <p className="t2-section-p">
                      <em>{cert1Detail.IssueDate}</em>
                    </p>
                    <p className="t2-section-p">
                      <strong>{cert2Detail.certificateName}</strong>
                    </p>
                    <p className="t2-section-p">{cert2Detail.IssuingOrg}</p>
                    <p className="t2-section-p">
                      <em>{cert2Detail.IssueDate}</em>
                    </p>

                    <p className="t2-section-p">
                      <strong>{cert3Detail.certificateName}</strong>
                    </p>
                    <p className="t2-section-p">{cert3Detail.IssuingOrg}</p>
                    <p className="t2-section-p">
                      <em>{cert3Detail.IssueDate}</em>
                    </p>
                  </section>
                )}
                {hobbiesData && (
                  <section
                    class="t2-skills"
                    onMouseEnter={() => setShowDeleteHobbies(true)}
                    onMouseLeave={() => setShowDeleteHobbies(false)}
                  >
                    <div className="t1-delete-header">
                      <h2 className="t2-section-h2">Hobbies</h2>
                      {showDeleteHobbies && (
                        <span
                          className="t1-delete-icon"
                          onClick={() => handleDeleteSection("hobbies")}
                          title="Delete Hobbies Section"
                        >
                          <FaTrash />
                        </span>
                      )}
                    </div>
                    <ul className="t2-section-ul">
                      {hobbiesData.hobby1 && (
                        <li className="t2-section-li">{hobbiesData.hobby1}</li>
                      )}
                      {hobbiesData.hobby2 && (
                        <li className="t2-section-li">{hobbiesData.hobby2}</li>
                      )}
                      {hobbiesData.hobby3 && (
                        <li className="t2-section-li">{hobbiesData.hobby3}</li>
                      )}
                      {hobbiesData.hobby4 && (
                        <li className="t2-section-li">{hobbiesData.hobby4}</li>
                      )}
                      {hobbiesData.hobby5 && (
                        <li className="t2-section-li">{hobbiesData.hobby5}</li>
                      )}
                    </ul>
                  </section>
                )}
                {referenceData && (
                  <section
                    class="t2-reference"
                    onMouseEnter={() => setShowDeleteRef(true)}
                    onMouseLeave={() => setShowDeleteRef(false)}
                  >
                    <div className="t1-delete-header">
                      <h2 className="t2-section-h2">Reference</h2>
                      {showDeleteRef && (
                        <span
                          className="t1-delete-icon"
                          onClick={() => handleDeleteSection("reference")}
                          title="Delete Reference Section"
                        >
                          <FaTrash />
                        </span>
                      )}
                    </div>
                    <p className="t2-section-p">{referenceData.reference1}</p>
                    <p className="t2-section-p">{referenceData.reference2}</p>
                    <p className="t2-section-p">{referenceData.reference3}</p>
                  </section>
                )}
              </div>
              <div class="t2-main">
                {personalInfo.objective && (
                  <section
                    class="t2-summary t2-section"
                    onMouseEnter={() => setShowDeletePro(true)}
                    onMouseLeave={() => setShowDeletePro(false)}
                  >
                    <div className="t1-delete-header">
                      <h2 className="t2-section-h2">Profile</h2>
                      {showDeletePro && (
                        <span
                          className="t1-delete-icon"
                          onClick={() => handleDeleteSection("profile")}
                          title="Delete Profile Section"
                        >
                          <FaTrash />
                        </span>
                      )}
                    </div>
                    <p className="t2-section-p"> {personalInfo.objective}</p>
                  </section>
                )}
                {(exp1Detail || exp2Detail || exp3Detail) && (
                  <section
                    class="t2-work-history t2-section"
                    onMouseEnter={() => setShowDeleteExp(true)}
                    onMouseLeave={() => setShowDeleteExp(false)}
                  >
                    <div className="t1-delete-header">
                      <h2 className="t2-section-h2">Work History</h2>
                      {showDeleteExp && (
                        <span
                          className="t1-delete-icon"
                          onClick={() => handleDeleteSection("experience")}
                          title="Delete Experience Section"
                        >
                          <FaTrash />
                        </span>
                      )}
                    </div>
                    <h3 className="t2-job-h3">{exp1Detail.JobTitle}</h3>
                    {exp1Detail.CompanyName && (
                      <p className="t2-section-pw-p">
                        {exp1Detail.CompanyName} | ({exp1Detail.StartYear} -{" "}
                        {exp1Detail.EndYear || "Present"})
                      </p>
                    )}
                    {exp1Detail.Responsibilties && (
                      <ul className="t2-section-ul">
                        <li className="t2-section-li">
                          {exp1Detail.Responsibilties}
                        </li>
                      </ul>
                    )}
                    <h3 className="t2-job-h3">{exp2Detail.JobTitle}</h3>
                    {exp2Detail.CompanyName && (
                      <p className="t2-section-pw-p">
                        {exp2Detail.CompanyName} | ({exp2Detail.StartYear} -{" "}
                        {exp2Detail.EndYear || "Present"})
                      </p>
                    )}
                    {exp2Detail.Responsibilties && (
                      <ul className="t2-section-ul">
                        <li className="t2-section-li">
                          {exp2Detail.Responsibilties}
                        </li>
                      </ul>
                    )}
                    <h3 className="t2-job-h3">{exp3Detail.JobTitle}</h3>
                    {exp3Detail.CompanyName && (
                      <p className="t2-section-pw-p">
                        {exp3Detail.CompanyName} | (
                        {exp3Detail.StartYear || "Present"} -{" "}
                        {exp3Detail.EndYear || "Present"})
                      </p>
                    )}
                    {exp3Detail.Responsibilties && (
                      <ul className="t2-section-ul">
                        <li className="t2-section-li">
                          {exp3Detail.Responsibilties}
                        </li>
                      </ul>
                    )}
                  </section>
                )}
                {(pro1Detail || pro2Detail || pro3Detail) && (
                  <section
                    class="t2-work-history t2-section"
                    onMouseEnter={() => setShowDeleteProj(true)}
                    onMouseLeave={() => setShowDeleteProj(false)}
                  >
                    <div className="t1-delete-header">
                      <h2 className="t2-section-h2">Professional Projects</h2>
                      {showDeleteProj && (
                        <span
                          className="t1-delete-icon"
                          onClick={() => handleDeleteSection("project")}
                          title="Delete Project Section"
                        >
                          <FaTrash />
                        </span>
                      )}
                    </div>
                    <h3 className="t2-job-h3">{pro1Detail.ProjectName}</h3>
                    <p className="t2-section-pw-p">
                      {pro1Detail.languageFramework && (
                        <em>({pro1Detail.languageFramework})</em>
                      )}
                    </p>
                    <ul className="t2-section-ul">
                      {pro1Detail.Description && (
                        <li className="t2-section-li">
                          {pro1Detail.Description}
                        </li>
                      )}
                    </ul>
                    <h3 className="t2-job-h3">{pro2Detail.ProjectName}</h3>
                    <p className="t2-section-pw-p">
                      {pro2Detail.languageFramework && (
                        <em>({pro2Detail.languageFramework})</em>
                      )}
                    </p>
                    <ul className="t2-section-ul">
                      {pro2Detail.Description && (
                        <li className="t2-section-li">
                          {pro2Detail.Description}
                        </li>
                      )}
                    </ul>
                    <h3 className="t2-job-h3">{pro3Detail.ProjectName}</h3>
                    <p className="t2-section-pw-p">
                      {pro3Detail.languageFramework && (
                        <em>({pro3Detail.languageFramework})</em>
                      )}
                    </p>
                    <ul className="t2-section-ul">
                      {pro3Detail.Description && (
                        <li className="t2-section-li">
                          {pro3Detail.Description}
                        </li>
                      )}
                    </ul>
                  </section>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Template2;
