import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FoodCard from './FoodCard';
import banner from '../../assets/banner.jpg'

const AllFoods = () => {
    const [foods, setFoods] = useState([])


    useEffect(() => {


        axios.get(`http://localhost:3000/foods`)
            .then(res => {
                console.log(res.data);

                setFoods(res.data);
            })
    }, [])






    return (
        <>
            <div style={{
                backgroundImage: `url(${banner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '300px',
                width: '100%',
                backgroundColor: '#575555',
                backgroundBlendMode: 'multiply'
            }} className='text-white flex flex-col justify-center items-center gap-2'>
                <p className='uppercase text-4xl'>All Foods List</p>
                <p className='flex items-center gap-3 text-lg'>Home <div className='border-2 w-1 border-orange-500 h-4'></div>All Foods</p>
            </div>
            <p className='pt-20'>Search</p>
            <label className="input input-bordered flex items-center justify-center gap-2 w-[300px]">
                <input type="text" className="grow w-[50px]" placeholder="Search" />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd" />
                </svg>
            </label>

            <div className='grid grid-cols-3 gap-6 w-[80%] m-auto'>
                {
                    foods?.map((item, index) => <FoodCard key={index} item={item}></FoodCard>)

                }

            </div>
        </>
    );
};

export default AllFoods;