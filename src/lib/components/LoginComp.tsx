import {
  Button,
  Center,
  Heading,
  Stack,
  Text,
  VStack
} from "@chakra-ui/react";
import useLogin from "hooks/useLogin";
import Link from "next/link";
import AcButton from "reusables/ACButton";
import ACFormInput from "reusables/ACFormInput";

const LoginComp = () => {
  const { control, onSubmit, isLoginIn } = useLogin();
  return (
    <Stack direction={{ base: "column", md: "row" }} minH="100vh">
      <Center
        bgImage="/login_image_3.png"
        minH="35vh"
        w={{ base: "100%", md: "40%" }}
        bgRepeat={"repeat-x"}
        bgSize={"cover"}
      >
        <Heading
          size="2xl"
          textAlign="center"
          color="white"
          w={{ base: "70%", md: "90%" }}
        >
          Sign in to your ACAID account
          {/* Sign In to your Study Bud account */}
        </Heading>
      </Center>

      <VStack
        as="section"
        w={{ base: "100%", md: "60%" }}
        alignSelf="center"
        className="ac_space"
      >
        <VStack as="span"></VStack>
        <VStack
          w="full"
          align="flex-start"
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
          <ACFormInput
            autoComplete="email"
            control={control}
            name="email"
            label="Email"
          />
          <VStack as="span" w="100%" spacing="2" align="flex-end">
            <ACFormInput
              autoComplete="current-password"
              control={control}
              name="password"
              label="Password"
            />
            <Link href="/forgot-password" passHref>
              <Button
                variant="link"
                alignSelf="flex-end !important"
                w="100%"
                size='sm'
              >
                {" "}
                Forgot your Password?
              </Button>
            </Link>
          </VStack>
          <AcButton type="submit" isLoading={isLoginIn} w="100%">
            Login to your account
          </AcButton>
          <Text fontSize="md" pb="10">
            Not Registered?
            <Link href="/signup">
              <Button variant="link" size="md" pl="1">
                Join ACAID NOW
              </Button>
            </Link>
          </Text>
        </VStack>
      </VStack>
    </Stack>
  );
};

export default LoginComp;
