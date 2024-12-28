import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthPrivider";
import { useNavigate } from "react-router-dom";


const PrivetRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    // const navigate = useNavigate()
    if(user){
        return children
    }
    // if(!user){
    //      navigate('/login')
    // }

    if(loading){
        <span className="loading loading-bars loading-lg"></span>
    }
     
    
    
    
    return (
        <div>
            
        </div>
    );
};

export default PrivetRouter;