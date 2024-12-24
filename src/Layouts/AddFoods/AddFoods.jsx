import { useContext, useRef } from 'react';
import { AuthContext } from '../../AuthProvider/AuthPrivider';
import axios from 'axios';
import toast from 'react-hot-toast';


const AddFoods = () => {

    const formref=useRef(null)
    
    const {user} = useContext(AuthContext)

    const handleAddFoods =(e)=>{
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())
        console.log(data);

        axios.post(`http://localhost:3000/foods`, data)
        .then(res=>{
            console.log(res.data);
            if(res.data.insertedId){
                toast.success('successfully added the food')
                formref.current.reset()
            }
            
        })


        

    }

    return (
        <div>
            <form ref={formref} onSubmit={handleAddFoods} className="card-body grid lg:grid-cols-2 grid-cols-1 w-[80%] m-auto">
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
                    <input type="text" name="foodName" placeholder="enter Food name" className="input input-bordered" required />
                </div>
                {/* food image */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Food Image</span>
                    </label>
                    <input type="text" name='foodImage' placeholder="enter Food Image URL" className="input input-bordered" required />
                </div>
                {/* category */}
                <div className='form-control '>
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Select Food Category</span>
                    </label>

                    <select name='category' className="select select-ghost select-bordered w-full bg-white">
                        <option disabled >Food category</option>
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
                    <input type="number" name='price' placeholder="enter Equipment price" className="input input-bordered" required />
                </div>
                {/* quantity */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Food Quantity</span>
                    </label>
                    <input type="text" name='quantity' placeholder="Enter Food Quantity" className="input input-bordered" required />
                </div>
                {/* descriptions */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Description</span>
                    </label>
                    <textarea type="text" name='description' placeholder="ingredients, making procedure, etc." className="input input-bordered" required />
                </div>
                {/* food origin */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Food Origin</span>
                    </label>
                    <input type="text" name='Food origin' placeholder="enter food origin" className="input input-bordered" required />
                </div>
                


                <div className="form-control mt-6">
                    <p></p>
                    <button className="py-3 rounded-md bg-slate-600 text-white">Add Food</button>
                </div>
            </form>
        </div>
    );
};

export default AddFoods;