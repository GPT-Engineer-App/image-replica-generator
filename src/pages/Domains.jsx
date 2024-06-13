import { Box, Flex, Text } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

const Domains = () => {
  return (
    <Flex>
      <Sidebar />
      <Box flex="1" bg="gray.900" color="white" p={4}>
        <Text fontSize="2xl" mb={4}>Domains</Text>
        <Text>Welcome to the Domains page. Here you can manage your domains.</Text>
      </Box>
    </Flex>
  );
};

export default Domains;