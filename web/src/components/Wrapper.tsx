import { Box } from "@chakra-ui/core";
import React from "react";

interface WrapperProps {
  variant?: "small" | "default";
}

export const Wrapper: React.FC<WrapperProps> = ({
  variant = "default",
  children,
}) => {
  return (
    <Box
      mt={8}
      maxW={variant === "default" ? "800px" : "400px"}
      w="100%"
      mx="auto"
    >
      {children}
    </Box>
  );
};
