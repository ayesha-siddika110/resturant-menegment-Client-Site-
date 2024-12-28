import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthPrivider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";


const PrivetRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();
    if(user){
        return children
    }
    // if(!user){
    //      navigate('/login')
    // }

    if(loading){
        <span className="loading loading-bars loading-lg"></span>
    }
     
    
    
    
    return <Navigate to="/login" state={location?.pathname}></Navigate>
};

export default PrivetRouter;