import { Box, HStack, Input, SimpleGrid, VStack, Icon, Text, useColorModeValue, Center } from '@chakra-ui/react';
import { fileCategory } from '../../lib/util/util';
import { BsFolder } from 'react-icons/bs';
import useSearchForACourse from 'hooks/useSearchForACourse';

const AllCourseFiles = () => {
    const { array, handleChange } = useSearchForACourse()
    return <Box mt={{ base: '6', lg: '16' }}>
        <HStack w='full' px='4' justify={{ base: 'center', lg: 'flex-end' }} >
            <Input size='lg' placeholder='Search for a course.....' onChange={handleChange} w={{ base: '100%', lg: '50%' }} />
        </HStack>
        {array?.length <= 0 && <Center h='50vh'><Text fontSize='md'>This course cant be found</Text></Center>}


        <SimpleGrid columns={[2, 2, 3]} spacing={{ base: '5', lg: '10' }} px='2' pt={{ base: '8', lg: '20' }} pb='6'>
            {array?.map((file: any) => <>
                <VStack bg={useColorModeValue('gray.100', "gray.700")} w='100%' h={{
                    base: '32', lg: '40'
                }} align='center' justify='center' key={file.courseFileName} rounded='md' cursor='pointer'
                    shadow='xl'
                >
                    <Icon as={BsFolder} w={{ base: '10', lg: '20' }} color={useColorModeValue('brand.500', 'brand.200')} h={{ base: '10', lg: '12' }} strokeWidth={'0.5px'} />
                    <VStack spacing='1px'>
                        <Text textTransform='uppercase' fontWeight={'bold'} fontSize={{ base: 'md', lg: 'lg' }}>{file.courseFileName}</Text>
                        <Text fontSize='sm'>{file.numberOfFiles} Files</Text>
                    </VStack>
                </VStack>
            </>)}        </SimpleGrid>


    </Box >
}

export default AllCourseFiles