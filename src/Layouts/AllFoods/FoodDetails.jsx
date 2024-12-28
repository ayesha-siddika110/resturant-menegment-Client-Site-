import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthPrivider";


const FoodDetails = () => {

   const {user} = useState(AuthContext)

    const data = useLoaderData()
   //  const {_id} = data || {}

    const {isDarkMode} = useContext(AuthContext)
    
        const {_id, purchase_count,category, email, description,foodImage, userName, quantity,foodName,price}= data || {}
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
     <div className={`${isDarkMode? 'bg-blue-950 text-white' : 'bg-white'}`}>
     <p className="text-4xl text-center pt-2 font-semibold mb-6">Single food</p>
        <div className="flex gap-8 w-[80%] m-auto border-2 p-8">
           <div className="w-[50%]">
            <img className="h-[300px] w-full object-cover" src={data?.foodImage} alt="" />
           </div>
           <div className="w-[50%]">

            <p className="text-lg">parches count : {foodlength}</p>

            <p className="text-lg font-semibold mt-5">Name : {foodName}</p>
            <p>Price : {price}tk only</p>
            <p>Purchase Count : {purchase_count}</p>
            <p>description: <span>{description}</span></p>
            <p>quantity : <span>{quantity}</span></p>
            <div className="pt-4"></div>
            <Link to={`${user? `/foodPurchase/${data?._id}` : '/login'}`} className="bg-orange-500 text-white py-3 px-4 rounded-md">Purchase</Link>

           </div>
        </div>
     </div>
    );
};

export default FoodDetails;