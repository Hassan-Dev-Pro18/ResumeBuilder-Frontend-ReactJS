import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaStar, FaArrowLeft, FaArrowRight,FaRegStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import "./aboutContent.css";

// const testimonials = [
//   {
//     name: "John Doe",
//     message: "Nilda Melissa Díaz is a Certified Professional Resume Writer who has worked for the Washington Post, Stringr and Latina Style Magazine. She has a master’s in journalism from Columbia University and is a member of the National Association of Hispanic Journalists.",
//     rating: 5,
//   },
//   {
//     name: "Jane Smith",
//     message: "Nilda Melissa Díaz is a Certified Professional Resume Writer who has worked for the Washington Post, Stringr and Latina Style Magazine. She has a master’s in journalism from Columbia University and is a member of the National Association of Hispanic Journalists.",
//     rating: 4,
//   },
//   {
//     name: "Michael Johnson",
//     message: "Nilda Melissa Díaz is a Certified Professional Resume Writer who has worked for the Washington Post, Stringr and Latina Style Magazine. She has a master’s in journalism from Columbia University and is a member of the National Association of Hispanic Journalists.",
//     rating: 3,
//   },
  
// ];


const TestimonialSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    
  };
  const [testimonials, setTestimonials] = useState([]);

  // Fetch testimonials from the backend
  useEffect(() => {
    axios
      .get("http://localhost:4000/testimonials/getAllTestimonials") // Replace with your API endpoint
      .then((response) => {
        setTestimonials(response.data.
          Testimonials
          );
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching testimonials:", error);
      });
  }, []);

  return (
    <div className="testimonial-slider">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div  className="testimonial">
            <p className="testimonial-message">"{testimonial.SaySomething}"</p>
            <h4 className="testimonial-name">- {testimonial.Name}</h4>
            <div className="testimonial-rating">
              {/* {[...Array(testimonial.RateUs)].map((_, i) => (
                <FaStar key={i} color="#FFD700" />
              ))} */}
              {[...Array(5)].map((_, i) => (
                i < testimonial.RateUs ? (
                  <FaStar key={i} color="#FFD700" />
                ) : (
                  <FaRegStar key={i} color="#FFD700" />
                )
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow next" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow prev" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
};

export default TestimonialSlider;
