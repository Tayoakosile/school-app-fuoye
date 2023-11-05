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
import ACFormInput from '../../reusables/ACFormInput';
import useSignUp from '../../hooks/useSignUp';
import ACFormDropdown from '../../reusables/ACFormDropdown';
import AcButton from '../../reusables/ACButton';

import {
  StudentFalcultyOptions,
  StudentLevelOptions,
  StudentDepartmentOptions,
} from "../util/util";

const SignupComp = () => {
  const {control,onSubmit ,handleSubmit}= useSignUp()
  return (
    <VStack  pt="8" align="flex-start" spacing="12"
    as='form'
        onSubmit={(e)=>{e.preventDefault()}}
    >
      <VStack>
        <Heading textAlign="center" fontSize="24px">
          Create your Study Account
        </Heading>
        <Text> Let&apos;s get you started</Text>
      </VStack>
      <VStack
        w="full"
        spacing="6"
        
      >
        {/* Full name */}
        <ACFormInput control={control} name="first_name"label="First Name" />
        <ACFormInput control={control} name="last_name"label="Last Name" />
        <ACFormInput control={control} name="email"label="Email Address" />
        <ACFormInput control={control} name="password"label="Password" />
        <ACFormDropdown control={control} name="level"label="Level" 
        options={StudentLevelOptions}
        />
        <ACFormDropdown control={control} name="faculty"label="Faculty" />
        <ACFormDropdown control={control} name="department"label="Department" />
        {/* Full name */}

        

        <AcButton
          
          type="submit"
        >
          {" "}
          Create Account
        </AcButton>
        {/* Login to account */}
        
        {/* Login to account */}
      </VStack>
      <Text fontSize="sm">
          Already Registered?
          <Link href="/login" passHref>
            <Text as="span" pl="1">
              Login
            </Text>
          </Link>
        </Text>
    </VStack>
  );
};

export default SignupComp;
