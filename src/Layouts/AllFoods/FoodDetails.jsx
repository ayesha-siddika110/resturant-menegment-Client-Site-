import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const FoodDetails = () => {

    const data = useLoaderData()
    const {_id} = data || {}
   //  console.log(_id);
    const [foodlength, setfoodlength] = useState(0)
  console.log(foodlength);
  
    
    
    useEffect(()=>{
      axios.get(`https://restaurant-management-server-site.vercel.app/purchaseFood?food_id=${_id}`)
      .then(res=>{
         setfoodlength(res.data?.length)
      })

    },[_id])

    
    return (
     <>
     <p className="text-5xl">single food page</p>
        <div className="flex gap-8 w-[80%] m-auto">
           <div className="w-[50%]">
            <img className="h-[400px] w-full object-cover" src={data?.foodImage} alt="" />
           </div>
           <div className="w-[50%]">
            <p>parches count : {foodlength}</p>
            <Link to={`/foodPurchase/${data?._id}`} className="btn">Purchase</Link>

           </div>
        </div>
     </>
    );
};

export default FoodDetails;