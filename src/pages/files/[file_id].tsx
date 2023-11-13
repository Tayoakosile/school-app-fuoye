import { Center, Heading, HStack, Icon, IconButton, Image, Spinner, Text, VStack } from "@chakra-ui/react";
import useSingleFile from "hooks/useSingleFile";
import schoolFacultiesAndDepartment from '../../config/faculties_and_department.json'
import { useState } from "react";
import AcButton from "reusables/ACButton";
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/router";
import ACLoading from "lib/components/ACLoading";
import Error from "next/error";

const SingleFile = () => {
  const { getSingleFile } = useSingleFile();
  const router = useRouter()
  console.log(getSingleFile.error,'getSingleFile.error')

  const file = getSingleFile?.data?.allFiles;
  const getFacultyOrDepartment = (type='faculties',id:number)=>{
    
    // @ts-check
    const res =type =='faculties'? schoolFacultiesAndDepartment.faculties.find((item:any)=>item.id == id) : schoolFacultiesAndDepartment.departments.find((item:any)=>item.id == id)
    return res?.name; 

  }
  if(getSingleFile.isLoading){
    return <ACLoading/>
  }
  if(getSingleFile.error){
    return <VStack h='60vh' >
      <IconButton variant='ghost' aria-label="Back Icon" size='lg' alignSelf='flex-start' 
    onClick={()=>router.back()} rounded='full'>
    <Icon as={BiArrowBack} />
    </IconButton>
    
<Error statusCode={Number(
  // @ts-ignore
  getSingleFile.error?.response?.status)} withDarkMode={false}  />
    </VStack>

  }
 
  return (
    <>
    
    <IconButton variant='ghost' aria-label="Back Icon" size='lg' 
    onClick={()=>router.back()} rounded='full' className=' ac_space' mt='3'>
    <Icon as={BiArrowBack} w='6' h='6' />
    </IconButton>
    
    <VStack as="section" spacing="12"  pt='4' >
        
      
      
      {/* Title */}

      {/* Posted By Who  */}
      <VStack>
      <Heading fontSize="4xl">{file?.course_short_name}</Heading>
      <Heading fontSize="lg">{file?.course_title}</Heading>
      
      <HStack  px="11px" justify="space-between">
        <VStack as="span" spacing="0" >
          <Text fontSize="sm">{getFacultyOrDepartment('faculties',file?.faculty_id)}</Text>
          <Text fontSize="sm">{getFacultyOrDepartment('departments',file?.department_id)}</Text>
          
        </VStack>


      </HStack>
      </VStack>
      <Image src='/pdf.png' />

      
    <a href={file?.file}  download={file?.name}>
<AcButton>
        
    Download
</AcButton>
    </a>
    
    </VStack>
    </>
  );
};

export default SingleFile;
