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
import React, { useState, useEffect } from "react";
import { Layout } from "../components/Layout";
import { Community, useAllCommunitiesQuery } from "../generated/graphql";
import { CommunityInfoBlock } from "../components/CommunityInfoBlock";
import { withApollo } from "../utils/withApollo";

interface communitiesProps {}

const communities: React.FC<communitiesProps> = ({}) => {
  const { data, error, loading } = useAllCommunitiesQuery();
  if (loading) {
    return <Layout>...loading</Layout>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const results = data.allCommunties.filter(
      (c) =>
        c.name.toLowerCase().includes(searchTerm) ||
        c.title.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  let communitiesArray = searchResults;
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
            <InputRightElement color="grey" p={0} children={<FiSearch />} />
          </InputGroup>
        </Flex>
        <Stack spacing={2} mt={4} textAlign="center">
          {communitiesArray.length > 0 ? (
            communitiesArray.map((c) => {
              return <CommunityInfoBlock key={c.id} community={c} />;
            })
          ) : (
            <Heading color="red" size="md">
              Nothing Found
            </Heading>
          )}
        </Stack>
      </Box>
    </Layout>
  );
};

export default withApollo({ ssr: "false" })(communities);
