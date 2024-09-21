import "./Herostyle.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import H1 from "../../assets/h2.png";
import CountUp from "react-countup";

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
              <div className="circle" />
              <h1>Welcome to Resumeify</h1>
            </div>
            <div className="flexColCenter hero-des" data-aos="fade-up">
              <span>
                Easily create the perfect resume for any job using our
                best-in-class{" "}
              </span>
              <span>
                resume builder platform. My Resumeify will help you every step
                of the
              </span>
              <span>way with tools, guides and expert advice.</span>
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
                <span className="text">Higher chance of getting a job</span>
              </div>
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={0} end={42} duration={3} />
                  <span>%</span>
                </span>
                <span className="text">
                  Higher response rate from recruiters‡
                </span>
              </div>
            </div>
          </div>
          <div className="flexCenter hero-right" data-aos="fade-left">
            <div className="image-container" >
              <img src={H1} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
