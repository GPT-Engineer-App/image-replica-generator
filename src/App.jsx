import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import TeamOverview from "./pages/TeamOverview.jsx";
import Sites from "./pages/Sites.jsx";
import Builds from "./pages/Builds.jsx";
import Integrations from "./pages/Integrations.jsx";
import Domains from "./pages/Domains.jsx";
import Members from "./pages/Members.jsx";
import AuditLog from "./pages/AuditLog.jsx";
import SecurityScorecard from "./pages/SecurityScorecard.jsx";
import Billing from "./pages/Billing.jsx";

import VisualEditorDashboard from "./pages/VisualEditorDashboard.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/team-overview" element={<TeamOverview />} />
        <Route path="/sites" element={<Sites />} />
        <Route path="/builds" element={<Builds />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/domains" element={<Domains />} />
        <Route path="/members" element={<Members />} />
        <Route path="/audit-log" element={<AuditLog />} />
        <Route path="/security-scorecard" element={<SecurityScorecard />} />
        <Route path="/billing" element={<Billing />} />
        
        <Route path="/visual-editor-dashboard" element={<VisualEditorDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;