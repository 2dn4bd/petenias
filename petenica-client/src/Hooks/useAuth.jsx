import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProviders";

const useAuth = () => {
    return useContext(AuthContext)
};

export default useAuth;