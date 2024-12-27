import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const MyOrders = () => {
    const data = useLoaderData()
    // console.log(data);

    const [ramaing,setRemaining] = useState(data)

    const handleDelete =(_id)=>{
        axios.delete(`https://restaurant-management-server-site.vercel.app/purchaseFood/${_id}`)
        .then(res=>{
           
            if(res.data.deletedCount>0){
                toast.success("Deleted Successfully")

                const remain = ramaing.filter(item=> item._id!== _id)
                setRemaining(remain)
            }
            
        })
    }
    


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>sl</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>price</th>
                            <th>time</th>
                            <th>HR Name</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ramaing && ramaing.map((item, index) => (
                                <>
                                    <tr className="hover">
                                        <th>{index + 1}</th>
                                        <td><img src={item?.food_image} className='w-12 h-12' alt="food img" /></td>
                                        <td>{item?.foodName}</td>
                                        <td>{item?.price}</td>
                                        <td>{item?.oders_time}</td>
                                        <td>{item?.hr_name}</td>
                                        <td><button onClick={()=>handleDelete(item._id)}>delete</button></td>
                                    </tr>

                                </>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;