import { Box, VStack, HStack, Input, Heading } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import AcButton from "reusables/ACButton";

const Team = () => {
  return (
    <VStack w="100%" align="flex-start">
      <HStack justify={"space-between"} mx="auto" w="100%">
        <Heading>All Team Members</Heading>
        <Link href="/admin/teams/add-new-team" passHref>
          <AcButton size="md">Add New Team</AcButton>
        </Link>
      </HStack>
      <Input
        w="40%"
        size="lg"
        // borderColor='brand.500'
        bg="white"
        placeholder="Search for a member"
        ring={2}
        shadow="md"
        ringColor={"brand.500"}
        colorScheme="brand"
        _focus={{ borderColor: "brand.400" }}
      />
    </VStack>
  );
};

export default Team;
