import { color } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import Template1 from "../components/ResumeTemplates/t1";

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
  else if(templateID == 2){
    return(
        <><Navbar /></>
        
    )

  }
}
export default Display;
