import {
  Box, Button, Center, Heading, Text,
  VStack
} from "@chakra-ui/react";
import useLogin from "hooks/useLogin";
import Link from "next/link";
import AcButton from "reusables/ACButton";
import ACFormInput from "reusables/ACFormInput";

const LoginComp = () => {
  const {control,onSubmit,isLoginIn} = useLogin()
  return (
    <>
      <Center bgImage="/LoginImage.png" minH='72' w='100%' >
      <Heading size="2xl" textAlign="center"  color="white" w='80%'>
          Sign in to your ACAID account
          {/* Sign In to your Study Bud account */}
        </Heading>
        
      </Center>
    
    <VStack as="section"
    className="ac_space"
    >
    
      <VStack as="span">
        
        
        
      </VStack>
      <VStack
        w="full"
        align='flex-start'
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
        <VStack as='span' w='100%' spacing='2' align='flex-start'>

        <ACFormInput autoComplete="current-password" control={control} name="password" label="Password" />
        <Link href="/forgot-password">
<Button variant="link" fontWeight="500"> Forgot your Password?</Button>
        </Link>
        </VStack>
        <AcButton
        type='submit'
        isLoading={isLoginIn}
        >
          
          Login to your account
        </AcButton>
        <Text fontSize="sm">
          Not Registered?
          <Link href="/signup" >
            <Button variant="link" size="sm" pl="3">
              Sign up
            </Button>
          </Link>
        </Text>
      </VStack>
    </VStack>
    </>
  );
  
};

export default LoginComp;
