import {
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Community, User } from "../../generated/graphql";
import NextLink from "next/link";
import { AboutCommunity } from "./AboutCommunity";
interface SideBarProps {
  community?: Community;
  user?: User;
}

export const SideBar: React.FC<SideBarProps> = ({ community }) => {
  return (
    <Stack
      spacing={3}
      w="300px"
      minH="500px"
      mr={6}
      flexDir="column"
      display={{ base: "none", lg: "flex" }}
      mt={6}
    >
      {community ? (
        <AboutCommunity community={community} />
      ) : (
        <Stack>
          <Button
            colorScheme="teal"
            size="sm"
            variant="ghost"
            justifyContent="left"
          >
            New
          </Button>
          <Button
            colorScheme="teal"
            size="sm"
            variant="ghost"
            justifyContent="left"
          >
            Popular
          </Button>
          <Button
            colorScheme="teal"
            size="sm"
            variant="ghost"
            justifyContent="left"
          >
            All
          </Button>
          <Divider />
          <NextLink href="/c">
            <Button
              colorScheme="teal"
              size="sm"
              variant="ghost"
              justifyContent="left"
            >
              All Communities
            </Button>
          </NextLink>
        </Stack>
      )}
    </Stack>
  );
};
