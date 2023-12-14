import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "./useAxiosPrivate";
import useAuth from "./useAuth";

const useRequestedPet = () => {
    const axiosPrivate = useAxiosPrivate()
    const {user} = useAuth()
    const {data: reqPet, refetch} = useQuery({
        queryKey:['pet_req', user?.email],
        queryFn: async () =>{
            const res = await axiosPrivate.get(`/adoptedreqget?email=${user.email}`)
            return res.data
        }
    })
    return[reqPet, refetch]
};

export default useRequestedPet;