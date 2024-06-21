import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import TermsAndConditions from "../pages/TermsAndConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import AboutUs from "../pages/AboutUs";
import InvestWithUs from "../pages/InvestWithUs";
import JobsAndCareer from "../pages/JobsAndCareer";
import Support from "../pages/Support";
import Videos from "../pages/Videos";
import ReleaseNotes from "../pages/ReleaseNotes";
import Error from "../pages/404";

import LegittLite from "../pages/Products/LegittLite/index";
import ContractManagementSoftware from "../pages/ContractManagementSoftware/index";
import LegittPro from "../pages/Products/LegittPro/index";
import Legal from "../pages/Solutions/Departments/Legal";
import Sales from "../pages/Solutions/Departments/Sales";
import IT from "../pages/Solutions/Departments/IT";
import Finance from "../pages/Solutions/Departments/Finance";
import Salesforce from "../pages/Solutions/Integrations/Salesforce";

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

      <Route path="/error-404" element={<Error />} />
    </Routes>
  );
};

export default AppRoutes;
