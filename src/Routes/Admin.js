import AboutContent from "../components/About Content/aboutContent";
import AdminPage from "../components/AdminPage/AdminPage";
import Footer from "../components/Footer/footer";
import Navbar from "../components/Navbar/Navbar";
import Navbar1 from "../components/Navbar/Navbar1";
function AdminMain(){
    return(
        <>
        {/* <Navbar/> */}
        <Navbar1/>
        <AdminPage/>
        
        {/* <Footer/> */}
        </>
    )
}
export default AdminMain;