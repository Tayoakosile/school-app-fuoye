

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading, Stack,
  useColorModeValue, Avatar,
  AvatarBadge,
  IconButton,
  Center,
  VisuallyHidden,
  VStack,
  HStack,
  Text
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import useACProfile from 'hooks/useACProfile';
import ACFormInput from 'reusables/ACFormInput';
import ACFormDropdown from 'reusables/ACFormDropdown';
import useGetFaculties from 'hooks/useGetFaculties';
import ACPhoneInput from 'reusables/ACPhoneInput';
import useACToken from 'hooks/useACToken';
import ACLoading from 'lib/components/ACLoading';
import AcButton from 'reusables/ACButton';

export default function UserProfileEdit() {
  const {profileInfo,control,isDirty} = useACProfile()
  const {token} = useACToken()
  
  const {isPageLoading,all_faculties_and_department,setAllFacultiesAndDepartment} = useGetFaculties()
  
  if(profileInfo.isLoading)return <ACLoading/>
  if(profileInfo.error)return 
  <Center h='60vh'>
    <Text> An error occured</Text>
  </Center>
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      >
        <VisuallyHidden display={'none'} opacity='0'>{token}</VisuallyHidden>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
          User Profile Edit
        </Heading>
        <FormControl id="userName">
          <FormLabel>User Icon</FormLabel>
          <VStack direction={['column', 'row']} spacing={6}>
            <Center>
              <Avatar size="xl"
               name={`${profileInfo.data.data.first_name} ${profileInfo.data.data.last_name}`}>
                <AvatarBadge
                  as={IconButton}
                  size="sm"
                  rounded="full"
                  top="-10px"
                  colorScheme="red"
                  aria-label="remove Image"
                />
              </Avatar>
            </Center>
            <Center w="full">
              <AcButton >Upload Photo</AcButton>
            </Center>
          </VStack>
        </FormControl>
        
        <VStack spacing='6'>
        <ACFormInput control={control} name="first_name" label="First Name" />
        <ACFormInput control={control} name="last_name" label="Last Name" />
        <ACFormInput isDisabled control={control} name="email" label="Email" />
        <ACPhoneInput control={control} name="phone" label="Phone Number" />
        <ACFormDropdown getOptionLabel='name' control={control} name="faculty" options={all_faculties_and_department.faculties} label="Faculty" />

        <ACFormDropdown getOptionLabel='name' control={control} name="department" options={all_faculties_and_department.departments} label="Department" />

        </VStack>
     
        <HStack spacing={6} direction={['column', 'row']} pt='6'>
        
          
          <AcButton variant='ghost' w='100%' is>
            Cancel
          </AcButton>
          <AcButton w='100%'>
            Update
          </AcButton>
        </HStack>
      </Stack>
    </Flex>
  )
}