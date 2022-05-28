import { Box, Flex, Heading, Text, useColorModeValue, HStack, Icon as ParentIcon } from '@chakra-ui/react';
import Link from "next/link";
import { Home, Bell, Plus, CloudDownload } from 'tabler-icons-react'


import ThemeToggle from '../../layout/ThemeToggle';
import Logo from '../motion/Logo';

const MobileMenuNav = [{
    Icon: Home,
    label: 'Home'
},
{
    Icon: Bell,
    label: 'Bell'
},

{
    Icon: Plus,
    label: 'Plus'
},

{
    Icon: CloudDownload,
    label: 'CloudDownload'
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
            px='8'
        >
            {/* Home for user */}
            {/* {[Home]} */}
            {MobileMenuNav.map(({ Icon, label }) => <>
                <Box as='span' key={label}>
                    <ParentIcon as={Icon} attributeName={label} w='32px' h='32px' strokeWidth={1.5} />
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
