import { Box, Button, Flex, Text, Divider, Stack } from "@chakra-ui/react";
import React from "react";
import { FiPlus } from "react-icons/fi";
import { Community } from "../generated/graphql";
import NextLink from "next/link";
import { sinceFormat } from "../utils/date/sinceFormat";
import { useRouter } from "next/router";

interface CommunityInfoBlockProps {
  community: Community;
}

export const CommunityInfoBlock: React.FC<CommunityInfoBlockProps> = ({
  community,
}) => {
  let router = useRouter();
  return (
    <Stack
      flexDir="column"
      border="1px solid white"
      borderRadius="5px"
      paddingX={4}
      justify="center"
      h="100px"
      maxH="125px"
    >
      <Flex align="center" justify="space-between">
        <Box textAlign="left">
          <Button
            onClick={() => router.push(`c/${community.name}`)}
            fontSize="20px"
            fontWeight="bold"
            variant="link"
            textAlign="left"
          >
            c/{community.name}
          </Button>
          <Text>{community.description}</Text>
        </Box>
        <Button leftIcon={<FiPlus />}>Subscribe</Button>
      </Flex>
      <Flex justify="center">
        <Text>
          {community.memberCount} subscribed. Created{" "}
          {sinceFormat(community.createdAt)}
        </Text>
      </Flex>
    </Stack>
  );
};
