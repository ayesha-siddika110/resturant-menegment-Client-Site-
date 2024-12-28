import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyOrders = () => {
    const data = useLoaderData()
    // console.log(data);
    const [nodata, setnodata] = useState('')

    useEffect(()=>{
        if(data?.length === 0){
            return setnodata('No Orders Foods Here')
        }

    },[data])
// console.log(nodata);

    

    const [ramaing,setRemaining] = useState(data)

    const handleDelete =(_id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            
              axios.delete(`https://restaurant-management-server-site.vercel.app/purchaseFood/${_id}`)
              .then(res=>{
                 
                  if(res.data.deletedCount>0){
                    if (result.isConfirmed) {
                        Swal.fire({
                          title: "Deleted!",
                          text: "Your file has been deleted.",
                          icon: "success"
                        });
                      }
      
                      const remain = ramaing.filter(item=> item._id!== _id)
                      setRemaining(remain)
                  }
                  
              })
          });
    }
    


    return (
        <div>

            <p className='text-3xl font-semibold text-center py-10'>My Orders Foods</p>
            <div className="overflow-x-auto w-[80%] m-auto pb-20">
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
                            ramaing ? ramaing.map((item, index) => (
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
                            )) : <>
                            
                            
                            </>
                        }
                        <p className='text-center text-3xl font-semibold'>{nodata}</p>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;