import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Home/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Main = () => {
    return (
        <div className="bg-gray-100">
        <Navbar></Navbar>
        <div>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
        </div>
        
    );
};

export default Main;