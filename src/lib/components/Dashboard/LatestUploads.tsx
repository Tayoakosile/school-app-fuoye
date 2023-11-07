import {
    Avatar,
    Box,
    Button,
    SimpleGrid,
    Heading,
    HStack,
    Icon,
    Text,
    useColorModeValue,
    VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsThreeDots } from "react-icons/bs";

export const Upload = () => {
    const router = useRouter();
    return (
        <HStack
            h="fit-content"
            bg={useColorModeValue("#F7F4F4", "gray.700")}
            px="4"
            py="5"
            align="flex-start"
            justify="space-between"
            onClick={() => {
                router.push("/posts/introduction-to-social-science");
            }}
            w="100% !important"
        >
            <HStack as="span" w="100%">
                <Avatar size="lg" />
                <VStack align="flex-start" w="full" spacing="0">
                    <Text fontSize="18px" whiteSpace="nowrap" w="100%" isTruncated>
                        POL 105
                    </Text>
                    <Text fontSize="13px" w="100%" isTruncated>
                        Introduction to Political Science
                        <Text fontWeight="bold" as="span" fontSize="sm" />{" "}
                    </Text>
                    <Text
                        fontSize="xs"
                        color={useColorModeValue("brand.500", "brand.200")}
                    >
                        07:00pm | Jan 12, 2022
                    </Text>
                </VStack>
            </HStack>

            <Box as="span" alignSelf="flex-start">
                <Icon as={BsThreeDots} w="7" h="7" />
            </Box>
        </HStack>
    );
};

const LatestUploads = () => {
    return (
        <VStack
            as="section"
            pt={{ base: "6" ,lg:'18'}}
            align="flex-start"
            w="full"
            spacing="5"

            alignSelf="flex-start"
        >
            <HStack justify="space-between" px="2" w="full">
                <Heading color={useColorModeValue("#313131", "white")} fontSize={{ base: "20px", lg: '40px' }}>
                    Recommended Courses
                </Heading>
                <Link href="/files/allFiles">
                <Button variant="link" fontWeight={400}  >
                    See all
                </Button>
                </Link>
            </HStack>

            <SimpleGrid spacing="4" w="full" columns={[1, 1, 2]} h="full" pb={{ base: '24', lg: '12' }}>
                {[1, 2, 3].map((list) => (
                    <Upload key={list} />
                ))}
            </SimpleGrid>
        </VStack >
    );
};

export default LatestUploads;
