import { Box, Flex, Text } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

const SecurityScorecard = () => {
  return (
    <Flex>
      <Sidebar />
      <Box flex="1" bg="gray.900" color="white" p={4}>
        <Text fontSize="2xl" mb={4}>Security Scorecard</Text>
        <Text>Welcome to the Security Scorecard page. Here you can view your security scorecard.</Text>
      </Box>
    </Flex>
  );
};

export default SecurityScorecard;