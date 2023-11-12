// import { Button, filter, VStack } from '@chakra-ui/react';
import {
    Box, Button, Heading, HStack, Menu,
    MenuButton, MenuItem, MenuList, SimpleGrid, VStack
} from '@chakra-ui/react';
import { useState } from 'react';
import { Upload } from '../../lib/components/Dashboard/LatestUploads';



const AllCourseInDepartment = () => {
    const [filterMenu, setFilterMenu] = useState('Today')
    return <>
        <Box as='section' mt={{ base: '6', lg: '12' }}>
            <HStack w='90%' justify='space-between' mx='auto'>
                <Heading fontSize='20px'>All Notes</Heading>

                <Menu>
                    <MenuButton as={Button} variant='ghost' rounded='sm' w='32'>
                        {filterMenu}
                    </MenuButton>
                    <MenuList>
                        {["All", 'Today', 'Yesterday', 'This Week'].map((list) => <>
                            <MenuItem key={list} onClick={() => setFilterMenu(list)}>{list}</MenuItem>
                        </>)}
                    </MenuList>
                </Menu>
            </HStack>
            {/* All list of files */}
            <VStack align='flex-start' mt={{ base: '4', lg: '6' }} px='3' w='full'>
                <Heading fontSize={{ base: '20px', lg: '20px' }} fontWeight='400' py='4'>{filterMenu == 'All' ? 'All Note' : filterMenu + "'s Note"}</Heading>
                <SimpleGrid columns={[1, 2, 2]} spacingY='8' spacingX={'6'} w='full'>
                    {/* {Array.from({ length: 10 }).map((list,index) => <>
                        <Box key={list} w='full' as='span'>
                            <Upload />
                        </Box>
                    </>)} */}
                </SimpleGrid>
            </VStack>
            {/* All list of files */}

        </Box>
    </>
};

export default AllCourseInDepartment
