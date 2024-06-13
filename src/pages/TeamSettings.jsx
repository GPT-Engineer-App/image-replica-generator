import { Box, Flex, Text } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

const TeamSettings = () => {
  return (
    <Flex>
      <Sidebar />
      <Box flex="1" bg="gray.900" color="white" p={4}>
        <Text fontSize="2xl" mb={4}>Team Settings</Text>
        <Text>Welcome to the Team Settings page. Here you can manage your team settings.</Text>
      </Box>
    </Flex>
  );
};

export default TeamSettings;