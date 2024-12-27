import { useLoaderData } from "react-router-dom";
import { useContext, useRef } from 'react';
import { AuthContext } from '../../AuthProvider/AuthPrivider';
import axios from 'axios';
import toast from 'react-hot-toast';



const UpdateFood = () => {
    const data = useLoaderData()
    console.log(data);
    const formref=useRef(null)
    
    const {foodOrigin, username, foodName, foodImage, category, price, quantity, description, email, } = data || {}
    
    const {user} = useContext(AuthContext)

    const handleUpdateFoods =(e)=>{
        e.preventDefault()
        const formData = new FormData(e.target)
        const dataF = Object.fromEntries(formData.entries())
        console.log(dataF);

        axios.patch(`https://restaurant-management-server-site.vercel.app/foods/${data._id}`, dataF)
        .then(res=>{
            console.log(res.data);
            if(res.data.modifiedCount>0){
                toast.success('successfully Update the food')
            }
            
        })


        

    }
    
    return (
        <div>
            <form ref={formref} onSubmit={handleUpdateFoods} className="card-body grid lg:grid-cols-2 grid-cols-1 w-[80%] m-auto">
                {/* name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Your Name</span>
                    </label>
                    <input type="text" defaultValue={user?.displayName} placeholder="enter Item name" name='username' className="input input-bordered" readOnly required />
                </div>
                {/* email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Your email</span>
                    </label>
                    <input type="text" defaultValue={user?.email} name='email' className="input input-bordered" readOnly />
                </div>
                {/* food name */}

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Food Name</span>
                    </label>
                    <input type="text" name="foodName" defaultValue={foodName} placeholder="enter Food name" className="input input-bordered" required />
                </div>
                {/* food image */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Food Image</span>
                    </label>
                    <input type="text" name='foodImage' defaultValue={foodImage} placeholder="enter Food Image URL" className="input input-bordered" required />
                </div>
                {/* category */}
                <div className='form-control '>
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Select Food Category</span>
                    </label>

                    <select name='category' className="select select-ghost select-bordered w-full bg-white" defaultValue={category}>
                        <option  disabled >Food category</option>
                        <option>Starters</option>
                        <option>Main Course</option>
                        <option>Desserts & Drinks</option>
                    </select>
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
                    <input type="text" name='quantity' defaultValue={quantity} placeholder="Enter Food Quantity" className="input input-bordered" required />
                </div>
                {/* descriptions */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Description</span>
                    </label>
                    <textarea type="text" name='description' defaultValue={description} placeholder="ingredients, making procedure, etc." className="input input-bordered" required />
                </div>
                {/* food origin */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Food Origin</span>
                    </label>
                    <input type="text" name='foodOrigin' defaultValue={foodOrigin} placeholder="enter food origin country" className="input input-bordered" required />
                </div>
                


                <div className="form-control mt-6">
                    <p></p>
                    <button className="py-3 rounded-md bg-slate-600 text-white">Update</button>
                </div>
            </form>
            
        </div>
    );
};

export default UpdateFood;