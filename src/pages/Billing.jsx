import { Box, Flex, Text } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

const Billing = () => {
  return (
    <Flex>
      <Sidebar />
      <Box flex="1" bg="gray.900" color="white" p={4}>
        <Text fontSize="2xl" mb={4}>Billing</Text>
        <Text>Welcome to the Billing page. Here you can manage your billing information.</Text>
      </Box>
    </Flex>
  );
};

export default Billing;