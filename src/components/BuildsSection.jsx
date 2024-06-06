import { Box, Text, VStack, HStack } from "@chakra-ui/react";

const BuildsSection = () => {
  return (
    <Box bg="gray.700" p={4} borderRadius="md" mb={4}>
      <HStack justify="space-between" mb={4}>
        <Text fontSize="xl" color="white">Builds</Text>
      </HStack>
      <VStack spacing={4}>
        <HStack justify="space-between" w="full">
          <Text color="white">lovable.dev</Text>
          <Text color="white">Canceled</Text>
        </HStack>
        <HStack justify="space-between" w="full">
          <Text color="white">run.gptengineer.app</Text>
          <Text color="white">Building</Text>
        </HStack>
        <HStack justify="space-between" w="full">
          <Text color="white">gptengineer.app</Text>
          <Text color="white">Building</Text>
        </HStack>
        <HStack justify="space-between" w="full">
          <Text color="white">lovable.dev</Text>
          <Text color="white">Canceled</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default BuildsSection;