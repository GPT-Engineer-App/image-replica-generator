import { Box, Text, VStack, HStack } from "@chakra-ui/react";

const AuditLogSection = () => {
  return (
    <Box bg="gray.700" p={4} borderRadius="md" mb={4}>
      <HStack justify="space-between" mb={4}>
        <Text fontSize="xl" color="white">Audit log</Text>
      </HStack>
      <VStack spacing={4}>
        <HStack justify="space-between" w="full">
          <Text color="white">Added Git Contributor Wailydest from manually-approved build on Lovable</Text>
          <Text color="white">Yesterday at 4:01 PM</Text>
        </HStack>
        <HStack justify="space-between" w="full">
          <Text color="white">Added Git Contributor niklasvxm from manually-approved build on Lovable</Text>
          <Text color="white">Yesterday at 1:42 PM</Text>
        </HStack>
        <HStack justify="space-between" w="full">
          <Text color="white">Added Git Contributor city17 from manually-approved build on Lovable</Text>
          <Text color="white">Yesterday at 12:48 PM</Text>
        </HStack>
        <HStack justify="space-between" w="full">
          <Text color="white">Added Git Contributor amvtek from automatically-approved build on Lovable</Text>
          <Text color="white">Yesterday at 6:59 AM</Text>
        </HStack>
        <HStack justify="space-between" w="full">
          <Text color="white">Updated deploy auto-approval to auto-approve on Lovable</Text>
          <Text color="white">June 4 at 4:54 PM</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default AuditLogSection;