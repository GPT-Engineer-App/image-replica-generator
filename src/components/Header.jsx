import { Box, Flex, Input, Avatar, Text, IconButton, HStack } from "@chakra-ui/react";
import { FaBell, FaQuestionCircle, FaBullhorn } from "react-icons/fa";

const Header = () => {
  return (
    <Box bg="gray.900" color="white" p={4}>
      <Flex justify="space-between" align="center">
        <HStack spacing={4}>
          <Text fontSize="2xl" color="white">Lovable</Text>
          <Text fontSize="xl" color="white">run.gptengineer.app</Text>
        </HStack>
        <Input placeholder="Search Netlify..." maxW="400px" bg="gray.700" border="none" color="white" />
        <Flex align="center">
          <IconButton icon={<FaBullhorn />} variant="ghost" color="white" />
          <Text mr={4} color="white">News</Text>
          <IconButton icon={<FaQuestionCircle />} variant="ghost" color="white" />
          <Text mr={4} color="white">Support</Text>
          <IconButton icon={<FaBell />} variant="ghost" color="white" />
          <IconButton icon={<FaQuestionCircle />} variant="ghost" color="white" />
          <Avatar name="User" src="https://bit.ly/broken-link" ml={4} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;