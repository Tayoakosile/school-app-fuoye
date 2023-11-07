import {
    Heading, HStack, Icon,
    Text, VStack
} from "@chakra-ui/react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
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
   {/* Posted By Who  */}
                    <Heading fontSize="lg">Introduction to Political Sciences</Heading>
   <HStack w="full" py="4" px="11px" justify="space-between">
                <VStack as="span" spacing="0" align="flex-start">
                    <Text fontSize="sm">Social Science | Political Science</Text>
                    <Text
                        fontSize="sm"
                        // color={useColorModeValue("brand.500", "brand.200")}
                    >
                         07:00pm | Jan 12, 2022
                    </Text>
                </VStack>
                <HStack as="span" spacing="24px">
                    <Tooltip label='tooltip'>
                        <Icon w="8" h="8" as={AiOutlineCloudDownload} />
                    </Tooltip>
                    {/* <Icon w="8" h="8" as={IoIosShareAlt} /> */}
                </HStack>
            </HStack>
            {/* Posted By Who  */}

            
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

       
        </VStack>
    );
};

export default Post;
