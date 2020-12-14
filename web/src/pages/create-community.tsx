import { Box, Button, Stack, Heading, Text } from "@chakra-ui/react";
import { Formik, Form, ErrorMessage } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { InputField } from "../components/InputField";
import { Layout } from "../components/Layout";
import { useCreateCommunityMutation } from "../generated/graphql";
import { getCommunityNameFromUrl } from "../utils/getCommunityNameFromUrl";
import { toErrorMap } from "../utils/toErrorMap";
import { withApollo } from "../utils/withApollo";

interface createCommunityProps {}

const createCommunity: React.FC<createCommunityProps> = ({}) => {
  const [createCommunity] = useCreateCommunityMutation();
  const router = useRouter();
  console.log(getCommunityNameFromUrl());
  return (
    <Layout hideSidebar>
      <Box w="600px" maxW="100%" marginX="auto">
        <Heading>Create your own Community</Heading>
        <Text as="em">
          Please note that you can only create one community at the moment. We
          are looking into expanding this in the future
        </Text>
        <Box w="400px" my="25px">
          <Formik
            initialValues={{
              name: "",
              title: "",
              description: "",
            }}
            onSubmit={async (values, { setErrors }) => {
              console.log(values);
              const { data, errors } = await createCommunity({
                variables: { input: values },
              });
              if (data?.createCommunity.name) {
                router.push(`/c/${data?.createCommunity.name}`);
                // worked
              }

              if (errors) {
                throw new Error("error");
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Stack spacing={3}>
                  <InputField
                    name="name"
                    placeholder="ex. Nextjs"
                    label="Community's Name"
                  />
                  <InputField
                    name="title"
                    placeholder="ex. The react framework"
                    label="Community's title"
                  />
                  <InputField
                    textarea
                    name="description"
                    placeholder="Whats your community about?"
                    label="Community's description"
                  />
                  <Button
                    mt={4}
                    type="submit"
                    isLoading={isSubmitting}
                    colorScheme="teal"
                  >
                    Create Community
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Layout>
  );
};

export default withApollo({ ssr: "false" })(createCommunity);
