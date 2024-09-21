import "./WhyUse.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import img1 from "../../assets/free.png";
import img2 from "../../assets/fast.png";
import img3 from "../../assets/edit.png";
const WhyUse = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
  return (
    <section className="popular section">
      <div className="secContainer">
        <h6 className="title">
            Why Use The Resumeify Resume Builder?
        </h6>
        <div className="mainContent">
          <div data-aos="fade-up" data-aos-duration="3000" className="singleItem">
            <img src={img1} alt="Image Name" />
            <h5 className="subTitle">Free Creation</h5>
            <p>
              We offer free platform for resume creation. You can create and
              download resume for free. And analysis their resume in free of
              cost.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-duration="2000" className="singleItem">
            <img src={img2} alt="Image Name" />
            <h5>Build a resume in minutes</h5>
            <p>
              Craft a job-winning resume in just a few clicks with our online
              Resume Builder. You can change the colors, and layout of your
              resume to stand out from the competition.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-duration="1000" className="singleItem">
            <img src={img3} alt="Image Name" />
            <h5>Edit Your Resume in Real Time</h5>
            <p>
              As you edit your resume with our builder, you’ll immediately see
              the changes applied to your document.
            </p>
          </div>
        </div>
        <div>
              <a href="/" className="show1">
                Create My Resume
              </a>
            </div>
      </div>
    </section>
  );
};
export default WhyUse;
