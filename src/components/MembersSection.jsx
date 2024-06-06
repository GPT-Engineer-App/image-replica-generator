import { Box, Text, Button, VStack, HStack, Avatar } from "@chakra-ui/react";

const MembersSection = () => {
  return (
    <Box bg="gray.700" p={4} borderRadius="md" mb={4}>
      <HStack justify="space-between" mb={4}>
        <Text fontSize="xl" color="white">Members</Text>
        <Button colorScheme="blue">Add members</Button>
      </HStack>
      <VStack spacing={4}>
        <HStack justify="space-between" w="full">
          <HStack>
            <Avatar name="Devel" src="https://bit.ly/broken-link" />
            <Text color="white">devel@amvtek.com</Text>
          </HStack>
          <Text color="white">No 2FA</Text>
        </HStack>
        <HStack justify="space-between" w="full">
          <HStack>
            <Avatar name="Niklas" src="https://bit.ly/broken-link" />
            <Text color="white">niklas@lovable.dev</Text>
          </HStack>
          <Text color="white">No 2FA</Text>
        </HStack>
        <HStack justify="space-between" w="full">
          <HStack>
            <Avatar name="Kristian" src="https://bit.ly/broken-link" />
            <Text color="white">kristian@lovable.dev</Text>
          </HStack>
          <Text color="white">No 2FA</Text>
        </HStack>
        <HStack justify="space-between" w="full">
          <HStack>
            <Avatar name="Valthor" src="https://bit.ly/broken-link" />
            <Text color="white">valthor@lovable.dev</Text>
          </HStack>
          <Text color="white">No 2FA</Text>
        </HStack>
        <HStack justify="space-between" w="full">
          <HStack>
            <Avatar name="Erik" src="https://bit.ly/broken-link" />
            <Text color="white">Erik Bjäreholt</Text>
          </HStack>
          <Text color="white">No 2FA</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default MembersSection;