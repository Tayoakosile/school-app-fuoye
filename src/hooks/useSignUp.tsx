import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import AC_BASE_URL from "../config/config";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { signUpvalidationSchema } from "../config/validation";

const useSignUp = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      level: "",
      department: "",
      faculty: "",
    },
    resolver: joiResolver(signUpvalidationSchema),
  });

  const { mutate: signUp } = useMutation(async (signUpInfo: any) => {
    const data = await AC_BASE_URL.post("/signup", signUpInfo);
    return data;
  });

  const onSubmit = ((data)=>{
    console.log(data,'data')

  })
  
  return { control, onSubmit,handleSubmit };
};

export default useSignUp;
