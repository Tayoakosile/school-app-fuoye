"use client";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";
import dayjs from "dayjs";

const ListComp = ({title,value}:{title:string,value:string}) => {
  return (
    <HStack w="100%" justify="space-between">
      <Text fontSize="sm" color='gray.700' fontWeight={'medium'}>{title}:</Text>
      <Text color="gray.800" fontWeight={"semibold"} fontSize="md">
        {value}
      </Text>
    </HStack>
  );
};
export default function AdminAccordion({user}:{user:any}) {
  console.log(user,'useruser')
  return (
    <Flex w="100%" align={"center"} justify={"center"}>
      <>
        <Accordion allowMultiple width="100%" maxW="lg" rounded="lg">
          <AccordionItem border='0'>
            <AccordionButton
              display="flex"
              alignItems="center"
              border='0'
              // justifyContent="space-between"
            >
              <Text color="GrayText" fontSize="sm">
                More Information
              </Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel py={4}>
              <VStack spacing='1'>
                <ListComp title="Phone" value={`${user?.phone}`} />
                <ListComp title="Faculty" value={`${user?.faculty?.name}`} />
                <ListComp title="Department" value={`${user?.department?.name}`}/>
                <ListComp title="Level" value={`${user?.level}`}/>
                <ListComp title="Date Joined"
                value={`${user?.date_joined}`}
                //  value={`${dayjs({user?.createdAt}).format('dd, MM, YYYY')}`} 
                 />
                {/* <ListComp title="" value="" />
                <ListComp title="" value="" /> */}
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </>
    </Flex>
  );
}
