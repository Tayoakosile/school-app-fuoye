
import { Box, Center, HStack, Icon, Input, SimpleGrid, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import useSearchForACourse from 'hooks/useSearchForACourse';
import Link from 'next/link';
import { BsFolder,BsFiletypeDoc,BsFiletypePdf } from 'react-icons/bs';

const AllCourseFiles = () => {
    const { array, handleChange } = useSearchForACourse()
    return <Box mt={{ base: '6', lg: '16' }}>
        <HStack w='full' px='4' justify={{ base: 'center', lg: 'flex-end' }}  >
            <Input size='lg' placeholder='Search for a course.....' onChange={handleChange} w={{ base: '100%', lg: '50%' }} />
        </HStack>
        {array?.length <= 0 && <Center h='50vh'><Text fontSize='md'>This course cant be found</Text></Center>}


        <SimpleGrid columns={[1, 1, 3]} spacing={{ base: '5', lg: '10' }} px='2' pt={{ base: '8', lg: '20' }} pb='6'>
            {array?.map((file: any) => <>
            <Link href="/files/faculty/department/id">
                <VStack bg={useColorModeValue('gray.50', "gray.700")} w='100%' h="fit-content"
                p='4'
                spacing='4'
                
                align='flex-start' justify='center' key={file.courseFileName} rounded='md' cursor='pointer'
                    shadow='xl'
                >
                    <Icon as={BsFiletypePdf} w={{ base: '12', lg: '20' }} color={useColorModeValue('brand.500', 'brand.200')} h={{ base: '12', lg: '12' }} strokeWidth={'0.5px'} />
                    <VStack spacing='1' align='flex-start' >
                        <Text textTransform='uppercase' fontWeight={'bold'} fontSize={{ base: 'xl', lg: 'lg' }}>{file.courseFileName}</Text>
                        
                        <Text textTransform='uppercase'  fontSize={{ base: 'sm', lg: 'lg' }}>Introduction to Political Science</Text>
                        <Text textTransform='uppercase' fontWeight={'normal'} fontSize={{ base: 'xs', lg: 'lg' }}>Faculty of Science | Computer Science</Text>
                        
                    </VStack>
                </VStack>
                </Link>
            </>)}        </SimpleGrid>


    </Box >
}

export default AllCourseFiles