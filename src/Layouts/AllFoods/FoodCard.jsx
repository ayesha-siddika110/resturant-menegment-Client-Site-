import { Link } from "react-router-dom";


const FoodCard = ({ item }) => {

    const {_id, category, email, description,foodImage, userName, quantity,foodName,price}= item || {}
    return (
        <div className="border-2 p-4 rounded-xl">
            <img src={foodImage} className='h-[200px] w-full object-cover object-center rounded-xl' alt="food image" />
            <p>{foodName}</p>
            <p>{price}tk only</p>
            <p>description: <span>{description}</span></p>
            <p>quantity : <span>{quantity}</span></p>
            <Link to={`/foodDetails/${_id}`} className="btn">view details</Link>
            
           

        </div>
    );
};

export default FoodCard;