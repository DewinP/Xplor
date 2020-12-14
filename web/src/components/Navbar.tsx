import { Box, Text, Flex, Heading, Button, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <Flex
      h="50px"
      boxShadow="0 2px 10px -10px black"
      flexDir="row"
      zIndex={2}
      bgColor="black"
      position="sticky"
      top="0"
    >
      <Flex
        w="100%"
        mx={{ base: "0px", lg: "50px" }}
        my="auto"
        justify="space-between"
      >
        <Flex>
          <NextLink href="/">
            <Heading cursor="pointer">Xplor</Heading>
          </NextLink>
        </Flex>
        <Flex align="center" display={{ base: "none", md: "flex" }}>
          <NextLink href="/login">
            <Button marginRight="20px" size="sm" colorScheme="teal">
              LOGIN
            </Button>
          </NextLink>
          <NextLink href="/signup">
            <Button colorScheme="blue" size="sm">
              SIGNUP
            </Button>
          </NextLink>
        </Flex>

        <Flex align="center" display={{ base: "flex", md: "none" }}>
          <NextLink href="/login">
            <Button marginRight="20px" size="sm" colorScheme="teal">
              LOGIN
            </Button>
          </NextLink>
        </Flex>
      </Flex>
    </Flex>
  );
};
