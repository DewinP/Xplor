import { Box, Heading, Text, Stack } from "@chakra-ui/react";
import React from "react";
import { Layout } from "../components/Layout";
import { useAllCommunitiesQuery } from "../generated/graphql";
import { CommunityInfoBlock } from "../components/CommunityInfoBlock";
import { withApollo } from "../utils/withApollo";

interface communitiesProps {}

const communities: React.FC<communitiesProps> = ({}) => {
  const { data, error, loading } = useAllCommunitiesQuery();
  console.log(data);
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

  return (
    <Layout hideSidebar>
      <Box mx="auto" px="10px">
        <Heading>All Communites</Heading>
        <Stack spacing={2} mt={4}>
          {data.allCommunties.length > 0 ? (
            data?.allCommunties.map((c) => {
              return <CommunityInfoBlock key={c.id} community={c} />;
            })
          ) : (
            <Text> No communities at the moment</Text>
          )}
        </Stack>
      </Box>
    </Layout>
  );
};

export default withApollo({ ssr: "false" })(communities);
