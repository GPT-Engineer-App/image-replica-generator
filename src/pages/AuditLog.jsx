import { Box, Flex, Text } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

const AuditLog = () => {
  return (
    <Flex>
      <Sidebar />
      <Box flex="1" bg="gray.900" color="white" p={4}>
        <Text fontSize="2xl" mb={4}>Audit Log</Text>
        <Text>Welcome to the Audit Log page. Here you can view the audit logs.</Text>
      </Box>
    </Flex>
  );
};

export default AuditLog;