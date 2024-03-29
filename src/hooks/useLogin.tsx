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
  const toast = useToast();
  const { addAccessToken } = useAccessToken();
  const router = useRouter();
  const { AC_BASE_URL } = useACAPI();

  const {
    control,
    setError,
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: joiResolver(loginValidationSchema),
  });

  const { mutate: handleLogin, isLoading: isLoginIn } = useMutation(
    async (signUpInfo: any) => {
      const { data } = await AC_BASE_URL.post("/auth/login", signUpInfo);
      return data;
    },
    {
      onError(error: any) {
        
        setError("email", {
          type: "required",
          message:
            error?.response?.data?.data?.message ||
            error?.response?.data?.data?.email ||error?.response?.data?.message
        });
      },
      onSuccess(data) {
        console.log(data?.data?.token,'data?.data?.token')
        addAccessToken({
          date: dayjs().add(1, "days").format(),
          token: data?.data?.token,
        });

        
        toast({
          description: "Login Successful",
          status: "success",
          duration: 2000,
          onCloseComplete() {
            router.push("/dashboard");
          },
        });
      },
    }
  );

  const onSubmit = handleSubmit((data) => {
    handleLogin(data);
  });

  return { control, onSubmit, isLoginIn };
};

export default useLogin;
