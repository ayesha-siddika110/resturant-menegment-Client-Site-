import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthPrivider";
// import ReactDatetimeClass from "react-datetime";
import moment from "moment";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";


const FoodPurchase = () => {
    const { user, isDarkMode } = useContext(AuthContext)
    const data = useLoaderData()
    // console.log(data);
    const { foodName, price, quantity, description, foodImage } = data || {}

    // useEffect(()=>{

    //     const food_id = data._id;
    // },[data])



    const now = moment();
    const [time, setTime] = useState(moment().format('hh:mm:ss A'));

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(moment().format('hh:mm:ss'));
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    const currentTime = now.format(`dddd, MMMM Do YYYY, ${time}`)

    const [isDisabled, setisDisabled] = useState(false)
    // console.log(isDisabled);
    const navigate = useNavigate()






    const handlePurchaseFood = (e) => {
        e.preventDefault()

        const someData = {
            food_id: data._id,
            hr_email: data.email,
            hr_name: data.username,
            food_image: data.foodImage,
            oders_time: currentTime

        }
        const formData = new FormData(e.target)
        const dataform = Object.fromEntries(formData.entries())
        const margeData = { ...dataform, ...someData }
        console.log(margeData);

        if (parseInt(quantity) == 0) {
            toast.error(" item is not available")
            return setisDisabled(true)
        }

        const foodquantity = parseInt(e.target.quantity.value)
        if (foodquantity > quantity) {
            return toast.error("You do not get more than avalable food quantities")
        }

        axios.post(`https://restaurant-management-server-site.vercel.app/purchaseFood`, margeData)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    toast.success(`Successfully purchase`)
                    navigate(`/orders/${user?.email}`)
                }

            })


    }

    return (
        <div className={`py-20 ${isDarkMode ? 'bg-[#050505ef] text-white' : 'bg-white'} `}>


            <div className="w-[80%] m-auto border-2 border-slate-800 p-6 flex lg:flex-row flex-col py-10 ">
                <div className="lg:w-[40%] border-r-2">

                    <p className="font-semibold  text-xl">Food Details :</p>

                    <div className="space-y-2">
                        <img src={foodImage} className="h-[200px]" alt="" />
                        <p className="text-lg font-semibold mt-5">Name : {foodName}</p>
                        <p className="text-lg">Price : {price}tk only</p>
                        <p className="text-lg">quantity : <span>{quantity}</span></p>
                    </div>

                    <hr />
                    <p className="text-lg">
                        Description : <span>{description}</span>
                    </p>

                </div>

                <div className="lg:w-[60%]">

                    <p className="text-base pl-10 font-semibold">Purchase Time : <span className="font-normal">{currentTime}</span></p>
                    <form onSubmit={handlePurchaseFood} className="card-body grid lg:grid-cols-2 grid-cols-1 w-[100%] m-auto">
                        {/* name */}
                        <div className="form-control">
                            <label className="label">
                                <span className=" text-lg font-semibold">Your Name</span>
                            </label>
                            <input type="text" defaultValue={user?.displayName} placeholder="enter Item name" name='buyerName' className={`input input-bordered ${isDarkMode && 'text-black'}`} readOnly required />
                        </div>
                        {/* email */}
                        <div className="form-control">
                            <label className="label">
                                <span className=" text-lg font-semibold">Your email</span>
                            </label>
                            <input type="text" defaultValue={user?.email} name='buyerEmail' className={`input input-bordered ${isDarkMode && 'text-black'}`} readOnly />
                        </div>
                        {/* food name */}

                        <div className="form-control">
                            <label className="label">
                                <span className=" text-lg font-semibold">Food Name</span>
                            </label>
                            <input type="text" defaultValue={foodName} name="foodName" placeholder="enter Food name" className={`input input-bordered ${isDarkMode && 'text-black'}`} required />
                        </div>
                        {/* price */}
                        <div className="form-control">
                            <label className="label">
                                <span className=" text-lg font-semibold">Price</span>
                            </label>
                            <input type="number" name='price' defaultValue={price} placeholder="enter Equipment price" className={`input input-bordered ${isDarkMode && 'text-black'}`} required />
                        </div>
                        {/* quantity */}
                        <div className="form-control">
                            <label className="label">
                                <span className=" text-lg font-semibold">Food Quantity</span>
                            </label>
                            <input type="text" name='quantity' placeholder="Enter Food Quantity" className={`input input-bordered ${isDarkMode && 'text-black'}`} required />
                        </div>
                        {/* description */}
                        <div className="form-control">
                            <label className="label">
                                <span className=" text-lg font-semibold">Description</span>
                            </label>
                            <textarea type="text" name='description' placeholder="write something" className={`input input-bordered ${isDarkMode && 'text-black'}`} required />
                        </div>



                        <div className="form-control mt-6">
                            <p></p>
                            <button className={`py-3 rounded-md bg-orange-500 text-white ${isDisabled ? 'btn btn-disabled' : ''}`} disabled={isDisabled}>Purchase</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FoodPurchase;