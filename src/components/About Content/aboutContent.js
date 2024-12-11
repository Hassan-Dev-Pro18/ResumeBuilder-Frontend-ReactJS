import "./aboutContent.css";
import React from "react";
import H1 from "../../assets/about1.jpg";
import Mission from "../../assets/Mission.png";
import Vission from "../../assets/Vission.png";
import "aos/dist/aos.css";
import Aos from "aos";
import Professional from "../../assets/fill1.png";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import teamMembers from "./TeamMemberData";
import TeamMember from "./TeamMember";
import {
  FaGoogle,
  FaAmazon,
  FaMicrosoft,
  FaShopify,
  FaApple,
  FaAirbnb,
} from "react-icons/fa";
import TestimonialSlider from "./TestimonialSlider";

// Testimonal Data

function AboutContent() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="main">
      {/* Upper Headre of page */}
      <div className="upper-head-about">
        <h1>About Us | Resume Builder</h1>
        <p>
          Welcome again, where we are dedicated to helping professionals
          and job seekers create standout resumes that capture their unique
          skills and experiences. Our mission is to empower individuals with the
          tools they need to advance their careers and achieve their
          professional goals.
        </p>
      </div>

      <motion.div
        className="introduction"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src={H1} alt="" />

        <div>
          <h2>About ResumeBuilder</h2>
          <p>
            At ResumeBuilder, we provide an intuitive Resume Builder that guides job
            seekers in crafting the perfect resume. Our platform offers valuable
            templates, tips, skill enhancement and expert advice to make your
            resume stand out to employers. We offer a resume analysis feature in
            which they analysis the resume and give suggestion about resume.
          </p>
          <a href="/" className="create-button-about">
            Create My Resume
          </a>
        </div>
      </motion.div>

      <div className="forMarquee">
        <h2>
          More than 100 job seekers have created resumes with Resumeify. They've
          landed jobs at companies including:
        </h2>
        <div className="marquee">
          <div className="marquee-content">
            <FaGoogle className="comp-icon" />
            <FaAmazon className="comp-icon" />
            <FaMicrosoft className="comp-icon" />
            <FaShopify className="comp-icon" />
            <FaAirbnb className="comp-icon" />
            <FaApple className="comp-icon" />
            {/* Repeat the icons for a seamless loop */}
            <FaGoogle className="comp-icon" />
            <FaAmazon className="comp-icon" />
            <FaMicrosoft className="comp-icon" />
            <FaShopify className="comp-icon" />
            <FaAirbnb className="comp-icon" />
            <FaApple className="comp-icon" />
          </div>
        </div>
      </div>

      <div className="whatDo">
        <h2>What do we stand for?</h2>
        <div className="first-step-whatDo">
          <div className="des-text-whatDo">
            <h3>Our Mission</h3>
            <p>
              At ResumeBuilder, our mission is to empower individuals to confidently
              present their skills, experiences, and aspirations through
              expertly crafted resumes. We are dedicated to simplifying the
              resume-building process with intuitive tools and innovative
              features, ensuring that every user can create a standout resume
              that opens doors to new opportunities. Our goal is to help you
              make a lasting impression and achieve your career aspirations with
              ease and professionalism.
            </p>
          </div>
          <div className="image1" data-aos="zoom-in">
            <img alt="img" src={Mission} />
          </div>
        </div>
        <div className="first-step-reverse-whatDo">
          <div className="des-text-whatDo">
            <h3>Our Vission</h3>
            <p>
              At ResumeBuilder, we envision a world where every individual can
              showcase their unique talents and achievements with clarity and
              confidence. Our goal is to revolutionize the resume-building
              experience through cutting-edge technology and user-friendly
              design, making it accessible to everyone seeking to advance their
              career. We aspire to be the leading platform that transforms how
              people present themselves professionally, bridging the gap between
              ambition and opportunity.
            </p>
          </div>
          <div className="image1" data-aos="zoom-in">
            <img alt="img" src={Vission} />
          </div>
        </div>
      </div>
      {/* <div><a href="/contact" className="create-button-about">
            Contact Us
          </a></div> */}
      <div className="testimonial-slider-upperData">
        <h2 className="testimonial-h2">What users say about us</h2>
        <p className="testimonial-p">
        What members are saying about our Resume Builder
        </p>
        <TestimonialSlider />
      </div>
      <div className="meet-our-team">
        <h2 className="meet-h2">Meet Our Team</h2>
        <p className="meet-p">
          Get to know our passionate professionals, experts and technologist
          team behind Resume Builder
        </p>
        <div className="team-members" data-aos="fade-up">
          {teamMembers.map((member) => (
            <TeamMember
              key={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
              bio={member.bio}
              socialLinks={member.socialLinks}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
