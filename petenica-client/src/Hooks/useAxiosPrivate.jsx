import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosPrivate = axios.create({
    baseURL:'http://localhost:5000'
})
const useAxiosPrivate = () => {
    const navigate = useNavigate()
    const {logOut} = useAuth()
    axiosPrivate.interceptors.request.use(function(config){
        config.headers
        const token = localStorage.getItem('access_token')
        config.headers.authorization =  `Bearer ${token}`;
        return config
    }, function(error){
        return Promise.reject(error)
    })

    axiosPrivate.interceptors.response.use(function(response) {
        return response
    }, async(error) =>{
        const status = error.response.status;
        console.log(error);
        if(status === 401 || status === 403){
            await logOut()
            navigate('/login')
        }
        return Promise.reject(error)
    })
    return axiosPrivate
};

export default useAxiosPrivate;