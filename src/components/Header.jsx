import { Box, Flex, Input, Avatar, Text, IconButton } from "@chakra-ui/react";
import { FaBell, FaQuestionCircle } from "react-icons/fa";

const Header = () => {
  return (
    <Box bg="gray.900" color="white" p={4}>
      <Flex justify="space-between" align="center">
        <Text fontSize="2xl">Lovable</Text>
        <Input placeholder="Search Netlify..." maxW="400px" bg="gray.700" border="none" />
        <Flex align="center">
          <Text mr={4}>News</Text>
          <Text mr={4}>Support</Text>
          <IconButton icon={<FaBell />} variant="ghost" color="white" />
          <IconButton icon={<FaQuestionCircle />} variant="ghost" color="white" />
          <Avatar name="User" src="https://bit.ly/broken-link" ml={4} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;