import { color } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import Template1 from "../components/ResumeTemplates/Template1/t1";
import Template2 from "../components/ResumeTemplates/Template2/t2";
import Template3 from "../components/ResumeTemplates/Template3/t3";
import Template4 from "../components/ResumeTemplates/Template4/t4";
import Template5 from "../components/ResumeTemplates/Template5/t5";
import Template6 from "../components/ResumeTemplates/Template6/t6";
import Template7 from "../components/ResumeTemplates/Template7/t7";
import Template8 from "../components/ResumeTemplates/Template8/t8";
import Template9 from "../components/ResumeTemplates/Template9/t9";
function Display() {
  const templateID = localStorage.getItem("selectedTemplateId");

  if (templateID == 1) {
    return (
      <>
        <Navbar />
        <Template1 />
      </>
    );
  }
  else if (templateID == 2) {
    return (
      <>
        <Navbar />
        <Template2 />
      </>
    );
  }
  else if (templateID == 3) {
    return (
      <>
        <Navbar />
        <Template6 />
      </>
    );
  }
  else if(templateID == 5){
    return(
        <><Navbar />
        <Template3/>
        </>
        
    )

  }
  else if(templateID == 6){
    return(
        <><Navbar />
        <Template4/>
        </>
        
    )

  }
  else if(templateID == 7){
    return(
        <><Navbar />
        <Template9/>
        </>
        
    )

  }
  else if(templateID == 9){
    return(
        <><Navbar />
        <Template5/>
        </>
        
    )

  }
  else if(templateID == 10){
    return(
        <><Navbar />
        <Template7/>
        </>
        
    )

  }
  else if(templateID == 11){
    return(
        <><Navbar />
        <Template8/>
        </>
        
    )

  }
}
export default Display;
