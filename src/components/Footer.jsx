import { Box, Text, VStack, HStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" p={4} mt={4}>
      <VStack spacing={4}>
        <Text>Managing organizations with multiple team accounts</Text>
        <Text>Netlify is making it easier for enterprises to manage teams and set org-level governance and controls.</Text>
        <Text>Learn more about multi-team management</Text>
        <HStack spacing={4}>
          <Text>Docs</Text>
          <Text>Pricing</Text>
          <Text>Support</Text>
          <Text>Blog</Text>
          <Text>Changelog</Text>
          <Text>Terms</Text>
        </HStack>
        <Text>© 2024 Netlify</Text>
      </VStack>
    </Box>
  );
};

export default Footer;