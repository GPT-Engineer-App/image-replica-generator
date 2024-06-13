import { Box, Flex, Text } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

const TeamOverview = () => {
  return (
    <Flex>
      <Sidebar />
      <Box flex="1" bg="gray.900" color="white" p={4}>
        <Text fontSize="2xl" mb={4}>Team Overview</Text>
        <Text>Welcome to the Team Overview page. Here you can see an overview of your team's activities and performance.</Text>
      </Box>
    </Flex>
  );
};

export default TeamOverview;