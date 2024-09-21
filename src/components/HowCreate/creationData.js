import { Component } from "react";
import "./HowCreate.css"
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function CreationData(props){
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
        
        return(
            <div className={props.className}>
        <div className="des-text">
          <h3>{props.heading}</h3>
          <p>
            {props.text}
          </p>
        </div>
        <div data-aos="zoom-in" className="image">
            <img alt="img" src={props.img1}/>
            <img alt="img" src={props.img2}/>
        </div>
      </div>
        )
    }
export default CreationData;