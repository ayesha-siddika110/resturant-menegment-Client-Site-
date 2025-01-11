import { Rating, Stack } from '@mui/material';
import React, { useContext } from 'react';
import { FaQuoteLeft } from "react-icons/fa";
import { AuthContext } from '../../../AuthProvider/AuthPrivider';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';

const Testimon_Card = ({ rating, para, name }) => {
    const {isDarkMode} = useContext(AuthContext)
    return (
        <div className={`text-center space-y-5 flex flex-col justify-center items-center w-full ${isDarkMode && 'bg-[#050505ef]'}`}>
            <Stack spacing={1}>
                <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
            </Stack>
            <BiSolidQuoteAltLeft className='text-7xl text-orange-300' />
            <p className='text-sm px-32'>{para}</p>
            <p className='text-orange-600 font-semibold text-2xl'>{name}</p>

        </div>
    );
};

export default Testimon_Card;