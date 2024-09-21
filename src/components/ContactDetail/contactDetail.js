import React, { useState } from "react";
import { motion } from "framer-motion";
import "./contactDetail.css"; // Import your custom CSS
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaCommentDots,
  FaQuestionCircle,
} from "react-icons/fa";

const ContactUs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [formDataMessage, setFormDataMessage] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formDataTestimonials, setFormDataTestimonials] = useState({
    name: "",
    rateUs: "",
    saySomething: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChangeMessage = (e) => {
    setFormDataMessage({
      ...formDataMessage,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeTestimonials = (e) => {
    setFormDataTestimonials({
      ...formDataTestimonials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitMessage = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Replace the API endpoint with your actual backend URL
      await axios.post(
        "http://localhost:4000/messageContact/createMessage",
        formDataMessage
      );

      // Show success toast
      toast.success("Message sent successfully!");

      // Reset form fields
      setFormDataMessage({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      // Show error toast
      toast.error("Failed to send message. Please try again.");
      setFormDataMessage({
        name: "",
        email: "",
        message: "",
      });
    } finally {
      setIsSubmitting(false);
    }
    // Handle form submission (e.g., send data to the backend)
    console.log(formDataMessage);
  };
  const handleSubmitTestimonials = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Replace the API endpoint with your actual backend URL
      await axios.post(
        "http://localhost:4000/testimonials/createTestimonials",
        formDataTestimonials
      );

      // Show success toast
      toast.success("Your rating submit successfully!");

      // Reset form fields
      setFormDataTestimonials({
        name: "",
        rateUs: "",
        saySomething: "",
      });
    } catch (error) {
      // Show error toast
      toast.error("Failed to submit rating. Please try again.");
      setFormDataTestimonials({
        name: "",
        rateUs: "",
        saySomething: "",
      });
    } finally {
      setIsSubmitting(false);
    }
    // Handle form submission (e.g., send data to the backend)
    console.log(formDataTestimonials);
  };
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I log in?",
      answer:
        "To log in, click the 'Log In' button at the top right corner of the page and enter your credentials.",
    },
    {
      question: "Why can’t I log in?",
      answer:
        "If you're having trouble logging in, make sure your email and password are correct. You can also try resetting your password.",
    },
    {
      question: "How do I reset or recover my password?",
      answer:
        "Press login button and below you show a forget password button click on that you can get a email, in which you get reset password token.",
    },
    {
      question: "How do I create a new resume?",
      answer:
        "To create a new resume, log in to your account, navigate to the 'Create Resume' section, and follow the guided steps to input your information.",
    },
    {
      question: "Can I create multiple resumes for different job applications?",
      answer:
        "Yes, you can create and save multiple resumes tailored for different job applications in your account.",
    },
    {
      question: "How do I get suggestions for improving my resume?",
      answer:
        "Our tool provides suggestions for improving your resume, such as recommended skills and tips, based on your input.",
    },
    {
      question: "What if I need help writing my resume?",
      answer:
        "You can access expert tips and guidelines throughout the resume builder, or contact our support team for additional help.",
    },
    {
      question: "Can I download my resume in different formats?",
      answer:
        "You can download your resume in PDF and image formats directly from the resume editor.",
    },
    // Add more FAQs as needed
  ];

  return (
    // Main of Contact Page
    <div className="main">
      {/* Upper Headre of page */}
      <div className="upper-head">
        <h1>Contact Us | Resumify</h1>
        <h1 className="title">Get in Touch</h1>
        <p>
          We're here to help you with any questions, concerns, or feedback you
          may have. You can reach us through the form below or contact info.
        </p>
      </div>

      {/* Contact Information */}

      <div className="contact-container">
        <motion.div
          className="contact-info"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <span>+92 320 0916893</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>Resumify@gmail.com</span>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>Sahiwal, Pakistan</span>
          </div>
        </motion.div>

        {/* Vertical Line */}

        <motion.div
          className="vertical-line"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>

        {/* Contact Form Information */}

        <motion.div
          className="contact-form"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmitMessage}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formDataMessage.name}
                onChange={handleChangeMessage}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formDataMessage.email}
                onChange={handleChangeMessage}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formDataMessage.message}
                onChange={handleChangeMessage}
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="submit-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending" : "Send"}
            </motion.button>
          </form>
          <ToastContainer />
        </motion.div>
      </div>

      {/* Map Contant */}

      <div className="map">
        {/* Map Header */}
        <h1>We’re here for you</h1>
        <p>
          Visit at the location below. We are open from 9:00 AM to 6:00 PM,
          Monday through Friday. Use the map to get directions or to learn more
          about our surroundings.
        </p>

        {/* Map Frame */}

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.6956089110495!2d73.14597757545941!3d30.64253502462798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922b6e4dde0c501%3A0xc37ea3d85326203!2sCOMSATS%20University%20Islamabad%20-%20Sahiwal%20Campus!5e0!3m2!1sen!2s!4v1685698700708!5m2!1sen!2s"
          width="90%"
          height="350"
          style={{ paddingTop: 20, paddingBottom: 20, border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* FAQ Section */}

      <div className="faq-container">
        {/* FAQ Header */}
        <div className="faq-header">
          <FaQuestionCircle className="faq-icon" />
          <h2>Check our FAQ</h2>
          <p>
            Check out our answers to your most frequently asked questions, our
            experts have already addressed your issue.
          </p>
        </div>
        {/* FAQ Main Body */}
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h3>{faq.question}</h3>
                <span className="faq-toggle">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Rate US Section */}

      <div className="form-rate-container">
        {/* Rate US Header */}
        <div className="form-header">
          <FaCommentDots className="faq-icon" />
          <h2>Give Us Your Feedback</h2>
          <p>We value your opinion and would love to hear from you!</p>
        </div>
        {/* Rate US Form */}
        <form onSubmit={handleSubmitTestimonials}>
          <div className="form-rate-group">
            <label>Name:</label>
            <input type="text" placeholder="Enter your name" name="name"
                value={formDataTestimonials.name}
                onChange={handleChangeTestimonials} required />
          </div>
          <div className="form-rate-group">
            <label>Rate Us:</label>
            <select required name="rateUs"
                value={formDataTestimonials.rateUs}
                onChange={handleChangeTestimonials}>
              <option >Select a rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="form-rate-group">
            <label>Say Something:</label>
            <textarea placeholder="Share your thoughts" required name="saySomething"
                value={formDataTestimonials.saySomething}
                onChange={handleChangeTestimonials}></textarea>
          </div>
          <button type="submit" className="rate-button" disabled={isSubmitting}>
           
            {isSubmitting ? "Submitting...." : "Submit"}
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default ContactUs;
