import {
  Box,
  Text,
  Flex,
  Heading,
  Button,
  Link,
  ButtonGroup,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { useMeQuery, useLogoutMutation, User } from "../../generated/graphql";
import { isServer } from "../../utils/isServer";
import { FiChevronDown, FiLogOut } from "react-icons/fi";
import { Router, useRouter } from "next/router";
import { useApolloClient } from "@apollo/client";
import { NotAuthMenu } from "./NotAuthMenu";
import { AuthMenu } from "./AuthMenu";

interface NavbarProps {
  user?: User;
}

export const Navbar: React.FC<NavbarProps> = ({ user }) => {
  return (
    <Flex
      h="50px"
      boxShadow="0 1px 10px -10px white"
      flexDir="row"
      zIndex={2}
      bgColor="black"
      position="sticky"
      top="0"
    >
      <Flex
        w="100%"
        mx={{ base: "10px", lg: "50px" }}
        my="auto"
        justify="space-between"
      >
        <Flex>
          <NextLink href="/">
            <Heading cursor="pointer">Xplor</Heading>
          </NextLink>
        </Flex>
        <Flex align="center">
          {user ? <AuthMenu user={user} /> : <NotAuthMenu />}
        </Flex>
      </Flex>
    </Flex>
  );
};
