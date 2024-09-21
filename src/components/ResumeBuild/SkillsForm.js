import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './SuggestionBox.css';

const SkillsForm = ({ formData, setFormData }) => {
  const [visibleFields, setVisibleFields] = useState(3);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const allSuggestions = {
    "web developer": ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git"],
    "frontend developer": ["HTML", "CSS", "JavaScript", "React", "Vue.js", "Webpack"],
    "backend developer": ["Node.js", "Express", "Python", "Django", "Ruby on Rails", "SQL"],
    "full stack developer": ["JavaScript", "React", "Node.js", "Express", "MongoDB", "SQL"],
    "data scientist": ["Python", "R", "SQL", "Pandas", "NumPy", "Machine Learning"],
    "machine learning engineer": ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Deep Learning", "NLP"],
    "data engineer": ["Python", "SQL", "Apache Spark", "Kafka", "ETL", "Big Data"],
    "software engineer": ["Java", "C++", "Python", "Algorithms", "Data Structures", "System Design"],
    "devops engineer": ["Docker", "Kubernetes", "AWS", "Terraform", "CI/CD", "Bash/Shell Scripting"],
    "cloud engineer": ["AWS", "Azure", "Google Cloud", "Terraform", "Kubernetes", "Docker"],
    "cybersecurity specialist": ["Network Security", "Ethical Hacking", "Firewalls", "Penetration Testing", "Encryption", "SIEM"],
    "blockchain developer": ["Solidity", "Ethereum", "Smart Contracts", "Web3.js", "Cryptography", "DeFi"],
    "ai engineer": ["Python", "TensorFlow", "PyTorch", "Deep Learning", "Computer Vision", "NLP"],
    "product manager": ["Agile Methodologies", "Product Roadmap", "User Research", "Stakeholder Management", "Market Analysis", "JIRA"],
    "ux/ui designer": ["Sketch", "Figma", "Adobe XD", "User Research", "Prototyping", "Wireframing"],
    "ux/ui": ["Sketch", "Figma", "Adobe XD", "User Research", "Prototyping", "Wireframing"],
    "ui": ["Sketch", "Figma", "Adobe XD", "User Research", "Prototyping", "Wireframing"],
    "ui/ux designer": ["Sketch", "Figma", "Adobe XD", "User Research", "Prototyping", "Wireframing"],
    "mobile app developer": ["React Native", "Flutter", "Swift", "Kotlin", "Java", "Mobile UI/UX"],
    "site reliability engineer": ["Monitoring", "Kubernetes", "CI/CD", "Incident Management", "SRE Principles", "Infrastructure as Code"],
    "business analyst": ["Data Analysis", "SQL", "Business Intelligence", "Stakeholder Management", "Process Improvement", "Agile Methodologies"],
    "qa engineer": ["Selenium", "JUnit", "Automated Testing", "Manual Testing", "Bug Tracking", "Test Cases"],
    "game developer": ["Unity", "C#", "Unreal Engine", "C++", "3D Modeling", "Game Physics"],
    "vr/ar developer": ["Unity", "Unreal Engine", "C#", "3D Modeling", "Augmented Reality", "Virtual Reality"],
    "robotics engineer": ["ROS", "C++", "Python", "Embedded Systems", "Mechanical Design", "Control Systems"],
    "digital marketer": ["SEO", "Content Marketing", "Social Media", "Google Analytics", "PPC", "Email Marketing"],
    "salesforce developer": ["Apex", "Visualforce", "Salesforce Lightning", "SOQL", "CRM", "Salesforce API"],
    "e-commerce specialist": ["Shopify", "WooCommerce", "Digital Marketing", "SEO", "PPC", "Content Management"],
    "bi developer": ["Power BI", "Tableau", "SQL", "Data Warehousing", "ETL", "Business Intelligence"],
    "cloud architect": ["AWS", "Azure", "Google Cloud", "Cloud Infrastructure", "Cloud Security", "Networking"],
    "network engineer": ["Cisco", "Network Security", "Firewall Management", "Routing & Switching", "VPNs", "Network Architecture"],
    "content creator": ["Video Editing", "Social Media Management", "SEO", "Graphic Design", "Copywriting", "Content Strategy"],
    "data analyst": ["Excel", "SQL", "Tableau", "Data Visualization", "Statistical Analysis", "Python"],
    "business intelligence analyst": ["Power BI", "Tableau", "SQL", "Data Modeling", "Data Warehousing", "Business Analytics"],
    "enterprise architect": ["Enterprise Architecture Frameworks", "TOGAF", "System Integration", "Business Process Modeling", "Strategic Planning"],
    "crm developer": ["Salesforce", "Microsoft Dynamics", "CRM Customization", "Data Migration", "Workflow Automation"],
    "health informatics specialist": ["Health IT Systems", "Electronic Health Records (EHR)", "Healthcare Data Analysis", "Clinical Informatics", "Interoperability"],
    "iot developer": ["IoT Protocols", "Embedded Systems", "Sensor Integration", "Data Streaming", "IoT Platforms"],
    "ux researcher": ["User Interviews", "Surveys", "Usability Testing", "Persona Development", "Journey Mapping"],
    "ar/vr designer": ["3D Modeling", "Unity", "Unreal Engine", "User Experience Design", "Augmented Reality"],
    "quantitative analyst": ["Mathematical Modeling", "Statistical Analysis", "Financial Modeling", "Programming (Python/R)"],
    "financial analyst": ["Financial Modeling", "Excel", "Investment Analysis", "Data Interpretation", "Market Research"],
    "operations manager": ["Process Optimization", "Supply Chain Management", "Project Management", "Performance Metrics", "Resource Allocation"],
    "technical writer": ["Technical Documentation", "API Documentation", "User Manuals", "Content Strategy", "Editing/Proofreading"],
    "marketing analyst": ["Market Research", "Data Analysis", "SEO/SEM", "Consumer Behavior", "Competitive Analysis"],
    "startup founder": ["Business Development", "Fundraising", "Product Development", "Strategic Planning", "Growth Hacking"],
    // Add more roles and corresponding suggestions as needed
};


  useEffect(() => {
    // Automatically show the suggestion box after the component mounts
    const timer = setTimeout(() => {
      setShowSuggestion(true);
    }, 500); // Delay before showing the suggestion box

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      skill: {
        ...prevFormData.skill,
        [name]: value
      }
    }));

    // Filter suggestions based on user input
    const role = value.toLowerCase();
    if (allSuggestions[role]) {
      setFilteredSuggestions(allSuggestions[role]);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const addSkillField = () => {
    if (visibleFields < 6) {
      setVisibleFields(visibleFields + 1);
    }
  };

  const handleSuggestionClose = () => {
    setShowSuggestion(false);
  };

  return (
    <div className="form-section">
      <h2 className="form-title">Skills</h2>
      <div className="form-section-skillHobies">
        <div className="AllForm-entry">
          <div className="form-group-container">
            {visibleFields >= 1 && (
              <div className="form-group">
                <label htmlFor="skills">Skill 1</label>
                <input
                  type="text"
                  name="skill1"
                  value={formData.skill.skill1 || ""}
                  onChange={handleChange}
                />
              </div>
            )}
            {visibleFields >= 2 && (
              <div className="form-group">
                <label htmlFor="skills">Skill 2</label>
                <input
                  type="text"
                  name="skill2"
                  value={formData.skill.skill2 || ""}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
          <div className="form-group-container">
            {visibleFields >= 3 && (
              <div className="form-group">
                <label htmlFor="skills">Skill 3</label>
                <input
                  type="text"
                  name="skill3"
                  value={formData.skill.skill3 || ""}
                  onChange={handleChange}
                />
              </div>
            )}
            {visibleFields >= 4 && (
              <div className="form-group">
                <label htmlFor="skills">Skill 4</label>
                <input
                  type="text"
                  name="skill4"
                  value={formData.skill.skill4 || ""}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
          <div className="form-group-container">
            {visibleFields >= 5 && (
              <div className="form-group">
                <label htmlFor="skills">Skill 5</label>
                <input
                  type="text"
                  name="skill5"
                  value={formData.skill.skill5 || ""}
                  onChange={handleChange}
                />
              </div>
            )}
            {visibleFields >= 6 && (
              <div className="form-group">
                <label htmlFor="skills">Skill 6</label>
                <input
                  type="text"
                  name="skill6"
                  value={formData.skill.skill6 || ""}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
          {visibleFields < 6 && (
            <div className="add-AllForm-text" onClick={addSkillField}>
              <p>Add another skill</p>
            </div>
          )}
        </div>
      </div>

      {/* Suggestion Box */}
      <AnimatePresence>
        {showSuggestion && filteredSuggestions.length > 0 && (
          <motion.div
            className="suggestion-box"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button className="suggestion-close" onClick={handleSuggestionClose}>X</button>
            <h3>Skill Suggestions</h3>
            <ul>
              {filteredSuggestions.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SkillsForm;
