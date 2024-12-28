import { useContext } from "react";
import { GrUpdate } from "react-icons/gr";
import { Link, useLoaderData } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../../AuthProvider/AuthPrivider";


const MyFoods = () => {
  const data = useLoaderData()
  // console.log(data);
  const {isDarkMode} = useContext(AuthContext)

  return (
    <div className={`${isDarkMode ? 'bg-blue-950 text-white' : 'bg-white'}`}>
      <p className='text-3xl font-semibold text-center py-10'>My Added Foods</p>

      <div className="overflow-x-auto w-[80%] m-auto pb-12">
        <table className="table">
          {/* head */}
          <thead>
            <tr className={`${isDarkMode && 'text-white'}`}>
              <th></th>
              <th>Food Image</th>
              <th>Food Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            <Tooltip id="my-tooltip" />
            {
              data?.map((item, index) => <>
                <tr className="">
                  <th>{index + 1}</th>
                  <td><img src={item.foodImage} className="w-[50px] h-[50px] object-cover" alt="" /></td>
                  <td>{item.foodName}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td><Link to={`/updateFood/${item._id}`}><GrUpdate data-tooltip-id="my-tooltip" data-tooltip-content="Update Foods" className="cursor-pointer" /></Link></td>
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