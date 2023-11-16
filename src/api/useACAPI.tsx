import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import useAccessToken from "stores/access_token";

const useACAPI = () => {
  
  const { access_token } = useAccessToken();
  const router = useRouter()
  const toast = useToast();
  
  
  const AC_BASE_URL = axios.create({
    // baseURL: `https://acaid-backend-ecde303a9cae.herokuapp.com`,
    baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}`,
    // baseURL: `http://localhost:4000`,

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${access_token.token ?? "token"}`,
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
    withCredentials: false,
  });
  
  AC_BASE_URL.interceptors.response.use(

    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
    setTimeout(() => {
      
      if (error.response?.status && error.response?.status === 401) {
        localStorage.removeItem('token')

        toast({
          description: "Please Login to Continue",
          status: "error",
          duration: 2000,
          variant:'subtle',
          isClosable: true,
          onCloseComplete() {
            router.replace('/')
            // window.location.replace('/')
          },
        });
      }
    }, 1);
      return Promise.reject(error);
    }
  );

  return {
    AC_BASE_URL,
  };
};

export default useACAPI;
