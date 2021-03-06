import React from "react";
import { BsFolder } from "react-icons/bs";
import { FolderPlus } from "tabler-icons-react";
import { Box, HStack, VStack, SimpleGrid, Heading, Button, Icon, Text, useColorModeValue } from '@chakra-ui/react';
import { fileCategory } from '../../util/util';




const Categories = () => {
    return <VStack mt='12' as='span' spacing='10' pb='16'>
        <HStack w='full' justify='space-between' px='2'>
            <Heading fontSize={{ base: '20px', lg: '40px' }}>Categories</Heading>
            <Button variant='link'>See All</Button>
        </HStack>

        <SimpleGrid as='section' columns={[2, 2, 3]} w='full' spacingX='4' px='2' spacingY='4'>
            {fileCategory.map(file => <>
                <VStack bg={useColorModeValue('gray.100', "gray.700")} w='100%' h='32' align='center' justify='center' key={file.courseFileName} rounded='md' shadow='lg'>
                    <Icon as={BsFolder} w='10' color={useColorModeValue('brand.500', 'brand.200')} h='10' strokeWidth={'0.5px'} />
                    <VStack spacing='1px'>
                        <Text textTransform='uppercase' fontWeight={'bold'}>{file.courseFileName}</Text>
                        <Text fontSize='sm'>{file.numberOfFiles} Files</Text>
                    </VStack>
                </VStack>
            </>)}
        </SimpleGrid>
    </VStack>
};

export default Categories


