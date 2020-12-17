import { Layout } from "../components/Layout";
import { Box } from "@chakra-ui/react";
import { withApollo } from "../utils/withApollo";

const Index = () => {
  return (
    <Layout>
      <Box>Hello</Box>
    </Layout>
  );
};

export default withApollo({ ssr: true })(Index);
