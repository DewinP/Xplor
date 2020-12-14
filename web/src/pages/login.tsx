import React from "react";
import { Formik, Form } from "formik";
import { Box, Button, Flex, Heading, Link, Stack } from "@chakra-ui/react";
import { InputField } from "../components/InputField";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { withApollo } from "../utils/withApollo";
import { useLoginMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import { Layout } from "../components/Layout";

const Login: React.FC<{}> = ({}) => {
  const router = useRouter();
  const [login] = useLoginMutation();
  return (
    <Layout hideSidebar>
      <Stack maxW="400px" justify="center" mx="auto">
        <Heading mb={5} bg="cyan.400" textAlign="center" color="white">
          LOGIN
        </Heading>
        <Formik
          initialValues={{ usernameOrEmail: "", password: "" }}
          onSubmit={async (values, { setErrors }) => {
            const response = await login({
              variables: {
                usernameOrEmail: values.usernameOrEmail,
                password: values.password,
              },
            });
            if (response.data?.login.errors) {
              setErrors(toErrorMap(response.data.login.errors));
            } else if (response.data?.login.user) {
              if (typeof router.query.next === "string") {
                router.push(router.query.next);
              } else {
                // worked
                router.push("/");
              }
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputField
                name="usernameOrEmail"
                placeholder="username or email"
                label="Username or Email"
              />
              <Box mt={4}>
                <InputField
                  name="password"
                  placeholder="password"
                  label="Password"
                  type="password"
                />
              </Box>
              <Button
                mt={4}
                isLoading={isSubmitting}
                colorScheme="teal"
                type="submit"
              >
                Login
              </Button>
              <Flex justify="flex-end">
                <NextLink href="/forgot-password">
                  <Link color="teal">forgot password?</Link>
                </NextLink>
              </Flex>
            </Form>
          )}
        </Formik>
      </Stack>
    </Layout>
  );
};

export default withApollo({ ssr: "false" })(Login);
