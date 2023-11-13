import {
    Button,
    SimpleGrid,
    Heading,
    HStack,
    Icon,
    Text,
    useColorModeValue,
    VStack,
    Skeleton
} from "@chakra-ui/react";
import useACProfile from "hooks/useACProfile";
import useSearchFiles from "hooks/useSearchFiles";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import {HiOutlineDocumentArrowDown} from 'react-icons/hi2'
export const Upload = ({isLoading,list}:{isLoading:boolean,list:any}) => {
    const router = useRouter();
    
    if(isLoading){
        return <Skeleton h='28' w='full' />
    }
    return (
        <VStack
            h="fit-content"
            
            border={'1px'}
            borderColor='gray.100'
            px="4"
            rounded='lg'
            shadow={'xl'}
            py="3"
            align="flex-start"
            justify="space-between"
            onClick={() => {
                router.push(`files/${list?.course_short_name}`);
            }}
            w="100% !important"
        >
            <HStack as="span" >
                <Icon as={HiOutlineDocumentArrowDown} w='14' h='14' strokeWidth={'0.9'} color='brand.500' />
                <VStack align="flex-start" w="full" spacing="0.5">
                    <Text fontSize="xl" whiteSpace="nowrap" w="100%" isTruncated fontWeight="bold" maxW='80%'>
                        {list?.course_short_name}
                    </Text>
                    <Text fontSize="sm" w="100%" isTruncated maxW='80%'>
                         {list?.course_title}
                        {" "}
                    </Text>
                    <Text fontSize="xs" w="100%" isTruncated maxW='95%'>
                         {list?.faculty} 
                    </Text>
                          <Text as='span' fontSize="xs" w="100%" isTruncated maxW='80%'>
                        Dept. of {list?.department}
                        
                    </Text>
                    
                    
                </VStack>
            </HStack>
<Button variant='link'  mt='2' alignSelf='flex-end' rightIcon={<BsArrowRight/>} fontWeight='500'>View</Button>
            
        </VStack>
    );
};

const LatestUploads = () => {
    const {profileInfo} = useACProfile()
    const {allFiles,isGettingFiles} = useSearchFiles()
    const [recommendedFiles,setRecommendedFiles] = useState([])

    useEffect(()=>{
        if(!profileInfo.isSuccess && isGettingFiles &&profileInfo.isError) return;
        const userProfile = {
            level:profileInfo?.data?.data?.level,
            department_id:profileInfo?.data?.data?.department_id,
            faculty_id:profileInfo?.data?.data?.faculty_id,
            
        }
       

const fuse = allFiles.filter((file:any)=>{
    
    const condition1 = file.department_id === userProfile?.department_id
    const condition2 = file.faculty_id === userProfile?.faculty_id
    const condition3 = file.level === userProfile?.level

    if (condition1 || condition2 || condition3) {
        return true;
      }
    
      return false;
})
fuse?.length ? setRecommendedFiles(fuse.slice(0,5)) : setRecommendedFiles([allFiles[0]]);

    },[allFiles,profileInfo?.data?.data,profileInfo.isSuccess])
      
      // Example filter function with three conditions
      
      
      
    return (
        <VStack
            as="section"
            pt={{ base: "10" ,lg:'18'}}
            align="flex-start"
            w="full"
            spacing="5"

            alignSelf="flex-start"
        >
            {recommendedFiles &&
            <>
            <HStack justify="space-between" px="2" w="full">
                <Heading color={useColorModeValue("#313131", "white")} fontSize={{ base: "20px", lg: '40px' }}>
                    Recommended Courses
                </Heading>
                <Link href="/files">
                <Button variant="link" fontWeight={400}  >
                    See all
                </Button>
                </Link>
            </HStack>

            <SimpleGrid spacing="3" w="full" columns={[1, 1, 2]} h="full" pb={{ base: '24', lg: '12' }}>
                {recommendedFiles.map((list:any) => (
                    <Upload key={list?._id} list={list}  isLoading={isGettingFiles} />
                ))}
            </SimpleGrid>
            </>
            }
            
        </VStack >
    );
};

export default LatestUploads;
