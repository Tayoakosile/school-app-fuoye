import {
  Button,
  FormControl,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";

const LoginComp = () => {
  return (
    <VStack as="section">
      <VStack as="span">
        <Heading size="xl" textAlign="center">
          Sign In to your Study Bud account
        </Heading>
        <Text>Welcome back.</Text>
      </VStack>
      <VStack
        w="full"
        spacing="8"
        pt="8"
        as="form"
        sx={{
          input: {
            h: "14",
          },
        }}
      >
        {/* Full name */}
        <FormControl isInvalid w="full">
          <Input placeholder="Full Name " size="lg" className="chakra__input" />
        </FormControl>
        {/* Full name */}

        {/* Full name */}
        <FormControl isInvalid w="full">
          <Input
            placeholder="Email Address"
            size="lg"
            className="chakra__input"
          />
        </FormControl>
        {/* Full name */}

        <Button
          w="full"
          bg="#356EFD"
          h="14"
          color="white"
          rounded="xs"
          size="lg"
          fontWeight="400"
        >
          {" "}
          Login to your account
        </Button>
        <Text fontSize="sm">
          Not Registered?
          <Link href="/login" passHref>
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
