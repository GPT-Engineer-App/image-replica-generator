import { Box, VStack, Button, Text, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaHeart, FaHome, FaServer, FaCogs, FaUserFriends, FaClipboardList, FaShieldAlt, FaCreditCard, FaTools, FaChartLine, FaArrowUp } from "react-icons/fa";

const Sidebar = () => {
  return (
    <Box bg="gray.800" color="white" w="250px" p={4} minH="100vh">
      <VStack spacing={4} align="start">
        <Box display="flex" alignItems="center" mb={6}>
          <FaHeart color="red" />
          <Text fontSize="xl" ml={2} color="white">Lovable</Text>
        </Box>
        <Button as={Link} to="/team-overview" leftIcon={<FaHome />} variant="ghost" justifyContent="start" w="full" color="white">Team Overview</Button>
        <Button as={Link} to="/sites" leftIcon={<FaServer />} variant="ghost" justifyContent="start" w="full" color="white">Sites</Button>
        <Button as={Link} to="/builds" leftIcon={<FaCogs />} variant="ghost" justifyContent="start" w="full" color="white">Builds</Button>
        <Button as={Link} to="/integrations" leftIcon={<FaTools />} variant="ghost" justifyContent="start" w="full" color="white">Integrations</Button>
        <Button as={Link} to="/domains" leftIcon={<FaChartLine />} variant="ghost" justifyContent="start" w="full" color="white">Domains</Button>
        <Button as={Link} to="/members" leftIcon={<FaUserFriends />} variant="ghost" justifyContent="start" w="full" color="white">Members</Button>
        <Button as={Link} to="/audit-log" leftIcon={<FaClipboardList />} variant="ghost" justifyContent="start" w="full" color="white">Audit Log</Button>
        <Button as={Link} to="/security-scorecard" leftIcon={<FaShieldAlt />} variant="ghost" justifyContent="start" w="full" color="white">Security Scorecard</Button>
        <Button as={Link} to="/billing" leftIcon={<FaCreditCard />} variant="ghost" justifyContent="start" w="full" color="white">Billing</Button>
        <Button as={Link} to="/team-settings" leftIcon={<FaTools />} variant="ghost" justifyContent="start" w="full" color="white">Team Settings</Button>
        <Button as={Link} to="/visual-editor-dashboard" leftIcon={<FaChartLine />} variant="ghost" justifyContent="start" w="full" color="white">Visual Editor Dashboard</Button>
        <Button leftIcon={<FaArrowUp />} colorScheme="blue" w="full">Upgrade</Button>
      </VStack>
    </Box>
  );
};

export default Sidebar;