import { BiArrowBack } from "react-icons/bi";

import { Box, HStack, Icon, Tag, Text, useColorModeValue, VStack } from '@chakra-ui/react';

const Announcement = () => {
    return <>
        <Box as='section' sx={{
            '.app_carousel': {
                bg: `linear-gradient(-180deg, rgba(0,0,0,0.5) 55%, rgba(0,0,0,1) 100%), url("/school-image-2.jpeg")`,
                bgRepeat: 'no-repeat',
                bgSize: 'cover',
                borderRadius: '10px',
                pos: 'relative'
                , p: '4'
            }
        }}>
            {/* Go back */}
            <HStack py='4' spacing='4'>
                <Icon as={BiArrowBack} w='7' h='7' strokeWidth={'0.4 '} />
                <Text fontSize={{ base: 'md', lg: 'xl' }}>Introduction to Political Science</Text>
            </HStack>
            {/* Go back */}
            <Box className='app_carousel' minH='64'>
                <VStack as='span' align='flex-start' spacing='0' >
                    <HStack w='full' justify='space-between' pb='2'>
                        <Text color='white' fontSize='2xl' textTransform={'uppercase'}>POL 106</Text>
                        <Tag variant='subtle' p='2' colorScheme='red' size='md'>
                            <Text textTransform={'uppercase'} fontWeight={400} as='span'>Class Ended</Text>
                        </Tag>
                    </HStack>

                    <Text color='white' fontSize='md' textTransform={'uppercase'} mt='4'>Introduction to Political Science</Text>

                </VStack>
                <VStack bg='#313131d4' borderTopLeftRadius='10px' borderTopRightRadius='10px' h='24' position={'absolute'} bottom='0' right='0' left='0'
                    color={useColorModeValue('white', '#fff')} py='4' px='2' align='flex-start' spacing='1'>
                    <Text fontWeight={'bold'}>This class has been cancelled</Text>
                    <Text color='brand.500' fontSize='sm'>Now: 01:00pm, 10th Friday</Text>
                    <Text fontSize='xs'>Posted by Gabby</Text>
                </VStack>
            </Box>
            {/* Content */}
            <VStack px='2' pt='6' spacing='4'>
                <Text fontSize={'15px'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nulla ipsam hic, repudiandae amet, suscipit impedit pariatur magnam architecto, officiis velit. Voluptatem officiis sequi ipsa facilis, sit sint ducimus unde!
                    Aliquam veniam eaque porro esse, saepe numquam consectetur vitae sed asperiores, dolores, sapiente illum? Amet voluptas praesentium, iste error, vitae ullam molestiae eaque modi aperiam quis rerum est dolor iure?
                    Explicabo voluptate soluta repudiandae numquam unde deserunt fuga vel eius. Dignissimos dolores consectetur maxime fugiat natus earum quibusdam magnam odit incidunt vel id blanditiis culpa, harum eum dolor atque neque!</Text>

                <Text fontSize={'15px'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nulla ipsam hic, repudiandae amet, suscipit impedit pariatur magnam architecto, officiis velit. Voluptatem officiis sequi ipsa facilis, sit sint ducimus unde!
                    Explicabo voluptate soluta repudiandae numquam unde deserunt fuga vel eius. Dignissimos dolores consectetur maxime fugiat natus earum quibusdam magnam odit incidunt vel id blanditiis culpa, harum eum dolor atque neque!</Text>

            </VStack>
            {/* Content */}
        </Box>
    </>
};

export default Announcement
