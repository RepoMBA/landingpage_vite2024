import React from "react";
import FinanceHeroSection from "./FinanceHeroSection";
import { Helmet } from "react-helmet";
import CustomersSection from "../../../../components/CustomersSection";
import FinanceTestimonialSection from "./FinanceTestimonialSection";
import FinanceValueSection from "./FinanceValueSection";
import FinanceTeamHelpSection from "./FinanceTeamHelpSection";
import LegittProDemoBanner from "../../../Products/LegittPro/LegittProDemoBanner/index";
import FinanceTeamResourcesSection from "./FinanceTeamResourcesSection";

export default function Finance() {
  return (
    <div>
      <Helmet>
        <title>IT</title>
        <meta
          name="description"
          content="This page provides information about our website."
        />
      </Helmet>
      <FinanceHeroSection />
      <CustomersSection />
      <FinanceTestimonialSection />
      <FinanceValueSection />
      <FinanceTeamHelpSection />
      <FinanceTeamResourcesSection />
      <LegittProDemoBanner />
    </div>
  );
}
