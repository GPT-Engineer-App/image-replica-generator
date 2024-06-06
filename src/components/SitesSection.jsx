import { Box, Text, Button, VStack, HStack, Image } from "@chakra-ui/react";

const SitesSection = () => {
  return (
    <Box bg="gray.700" p={4} borderRadius="md" mb={4}>
      <HStack justify="space-between" mb={4}>
        <Text fontSize="xl" color="white">Sites</Text>
        <Button colorScheme="blue">Add new site</Button>
      </HStack>
      <VStack spacing={4}>
        <HStack justify="space-between" w="full">
          <HStack>
            <Image boxSize="50px" src="https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/66471fef66c07b000888c97a/screenshot_2024-05-17-09-15-39-0000.webp" alt="Site" />
            <Text color="white">run.gptengineer.app</Text>
          </HStack>
          <Text color="white">Deploys from GitHub with Next.js</Text>
          <Text color="white">Building</Text>
        </HStack>
        <HStack justify="space-between" w="full">
          <HStack>
            <Image boxSize="50px" src="https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/66471fef66c07b000888c97a/screenshot_2024-05-17-09-15-39-0000.webp" alt="Site" />
            <Text color="white">gptengineer.app</Text>
          </HStack>
          <Text color="white">Deploys from GitHub with Next.js</Text>
          <Text color="white">Building</Text>
        </HStack>
        <HStack justify="space-between" w="full">
          <HStack>
            <Image boxSize="50px" src="https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/66471fef66c07b000888c97a/screenshot_2024-05-17-09-15-39-0000.webp" alt="Site" />
            <Text color="white">lovable.dev</Text>
          </HStack>
          <Text color="white">Deploys from GitHub with Astro</Text>
          <Text color="white">Canceled</Text>
        </HStack>
        <HStack justify="space-between" w="full">
          <HStack>
            <Image boxSize="50px" src="https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/66471fef66c07b000888c97a/screenshot_2024-05-17-09-15-39-0000.webp" alt="Site" />
            <Text color="white">docs.gptengineer.app</Text>
          </HStack>
          <Text color="white">Builds are stopped</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default SitesSection;