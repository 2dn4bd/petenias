import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useAuth from "../../../../Hooks/useAuth";

const MyDonationCard = () => {
    const axiosPublic = useAxiosPublic()
    const {user} = useAuth()
    const {data: myDonate =[], refetch} = useQuery({
        queryKey:['mydonatesss'],
        queryFn: async () =>{
            const res = await axiosPublic.get(`/mydonation/:${user.email}`)
            return res.data
        }
        
    })
    return (
        <div>
            my donation here
        </div>
    );
};

export default MyDonationCard;