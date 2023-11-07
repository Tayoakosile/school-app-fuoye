import { useToken } from "@chakra-ui/react";
import axios from "axios";
import useACToken from "hooks/useACToken";



const useACAPI = () => {
    const {token} =   useACToken()
    const AC_BASE_URL = axios.create({
        baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}`,
        headers:{
            Authorization:`Bearer ${token}`
        }

    });

    return {
        AC_BASE_URL
    }
}

export default useACAPI
