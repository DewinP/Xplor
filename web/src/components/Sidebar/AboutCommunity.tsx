import {
  Box,
  Stack,
  Stat,
  Text,
  StatLabel,
  StatNumber,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { Community } from "../../generated/graphql";
import { normalFormat } from "../../utils/date/sinceFormat";

interface AboutCommunityProps {
  community: Community;
}

export const AboutCommunity: React.FC<AboutCommunityProps> = ({
  community,
}) => {
  let date = normalFormat(community?.createdAt);
  return (
    <Stack border="1px solid grey" p="10px" borderRadius="5px">
      <Text fontWeight="bold"> About this Community</Text>
      <Box>
        <Text>{community.description}</Text>
      </Box>
      <Stat>
        <StatLabel fontWeight="bold">Members</StatLabel>
        <StatNumber>{community?.memberCount}</StatNumber>
      </Stat>
      <Text>Created {date}</Text>
    </Stack>
  );
};
