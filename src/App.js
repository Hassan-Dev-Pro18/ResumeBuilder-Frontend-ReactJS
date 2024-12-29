
import './App.css';
import {Route,Routes} from "react-router-dom";
import Home from './Routes/Home';
import Template from './Routes/Templates';
import Analysis from './Routes/Analysis';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Login from './Routes/Login';
import ProtectedRoute from './Routes/ProtectedRoute';
import ResumeBuilder from './components/ResumeBuild/ResumeBuilder';
import Display from './Routes/DisplayResume';
import ForgotPassword from './components/SignupLogin/forgetPassword';
import PrivacyPolicyPage from './Routes/Privacy';
import Terms from './Routes/Terms'
import UserManagement from './components/AdminPage/UserManagement';
import ContactMessagesManagement from './components/AdminPage/ContactMessageManagement';
import TestimonialsManagement from './components/AdminPage/TestimonialsManagement';
import AdminPage from './components/AdminPage/AdminPage';
import Admin from './Routes/Admin';
import AdminMain from './Routes/Admin';
import ChangeTemplatePage from './Routes/ChangeTemplatePage';
function App() {
  return (
    <>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/template' element={<Template/>}/>
        {/* <Route path='/template' element={<ProtectedRoute Component = {Template}/>}/> */}
        <Route path='/changeTemplate' element={<ChangeTemplatePage/>}/>
        <Route path='/analysis' element = {<Analysis/>}/>
        {/* <Route path='/analysis' element={<ProtectedRoute Component = {Analysis}/>}/> */}
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/resumeBuild' element={<ResumeBuilder/>}/>
        <Route path='/display' element={<Display/>}/>
        <Route path='/forgetPassword' element={<ForgotPassword/>}/>
        <Route path='/privacyPolicy' element={<PrivacyPolicyPage/>}/>
        <Route path='/termsCondition' element={<Terms/>}/>

        <Route path='/admin' element={<AdminMain/>}/>
        <Route path='/admin/users' element={<UserManagement/>}/>
        <Route path='/admin/messages' element={<ContactMessagesManagement/>}/>
        <Route path='/admin/testimonials' element={<TestimonialsManagement />}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
