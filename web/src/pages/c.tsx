import {
  Box,
  Heading,
  Stack,
  Flex,
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import React, { useState } from "react";
import { Layout } from "../components/Layout";
import { useAllCommunitiesQuery } from "../generated/graphql";
import { CommunityInfoBlock } from "../components/CommunityInfoBlock";
import { withApollo } from "../utils/withApollo";

interface communitiesProps {}

const communities: React.FC<communitiesProps> = ({}) => {
  const { data, error, loading } = useAllCommunitiesQuery();
  let [searchTerm, setSeatchTerm] = useState("");
  const handleChange = (e) => {
    console.log(searchTerm);
    setSeatchTerm(e.target.value);
  };
  if (loading) {
    return <Layout>...loading</Layout>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Layout hideSidebar>
      <Box mx="auto" px="10px">
        <Flex
          justify="space-between"
          align="center"
          flexDir={{ base: "column", lg: "row" }}
        >
          <Heading>All Communites</Heading>
          <InputGroup size="sm" maxW="400px">
            <Input
              value={searchTerm}
              onChange={handleChange}
              placeholder="search for a community"
            />
            <InputRightElement>
              <IconButton
                size="sm"
                aria-label="search communities"
                icon={<FiSearch />}
              />
            </InputRightElement>
          </InputGroup>
        </Flex>
        <Stack spacing={2} mt={4}>
          {data?.allCommunties.map((c) => {
            return <CommunityInfoBlock key={c.id} community={c} />;
          })}
        </Stack>
      </Box>
    </Layout>
  );
};

export default withApollo({ ssr: "false" })(communities);
