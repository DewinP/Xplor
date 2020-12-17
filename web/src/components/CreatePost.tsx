import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  ModalFooter,
  Button,
  Box,
  Flex,
  Link,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { useCreatePostMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import { InputField } from "./InputField";
import { useApolloClient } from "@apollo/client";

interface CreatePostProps {
  isOpen: boolean;
  onClose: () => void;
  communityId: number;
}

export const CreatePost: React.FC<CreatePostProps> = ({
  isOpen,
  onClose,
  communityId,
}) => {
  let [createPost] = useCreatePostMutation();
  let apolloClient = useApolloClient();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxWidth={{ md: "800px" }}>
        <ModalHeader>Create a new post</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Formik
            initialValues={{ title: "", body: "" }}
            onSubmit={async (values, { setErrors }) => {
              const response = await createPost({
                variables: { input: { ...values, communityId: communityId } },
              });
              if (!response.data?.createPost.id) {
                //error
              } else {
                // resetStore refetches all active queries
                await apolloClient.cache.reset();
                onClose();
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <InputField
                  name="title"
                  placeholder="post title"
                  label="Post title"
                />
                <Box mt={4}>
                  <InputField
                    name="body"
                    placeholder="whats on your mind?"
                    textarea
                  />
                </Box>
                <Flex justify="flex-end" mt={3}>
                  <Button
                    mr={2}
                    isLoading={isSubmitting}
                    colorScheme="blue"
                    type="submit"
                  >
                    Post
                  </Button>
                  <Button onClick={onClose}>Close</Button>
                </Flex>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
