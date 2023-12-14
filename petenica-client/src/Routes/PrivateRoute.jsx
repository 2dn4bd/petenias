import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user, loading} = useAuth()
    if(loading){
        return <>
        <span className="loading loading-ring loading-lg dark:text-white absolute left-[50%] top-[50%]"></span>
        </>
    }
    if(user){
        return children
    }
    return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
};

export default PrivateRoute;