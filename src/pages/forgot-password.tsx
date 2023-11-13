import {
  Center,
  Image,
  Box,
  Heading,
  Icon,
  Stack,
  Text,
  VStack,
  useToast,
  ScaleFade,
} from "@chakra-ui/react";
import { joiResolver } from "@hookform/resolvers/joi";
import useACAPI from "api/useACAPI";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import AcButton from "reusables/ACButton";
import ACFormInput from "reusables/ACFormInput";
import Joi from "joi";
import { BsArrowLeft } from "react-icons/bs";

const ResetPasswordSuccessful = () => {
  return (
    <VStack minH="60vh" justify={"center"} w={{ base: "100%", md: "60%" }}>
      <Heading pt="6">Check your Mail</Heading>
      <Box w="full" h="48">
        <Image
          objectFit={"contain"}
          src="/forgot_password_successfull.png"
          w="full"
          h="full"
        />
      </Box>
      <Text className="ac_space" w="90%" textAlign="center">
        We have sent instructions to recover your password to the provided email
        address
      </Text>
    </VStack>
  );
};

const ForgotPassword = () => {
  const toast = useToast();
  const { control, handleSubmit } = useForm({
    resolver: joiResolver(
      Joi.object({
        email: Joi.string()
          .required()
          .email({ tlds: { allow: false } })
          .messages({
            "any.required": "This field is required",
            "string.empty": "This field is required",
            "string.email": "Email must be a valid email address",
          }),
      })
    ),
  });
  const { AC_BASE_URL } = useACAPI();

  const { mutate, isLoading, isSuccess } = useMutation(
    async (email: any) => {
      const { data } = await AC_BASE_URL.post(
        "/auth/request_password_reset",
        email
      );
      return data;
    },
    {
      onSuccess: () => {
        toast({
          title: "Password Reset Link Sent",
          status: "success",
          duration: 1500,
          isClosable: true,
          position: "top-right",
        });
      },
    }
  );

  const onSubmit = handleSubmit((data) => {
    mutate(data);
  });

  return (
    <div>
      <Stack
        direction={{ base: "column", md: "row" }}
        minH={{ base: "100%", md: "100vh" }}
        
      >
        <Center
          bgImage="/login_image_3.png"
          minH={{ base: "48", lg: "50vh" }}
          w={{ base: "100%", md: "45%" }}
          alignItems="flex-start"
          bgRepeat={"repeat-x"}
          bgSize={"cover"}
        >
          <VStack align="flex-start" justify="space-between" w="100%" h={{base:"48",md:'100%'}}>
            <Icon
              as={BsArrowLeft}
              color="#fff"
              w={{base:"6",md:'10'}}
              h={{base:"6",md:'10'}}
              
              
              my={{base:"6",md:'10'}}
              mx={{base:"6",md:'10'}}
              size="lg"
            />

            <VStack justify='center' h='100%'  alignSelf="center" className="ac_space" pb="4">
              <Heading
                fontSize={{base:'2xl',md:'4xl',lg:"5xl"}}
                color="white"
                textAlign="left"
                w={{ base: "700%", md: "95%" }}
              >
                Forgot Your Password?
              </Heading>
              <Text color="white">
                Enter your email address to reset your password
              </Text>
            </VStack>
          </VStack>
        </Center>

        {isSuccess && <ResetPasswordSuccessful />}

        {!isSuccess && (
          <VStack
            className="ac_space ac_spacing"
            spacing="4"
            w={{ base: "100%", md: "55%" }}
            alignSelf='center'
            pt="6"
            as="form"
            onSubmit={onSubmit}
          >
            <ACFormInput
              isDisabled={isLoading}
              control={control}
              name="email"
              label="Email Address"
            />
            <AcButton isLoading={isLoading} type="submit" w="100%">
              {" "}
              Submit
            </AcButton>
          </VStack>
        )}
      </Stack>
    </div>
  );
};

export default ForgotPassword;
