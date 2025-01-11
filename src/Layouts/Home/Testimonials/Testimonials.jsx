import { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
// import Heading from '../../../componants/Share/Heading/Heading';
import Testimon_Card from './Testimon_Card';
import axios from 'axios';
import { AuthContext } from '../../../AuthProvider/AuthPrivider';
const Testimonials = () => {
    const [reviews,setreviews] = useState([])
    const {isDarkMode} = useContext(AuthContext)
    useEffect(()=>{
  
      axios.get('https://restaurant-management-server-site.vercel.app/reviews')
      .then(res=>{
        setreviews(res.data)
  
      })
    },[])
    return (
        <div className={`pb-20`}>
            <h1 className='text-4xl font-semibold text-center  pt-20 mb-20'>Buyer Reviews</h1>
            <div className='w-[80%] m-auto'>
        <Swiper navigation={true} modules={[Navigation]} className={`mySwiper ${isDarkMode && 'bg-[#050505ef]'} `}>
          {
            reviews?.map((item,idx)=> <SwiperSlide key={idx}>
            <Testimon_Card rating={item?.rating} para={item?.details} name={item?.name}></Testimon_Card>
           </SwiperSlide>)
          }
         
          
        
         
        </Swiper>

      </div>
        </div>
    );
};

export default Testimonials;