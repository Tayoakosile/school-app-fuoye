import {
  Button,
  FormControl,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import useLogin from "hooks/useLogin";
import Link from "next/link";
import AcButton from "reusables/ACButton";
import ACFormInput from "reusables/ACFormInput";

const LoginComp = () => {
  const {control,onSubmit,isLoginIn} = useLogin()
  return (
    <VStack as="section"
    className="ac_space"
    >
      <VStack as="span">
        
        <Heading size="xl" textAlign="center">
          Sign in to your ACAID account
          {/* Sign In to your Study Bud account */}
        </Heading>
        
      </VStack>
      <VStack
        w="full"
        onSubmit={onSubmit}
        spacing="8"
        pt="8"
        as="form"
        sx={{
          input: {
            h: "14",
          },
        }}
      >
        <ACFormInput autoComplete="email" control={control} name="email" label='Email' />
        <ACFormInput autoComplete="current-password" control={control} name="password" label="Password" />

        <AcButton
        type='submit'
          
        isLoading={isLoginIn}
        >
          
          Login to your account
        </AcButton>
        <Text fontSize="sm">
          Not Registered?
          <Link href="/signup" passHref>
            <Text as="span" pl="1">
              Sign up
            </Text>
          </Link>
        </Text>
      </VStack>
    </VStack>
  );
};

export default LoginComp;
