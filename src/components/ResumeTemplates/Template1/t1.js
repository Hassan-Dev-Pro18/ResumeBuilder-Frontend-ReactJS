import React, { useEffect, useState } from "react";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./t1.css";
import UserImage from "../../Template/assets/user.jpg";

import {
  FaHome,
  FaPhone,
  FaEnvelope,
  FaEdit,
  FaDelete,
  FaTrash,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import LoadingData from "../LoadingData";
const Template1 = () => {
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
  const [showDeleteCont, setShowDeleteCont] = useState(false);
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
      console.log(storedImage);
      setImage(storedImage);
    }
  }, []);

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
  const changeTemplate = () =>{
    
    navigate('/changeTemplate', { replace: true })
  }
  const handleDeleteSection = (section) => {
    if (section === "skills") {
      setSkillData(null);
    } else if (section === "contact") {
      const { contact, address, email, ...rest } = personalInfo;
      setPersonalInfo(rest);
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
  const navigate = useNavigate();
  const handleEditClick = () => {
    navigate("/resumeBuild");
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
        <p onClick={changeTemplate} className="download-btn">
          Change Template
        </p>
      </div>
      <div className="body1">
        <div className="t1_container" id="resume">
          <FaEdit className="edit-icon" onClick={handleEditClick} />
          <div className="t1-header">
            <div className="t1-name-title">
              <h1 className="t1-h1">
                {personalInfo.firstName} {personalInfo.lastName}
              </h1>
              <p style={{ paddingLeft: "45px", fontWeight: "bold" }}>
                {personalInfo.linkedin}
              </p>
            </div>
            <div className="image-t1">
              <img
                src={image || UserImage}
                alt=""
                className="t1-profile-image"
              />
            </div>
            <div
              className="t1-contact-info"
              onMouseEnter={() => setShowDeleteCont(true)}
              onMouseLeave={() => setShowDeleteCont(false)}
            >
              <div className="t1-delete-header">
                {showDeleteCont && (
                  <span
                    className="t1-delete-icon"
                    onClick={() => handleDeleteSection("contact")}
                    title="Delete Contact Section"
                  >
                    <FaTrash />
                  </span>
                )}
              </div>
              <p className="t1-p">
                <FaHome className="t1-icon" /> {personalInfo.address}
              </p>
              <p className="t1-p">
                <FaPhone className="t1-icon" /> {personalInfo.countryCode} {" "}{personalInfo.contact}
              </p>
              <p className="t1-p">
                <FaEnvelope className="t1-icon" /> {personalInfo.email}
              </p>
            </div>
          </div>
          <div className="t1-content">
            <div className="t1-sidebar">
              {personalInfo.objective && (
                <div
                  className="t1-profile"
                  onMouseEnter={() => setShowDeletePro(true)}
                  onMouseLeave={() => setShowDeletePro(false)}
                >
                  <div className="t1-delete-header">
                    <h3 className="t1-sidebar-h3">Profile</h3>
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
                  <p>{personalInfo.objective}</p>
                </div>
              )}

              {skillData && (
                <div
                  className="t1-skills"
                  onMouseEnter={() => setShowDeleteIcon(true)}
                  onMouseLeave={() => setShowDeleteIcon(false)}
                >
                  <div className="t1-delete-header">
                    <h3 className="t1-sidebar-h3">SKILLS</h3>
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

                  <ul className="t1-ul">
                    {skillData.skill1 && (
                      <li className="t1-li"> {skillData.skill1}</li>
                    )}
                    {skillData.skill2 && (
                      <li className="t1-li"> {skillData.skill2}</li>
                    )}
                    {skillData.skill3 && (
                      <li className="t1-li"> {skillData.skill3}</li>
                    )}
                    {skillData.skill4 && (
                      <li className="t1-li"> {skillData.skill4}</li>
                    )}
                    {skillData.skill5 && (
                      <li className="t1-li"> {skillData.skill5}</li>
                    )}
                    {skillData.skill6 && (
                      <li className="t1-li"> {skillData.skill6}</li>
                    )}
                  </ul>
                </div>
              )}
              {hobbiesData && (
                <div
                  className="t1-hobbies"
                  onMouseEnter={() => setShowDeleteHobbies(true)}
                  onMouseLeave={() => setShowDeleteHobbies(false)}
                >
                  <div className="t1-delete-header">
                    <h3 className="t1-sidebar-h3">HOBBIES</h3>
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
                  <ul className="t1-ul">
                    {hobbiesData.hobby1 && (
                      <li className="t1-li">{hobbiesData.hobby1}</li>
                    )}
                    {hobbiesData.hobby2 && (
                      <li className="t1-li">{hobbiesData.hobby2}</li>
                    )}
                    {hobbiesData.hobby3 && (
                      <li className="t1-li">{hobbiesData.hobby3}</li>
                    )}
                    {hobbiesData.hobby4 && (
                      <li className="t1-li">{hobbiesData.hobby4}</li>
                    )}
                    {hobbiesData.hobby5 && (
                      <li className="t1-li">{hobbiesData.hobby5}</li>
                    )}
                  </ul>
                </div>
              )}
              {referenceData && (
                <div
                  className="t1-hobbies"
                  onMouseEnter={() => setShowDeleteRef(true)}
                  onMouseLeave={() => setShowDeleteRef(false)}
                >
                  <div className="t1-delete-header">
                    <h3 className="t1-sidebar-h3">Reference</h3>
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
                  <ul className="t1-ul">
                    <li className="t1-li">
                      {referenceData.reference1}
                      {referenceData.reference2}
                      {referenceData.reference3}
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="t1-main-content">
              {(exp1Detail || exp2Detail || exp3Detail) && (
                <div
                  className="t1-experience"
                  onMouseEnter={() => setShowDeleteExp(true)}
                  onMouseLeave={() => setShowDeleteExp(false)}
                >
                  <div className="t1-delete-header">
                    <h3>Experience</h3>
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
                  <div className="t1-job">
                    {exp1Detail && (
                      <div>
                        <p className="t1-job-p">
                          {exp1Detail.JobTitle && (
                            <strong>{exp1Detail.JobTitle}</strong>
                          )}
                          {exp1Detail.StartYear && exp1Detail.EndYear && (
                            <em>
                              ({exp1Detail.StartYear} - {exp1Detail.EndYear})
                            </em>
                          )}
                        </p>
                        <p className="t1-job-p">
                          <span>{exp1Detail.CompanyName}</span>
                        </p>
                        <ul className="t1-job-ul">
                          {exp1Detail.Responsibilties && (
                            <li className="t1-job-li">
                              {exp1Detail.Responsibilties}
                            </li>
                          )}
                        </ul>
                      </div>
                    )}

                    {exp2Detail && (
                      <div>
                        <p className="t1-job-p">
                          {exp2Detail.JobTitle && (
                            <strong>{exp2Detail.JobTitle}</strong>
                          )}
                          {exp2Detail.StartYear && exp2Detail.EndYear && (
                            <em>
                              ({exp2Detail.StartYear} - {exp2Detail.EndYear})
                            </em>
                          )}
                        </p>
                        <p className="t1-job-p">
                          <span>{exp2Detail.CompanyName}</span>
                        </p>
                        <ul className="t1-job-ul">
                          {exp2Detail.Responsibilties && (
                            <li className="t1-job-li">
                              {exp2Detail.Responsibilties}
                            </li>
                          )}
                        </ul>
                      </div>
                    )}
                    {exp3Detail && (
                      <div>
                        <p className="t1-job-p">
                          {exp3Detail.JobTitle && (
                            <strong>{exp3Detail.JobTitle}</strong>
                          )}
                          {exp3Detail.StartYear && exp3Detail.EndYear && (
                            <em>
                              ({exp3Detail.StartYear} - {exp3Detail.EndYear})
                            </em>
                          )}
                        </p>
                        <p className="t1-job-p">
                          <span>{exp3Detail.CompanyName}</span>
                        </p>
                        <ul className="t1-job-ul">
                          {exp3Detail.Responsibilties && (
                            <li className="t1-job-li">
                              {exp3Detail.Responsibilties}
                            </li>
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
              {(edu1Details || edu2Details || edu3Details) && (
                <div
                  className="t1-education"
                  onMouseEnter={() => setShowDeleteEdu(true)}
                  onMouseLeave={() => setShowDeleteEdu(false)}
                >
                  <div className="t1-delete-header">
                    <h3>EDUCATION</h3>
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
                      <p className="t1-main-p">
                        <strong>{edu1Details.InstituteName}</strong>
                      </p>
                      <p>{edu1Details.Degree}</p>
                      <p className="t1-main-p">
                        {edu1Details.StartYear && edu1Details.PassOutYear && (
                          <em>
                            ({edu1Details.StartYear} - {edu1Details.PassOutYear}
                            )
                          </em>
                        )}
                      </p>
                    </div>
                  )}
                  {edu2Details && (
                    <div>
                      <p className="t1-main-p">
                        <strong>{edu2Details.InstituteName}</strong>
                      </p>
                      <p>{edu2Details.Degree}</p>
                      <p className="t1-main-p">
                        {edu2Details.StartYear && edu2Details.PassOutYear && (
                          <em>
                            ({edu2Details.StartYear} - {edu2Details.PassOutYear}
                            )
                          </em>
                        )}
                      </p>
                    </div>
                  )}
                  {edu3Details && (
                    <div>
                      <p className="t1-main-p">
                        <strong>{edu3Details.InstituteName}</strong>
                      </p>
                      <p>{edu3Details.Degree}</p>
                      <p className="t1-main-p">
                        {edu3Details.StartYear && edu3Details.PassOutYear && (
                          <em>
                            ({edu3Details.StartYear} - {edu3Details.PassOutYear}
                            )
                          </em>
                        )}
                      </p>
                    </div>
                  )}
                </div>
              )}
              {(pro1Detail || pro2Detail || pro3Detail) && (
                <div
                  className="t1-projects"
                  onMouseEnter={() => setShowDeleteProj(true)}
                  onMouseLeave={() => setShowDeleteProj(false)}
                >
                  <div>
                    <div className="t1-delete-header">
                      <h3>PROJECT</h3>
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
                    {pro1Detail && (
                      <div>
                        <p className="t1-main-p">
                          <strong>{pro1Detail.ProjectName}</strong>
                        </p>
                        {pro1Detail.languageFramework && (
                          <p className="t1-main-p">
                            ({pro1Detail.languageFramework})
                          </p>
                        )}

                        {pro1Detail.Description && (
                          <ul className="t1-main-ul">
                            <li className="t1-main-li">
                              {pro1Detail.Description}
                            </li>
                          </ul>
                        )}
                      </div>
                    )}
                    {pro2Detail && (
                      <div>
                        <p className="t1-main-p">
                          <strong>{pro2Detail.ProjectName}</strong>
                        </p>
                        {pro2Detail.languageFramework && (
                          <p className="t1-main-p">
                            ({pro2Detail.languageFramework})
                          </p>
                        )}
                        {pro2Detail.Description && (
                          <ul className="t1-main-ul">
                            <li className="t1-main-li">
                              {pro2Detail.Description}
                            </li>
                          </ul>
                        )}
                      </div>
                    )}
                    {pro3Detail && (
                      <div>
                        <p className="t1-main-p">
                          <strong>{pro3Detail.ProjectName}</strong>
                        </p>
                        {pro3Detail.languageFramework && (
                          <p className="t1-main-p">
                            ({pro3Detail.languageFramework})
                          </p>
                        )}
                        {pro3Detail.Description && (
                          <ul className="t1-main-ul">
                            <li className="t1-main-li">
                              {pro3Detail.Description}
                            </li>
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
              {(cert1Detail || cert2Detail || cert3Detail) && (
                <div
                  className="t1-projects"
                  onMouseEnter={() => setShowDeleteCert(true)}
                  onMouseLeave={() => setShowDeleteCert(false)}
                >
                  <div className="t1-delete-header">
                    <h3>CERTIFICATE</h3>
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
                  {cert1Detail && (
                    <div>
                      <p className="t1-main-p">
                        <strong>{cert1Detail.certificateName}</strong>
                      </p>
                      <p className="t1-main-p">
                        {cert1Detail.IssuingOrg}{" "}
                        {cert1Detail.IssueDate && (
                          <em>({cert1Detail.IssueDate})</em>
                        )}
                      </p>
                    </div>
                  )}
                  {cert2Detail && (
                    <div>
                      <p className="t1-main-p">
                        <strong>{cert2Detail.certificateName}</strong>
                      </p>
                      <p className="t1-main-p">
                        {cert2Detail.IssuingOrg}{" "}
                        {cert2Detail.IssueDate && (
                          <em>({cert2Detail.IssueDate})</em>
                        )}
                      </p>
                    </div>
                  )}
                  {cert3Detail && (
                    <div>
                      <p className="t1-main-p">
                        <strong>{cert3Detail.certificateName}</strong>
                      </p>
                      <p className="t1-main-p">
                        {cert3Detail.IssuingOrg}{" "}
                        {cert3Detail.IssueDate && (
                          <em>({cert3Detail.IssueDate})</em>
                        )}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Template1;
