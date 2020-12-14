import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Community } from "../generated/graphql";

interface SideBarProps {
  community?: Community;
}

export const SideBar: React.FC<SideBarProps> = ({ community }) => {
  return (
    <Flex
      w="300px"
      minH="500px"
      mr={6}
      flexDir="column"
      display={{ base: "none", lg: "flex" }}
      mt={6}
    >
      <Stack
        backgroundColor="turquoise"
        ml="10px"
        spacing={3}
        direction="column"
        align="flex-start"
        borderRadius="5px"
      >
        <Button colorScheme="teal" size="sm" variant="ghost">
          Home
        </Button>
        <Button colorScheme="teal" size="sm" variant="ghost">
          Popular
        </Button>
        <Button colorScheme="teal" size="sm" variant="ghost">
          All
        </Button>
      </Stack>

      <Stack
        backgroundColor="turquoise"
        pl="10px"
        ml="10px"
        mt={5}
        spacing={3}
        direction="column"
        align="flex-start"
        maxH="400px"
      >
        <Text fontSize="20px"> Top Communities</Text>
        <Button colorScheme="teal" size="sm" variant="link">
          Community 1
        </Button>
        <Button colorScheme="teal" size="sm" variant="link">
          Community 2
        </Button>
      </Stack>
    </Flex>
  );
};
