import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import UsageOverview from "../components/UsageOverview";
import SitesSection from "../components/SitesSection";
import BuildsSection from "../components/BuildsSection";
import MembersSection from "../components/MembersSection";
import AuditLogSection from "../components/AuditLogSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <Flex>
      <Sidebar />
      <Box flex="1" bg="gray.900" color="white" p={4}>
        <Header />
        <UsageOverview />
        <SitesSection />
        <BuildsSection />
        <MembersSection />
        <AuditLogSection />
        <Footer />
      </Box>
    </Flex>
  );
};

export default Index;