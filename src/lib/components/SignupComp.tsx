import {
  Heading, Text, Center, VStack, Button
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
    <VStack  align="flex-start" spacing="3">
      <Center
        bgImage="/login_image_3.png"
        minH="35vh"
        w={{ base: "100%", md: "40%" }}
        bgRepeat={"repeat-x"}
        bgSize={"cover"}
      >
        <VStack w='100%' align='flex-start'
        className="ac_space"
        >

        <Heading
          size="2xl"
          textAlign={{base:'left',lg:"center"}}
          color="white"
          
          w={{ base: "100%", md: "90%" }}
          >
         Register
          
        </Heading>
      <Text color='white'> Create your account</Text>
          </VStack>
      </Center>

      {/* <VStack align='flex-start'>
        <Heading textAlign="center" fontSize="24px">
          Register
        </Heading>
      </VStack> */}
      
      <VStack
      as='form'
      onSubmit={onSubmit}
        w="full"
        className="ac_space ac_spacing"
        spacing="6"
        
      >
        
        <ACFormInput autoComplete="given-name" control={control} name="first_name"label="First Name" />
        <ACFormInput autoComplete="family-name" control={control} name="last_name"label="Last Name" />
        <ACFormInput autoComplete="email"  control={control} name="email"label="Email Address" />
        <ACFormInput autoComplete="new-password" control={control} name="password"label="Password" />
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
          w='100%'
        >
          {" "}
          Create Account
        </AcButton>
        {/* Login to account */}
        
        {/* Login to account */}
      </VStack>

      <Text fontSize="base" className='ac_space' my='6'>
          Already Registered?
          <Link href="/" passHref>
            <Button variant='link' pl="1">
              Login
            </Button>
          </Link>
        </Text>
    </VStack>
  );
};

export default SignupComp;
