import { GrUpdate } from "react-icons/gr";
import { useLoaderData } from "react-router-dom";
import { Tooltip } from "react-tooltip";


const MyFoods = () => {
    const data = useLoaderData()
    // console.log(data);
    
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Food Image</th>
        <th>Food Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    <Tooltip id="my-tooltip" />
        {
            data?.map((item,index)=> <>
            <tr className="hover">
        <th>{index + 1}</th>
        <td><img src={item.foodImage} className="w-[50px] h-[50px] object-cover" alt="" /></td>
        <td>{item.foodName}</td>
        <td>{item.price}</td>
        <td>{item.quantity}</td>
        <td><GrUpdate data-tooltip-id="my-tooltip" data-tooltip-content="Update Foods"/></td>
      </tr>
            
            </>)
        }
      
      {/* row 3 */}
      
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default MyFoods;