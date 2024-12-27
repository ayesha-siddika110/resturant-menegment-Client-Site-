import { Outlet } from "react-router-dom";
import Navbar from "../../componants/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../../componants/footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <Toaster></Toaster>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;