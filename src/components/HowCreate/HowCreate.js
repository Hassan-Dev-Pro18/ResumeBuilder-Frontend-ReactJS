import "./HowCreate.css";
import CreationData from "./creationData";
import log1 from "../../assets/login2.png";
import log2 from "../../assets/login1.png";
import temp1 from "../../assets/template1.png";
import temp2 from "../../assets/template2.jpg";
import edit1 from "../../assets/edit1.png";
import edit2 from "../../assets/edit2.png";
import fill1 from "../../assets/fill1.png";
import fill2 from "../../assets/fill2.png";
import save1 from "../../assets/save1.png";
import save2 from "../../assets/save2.png";

const HowCreate = () => {
  return (
    <div className="howCreate">
      <h4 >Create perfect resumes for the modern job market</h4>
      <p className="pCLass">
        Creating a resume has never been this easy! In five simple steps, create
        the perfect document to impress hiring managers and employers. Minimum
        time, maximum professional quality.
      </p>
      <CreationData 
        className="first-step"
        heading="1.Login/Sign Up"
        text="First you have to login to create resume. If you don't have an
      account,create an account through sign up page and then login to
      website. After loging into website, you have an access to create
      resume and analysis of the resume"
        img1={log1}
        img2={log2}
      />
      <CreationData
        className="first-step-reverse"
        heading="2.Pick a Template"
        text="After login you can pic a template from template module."
        img1={temp1}
        img2={temp2}
      />
      <CreationData
        className="first-step"
        heading="3.Edit Your Resume"
        text="Make the resume truly your own. Edit the resume easily by click on edit option in view of complete resume.
     "
        img1={edit1}
        img2={edit2}
      />
      <CreationData
        className="first-step-reverse"
        heading="4.Fill the Forms"
        text="Fill in your resume information including name of user, address, contact, 
        their education detail, certificate detail, projects detail, skills detail, hobbies, certificates etc. "
        img1={fill1}
        img2={fill2}
      />
      <CreationData
        className="first-step"
        heading="5.Download Resume"
        text="Arter creating, editing and customizing the layout of template you can download resume in PDF formet free of cost."
        img1={save1}
        img2={save2}
      />
    </div>
  );
};

export default HowCreate;
