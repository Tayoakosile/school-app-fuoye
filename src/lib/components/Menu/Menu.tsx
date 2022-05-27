import { Box, Flex, Heading, Text, useColorModeValue, HStack, Icon } from '@chakra-ui/react';
import Link from "next/link";
import { Home, Bell, Plus, CloudDownload } from 'tabler-icons-react'


import ThemeToggle from '../../layout/ThemeToggle';
import Logo from '../motion/Logo';

export const MobileMenu = () => {
    return (
        <HStack
            as="section"
            h="24"
            boxShadow='0px -4px 10px rgba(0, 0, 0, 0.1)'
            bg="red"
            position="fixed"
            bottom="0"
            left="0"
            right="0"
            px='2'
        >
            {/* Home for user */}
            <Icon as={Home} />
            {/* Home for user */}

            {/* Bell for user */}
            <Icon as={Bell} />
            {/* Bell for user */}

            {/* Plus for user */}
            <Icon as={Plus} />
            {/* Plus for user */}

            {/* Home for user */}
            <Icon as={CloudDownload} />
            {/* Home for user */}

        </HStack>
    );
};

export const DesktopMenu = ({ Header }: { Header: JSX.Element }) => {
    return (
        <Box
            flex="0.2"
            h="full"
            w="full"
            borderRight="1px solid"
            borderRightColor={useColorModeValue("gray.500", "gray.100")}
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
