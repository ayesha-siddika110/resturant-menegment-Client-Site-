import React from 'react';
import img1 from '../../../assets/marqu/7c1c60e9afaaaa3cce61e5101717796d21b7f914-1426x1080.svg'
import img2 from '../../../assets/marqu/download (1).jfif'
import img3 from '../../../assets/marqu/download (2).jfif'
import img4 from '../../../assets/marqu/download (3).jfif'
import img5 from '../../../assets/marqu/download (4) - Copy.jfif'
import img6 from '../../../assets/marqu/download.jfif'
import img7 from '../../../assets/marqu/images - Copy.png'
import Marquee from 'react-fast-marquee';

const Marquue = () => {
    return (
        <div className='w-[80%] m-auto pb-11'>

            <div className='text-center  space-y-5 pb-6'>
                <h1 className='text-4xl font-semibold mt-10'>Sponsors Us</h1>
                <p className=''>Sponsors cultural festivals, cooking competitions, and community events.</p>
            </div>
            <Marquee className=''>
                <img src={img1} className='h-[100px] object-cover px-7 pr-8' alt="" />
                <img src={img2} className='h-[100px] object-cover px-7 pr-8' alt="" />
                <img src={img3} className='h-[100px] object-contain px-7  pr-8' alt="" />
                <img src={img4} className='h-[100px] object-cover px-7  pr-8' alt="" />
                <img src={img5} className='h-[100px] object-cover px-7  pr-8' alt="" />
                <img src={img6} className='h-[100px] object-cover px-7  pr-8' alt="" />
                <img src={img7} className='h-[100px] object-cover px-7  pr-8' alt="" />

            </Marquee>



        </div>
    );
};

export default Marquue;