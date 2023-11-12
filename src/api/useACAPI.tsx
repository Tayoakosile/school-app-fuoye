import { useToast, useToken } from "@chakra-ui/react";
import axios from "axios";
import useACToken from "hooks/useACToken";
import useAccessToken from "stores/access_token";

const useACAPI = () => {
  const { token } = useACToken();
  const { access_token } = useAccessToken();
  const toast = useToast();
  
  
  const AC_BASE_URL = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}`,
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
        // localStorage.removeItem('token')

        toast({
          description: "Please Login to Continue",
          status: "error",
          duration: 2000,
          variant:'subtle',
          isClosable: true,
          onCloseComplete() {
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
