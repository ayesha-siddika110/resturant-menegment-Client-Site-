import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FoodCard from '../../AllFoods/FoodCard';

const HomeFoods = () => {
    const [foods, setFoods] = useState([])
    // console.log(foods);
    
    useEffect(()=>{
            
        axios.get(`https://restaurant-management-server-site.vercel.app/foods`)
        .then(res=> {
            const foodsSort = res.data.sort((a,b)=> b.purchase_count - a.purchase_count)
            setFoods(foodsSort.slice(0,6));
            

            
        })
    },[])
    
    return (
        <div>
            <h1 className='text-4xl font-semibold text-center pt-14'>Top Foods</h1>
            <p className='text-center pt-3 pb-10'>Our Top selling foods is here . Buyer is very happy to our food menu</p>

            <div className='w-[80%] m-auto grid grid-cols-3 gap-5'>
                {
                    foods?.map((item,index)=><FoodCard key={index} item={item}></FoodCard>)
                }
            </div>
            
        </div>
    );
};

export default HomeFoods;