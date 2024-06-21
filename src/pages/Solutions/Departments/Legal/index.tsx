import React from "react";
import LegalHeroSection from "./LegalHeroSection";
import { Helmet } from "react-helmet";
import CustomersSection from "../../../../components/CustomersSection";
import LegalTestimonialSection from "./LegalTestimonialSection";
import LegalValueSection from "./LegalValueSection";
import LegalTeamHelpSection from "./LegalTeamHelpSection";
import LegittProDemoBanner from "../../../Products/LegittPro/LegittProDemoBanner/index";
import LegalTeamResourcesSection from "./LegalTeamResourcesSection";

export default function Legal() {
  return (
    <div>
      <Helmet>
        <title>Legal</title>
        <meta
          name="description"
          content="This page provides information about our website."
        />
      </Helmet>
      <LegalHeroSection />
      <CustomersSection />
      <LegalTestimonialSection />
      <LegalValueSection />
      <LegalTeamHelpSection />
      <LegalTeamResourcesSection />
      <LegittProDemoBanner />
    </div>
  );
}
