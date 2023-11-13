import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import AC_BASE_URL from "../config/config";
import { joiResolver } from "@hookform/resolvers/joi";
import { signUpvalidationSchema } from "../config/validation";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";

const useSignUp = () => {
  const toast = useToast()
  const router = useRouter()
  const { control,setError,reset, handleSubmit, } = useForm({
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

  const { mutate: signUp,isLoading:isSigningUp } = useMutation(async (signUpInfo: any) => {
    const data = await AC_BASE_URL.post("/auth/signup", signUpInfo);
    return data;
  },{
    onError (error:any){
      
      setError('email',{
        type:'required',
        message:error?.response?.data?.data?.email
      })

    },
    onSuccess(){

      reset()
      toast({
        description:"You Signed up Successfully",
        status:"success",
        onCloseComplete() {
          router.push('/')
        },
      })
    }
  });

  
  const onSubmit = handleSubmit((data)=>{{
    const userInfo = {...data,
      // @ts-ignore
      faculty_id:data?.faculty?.id,
      // @ts-ignore
      level:Number(data?.level?.value),
      // @ts-ignore
      department_id:data?.department?.id}
      signUp(userInfo)
  }})
  return { control, onSubmit,handleSubmit,isSigningUp };
};

export default useSignUp;
