import { Box, Text, Button, VStack, HStack, Avatar } from "@chakra-ui/react";

const MembersSection = () => {
  return (
    <Box bg="gray.700" p={4} borderRadius="md" mb={4}>
      <HStack justify="space-between" mb={4}>
        <Text fontSize="xl">Members</Text>
        <Button colorScheme="blue">Add members</Button>
      </HStack>
      <VStack spacing={4}>
        <HStack justify="space-between" w="full">
          <HStack>
            <Avatar name="Devel" src="https://bit.ly/broken-link" />
            <Text>devel@amvtek.com</Text>
          </HStack>
          <Text>No 2FA</Text>
        </HStack>
        <HStack justify="space-between" w="full">
          <HStack>
            <Avatar name="Niklas" src="https://bit.ly/broken-link" />
            <Text>niklas@lovable.dev</Text>
          </HStack>
          <Text>No 2FA</Text>
        </HStack>
        <HStack justify="space-between" w="full">
          <HStack>
            <Avatar name="Kristian" src="https://bit.ly/broken-link" />
            <Text>kristian@lovable.dev</Text>
          </HStack>
          <Text>No 2FA</Text>
        </HStack>
        <HStack justify="space-between" w="full">
          <HStack>
            <Avatar name="Valthor" src="https://bit.ly/broken-link" />
            <Text>valthor@lovable.dev</Text>
          </HStack>
          <Text>No 2FA</Text>
        </HStack>
        <HStack justify="space-between" w="full">
          <HStack>
            <Avatar name="Erik" src="https://bit.ly/broken-link" />
            <Text>Erik Bjäreholt</Text>
          </HStack>
          <Text>No 2FA</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default MembersSection;