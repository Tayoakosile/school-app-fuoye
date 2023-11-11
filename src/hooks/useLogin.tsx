import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { joiResolver } from "@hookform/resolvers/joi";
import { loginValidationSchema } from "config/validation";
import { useToast } from "@chakra-ui/react";
import dayjs from "dayjs";
import useACAPI from "api/useACAPI";
import { useRouter } from "next/router";
import useAccessToken from "stores/access_token";

const useLogin = () => {
    const toast = useToast()
    const {addAccessToken} = useAccessToken()
    const router = useRouter()
    const {AC_BASE_URL} = useACAPI()
    
    
    

    const { control, setError, reset, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: "",
            password: "",

        },
        resolver: joiResolver(loginValidationSchema),
    });

    const { mutate: handleLogin, isLoading: isLoginIn } = useMutation(async (signUpInfo: any) => {
        const {data} = await AC_BASE_URL.post("/auth/login", signUpInfo);
        return data;
    }, {
        onError(error: any) {

            setError('email', {
                type: 'required',
                message: error?.response?.data?.message || error?.response?.data?.email
            })

        },
        onSuccess(data) {
            
            
            addAccessToken({
                date:dayjs().add(1,'days').format(),
                token:data?.data?.token            
            })

            reset()
            toast({
                description: "Login Successfull",
                status: "success",
                duration:2000,
                onCloseComplete() {
                    router.push('/dashboard')
                },
            })
        }
    });


    const onSubmit = handleSubmit((data) => {

        handleLogin(data)
    }
        )
    console.log(errors, 'errors')
    return { control, onSubmit,isLoginIn }

}

export default useLogin