import { Box } from "@chakra-ui/react";
import React from "react";
import { Navbar } from "./Navbar";
interface BodyProps {}

export const Body: React.FC<BodyProps> = ({ children }) => {
  return (
    <Box w="800px" minW="500px" mt={6}>
      {children}
    </Box>
  );
};
