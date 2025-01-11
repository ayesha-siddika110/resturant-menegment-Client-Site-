/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthPrivider";


const FoodCard = ({ item }) => {

    const {isDarkMode} = useContext(AuthContext)

    const {_id, purchase_count,category, email, description,foodImage, userName, quantity,foodName,price}= item || {}


    return (
        <div className={`border-2 p-4 shadow-md shadow-[#00000048] rounded-xl ${isDarkMode ? 'bg-[#252121ef] text-white border-[#050505a9] shadow-md shadow-[#00000049]' : 'bg-white'}`}>
            <img src={foodImage} className='h-[200px] w-full object-cover object-center rounded-xl' alt="food image" />
            <p className="text-lg font-semibold mt-5">Name : {foodName}</p>
            <p>Price : {price}tk only</p>
            <p>Purchase Count : {purchase_count}</p>
            {/* <p>description: <span>{description}</span></p> */}
            <p>quantity : <span>{quantity}</span></p>
            <div className="pt-4">

            <Link to={`/foodDetails/${_id}`} className="bg-orange-500 text-white py-2 px-4 font-medium rounded-md">view details</Link>
            </div>
            
           

        </div>
    );
};

export default FoodCard;