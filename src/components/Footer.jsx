import { Box, Text, VStack, HStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" p={4} mt={4}>
      <VStack spacing={4}>
        <Text color="white">Managing organizations with multiple team accounts</Text>
        <Text color="white">Netlify is making it easier for enterprises to manage teams and set org-level governance and controls.</Text>
        <Text color="white">Learn more about multi-team management</Text>
        <HStack spacing={4}>
          <Text color="white">Docs</Text>
          <Text color="white">Pricing</Text>
          <Text color="white">Support</Text>
          <Text color="white">Blog</Text>
          <Text color="white">Changelog</Text>
          <Text color="white">Terms</Text>
        </HStack>
        <Text color="white">© 2024 Netlify</Text>
      </VStack>
    </Box>
  );
};

export default Footer;