import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPrivate from "./useAxiosPrivate";

const useAdmin = () => {
    const axiosPrivate = useAxiosPrivate()
    const {user} = useAuth()
    const {data: isAdmin, isPending: isAdminLoading} = useQuery({
        queryKey:[user?.email, 'isAdmin'],
        queryFn: async() =>{
            const res = await axiosPrivate.get(`/users/admin/${user.email}`)
            console.log(res.data);
            return res.data?.admin
        }
    })
    return[isAdmin, isAdminLoading]
};

export default useAdmin;