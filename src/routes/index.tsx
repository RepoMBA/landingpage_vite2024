import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import TermsAndConditions from "../pages/TermsAndConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import AboutUs from "../pages/AboutUs";
import InvestWithUs from "../pages/InvestWithUs";
import JobsAndCareer from "../pages/JobsAndCareer";
import Support from "../pages/Support";
import Videos from "../pages/Videos";



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* Company */}
      <Route path="/about-us" element={<AboutUs/>}/>
      <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
      <Route path="/terms-and-conditions" element={<TermsAndConditions/>}/>
      <Route path="/job-list" element={<JobsAndCareer/>}/>
      <Route path="/invest" element={<InvestWithUs/>}/>
      {/* Resources */}
      <Route path="/support" element={<Support/>}/>
      <Route path="/videos" element={<Videos/>}/>
    </Routes>
  );
};

export default AppRoutes;
