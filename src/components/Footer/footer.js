import "./footer.css";
const Footer = () =>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                <h1 className="footor-logo">Resumeify.</h1>
                    <p>Create your Professional Resume in Minutes</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-square-x-twitter"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                </div>
            </div>

            <div className="center">
                <div>
                    <h4>RESUMES</h4>
                    <a href="/">Resume Builder</a>
                    <a href="/">Resume Templates</a>
                    <a href="/">Resume Analysis</a>
                    <a href="/">How To Write a Resume</a>
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
                    <a href="/">Resumeify@gmail.com</a>
                    <a href="/">+92 300 1232457</a>
                    <h5>Schedule:</h5>
                    <h6>Mon-Fri 8 AM - 8 PM (GMT+5)</h6>
                    <h6>Saturday 8 AM - 5PM (GMT+5)</h6>
                    <h6>Sunday 10 AM - 6 PM (GMT+5)</h6>
                </div>
            </div>
        </div>
    )
}

export default Footer;