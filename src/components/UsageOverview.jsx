import { Box, SimpleGrid, Text } from "@chakra-ui/react";

const UsageOverview = () => {
  return (
    <Box bg="gray.700" p={4} borderRadius="md" mb={4}>
      <SimpleGrid columns={4} spacing={4}>
        <Box textAlign="center">
          <Text fontSize="xl">Bandwidth</Text>
          <Text fontSize="2xl">2 GB</Text>
          <Text>/ 1 TB</Text>
        </Box>
        <Box textAlign="center">
          <Text fontSize="xl">Build minutes</Text>
          <Text fontSize="2xl">430</Text>
          <Text>/ 25,000</Text>
        </Box>
        <Box textAlign="center">
          <Text fontSize="xl">Concurrent builds</Text>
          <Text fontSize="2xl">2</Text>
          <Text>/ 3</Text>
        </Box>
        <Box textAlign="center">
          <Text fontSize="xl">Team members</Text>
          <Text fontSize="2xl">13</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default UsageOverview;