import { Box, SimpleGrid, Text } from "@chakra-ui/react";

const UsageOverview = () => {
  return (
    <Box bg="gray.700" p={4} borderRadius="md" mb={4}>
      <SimpleGrid columns={4} spacing={4}>
        <Box textAlign="center">
          <Text fontSize="xl" color="white">Bandwidth</Text>
          <Text fontSize="2xl" color="white">2 GB</Text>
          <Text color="white">/ 1 TB</Text>
        </Box>
        <Box textAlign="center">
          <Text fontSize="xl" color="white">Build minutes</Text>
          <Text fontSize="2xl" color="white">430</Text>
          <Text color="white">/ 25,000</Text>
        </Box>
        <Box textAlign="center">
          <Text fontSize="xl" color="white">Concurrent builds</Text>
          <Text fontSize="2xl" color="white">2</Text>
          <Text color="white">/ 3</Text>
        </Box>
        <Box textAlign="center">
          <Text fontSize="xl" color="white">Team members</Text>
          <Text fontSize="2xl" color="white">13</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default UsageOverview;