import {
  Grid,
  Box,
  Text,
  VStack,
  GridItem,
  Avatar,
  HStack,
} from "@chakra-ui/react";
import useGetUsers from "hooks/admin/useGetUsers";
import AdminAccordion from "lib/components/AdminComp/AdminAccordion";
import AdminNav from "lib/components/AdminComp/AdminNav";

const Dashboard = () => {
  const { allUsers, isFetchingUsers, all_acUsers } = useGetUsers();
  console.log(allUsers, isFetchingUsers, "allUsers,isFetchingUsers");
  return (
    <>
      <Box w="100%" bg="white" py="4" px="6" rounded="md">
        <Grid
          templateColumns={{ base: "repeat(3,1fr)", lg: "repeat(8,1fr)" }}
          w="100%"
          bg="gray.50"
          py="2"
          as="ul"
          rounded="md"
          px="4"
          justifyContent="space-between"
          sx={{
            "& li": {
              color: "GrayText",
              fontWeight: "semibold",
              fontSize: { base: "base", lg: "sm" },
              w: "100%",
              whiteSpace: "nowrap",
              listStyleType: "none",
            },
          }}
        >
          <Text as="li">Image</Text>
          <Text as="li">Student Name</Text>
          <Text display={{ base: "none", lg: "block" }} as="li">
            Email Address
          </Text>
          <Text display={{ base: "none", lg: "block" }} as="li">
            Phone Number
          </Text>
          <Text display={{ base: "none", lg: "block" }} as="li">
            Level
          </Text>
          <Text display={{ base: "none", lg: "block" }} as="li">
            Faculty
          </Text>
          <Text
            display={{ base: "none", lg: "block" }}
            as="li"
            textAlign="center"
          >
            Department
          </Text>
          <Text
            display={{ base: "none", lg: "block" }}
            as="li"
            textAlign="center"
          >
            Date Joined
          </Text>
        </Grid>

        <VStack display={{ base: "none", lg: "block" }}>
          {all_acUsers?.map((user: any) => (
            <HStack
              key={user?._id}
              _hover={{ bg: "blue.50" }}
              w="100%"
              py="4"
              alignItems="center"
              rounded="md"
              px="4"
              justifyContent="space-between"
              sx={{
                "&  p": {
                  fontWeight: "medium",
                  fontSize: "sm",
                  color: "gray.600",
                },
              }}
            >
              <Avatar
                name={`${user?.first_name} ${user?.last_name}`}
                src={user?.photoURL}
              />

              <Text
                color="brand.500 !important"
                fontWeight="semibold !important"
              >
                {" "}
                {`${user?.first_name} ${user?.last_name}`}
              </Text>
              <GridItem colSpan={2}>
                <Text>{user?.email}</Text>
              </GridItem>
              <Text>{user?.phone}</Text>
              <Text>{user?.level}</Text>
              <Text noOfLines={2}>{user?.faculty?.name}</Text>
              <Text>{user?.department?.name}</Text>

              <Text>{user?.date_joined}</Text>
            </HStack>
          ))}
        </VStack>

        <VStack spacing="-1" display={{ base: "block", lg: "none" }}>
          {all_acUsers?.map((user: any) => (
            <VStack
              _odd={{ bg: "white" }}
              _even={{ bg: "gray.50" }}
              rounded="sm"
              w="100%"
              key={user?._id}
              align="flex-start"
              px="3"
              py="4"
            >
              <HStack>
                <Avatar
                  size="md"
                  src={user?.photoURL}
                  name={`${user?.first_name} ${user?.last_name}`}
                />
                <VStack align="flex-start" spacing="0">
                  <Text color="brand.500" fontWeight="700">
                    {`${user?.first_name} ${user?.last_name}`}
                  </Text>
                  <Text fontSize="sm">{user?.email}</Text>
                </VStack>
              </HStack>

              <AdminAccordion user={user} />
            </VStack>
          ))}
        </VStack>
      </Box>
    </>
  );
};

export default Dashboard;
