import Marquee from "react-fast-marquee";
import Slider from "./Slider/Slider";
import Marquue from "./Marquue/Marquue";
import Map from "./Map/Map";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthPrivider";
import HomeFoods from "./HomeFood/HomeFoods";


const Home = () => {
    const {isDarkMode} = useContext(AuthContext)
    return (
        <div className={`${isDarkMode ? 'bg-blue-950 text-white': 'bg-base-100'}`}>
            <Slider></Slider>
            <HomeFoods></HomeFoods>
            <Marquue></Marquue>
            <Map></Map>

            
        </div>
    );
};

export default Home;