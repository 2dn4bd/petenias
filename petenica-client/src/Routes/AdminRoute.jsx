import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()
    const [isAdmin, isAdminLoading] = useAdmin()
    if(loading || isAdminLoading){
        return <>
        <span className="loading loading-ring loading-lg dark:text-white absolute left-[50%] top-[50%]"></span>
        </>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
};

export default AdminRoute;