import {
    Box,
    Center,
    HStack,
    Icon,
    Input,
    SimpleGrid,
    Spinner,
    Text,
    useColorModeValue,
    VStack,
} from "@chakra-ui/react";
import useSearchFiles from "hooks/useSearchFiles";
import Fuse from "fuse.js";
import Link from "next/link";
import { BsFiletypePdf } from "react-icons/bs";
import { useState, useEffect } from "react";

const AllCourseFiles = () => {
  
  const { allFiles, searchTerm, setSearchTerm ,isGettingFiles} = useSearchFiles();
  
  const [inputWords,setInputWords] = useState('')
  const [filteredFiles,setFilteredFiles] = useState<any>()


useEffect(()=>{
    
    if(!inputWords)  return setFilteredFiles(allFiles)
    const fuse = new Fuse(allFiles, {
         includeMatches: true,
	 findAllMatches: true,
	
        keys: [
            "department",
            "faculty",
            "course_short_name",
            "course_code",
            "course_title",
        ]
    })
    
    setFilteredFiles(fuse.search(inputWords)?.map((data:any)=>{return {...data?.item}}))
},[inputWords,allFiles])


if(isGettingFiles){
  return <Center h='100vh' w='100%'>
    <Spinner size='lg' color="brand.500"  />
  </Center>
}
  return (
    <Box mt={{ base: "6", lg: "16" }}>
      <HStack w="full" px="4" justify={{ base: "center", lg: "flex-end" }}>
        <Input
          size="lg"

          placeholder="Search for a course....."
          onChange={(e:any)=>setInputWords(e.target.value)}
          
          w={{ base: "100%", lg: "50%" }}
        />
      </HStack>
      
      {filteredFiles?.length <= 0 && (
        <Center h="50vh">
          <Text fontSize="md">This course cant be found</Text>
        </Center>
      )}

      <SimpleGrid
        columns={[1, 1, 3]}
        spacing={{ base: "5", lg: "10" }}
        px="2"
        pt={{ base: "8", lg: "20" }}
        pb="6"
      >
        {filteredFiles?.map((file: any) => {
            // const file  = inputWords ? data?.item : data
            return (
                <>
                  <Link
                    href={`/files/${file?.course_short_name}`}
                    key={file?._id}
                  >
                    <VStack
                      bg={useColorModeValue("gray.50", "gray.700")}
                      w="100%"
                      h="fit-content"
                      p="4"
                      spacing="4"
                      align="flex-start"
                      justify="center"
                      key={file.courseFileName}
                      rounded="md"
                      cursor="pointer"
                      shadow="xl"
                    >
                      <Icon
                        as={BsFiletypePdf}
                        w={{ base: "12", lg: "20" }}
                        color={useColorModeValue("brand.500", "brand.200")}
                        h={{ base: "12", lg: "12" }}
                        strokeWidth={"0.5px"}
                      />
                      <VStack spacing="1" align="flex-start">
                        <Text
                          textTransform="uppercase"
                          fontWeight={"bold"}
                          fontSize={{ base: "xl", lg: "lg" }}
                        >
                          {file.course_short_name}
                        </Text>
      
                        <Text
                          textTransform="uppercase"
                          fontSize={{ base: "sm", lg: "lg" }}
                        >
                          {file?.course_title}
                        </Text>
                        <Text
                          fontWeight={"normal"}
                          fontSize={{ base: "xs", lg: "lg" }}
                        >
                          {file?.faculty} | {file?.department}
                        </Text>
                      </VStack>
                    </VStack>
                  </Link>
                </>
              )
        })}{" "}
      </SimpleGrid>
    </Box>
  );
};

export default AllCourseFiles;
