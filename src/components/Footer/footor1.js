import "./footer.css";
import {
    FaInstagram,
    FaFacebook,
    FaTwitter,
    FaLinkedin,
  } from "react-icons/fa";
const Footer1 = () =>{
    return(
        <div className="footer">
            
            <div className="footer-bottom">
                <p className="footer-bottom-p">© {new Date().getFullYear()} Resume Builder. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer1;