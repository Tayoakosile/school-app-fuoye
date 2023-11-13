import axios from "axios";

const AC_BASE_URL = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}`,

  });
  
  export default AC_BASE_URL
