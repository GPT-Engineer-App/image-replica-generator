import { Box, Flex, Text } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

const Integrations = () => {
  return (
    <Flex>
      <Sidebar />
      <Box flex="1" bg="gray.900" color="white" p={4}>
        <Text fontSize="2xl" mb={4}>Integrations</Text>
        <Text>Welcome to the Integrations page. Here you can manage your integrations.</Text>
      </Box>
    </Flex>
  );
};

export default Integrations;