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
import React from "react";

const Dashboard = () => {
    const {allUsers,isFetchingUsers,all_acUsers} = useGetUsers()
    console.log(allUsers,isFetchingUsers,'allUsers,isFetchingUsers')
  return (
    <AdminNav>
      <Box w="100%" bg="white" py="4" px="6" rounded="md">
        <Grid
          templateColumns={{ base: "repeat(3,1fr)", lg: "repeat(7,1fr)" }}
          w="100%"
          bg="gray.50"
          py="2"
          as="ul"
          rounded="md"
          px="4"
          justifyContent="space-between"
          sx={{
            "& li": {
              color: "blackAlpha.700",
              fontWeight: "medium",
              fontSize: { base: "base", lg: "sm" },
              w: "100%",
              whiteSpace: "nowrap",
              listStyleType: "none",
            },
          }}
        >
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
          <Text display={{ base: "none", lg: "block" }} as="li">
            Department
          </Text>
          <Text display={{ base: "none", lg: "block" }} as="li">
            Date Joined
          </Text>
        </Grid>

        <VStack>
          <Grid
            display={{ base: "none", lg: "block" }}
            templateColumns={"repeat(8,1fr)"}
            w="100%"
            py="5"
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
            <Text color="brand.500 !important" fontWeight="semibold !important">
              {" "}
              Student Name
            </Text>
            <GridItem colSpan={2}>
              <Text>tayoakosile@gmail.com</Text>
            </GridItem>
            <Text>08126741053</Text>
            <Text>300</Text>
            <Text>Social Science</Text>
            <Text>POlitical Science</Text>
            <Text>December 3rd,2023</Text>
          </Grid>
        </VStack>
        <VStack
        spacing='-1'

        >
{all_acUsers?.map((user:any)=>
    <VStack _odd={{bg:'white'}} _even={{bg:'gray.50'}} rounded='sm' w="100%" 
    key={user?._id}


    align="flex-start" px="3" py="4">
            <HStack>
              <Avatar size="md" />
              <VStack align="flex-start" spacing="0">
                <Text color="brand.500" fontWeight="700">
                  {`${user?.first_name} ${user?.last_name}`}
                </Text>
                <Text fontSize="sm">{user?.email}</Text>
              </VStack>
            </HStack>

            <AdminAccordion user={user} />
          </VStack>
          
)}
          
          
        </VStack>
      </Box>
    </AdminNav>
  );
};

export default Dashboard;
