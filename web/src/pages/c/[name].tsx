import React, { useEffect, useState } from "react";
import { Layout } from "../../components/Layout";
import {
  Heading,
  Box,
  Text,
  Flex,
  Stack,
  useDisclosure,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { getCommunityNameFromUrl } from "../../utils/getCommunityNameFromUrl";
import { withApollo } from "../../utils/withApollo";
import { NextPage } from "next";
import {
  useCommunityPostsQuery,
  useCommunityQuery,
} from "../../generated/graphql";
import { sinceFormat } from "../../utils/date/sinceFormat";
import { CreatePost } from "../../components/CreatePost";
import { AiOutlineForm } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

const Community: NextPage = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  const { data, error, loading } = useCommunityQuery({
    variables: { name: getCommunityNameFromUrl() },
  });

  const { data: postData } = useCommunityPostsQuery({
    variables: { communityId: data?.community.id },
  });

  if (loading) {
    return (
      <Layout>
        <div>loading...</div>
      </Layout>
    );
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  if (!data?.community) {
    return (
      <Layout>
        <Box>This community does not exist</Box>
      </Layout>
    );
  }
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const results = postData.communityPosts.filter((p) =>
      p.title.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  let postArray = searchResults;

  return (
    <Layout community={data.community}>
      <Flex mb={4} justify="space-between" wrap="wrap">
        <Button size="sm" onClick={onToggle} rightIcon={<AiOutlineForm />}>
          Create Post
        </Button>
        <InputGroup size="sm" maxW="400px">
          <Input
            placeholder={`Search posts`}
            value={searchTerm}
            onChange={handleChange}
          />
          <InputRightElement p={0} children={<FiSearch />} />
        </InputGroup>
      </Flex>

      <CreatePost
        isOpen={isOpen}
        onClose={onClose}
        communityId={data?.community.id}
      />
      <Stack>
        {postArray.length ? (
          postArray.map((p) => {
            return (
              <Stack
                key={p.id}
                border="1px solid white"
                borderRadius="5px"
                p={2}
              >
                <Box>
                  <Text fontSize="12px" color="grey">
                    Posted by
                    <Box mx="3px" as="span" fontWeight="bold">
                      u/username
                    </Box>
                    <Box as="span">{sinceFormat(p.createdAt)}</Box>
                  </Text>
                  <Heading size="md">{p.title}</Heading>
                </Box>
                <Text fontSize="14px">{p.body}</Text>
              </Stack>
            );
          })
        ) : (
          <Heading color="red" size="md">
            Nothing Found
          </Heading>
        )}
      </Stack>
    </Layout>
  );
};

export default withApollo({ ssr: true })(Community);
