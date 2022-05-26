import { Box, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";

import Logo from "../components/motion/Logo";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Heading as="h1" size="md">
        <Link href="/" passHref>
          <Logo />
        </Link>
      </Heading>

      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
