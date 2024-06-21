import React from "react";
import NewHeader from "../../../../components/Header/NewHeader";
import LegalHeroSection from "./LegalHeroSection";
import { Helmet } from "react-helmet";
import CustomersSection from "../../../../components/CustomersSection";
import LegalTestimonialSection from "./LegalTestimonialSection";
import LegalValueSection from "./LegalValueSection";
import LegalTeamHelpSection from "./LegalTeamHelpSection";
import LegittProDemoBanner from "../../../Products/LegittPro/LegittProDemoBanner/index";
import LegalTeamResourcesSection from "./LegalTeamResourcesSection";
import Footer from "../../../../components/Footer";

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
      <NewHeader />
      <LegalHeroSection />
      <CustomersSection />
      <LegalTestimonialSection />
      <LegalValueSection />
      <LegalTeamHelpSection />
      <LegalTeamResourcesSection />
      <LegittProDemoBanner />
      <Footer />
    </div>
  );
}
