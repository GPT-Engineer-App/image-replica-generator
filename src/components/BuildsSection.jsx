import { Box, Text, VStack, HStack } from "@chakra-ui/react";

const BuildsSection = () => {
  return (
    <Box bg="gray.700" p={4} borderRadius="md" mb={4}>
      <HStack justify="space-between" mb={4}>
        <Text fontSize="xl">Builds</Text>
      </HStack>
      <VStack spacing={4}>
        <HStack justify="space-between" w="full">
          <Text>lovable.dev</Text>
          <Text>Canceled</Text>
        </HStack>
        <HStack justify="space-between" w="full">
          <Text>run.gptengineer.app</Text>
          <Text>Building</Text>
        </HStack>
        <HStack justify="space-between" w="full">
          <Text>gptengineer.app</Text>
          <Text>Building</Text>
        </HStack>
        <HStack justify="space-between" w="full">
          <Text>lovable.dev</Text>
          <Text>Canceled</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default BuildsSection;