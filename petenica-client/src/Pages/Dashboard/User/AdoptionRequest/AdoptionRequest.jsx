import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

const AdoptionRequest = () => {
    const axiosPublic = useAxiosPublic()
    const {data: reqData = [], refetch} = useQuery({
        queryKey:['reqpets'],
        queryFn:async () =>{
            const res = await axiosPublic.get(``)
        }
    })
    return (
        <div>
            adoption req
        </div>
    );
};

export default AdoptionRequest;