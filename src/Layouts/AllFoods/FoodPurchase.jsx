import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthPrivider";
// import ReactDatetimeClass from "react-datetime";
import moment from "moment";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";


const FoodPurchase = () => {
    const {user} = useContext(AuthContext)
    const data = useLoaderData()
    // console.log(data);
    const {foodName, price, quantity,description} = data || {}
    
    useEffect(()=>{

        const food_id = (data._id);
    },[data])
    


    const now = moment();
    const [time, setTime] = useState(moment().format('hh:mm:ss A'));

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(moment().format('hh:mm:ss'));
      }, 1000);
      return () => clearInterval(interval);
    }, []);
    const currentTime =now.format(`dddd, MMMM Do YYYY, ${time}`)
    
    
    
    
  
    const handlePurchaseFood =(e)=>{
        e.preventDefault()

        const someData = {
            food_id : data._id,
            hr_email: data.email,
            hr_name: data.username,
            food_image: data.foodImage,
            oders_time: currentTime

        }
        const formData = new FormData(e.target)
        const dataform = Object.fromEntries(formData.entries())
        const margeData = {...dataform, ...someData}
        console.log(margeData);

        axios.post(`http://localhost:3000/purchaseFood`, margeData)
        .then(res=>{
            console.log(res.data);
            if(res.data.insertedId){
                toast.success(`Successfully purchase`)
            }
            
        })
        

    }

    return (
        <div>
            <p className="text-xl">Time : <span>{currentTime}</span></p>
            <form  onSubmit={handlePurchaseFood} className="card-body grid lg:grid-cols-2 grid-cols-1 w-[80%] m-auto">
                {/* name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Your Name</span>
                    </label>
                    <input type="text" defaultValue={user?.displayName} placeholder="enter Item name" name='buyerName' className="input input-bordered" readOnly required />
                </div>
                {/* email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Your email</span>
                    </label>
                    <input type="text" defaultValue={user?.email} name='buyerEmail' className="input input-bordered" readOnly />
                </div>
                {/* food name */}

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Food Name</span>
                    </label>
                    <input type="text" defaultValue={foodName} name="foodName" placeholder="enter Food name" className="input input-bordered" required />
                </div>
                {/* price */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Price</span>
                    </label>
                    <input type="number" name='price' defaultValue={price} placeholder="enter Equipment price" className="input input-bordered" required />
                </div>
                {/* quantity */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Food Quantity</span>
                    </label>
                    <input type="text" name='quantity' placeholder="Enter Food Quantity" className="input input-bordered" required />
                </div>
                {/* description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Description</span>
                    </label>
                    <textarea  type="text" name='description' placeholder="write something" className="input input-bordered" required />
                </div>
                


                <div className="form-control mt-6">
                    <p></p>
                    <button className="py-3 rounded-md bg-slate-600 text-white">Purchase</button>
                </div>
            </form>
        </div>
    );
};

export default FoodPurchase;