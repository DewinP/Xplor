import {
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Button,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { Community } from "../generated/graphql";
import { FiPlus } from "react-icons/fi";

interface CommunityHeaderProps {
  community: Community;
}

export const CommunityHeader: React.FC<CommunityHeaderProps> = ({
  community,
}) => {
  return (
    <Box>
      <Flex h="150px" bgColor="orange" w="100%" align="center" justify="center">
        <Heading>{community.title}</Heading>
      </Flex>
      <Flex h="75px" bgColor="darkish" align="center" justify="center">
        <Flex w="1100px" align="center" mx="10px" justify="space-between">
          <Flex>
            <Image
              borderRadius="full"
              border="2px solid white"
              mr="10px"
              boxSize="80px"
              mt="-20px"
              zIndex="1"
              src="https://bit.ly/sage-adebayo"
            />
            <Text fontSize="30px">c/{community.name}</Text>
          </Flex>
          <Box>
            <Button leftIcon={<FiPlus />} colorScheme="teal">
              Subscribe
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
