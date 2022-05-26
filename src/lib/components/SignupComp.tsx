import {
  Box,
  FormControl,
  Heading,
  Input,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import Select from "react-select";

import {
  StudentFalcultyOptions,
  StudentLevelOptions,
  StudentDepartmentOptions,
} from "../util/util";

const SignupComp = () => {
  return (
    <VStack as="section" pt="8" align="flex-start" spacing="12">
      <VStack>
        <Heading textAlign="center" fontSize="24px">
          Create your Study Account
        </Heading>
        <Text> Let`&apos;`s get you started</Text>
      </VStack>
      <VStack
        as="form"
        w="full"
        spacing="6"
        sx={{
          input: {
            h: "12",
          },
          ".chakra__input": {
            h: "16",
          },
        }}
      >
        {/* Full name */}
        <FormControl isInvalid>
          <Input
            placeholder="Full Name goes in here"
            size="lg"
            className="chakra__input"
          />
        </FormControl>
        {/* Full name */}

        {/* Full name */}
        <FormControl isInvalid>
          <Input
            type="email"
            placeholder="Email Address"
            size="lg"
            className="chakra__input"
          />
        </FormControl>
        {/* Full name */}

        {/* Level */}
        <Box
          w="full"
          as={Select}
          options={StudentLevelOptions}
          placeholder="Your Current Level"
          // onChange={(values) => this.onChange(values)}
        />
        {/* Level */}

        {/* Department */}
        <Box
          w="full"
          as={Select}
          options={StudentFalcultyOptions}
          placeholder="Your Falculty"
          // onChange={(values) => this.onChange(values)}
        />
        {/* Department */}

        {/* Department */}
        <Box
          w="full"
          as={Select}
          options={StudentDepartmentOptions}
          placeholder="Department"
          // onChange={(values) => this.onChange(values)}
        />
        {/* Department */}

        <Button
          w="full"
          size="lg"
          rounded="xs"
          bg="#356EFD"
          color="white"
          colorScheme="blue"
          type="submit"
        >
          {" "}
          Create Account
        </Button>
        {/* Login to account */}
        <Text fontSize="sm">
          Already Registered?
          <Link href="/login" passHref>
            <Text as="span" pl="1">
              Login
            </Text>
          </Link>
        </Text>
        {/* Login to account */}
      </VStack>
    </VStack>
  );
};

export default SignupComp;
