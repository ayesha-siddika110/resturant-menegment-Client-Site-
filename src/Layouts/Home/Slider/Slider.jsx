
import { SwiperSlide } from 'swiper/react';

// Import Swiper React components
import { Swiper} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./Style.css";
// import { Pagination } from 'swiper/modules';
import { Pagination, Navigation } from 'swiper/modules';
import SliderFile from './SliderFile';
import img1 from '../../../assets/img1.jpg'
import img2 from '../../../assets/img2.jpg'
import img3 from '../../../assets/img3.jpg'

const Slider = () => {
    return (
        <div>
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><SliderFile img={img3} title={`Welcome to Resturent`} description={`Experience the finest blend of flavors, crafted with passion and served with love. Your table is waiting for you`}></SliderFile></SwiperSlide>
                <SwiperSlide><SliderFile img={img2} title={`Taste the Extraordinary`} description={`From savory classics to chef’s specials, every dish tells a story. Indulge in the culinary journey you deserve.`}></SliderFile></SwiperSlide>
                <SwiperSlide><SliderFile img={img1} title={`Dining, Redefined`} description={`Immerse yourself in an unforgettable dining experience with exquisite food, warm ambiance, and unparalleled service.`}></SliderFile></SwiperSlide>
                
                
            </Swiper>
          

        </div>
    );
};

export default Slider;