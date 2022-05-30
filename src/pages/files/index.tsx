import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import RecentFileSection from "lib/components/FileSection/AllFile";
import Categories from "lib/components/FileSection/Categories";
import { imageArrayProps } from 'lib/util/util';

const Index = () => {

    const items =
        imageArrayProps.map((item, index) =>
            <Box
                key={index}
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

    return <>
        <Box as='section' h='100%'
            overflowX={'hidden'}

            mt={{ base: '32px', lg: '20' }}
            sx={{
                '.alice-carousel__stage-item': {
                    px: '10px !important'
                }
            }}
        >
            <Heading fontSize={{ base: '20px', lg: '40px' }} pb='4' px='2'>Recent Files</Heading>
            <RecentFileSection />
            <Categories />
        </Box>
    </>
};

export default Index
