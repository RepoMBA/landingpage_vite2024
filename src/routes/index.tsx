import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import TermsAndConditions from "../pages/TermsAndConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import AboutUs from "../pages/AboutUs";
import InvestWithUs from "../pages/InvestWithUs";



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions/>}/>
      <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
      <Route path="/about-us" element={<AboutUs/>}/>
      <Route path="/invest" element={<InvestWithUs/>}/>
    </Routes>
  );
};

export default AppRoutes;
