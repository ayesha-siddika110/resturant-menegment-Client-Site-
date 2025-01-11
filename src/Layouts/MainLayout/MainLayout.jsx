import { Outlet } from "react-router-dom";
import Navbar from "../../componants/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../../componants/footer/Footer";
import '../../index.css'


const MainLayout = () => {
    return (
        <div className="Raleway-font ">
            <Toaster></Toaster>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;