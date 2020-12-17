import {
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Button,
  Stack,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { Community } from "../generated/graphql";
import { FiPlus } from "react-icons/fi";
import { RiGroup2Fill } from "react-icons/ri";
interface CommunityHeaderProps {
  community: Community;
}
export const CommunityHeader: React.FC<CommunityHeaderProps> = ({
  community,
}) => {
  return (
    <Box>
      <Flex h="150px" w="100%" align="center" justify="center">
        <Heading>{community.title}</Heading>
      </Flex>
      <Flex
        h="75px"
        align="center"
        justify="center"
        boxShadow="0 1px 2px -2px white"
      >
        <Flex w="1100px" align="center" mx="10px" justify="space-between">
          <Flex align="center">
            <Icon
              color="beige"
              mt="-20px"
              as={RiGroup2Fill}
              width="100px"
              height="100px"
            />
            <Text fontSize="30px">c/{community.name}</Text>
          </Flex>
          <Box>
            <Button size="sm" leftIcon={<FiPlus />} colorScheme="teal">
              Subscribe
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
