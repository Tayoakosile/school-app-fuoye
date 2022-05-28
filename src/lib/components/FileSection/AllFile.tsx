import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { imageArrayProps, responsive } from "lib/util/util";
// import { imageArrayProps, responsive } from 'lib/util/util';
import AliceCarousel from 'react-alice-carousel';

const RecentFileSection = () => {

    const items =
        imageArrayProps.map((item, index) =>
            <Box
                key={item.courseTitle}
                bg={`linear-gradient(-180deg, rgba(0,0,0,0.5) 55%, rgba(0,0,0,1) 100%), url("/${item.image}")`} className={`carousel_${index}`}
                h='64'
                w='100%'
                borderRadius={10}
                bgRepeat={'no-repeat'}
                bgSize={'cover'}
                bgPos='center'
                position='relative'
            // px={{ base: '36px !important', lg: '36px !important' }}

            >
                <VStack
                    position='absolute'
                    w='100%'
                    h='24'
                    bg='#313131'
                    left='0'
                    right='0'
                    bottom={{ base: '0', lg: '0' }}
                    align='flex-start'
                    justify={'center'}
                    spacing={{ base: '1', lg: '2' }}
                    rounded='0px 0px 10px 10px'
                    color='white'
                    p='2'

                >
                    <Text fontSize={{ base: 'lg', lg: 'lg' }} fontWeight={'400'}>POL 104</Text>
                    <Text fontSize={{ base: 'sm', lg: 'lg' }} fontWeight={400}>Posted by {item.author}</Text>
                </VStack>
                {/* Details about course */}

            </Box>
        )

    // const array = Array.from({ length: 5 })

    return (
        <>

            <Box as={AliceCarousel}
                overflowX={'hidden'}
                w='full'
                mouseTracking
                items={items}
                paddingLeft={50}
                paddingRight={50}
                infinite
                autoPlay={true}
                autoPlayInterval={3000}
                responsive={responsive}
                disableButtonsControls
            />
        </>
    )
};

export default RecentFileSection
