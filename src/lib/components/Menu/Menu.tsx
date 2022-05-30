import { Box, Flex, Heading, HStack, Icon as ParentIcon, useColorModeValue } from '@chakra-ui/react';
import Link from "next/link";
import { IoFolderOutline } from 'react-icons/io5';
import { AiOutlineUser } from 'react-icons/ai';
import { Bell, CloudDownload, Home, Plus } from 'tabler-icons-react';


import ThemeToggle from '../../layout/ThemeToggle';
import Logo from '../motion/Logo';

const MobileMenuNav = [{
    Icon: Home,
    label: 'Home'
},
{
    Icon: IoFolderOutline,
    label: 'Bell'
},

{
    Icon: Plus,
    label: 'Plus'
},
{
    Icon: Bell,
    label: 'Bell'
},


{
    Icon: AiOutlineUser,
    label: 'Profile'
},

]

export const MobileMenu = () => {
    return (
        <HStack
            as="section"
            h="20"
            p='4'
            borderTop='1px solid'
            borderTopColor='brand.100'
            boxShadow='0px -4px 10px rgba(0, 0, 0, 0.1)'
            justify='space-between'
            bg={useColorModeValue("white", 'brand.900')}
            position="fixed"
            bottom="-1"
            left="0"
            right="0"
            px='6'
        >
            {/* {[Home]} */}
            {MobileMenuNav.map(({ Icon, label }) => <>
                <Box as='span' key={label}  >
                    <ParentIcon as={Icon} attributeName={label} w='30px' h='30px' strokeWidth={1.5} />
                </Box>
            </>)}

        </HStack>
    );
};

export const DesktopMenu = () => {
    return (
        <Box
            flex="0.2"
            h="full"
            w="full"
            borderRight="1px solid"
            borderRightColor={useColorModeValue("gray.500", "gray.100")}
            overflowY='auto'
        >
            {/* Header */}
            <Box as="span">
                <Flex as="header" width="90%" align="center" mx="auto" py="4">
                    <Heading as="h1" size="md">
                        <Link href="/" passHref>
                            <Logo />
                        </Link>
                    </Heading>

                    <Box marginLeft="auto">
                        <ThemeToggle />
                    </Box>
                </Flex>
            </Box>

        </Box>
    );
};
