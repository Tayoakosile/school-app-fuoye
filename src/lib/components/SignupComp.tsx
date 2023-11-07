import {
  Heading, Text,
  VStack
} from "@chakra-ui/react";
import Link from "next/link";
import ACFormInput from '../../reusables/ACFormInput';
import useSignUp from '../../hooks/useSignUp';
import ACFormDropdown from '../../reusables/ACFormDropdown';

import AcButton from '../../reusables/ACButton';

import {
  StudentLevelOptions
} from "../util/util";
import useGetFaculties from "../../hooks/useGetFaculties";
import ACPhoneInput from "reusables/ACPhoneInput";

const SignupComp = () => {
  const {control,onSubmit ,handleSubmit,isSigningUp}= useSignUp()
  const {isPageLoading,all_faculties_and_department,setAllFacultiesAndDepartment} = useGetFaculties()
  
  return (
    <VStack  pt="8" align="flex-start" spacing="12"
    
    >
      <VStack>
        <Heading textAlign="center" fontSize="24px">
          Create your Study Account
        </Heading>
        <Text> Let&apos;s get you started</Text>
      </VStack>
      
      <VStack
      as='form'
      onSubmit={onSubmit}
        w="full"
        spacing="6"
        
      >
        
        <ACFormInput control={control} name="first_name"label="First Name" />
        <ACFormInput control={control} name="last_name"label="Last Name" />
        <ACFormInput control={control} name="email"label="Email Address" />
        <ACFormInput control={control} name="password"label="Password" />
        <ACPhoneInput control={control} name="phone"label="Your Phone Number" />
        <ACFormDropdown control={control} name="level"label="Level" 
        options={StudentLevelOptions}/>
        <ACFormDropdown control={control} 
        isLoading={isPageLoading}
        name="faculty"label="Faculty"
        onOptionChange = {((option:any)=>setAllFacultiesAndDepartment({...all_faculties_and_department,department_id:option?.id}))}
        options={all_faculties_and_department.faculties}
        getOptionLabel="name"
         />
        <ACFormDropdown control={control} 
        options={all_faculties_and_department.departments}
        name="department"label="Department"
        getOptionLabel="name"
         />
        

        

        <AcButton
          isLoading={isSigningUp}
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
