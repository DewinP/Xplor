import { Box, Button, Flex, Heading, Link, Stack } from "@chakra-ui/react";
import React from "react";
import { Form, Formik } from "formik";
import { InputField } from "../components/InputField";
import NextLink from "next/link";
import { withApollo } from "../utils/withApollo";
import { useRouter } from "next/router";
import { toErrorMap } from "../utils/toErrorMap";
import { useSignupMutation } from "../generated/graphql";
import { Layout } from "../components/Layout";

const Signup: React.FC<{}> = ({}) => {
  const router = useRouter();
  const [signup] = useSignupMutation();
  return (
    <Layout hideSidebar>
      <Stack maxW="400px" justify="center" mx="auto">
        <Heading mb={5} bg="tomato" textAlign="center" color="white">
          SIGNUP!
        </Heading>
        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          onSubmit={async (values, { setErrors }) => {
            console.log("r23r23r");
            const response = await signup({ variables: { input: values } });
            if (response.data?.signup.errors) {
              setErrors(toErrorMap(response.data.signup.errors));
            } else if (response.data?.signup.user) {
              // worked
              router.push("/login");
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputField
                name="username"
                label="Username"
                placeholder="username"
              />
              <Box mt={4}>
                <InputField name="email" label="Email" placeholder="email" />
              </Box>
              <Box mt={4}>
                <InputField
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="password"
                />
              </Box>
              <Button
                mt={4}
                colorScheme="teal"
                isLoading={isSubmitting}
                type="submit"
              >
                Submit
              </Button>
              <Flex justify="flex-end">
                <NextLink href="/login">
                  <Link>Already have an account?</Link>
                </NextLink>
              </Flex>
            </Form>
          )}
        </Formik>
      </Stack>
    </Layout>
  );
};

export default withApollo({ ssr: "false" })(Signup);
