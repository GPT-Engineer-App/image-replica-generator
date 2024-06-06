import { Box, Text, Button, VStack, HStack, Image } from "@chakra-ui/react";

const SitesSection = () => {
  return (
    <Box bg="gray.700" p={4} borderRadius="md" mb={4}>
      <HStack justify="space-between" mb={4}>
        <Text fontSize="xl">Sites</Text>
        <Button colorScheme="blue">Add new site</Button>
      </HStack>
      <VStack spacing={4}>
        <HStack justify="space-between" w="full">
          <HStack>
            <Image boxSize="50px" src="https://bit.ly/broken-link" alt="Site" />
            <Text>run.gptengineer.app</Text>
          </HStack>
          <Text>Deploys from GitHub with Next.js</Text>
          <Text>Building</Text>
        </HStack>
        <HStack justify="space-between" w="full">
          <HStack>
            <Image boxSize="50px" src="https://bit.ly/broken-link" alt="Site" />
            <Text>gptengineer.app</Text>
          </HStack>
          <Text>Deploys from GitHub with Next.js</Text>
          <Text>Building</Text>
        </HStack>
        <HStack justify="space-between" w="full">
          <HStack>
            <Image boxSize="50px" src="https://bit.ly/broken-link" alt="Site" />
            <Text>lovable.dev</Text>
          </HStack>
          <Text>Deploys from GitHub with Astro</Text>
          <Text>Canceled</Text>
        </HStack>
        <HStack justify="space-between" w="full">
          <HStack>
            <Image boxSize="50px" src="https://bit.ly/broken-link" alt="Site" />
            <Text>docs.gptengineer.app</Text>
          </HStack>
          <Text>Builds are stopped</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default SitesSection;