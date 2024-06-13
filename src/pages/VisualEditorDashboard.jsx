import { Box, Flex, Text } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

const VisualEditorDashboard = () => {
  return (
    <Flex>
      <Sidebar />
      <Box flex="1" bg="gray.900" color="white" p={4}>
        <Text fontSize="2xl" mb={4}>Visual Editor Dashboard</Text>
        <Text>Welcome to the Visual Editor Dashboard page. Here you can manage your visual editor settings.</Text>
      </Box>
    </Flex>
  );
};

export default VisualEditorDashboard;