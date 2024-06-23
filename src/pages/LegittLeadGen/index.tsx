import React from "react";
import LeadGenHeroSection from "./LeadGenHeroSection";
import WhyLeadGenSection from "./WhyLeadGenSection";
import CustomersSection from "../../components/CustomersSection";
import HowDoesItWorkSection from "./HowDoesItWorkSection";
import LegittProDemoBanner from "../Products/LegittPro/LegittProDemoBanner";
import LeadGenTestimonials from "./LeadGenTestimonials";

export default function LegittLeadGen() {
  return (
    <div>
      <LeadGenHeroSection />
      <CustomersSection />
      <WhyLeadGenSection />
      <HowDoesItWorkSection />
      <LeadGenTestimonials />
      <LegittProDemoBanner />
    </div>
  );
}
