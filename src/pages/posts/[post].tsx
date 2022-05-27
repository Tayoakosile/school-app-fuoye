import {
    Avatar, Heading, HStack, Icon,
    Text, useColorModeValue, VStack
} from "@chakra-ui/react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import { IoIosShareAlt } from "react-icons/io";
import { Tooltip } from '@chakra-ui/react';

const Post = () => {
    return (
        <VStack as="section" spacing="22px" align="flex-start">
            {/* Title */}
            <HStack spacing="8" py='4' px='2' >
                <Icon as={BiArrowBack} />
                <Heading fontSize={{ base: "16px", lg: '2xl' }}>Introduction to Political Science</Heading>
            </HStack>
            {/* Title */}

            {/* Name of Teacher */}
            <HStack w="full" spacing="3" px="10px">
                <Avatar size="lg" />
                <VStack align="flex-start" spacing="0">
                    <Text fontSize="15px" fontWeight="700">
                        Dr. Olanrewaju
                    </Text>
                    <HStack
                        fontSize="10px"
                        d="flex"
                        align="center"
                        as="span"
                        spacing="2px"
                    >
                        <Text as="span">Just now</Text>
                        <Icon as={BsDot} />
                        <Text as="span">30 min read</Text>
                    </HStack>
                </VStack>
            </HStack>
            {/* Author */}

            {/* Post Content */}
            <VStack spacing="20px" px="10px">
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non
                    viverra diam. Maecenas vestibulum egestas nibh a mollis. Duis faucibus
                    convallis tellus vel ullamcorper. Nunc faucibus velit enim, ut euismod
                    purus dignissim vitae. Aenean mollis elit sed lacus blandit blandit.
                    Ut sodales hendrerit lacinia. Etiam eu mauris iaculis, consectetur
                    augue eget, sagittis nunc. Pellentesque vehicula, lacus et
                    pellentesque cursus, diam lacus aliquet elit, ut bibendum diam neque
                    non turpis. Nullam lobortis pharetra ullamcorper.
                </Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non
                    viverra diam. Maecenas vestibulum egestas nibh a mollis. Duis faucibus
                    convallis tellus vel ullamcorper. Nunc faucibus velit enim, ut euismod
                    purus dignissim vitae. Aenean mollis elit sed lacus blandit blandit.
                    Ut sodales hendrerit lacinia. Etiam eu mauris iaculis, consectetur
                    augue eget, sagittis nunc. Pellentesque vehicula, lacus et
                    pellentesque cursus, diam lacus aliquet elit, ut bibendum diam neque
                    non turpis. Nullam lobortis pharetra ullamcorper.
                </Text>
            </VStack>
            {/* Post Content */}

            {/* Posted By Who  */}
            <HStack w="full" py="4" px="11px" justify="space-between">
                <VStack as="span" spacing="0" align="flex-start">
                    <Text fontSize="12px">Posted by Gabby</Text>
                    <Text
                        fontSize="10px"
                        color={useColorModeValue("#356EFD", "brand.200")}
                    >
                        07:00pm | Jan 12, 2022
                    </Text>
                </VStack>
                <HStack as="span" spacing="24px">
                    <Tooltip label='tooltip'>
                        <Icon w="8" h="8" as={AiOutlineCloudDownload} />
                    </Tooltip>
                    <Icon w="8" h="8" as={IoIosShareAlt} />
                </HStack>
            </HStack>
            {/* Posted By Who  */}
        </VStack>
    );
};

export default Post;
