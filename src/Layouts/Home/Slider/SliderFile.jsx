/* eslint-disable react/prop-types */

import { FaArrowRight } from 'react-icons/fa';

const SliderFile = ({img,title, description}) => {
    // console.log(img);
    
    return (
      <div style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh',
        width: '100%',
        backgroundColor: '#575555',
        backgroundBlendMode: 'multiply'
      }}
      className="relative flex flex-col items-center justify-center text-white">
        <h1 className='text-5xl'>{title}</h1><br />
        <p>{description}</p>
        <button className='bg-yellow-600 text-base py-1 px-4 flex items-center  mt-4'>See All Foods<FaArrowRight className='pl-2' /></button>


      </div>
    );
};

export default SliderFile;