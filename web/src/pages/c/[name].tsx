import React from "react";
import { Layout } from "../../components/Layout";
import { Heading, Box, Text } from "@chakra-ui/react";
import { getCommunityNameFromUrl } from "../../utils/getCommunityNameFromUrl";
import { withApollo } from "../../utils/withApollo";
import { NextPage } from "next";
import { useCommunityQuery } from "../../generated/graphql";
import { sinceFormat } from "../../utils/date/sinceFormat";

const Community: NextPage = () => {
  const { data, error, loading } = useCommunityQuery({
    variables: { name: getCommunityNameFromUrl() },
  });
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

  if (!data?.community) {
    return (
      <Layout>
        <Box>This community does not exist</Box>
      </Layout>
    );
  }

  return (
    <Layout community={data.community}>
      <Heading>
        Welcome to c/
        <Text as="span" color="orange">
          {data?.community.name}
        </Text>
      </Heading>

      <Text>Members:{data.community.memberCount}</Text>
      <Text>Created {sinceFormat(data.community.createdAt)}</Text>
    </Layout>
  );
};

export default withApollo({ ssr: true })(Community);
