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
    return <Center h='100vh'>
<Error statusCode={`${getSingleFile.error?.response?.status}`} withDarkMode={false}  />
    </Center>

  }
 
  return (
    <>
    
    <IconButton variant='ghost' aria-label="Back Icon" size='lg' 
    onClick={()=>router.back()} rounded='full'>
    <Icon as={BiArrowBack} />
    </IconButton>
    
    <VStack as="section" spacing="12"  pt='4' >
        
      
      
      {/* Title */}

      {/* Posted By Who  */}
      <VStack>
      <Heading fontSize="xl">{file?.course_short_name}</Heading>
      <Heading fontSize="lg">{file?.course_title}</Heading>
      
      <HStack  px="11px" justify="space-between">
        <VStack as="span" spacing="0" >
          <Text fontSize="sm">{getFacultyOrDepartment('faculties',file?.faculty_id)} | {getFacultyOrDepartment('departments',file?.department_id)}</Text>
          <Text
            fontSize="sm"
            // color={useColorModeValue("brand.500", "brand.200")}
          >
            07:00pm | Jan 12, 2022
          </Text>
        </VStack>


      </HStack>
      </VStack>
      <Image src='/pdf.png' />

      {/* Posted By Who  */}
    <a href={file?.file}  download="nme">
<AcButton>
        
    Download
</AcButton>
    </a>
    
    </VStack>
    </>
  );
};

export default SingleFile;
