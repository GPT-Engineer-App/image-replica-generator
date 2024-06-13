import { Box, Flex, Text } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

const Builds = () => {
  return (
    <Flex>
      <Sidebar />
      <Box flex="1" bg="gray.900" color="white" p={4}>
        <Text fontSize="2xl" mb={4}>Builds</Text>
        <Text>Welcome to the Builds page. Here you can manage your build processes.</Text>
      </Box>
    </Flex>
  );
};

export default Builds;