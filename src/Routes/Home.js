import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import WhyUse from "../components/WhyUse/WhyUse";
import HowCreate from "../components/HowCreate/HowCreate"
import Footer from "../components/Footer/footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Home() {
  return (
    <>
      <Navbar />
     
      <Hero
        // cName="hero"
        // heroImg={HeroImg}
        // title="Welcome to Resumeify"
        // text="Easily create the perfect resume for any job using our best-in-class resume builder platform.
        // My Resumeify will help you every step of the way with tools, guides and expert advice. "
        buttonText="Create My Resume"
        url="/template"
        btnClass="show"
        // heroImgClass="hero-Img"
      />
      {/* <HeroSection/> */}
      <WhyUse/>
      <HowCreate/>
      <Footer/>
      <ToastContainer />
    </>
  );
}
export default Home;
