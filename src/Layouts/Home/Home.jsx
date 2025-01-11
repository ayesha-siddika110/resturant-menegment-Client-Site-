
import Slider from "./Slider/Slider";
import Marquue from "./Marquue/Marquue";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthPrivider";
import HomeFoods from "./HomeFood/HomeFoods";
import Testimonials from "./Testimonials/Testimonials";
import BestSelling from "./BestSelling/BestSelling";


const Home = () => {
    const {isDarkMode} = useContext(AuthContext)
    return (
        <div className={`${isDarkMode ? 'bg-[#050505ef] text-white': 'bg-base-100'}`}>
            <div className="h-16"></div>
            <Slider></Slider>
            <HomeFoods></HomeFoods>
            {/* BEST SElling */}
            <BestSelling></BestSelling>
            <Testimonials></Testimonials>
            <Marquue></Marquue>
            {/* <Map></Map> */}

            
        </div>
    );
};

export default Home;