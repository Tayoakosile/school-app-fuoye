import {
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
import useACProfile from 'hooks/useACProfile';
import ACFormInput from 'reusables/ACFormInput';
import ACFormDropdown from 'reusables/ACFormDropdown';
import useGetFaculties from 'hooks/useGetFaculties';
import ACPhoneInput from 'reusables/ACPhoneInput';
import ACLoading from 'lib/components/ACLoading';
import AcButton from 'reusables/ACButton';
import useImageUploader from 'hooks/useImageUploader';
import { useRef } from 'react';
import { StudentLevelOptions } from 'lib/util/util';

export default function UserProfileEdit() {
  const {profileInfo,control,isDirty,touchedFields,onSubmit,isUpdatingProfile} = useACProfile()
    const inputRef = useRef<HTMLInputElement | null>();

  const {setFiles,avatarSrc} = useImageUploader()
  
  const {all_faculties_and_department} = useGetFaculties()
  
  
  if(profileInfo.isLoading)return <ACLoading/>
  if(profileInfo.error)return <Center h='60vh'>
    <Text> An error occured,Please refresh to continue</Text>
  </Center>
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      >
        
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        as='form'
        onSubmit={onSubmit}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
          Your Profile
        </Heading>
        <FormControl id="userName">
          
          <VStack direction={['column', 'row']} spacing={6}>
            <Center>
              <Avatar size="xl"
              src={avatarSrc}
               name={`${profileInfo.data.data.first_name} ${profileInfo.data.data.last_name}`}>
                <AvatarBadge
                  as={IconButton}
                  size="sm"
                  rounded="full"
                  top="-10px"
                  colorScheme="green"
                  aria-label="remove Image"
                />
              </Avatar>
            </Center>
            <Center w="full"as='label' htmlFor="upload_file">
              <VisuallyHidden>
                <input  
                // @ts-ignore
                ref={inputRef} type="file" id='upload_file' style={{display:"none"}} onChange={(e:any)=>setFiles(e)} accept='image/*' />
              </VisuallyHidden>
              <AcButton
              // @ts-ignore
               onClick={() => inputRef.current.click()}>Upload Photo</AcButton>
            </Center>
          </VStack>
        </FormControl>
        
        <VStack spacing='6'>
        <ACFormInput control={control} name="first_name" label="First Name" />
        <ACFormInput control={control} name="last_name" label="Last Name" />
        <ACFormInput isDisabled control={control} name="email" label="Email" />
        <ACPhoneInput control={control} name="phone" label="Phone Number" />a
        <ACFormDropdown getOptionLabel='name' control={control} name="faculty" options={all_faculties_and_department.faculties} label="Faculty" />

        <ACFormDropdown getOptionLabel='name' control={control} name="department" options={all_faculties_and_department.departments} label="Department" />
        <ACFormDropdown  control={control} name="level" options={StudentLevelOptions} label="Level" />

        </VStack>
     
        <HStack spacing={6} direction={['column', 'row']} pt='6'>
        
          
          
          <AcButton variant='ghost' w='100%'  type='button' isDisabled={isUpdatingProfile}>
            Cancel
          </AcButton>
          <AcButton w='100%' type='submit' isLoading={isUpdatingProfile}>
            Update
          </AcButton>

        </HStack>
      </Stack>
    </Flex>
  )
}