import {
  Box,
  Image,
  Icon,
  Heading,
  VStack,
  HStack,
  Text,
  Avatar,
  Button,
} from "@chakra-ui/react";
import LatestUploads from "../Dashboard/LatestUploads";
import LatestAnnouncement from "../Dashboard/LatestAnnoucement";
import MockExams from "./MockExams";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { FaMap } from "react-icons/fa";
import "react-calendar/dist/Calendar.css";
import useSearchFiles from "hooks/useSearchFiles";
import { useRouter } from "next/router";
import useACProfile from "hooks/useACProfile";

const UpcomingEvents = () => {
  return (
    <VStack w="100%">
      <Box as="ul" w="100%">
        <Box as="li" h="32" w="100%" bg="red.400" rounded="lg" shadow="md">
          <Image />
          <HStack w="100%" align="flex-start">
            <VStack w="100%" spacing={0} align="flex-start">
              <Text fontWeight="bold">Meeting With Keeng David</Text>
              <Text as="span" color="gray.100">
                Friday, Jan 22 |
                <Text as="span" pl="1">
                  10:35AM to 12:00AM
                </Text>
              </Text>
            </VStack>
            <HStack as="span">
              <Icon as={FaMap} />
              <Text>OYE</Text>
            </HStack>
          </HStack>
          <HStack justify="space-between">
            <HStack>
              <Avatar size="sm" />
              <Text>by David Keeng</Text>
            </HStack>

            <HStack>
              <Button variant="link" colorScheme="brand">
                More Details
              </Button>
            </HStack>
          </HStack>
        </Box>
      </Box>
    </VStack>
  );
};

const Dashboard = () => {
  const router = useRouter();

  const { allFiles } = useSearchFiles();
  const {profileInfo } = useACProfile()

    console.log(profileInfo?.data?.data,'profileInfo')
  

  return (
    <Box
      as="section"
      overflowX={"hidden"}
      alignSelf="flex-start"
      mt={{ base: "0", lg: "3rem" }}
      w="full"
      sx={{
        ".alice-carousel__stage-item": {
          px: "10px !important",
        },
      }}
      px="2"
    >
      <Box>
        <Heading py="4" >Welcome, {profileInfo?.data?.data?.first_name ??''}</Heading>
        <ReactSearchAutocomplete
          placeholder="Search for any course"
          className="ac_search_autocomplete"
          onSelect={(value) => {
            router.push("/files/faculty_id/deparment_id/file_name");
          }}
          fuseOptions={{
            keys: [
              "faculty",
              "deparment",
              "course_title",
              "course_short_name",
              "course_code",
            ],
          }}
          items={allFiles}
          resultStringKeyName="course_title"
          
        />

        {/* <UpcomingEvents/> */}
      </Box>

      {/* <LatestAnnouncement /> */}
      <LatestUploads />
      {/* <MockExams /> */}
    </Box>
  );
};

export default Dashboard;
