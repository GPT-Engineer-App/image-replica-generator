import { Box, Flex, Text } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

const Sites = () => {
  return (
    <Flex>
      <Sidebar />
      <Box flex="1" bg="gray.900" color="white" p={4}>
        <Text fontSize="2xl" mb={4}>Sites</Text>
        <Text>Welcome to the Sites page. Here you can manage all your sites.</Text>
      </Box>
    </Flex>
  );
};

export default Sites;