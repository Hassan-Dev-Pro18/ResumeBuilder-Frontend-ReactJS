import React, { useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "./AnalysisContent.css";
import Loading from "../ResumeBuild/Loading";
import { FaPlus, FaMinus } from "react-icons/fa";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AnalysisContent = () => {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [loading, setLoading] = useState(false); // New state for loading

  const handleFileChange = (event) => {
    const sfile = event.target.files[0];
    if (sfile) {
      setSelectedFileName(sfile.name);
    } else {
      setSelectedFileName(""); // Clear if no file is selected
    }
    setFile(sfile);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      setError("Please upload a resume file.");
      return;
    }

    setLoading(true); // Start loading

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(
        "http://localhost:5000/upload_resume",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setResponse(res.data);
      setError("");
    } catch (err) {
      setError("Error uploading the file.");
      toast.error("Error uploading the file. Please try again.")
      console.error(err);
    } finally {
      setLoading(false); // End loading
    }
  };

  const toggleAnswer = (index) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

  const addFooter = (doc) => {
    const pageCount = doc.internal.getNumberOfPages();
    doc.setFontSize(10);
    doc.setTextColor("#999999");
  
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      // Line separator above the footer
      doc.line(14, 282, 200, 282);
  
      // Footer content
      doc.setFontSize(10);
      doc.text("Resumify © 2024", 14, 290);

      doc.setFontSize(10);
      doc.text("resumify@gmail.com",200,290,{align:"right"})
  
      // Optional: Add a logo to the footer (Replace 'logo.png' with your logo's base64 or URL)
      // doc.addImage('logo.png', 'PNG', 180, 285, 15, 15);
  
      // Page number (centered)
      doc.text(`Page ${i} of ${pageCount}`, 105, 290, { align: "center" });
    }
  };
  
  const downloadReport = () => {
    const doc = new jsPDF();
  
    // Custom Colors
    const primaryColor = "#003140";
    const secondaryColor = "#333333";
  
    // Add Header
    doc.setFontSize(16);
    doc.setTextColor(primaryColor);
    doc.text("Resumify", 14, 15);
    doc.setFontSize(10);
    doc.setTextColor(secondaryColor);
    doc.text("Generated on: " + new Date().toLocaleDateString(), 160, 15);
  
    // Title
    doc.setFontSize(20);
    doc.setTextColor(primaryColor);
    doc.text("Resume Analysis Report", 14, 30);
    doc.setLineWidth(0.5);
    doc.line(14, 32, 200, 32); // Horizontal line
  
    let y = 40;
  
    // Personal Information Section
    doc.setFontSize(16);
    doc.setTextColor(primaryColor);
    doc.text("Personal Information", 14, y);
    y += 10;
    doc.setTextColor(secondaryColor);
    doc.setFontSize(10);
    doc.text(`Name: ${response.name}`, 14, y);
    y += 8;
    doc.text(`Email: ${response.email}`, 14, y);
    y += 8;
    doc.text(`Mobile Number: ${response.mobile_number}`, 14, y);
    y += 8;
    doc.text(`Number of Pages: ${response.no_of_pages}`, 14, y);
  
    y += 10;
  
    // Resume Score Section
    doc.setFontSize(16);
    doc.setTextColor(primaryColor);
    doc.text("Resume Score", 14, y);
    y += 10;
    doc.setFontSize(14);
    doc.setTextColor(secondaryColor);
    doc.setFillColor(primaryColor);
    doc.rect(14, y - 7, 30, 10, "FD"); // Rectangular background
    doc.setTextColor("#FFFFFF");
    doc.text(`${response.resume_score}`, 19, y);
    y += 10;
  
    // Skills Section
    doc.setTextColor(primaryColor);
    doc.setFontSize(16);
    doc.text("Skills", 14, y);
    y += 10;
    doc.setTextColor(secondaryColor);
    doc.setFontSize(10);
    const skillsText = doc.splitTextToSize(response.skills.join(", "), 180);
    doc.text(skillsText, 14, y);
    y += skillsText.length * 8;
  
    y += 10;
  
    // Recommended Skills Section
    doc.setFontSize(16);
    doc.setTextColor(primaryColor);
    doc.text("Recommended Skills", 14, y);
    y += 10;
    doc.setTextColor(secondaryColor);
    doc.setFontSize(10);
    const recommendedSkillsText = doc.splitTextToSize(response.recommended_skills.join(", "), 180);
    doc.text(recommendedSkillsText, 14, y);
    y += recommendedSkillsText.length * 8;
  
    y += 10;
  
    // Job Title Section
    doc.setFontSize(16);
    doc.setTextColor(primaryColor);
    doc.text("Suggested Job Titles", 14, y);
    y += 10;
    doc.setTextColor(secondaryColor);
    doc.setFontSize(10);
    const jobTitleText = doc.splitTextToSize(response.suggest_job_title.join(", "), 180);
    doc.text(jobTitleText, 14, y);
    y += jobTitleText.length * 8;
  
    y += 10;
  
    // Networking Opportunities Section
    doc.setFontSize(16);
    doc.setTextColor(primaryColor);
    doc.text("Networking Opportunities", 14, y);
    y += 10;
    doc.setTextColor(secondaryColor);
    doc.setFontSize(10);
    const networkingText = doc.splitTextToSize(response.networking.join(", "), 180);
    doc.text(networkingText, 14, y);
    y += networkingText.length * 8;
  
    y += 10;
  
    // Recommended Courses Section
    if (y > 270) {
      doc.addPage();
      y = 20;
    }
    doc.setFontSize(16);
    doc.setTextColor(primaryColor);
    doc.text("Recommended Courses", 14, y);
    y += 10;
    const courses = response.recommended_courses.map(course => [course[0], course[1]]);
    doc.autoTable({
      head: [["Course Name", "Link"]],
      body: courses,
      startY: y,
      margin: { top: 10 },
      styles: { fontSize: 10, cellPadding: 2 },
      headStyles: { fillColor: primaryColor, textColor: "#FFFFFF" },
      bodyStyles: { textColor: secondaryColor },
    });
  
    y = doc.autoTable.previous.finalY + 20;
  
    // Recommended Interview Questions Section
    if (y > 270) {
      doc.addPage();
      y = 20;
    }
    doc.setFontSize(16);
    doc.setTextColor(primaryColor);
    doc.text("Recommended Interview Questions", 14, y);
    y += 10;
  
    response.recommended_interview_questions.forEach((item, index) => {
      const questionText = doc.splitTextToSize(`Q${index + 1}: ${item.question}`, 180);
      const answerText = doc.splitTextToSize(`A: ${item.answer}`, 180);
  
      if (y + (questionText.length + answerText.length) * 8 > 270) {
        doc.addPage();
        y = 20;
      }
  
      doc.setFontSize(10);
      doc.setTextColor(secondaryColor);
      doc.text(questionText, 14, y);
      y += questionText.length * 8 + 5;
  
      doc.text(answerText, 14, y);
      y += answerText.length * 8 + 10;
    });
  
    // Add Footer
    addFooter(doc);
  
    doc.save("resume_analysis_report.pdf");
  };
  

  return (
    
    <div className="mainBody">
      <div className="upper-head-about">
        <h1>Smart Analyzer | Resume Builder</h1>
        <p>
          Firstly upload your resume and our resume analyzer can review your
          resume and suggest/recommend you skills, courses, networks, and much
          more.
        </p>
      </div>
      <h1 className="upload-title">Upload Your Resume</h1>

      <form onSubmit={handleSubmit} className="upload-form">
        <label htmlFor="file-upload" className="file-upload-label">
          <input
            type="file"
            id="file-upload"
            onChange={handleFileChange}
            accept="application/pdf"
            className="file-upload-input"
          />
          <i className="fas fa-file-upload"></i>
          <span>Browse File</span>
        </label>

        <button type="submit" className="upload-button">
          <i className="fas fa-cloud-upload-alt"></i> Upload
        </button>
        
      </form>
      <ToastContainer />
      {selectedFileName && <div className="file-name">{selectedFileName}</div>}
      {error && <p className="error">{error}</p>}
      {loading && (
        <div className="loading-container">
          <Loading />
        </div>
      )}
      {response && (
        <div className="results">
          <h1 className="report-main-heading">Analysis Report</h1>
          <h2 className="each-section-heading">Personal Information</h2>
          <section className="analysis-section">
            <div className="data-show-below-each-section p-info">
              {/* <p>
                <strong>Name:</strong> {response.name}
              </p>
              <p>
                <strong>Email:</strong> {response.email}
              </p>
              <p>
                <strong>Mobile Number:</strong> {response.mobile_number}
              </p> */}
              <p>
                <strong>Number of Pages:</strong> {response.no_of_pages}
              </p>
            </div>
          </section>
          <h2 className="each-section-heading">Resume Score</h2>
          <section className="analysis-section">
            <p className="data-show-below-each-section">
              The score of your resume is: {' '} 
              {response.resume_score}
            </p>
          </section>

          <h2 className="each-section-heading">Skills</h2>
          <section className="skills analysis-section">
          <p>Skills Mention in your resume:</p>
            <div className="data-show-below-each-section">
              
              <ul>
                {response.skills.map((skill, index) => (
                  <li key={index} className="analysis-li">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <h2 className="each-section-heading">Recommended Skills</h2>
          <section className="analysis-section">
            <div className="skills-container">
              {response.recommended_skills.map((skill, index) => (
                <span key={index} className="skill-item">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <h2 className="each-section-heading">Recommended Job Title</h2>
          <section className="skills analysis-section">
            <p>Recommended jobs title based on analysis of resume:</p>
            <div className="data-show-below-each-section">
              <ul>
                {response.suggest_job_title.map((skill, index) => (
                  <li key={index} className="analysis-li">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <h2 className="each-section-heading">
            Recommended Networking Opportunities
          </h2>
          <section className="skills analysis-section">
            <p>
              Recommended networking opportunities based on analysis of resume:
            </p>
            <div className="data-show-below-each-section">
              <ul>
                {response.networking.map((skill, index) => (
                  <li key={index} className="analysis-li">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <h2 className="each-section-heading">Recommended Courses</h2>
          <section className="analysis-section">
            <table>
              <thead>
                <tr>
                  <th>Course Name</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                {response.recommended_courses.map(([name, link], index) => (
                  <tr key={index}>
                    <td>{name}</td>
                    <td>
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="analysis-a"
                      >
                        View Course
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <h2 className="each-section-heading">
            Recommended Interview Questions
          </h2>
          <section className="analysis-section">
            {response.recommended_interview_questions.map((item, index) => (
              <div key={index} className="question-item">
                <div
                  className="question-header"
                  onClick={() => toggleAnswer(index)}
                >
                  <h3>{item.question}</h3>
                  {expandedQuestion === index ? <FaMinus /> : <FaPlus />}
                </div>
                {expandedQuestion === index && (
                  <div className="answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </section>
          <button onClick={downloadReport} className="download-report-btn">
            Download Report
          </button>
        </div>
      )}
    </div>
  );
};

export default AnalysisContent;
