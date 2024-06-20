import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import TermsAndConditions from "../pages/TermsAndConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import AboutUs from "../pages/AboutUs";
import InvestWithUs from "../pages/InvestWithUs";
import JobsAndCareer from "../pages/JobsAndCareer";
import Support from "../pages/Support";
import Videos from "../pages/Videos";

import LegittLite from "../pages/LegittLite";
import ContractManagementSoftware from "../pages/ContractManagementSoftware";
import LegittPro from "../pages/LegittPro";
import Legal from "../pages/Legal";
import Sales from "../pages/Sales";
import IT from "../pages/IT";

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
    </Routes>
  );
};

export default AppRoutes;
