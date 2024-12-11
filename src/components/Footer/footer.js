import "./footer.css";
import {
    FaInstagram,
    FaFacebook,
    FaTwitter,
    FaLinkedin,
  } from "react-icons/fa";
const Footer = () =>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                <h1 className="footor-logo">Resume Builder</h1>
                    <p>Create your Professional Resume in Minutes</p>
                </div>
                <div className="social_icons_footer">
                    <a href="https://www.google.com/search?gs_ssp=eJzj4tLP1TfIyK1MKy5TYDRgdGDw4khLTE5Nys_PBgBmYAfL&q=facebook&rlz=1C1CHBF_enPK1095PK1095&oq=fac&gs_lcrp=EgZjaHJvbWUqGAgBEC4YQxiDARjHARixAxjRAxiABBiKBTIGCAAQRRg5MhgIARAuGEMYgwEYxwEYsQMY0QMYgAQYigUyBggCECMYJzINCAMQABiRAhiABBiKBTINCAQQABiRAhiABBiKBTINCAUQABiSAxiABBiKBTIKCAYQABixAxiABDIGCAcQBRhA0gEIMTQ0NGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8" className="facebookHover">
                    <FaFacebook />
                    </a>
                    <a href="/" className="linkedInHover">
                        <FaLinkedin/>
                    </a>
                    <a href="/" className="twitterHover">
                        <FaTwitter/>
                    </a>
                    <a href="/" className="instaHover">
                        <FaInstagram/>
                    </a>
                </div>
            </div>

            <div className="center">
                <div>
                    <h4>RESUMES</h4>
                    <a href="/resumeBuild">Resume Builder</a>
                    <a href="/template">Resume Templates</a>
                    <a href="/analysis">Resume Analysis</a>
                </div>
                <div>
                    <h4>ABOUT</h4>
                    <a href="/about">About Us</a>
                    <a href="/privacyPolicy">Privacy Policy</a>
                    <a href="/termsCondition">Terms & Conditions</a>
                </div>
                <div>
                    <h4>HELP & SUPPORT</h4>
                    <a href="/contact">Contact Us</a>
                    <a href="/contact">FAQ</a>
                </div>
                <div>
                    <h4>CUSTOMER SERVICE</h4>
                    <a>ResumeBuilder@gmail.com</a>
                    <a>+92 300 1232457</a>
                    <h5>Schedule:</h5>
                    <h6>Mon-Fri 8 AM - 8 PM (GMT+5)</h6>
                    <h6>Saturday 8 AM - 5PM (GMT+5)</h6>
                    <h6>Sunday 10 AM - 6 PM (GMT+5)</h6>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="footer-bottom-p">© {new Date().getFullYear()} Resume Builder. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;