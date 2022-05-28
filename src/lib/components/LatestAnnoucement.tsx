import React from "react";
import { Box, HStack, SimpleGrid, VStack, Button, Heading, Text, Tag } from '@chakra-ui/react';
import { CarouselProvider, Slider, Slide, Image } from "pure-react-carousel";
import usePageResponsive from '../../hooks/usePageResponsive';
import { ClassStatus } from "lib/types/types";
import { imageArrayProps } from "lib/util/util";



const LatestAnnouncement = () => {
    const { isPageTabletSize } = usePageResponsive()

    const items =
        imageArrayProps.map((item, index) => <>
            <Box
                bg={`linear-gradient(-180deg, rgba(0,0,0,0.5) 55%, rgba(0,0,0,1) 100%), url("/${item.image}")`} className={`carousel_${index}`}

                w='full'
                bgRepeat={'no-repeat'}
                bgSize={'cover'}
                bgPos='center'
                position='relative'
                mx={{ base: '0', lg: '2' }}
                left='-1'

            >
                {/* Course Title and Status */}
                <HStack as='span' py='4' color='white' px='2' justify='space-between'>
                    <VStack as='span' align='flex-start' spacing='0' flex={{ base: '0.75' }}>
                        <Heading>{item.courseCode}</Heading>
                        <Text fontSize={{ base: 'sm', lg: '' }}>{item.courseTitle}</Text>
                    </VStack>

                    {/* Tags here */}
                    <Tag as='span' alignSelf='flex-start' size='sm' py='3' flex={{ base: '0.3' }} colorScheme={ClassStatus[item.status] == 'Started' ? 'blue' : ClassStatus[item.status] == 'Ongoing' ? 'green' : 'red'} variant='subtle'>
                        <Text as='span' align='center' textTransform={'uppercase'} w='full' fontSize={{ base: 'xs', md: 'sm' }} whiteSpace={'nowrap'} fontWeight={400} >{ClassStatus[item.status]} </Text>
                    </Tag>
                    {/* Tags here */}

                </HStack>
                {/* Course Title and Status */}
                {/* Details about course */}
                <VStack
                    position='absolute'
                    w='100%'
                    h='24'
                    bg='#313131'
                    left='0'
                    right='0'
                    bottom={{ base: '0', lg: '32' }}
                    align='flex-start'
                    justify={'center'}
                    spacing='-2px'
                    rounded='0px 0px 10px 10px'
                    color='white'
                    p='2'
                >
                    <Text fontSize='15px' fontWeight={'bold'}>EET101 Lecture has been postponed</Text>
                    <Text fontSize='13px'>Now: 01:00pm, 10th Friday</Text>
                    <Text fontSize='10px'>Posted by {item.author}</Text>
                </VStack>
                {/* Details about course */}


            </Box>
        </>)

    return <Box position={'relative'} h='100%' >
        <HStack as='span' justify='space-between' mb={{ base: '0', lg: '12' }}>
            <Heading fontSize={{ base: '20px', lg: '40px' }}>Announcement</Heading>
            <Button variant='link' >See all</Button>
        </HStack>

        <Box h='20% !important' as={CarouselProvider} totalSlides={imageArrayProps.length}
            naturalSlideHeight={isPageTabletSize ? -30 : 50}
            visibleSlides={isPageTabletSize ? 2 : 1}
            naturalSlideWidth={isPageTabletSize ? -30 : 60}


            mt='12px !important' isPlaying={true} infinite={true} interval={3000} >
            <Box as={Slider}
                h={{ base: '100%', lg: '60vh' }}
                w='100%'
            >
                {imageArrayProps.map((item, index) => <>
                    <Box as={Slide}
                        bg={`linear-gradient(-180deg, rgba(0,0,0,0.5) 55%, rgba(0,0,0,1) 100%), url("/${item.image}")`} className={`carousel_${index}`}
                        index={index}
                        w='full'
                        bgRepeat={'no-repeat'}
                        bgSize={'cover'}
                        bgPos='center'
                        position='relative'
                        mx={{ base: '0', lg: '2' }}
                        left='-1'

                    >
                        {/* Course Title and Status */}
                        <HStack as='span' py='4' color='white' px='2' justify='space-between'>
                            <VStack as='span' align='flex-start' spacing='0' flex={{ base: '0.75' }}>
                                <Heading>{item.courseCode}</Heading>
                                <Text fontSize={{ base: 'sm', lg: '' }}>{item.courseTitle}</Text>
                            </VStack>

                            {/* Tags here */}
                            <Tag as='span' alignSelf='flex-start' size='sm' py='3' flex={{ base: '0.3' }} colorScheme={ClassStatus[item.status] == 'Started' ? 'blue' : ClassStatus[item.status] == 'Ongoing' ? 'green' : 'red'} variant='subtle'>
                                <Text as='span' align='center' textTransform={'uppercase'} w='full' fontSize={{ base: 'xs', md: 'sm' }} whiteSpace={'nowrap'} fontWeight={400} >{ClassStatus[item.status]} </Text>
                            </Tag>
                            {/* Tags here */}

                        </HStack>
                        {/* Course Title and Status */}
                        {/* Details about course */}
                        <VStack
                            position='absolute'
                            w='100%'
                            h='24'
                            bg='#313131'
                            left='0'
                            right='0'
                            bottom={{ base: '0', lg: '32' }}
                            align='flex-start'
                            justify={'center'}
                            spacing='-2px'
                            rounded='0px 0px 10px 10px'
                            color='white'
                            p='2'
                        >
                            <Text fontSize='15px' fontWeight={'bold'}>EET101 Lecture has been postponed</Text>
                            <Text fontSize='13px'>Now: 01:00pm, 10th Friday</Text>
                            <Text fontSize='10px'>Posted by {item.author}</Text>
                        </VStack>
                        {/* Details about course */}


                    </Box>
                </>)}
            </Box>
        </Box>
    </Box >
};

export default LatestAnnouncement
