import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import TermsAndConditions from "../pages/Company/TermsAndConditions";
import PrivacyPolicy from "../pages/Company/PrivacyPolicy";
import AboutUs from "../pages/Company/AboutUs";
import InvestWithUs from "../pages/Company/InvestWithUs";
import JobsAndCareer from "../pages/Company/JobsAndCareer";
import Support from "../pages/Resources/Support";
import Videos from "../pages/Resources/Videos";
import ReleaseNotes from "../pages/Resources/ReleaseNotes";
import Error from "../pages/404";

import LegittLite from "../pages/Products/LegittLite/index";
import ContractManagementSoftware from "../pages/ContractManagementSoftware/index";
import LegittPro from "../pages/Products/LegittPro/index";
import Legal from "../pages/Solutions/Departments/Legal";
import Sales from "../pages/Solutions/Departments/Sales";
import IT from "../pages/Solutions/Departments/IT";
import Finance from "../pages/Solutions/Departments/Finance";
import Salesforce from "../pages/Solutions/Integrations/Salesforce";
import MicrosoftDynamics from "../pages/Solutions/Integrations/MicrosoftDynamics";
import ZohoAndQuickbook from "../pages/Solutions/Integrations/ZohoAndQuickbook";
import LegittLeadGen from "../pages/LegittLeadGen";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Company */}
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/job-list" element={<JobsAndCareer />} />
      <Route path="/invest" element={<InvestWithUs />} />
      {/* Resources */}
      <Route path="/support" element={<Support />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/release-notes" element={<ReleaseNotes />} />

      {/* Products */}
      <Route path="/legitt-lite" element={<LegittLite />} />
      <Route path="/legitt-pro" element={<LegittPro />} />
      <Route
        path="/contract-management-software"
        element={<ContractManagementSoftware />}
      />

      {/* Solutions */}

      <Route path="/legal" element={<Legal />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/it" element={<IT />} />
      <Route path="/finance" element={<Finance />} />

      <Route path="salesforce" element={<Salesforce />} />
      <Route path="microsoft-dynamics" element={<MicrosoftDynamics />} />
      <Route path="zoho-quickbooks" element={<ZohoAndQuickbook />} />

      <Route path="lead-generation" element={<LegittLeadGen />} />

      <Route path="/error-404" element={<Error />} />
    </Routes>
  );
};

export default AppRoutes;
