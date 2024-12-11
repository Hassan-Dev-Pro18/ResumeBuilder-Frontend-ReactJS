import "./Herostyle.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import H1 from "../../assets/hero123.png";
import CountUp from "react-countup";
import { Typewriter } from "react-simple-typewriter";

function Hero(props) {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true, easing: "ease-out-back" });
  }, []);

  return (
    <>
      <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
          <div className="flexColCenter hero-left">
            <div className="hero-title" data-aos="fade-right">
              {/* <div className="circle" /> */}
              <h1>
              
                <Typewriter
                  words={["Welcome to Resume Builder"]}
                  loop={1} // Number of times to loop; 0 for infinite
                  cursor
                  cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={50}
                />
              </h1>
            </div>
            <div className="flexColCenter hero-des" data-aos="fade-up">
              <p className="hero-p">
                Craft your resume effortlessly with Resume Builder, <br />
                your go-to platform for building modern, professional <br />{" "}
                resumes that stand out. My Resume Builder will help you 
                <br />
                every step of the way with tools, guides and expert advice.
              </p>
            </div>
            <div>
              <a
                href={props.url}
                className={`show ${props.btnClass}`}
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                {props.buttonText}
              </a>
            </div>
            <div className="flexCenter stats" data-aos="fade-up">
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={0} end={50} duration={3} />
                  <span>%</span>
                </span>
                <span className="text">Increased Hiring Chances</span>
              </div>
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={0} end={42} duration={3} />
                  <span>%</span>
                </span>
                <span className="text">
                Increased Callbacks from Employers
                </span>
              </div>
            </div>
          </div>
          <div className="flexCenter hero-right" data-aos="fade-left">
            <div className="image-container">
              <img src={H1}  alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
