import { Box, Flex, Text } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

const Members = () => {
  return (
    <Flex>
      <Sidebar />
      <Box flex="1" bg="gray.900" color="white" p={4}>
        <Text fontSize="2xl" mb={4}>Members</Text>
        <Text>Welcome to the Members page. Here you can manage your team members.</Text>
      </Box>
    </Flex>
  );
};

export default Members;