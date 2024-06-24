import React from "react";
import ITHeroSection from "./ITHeroSection";
import { Helmet } from "react-helmet";
import CustomersSection from "../../../../components/CustomersSection";
import ITTestimonialSection from "./ITTestimonialSection";
import ITValueSection from "./ITValueSection";
import ITTeamHelpSection from "./ITTeamHelpSection";
import LegittProDemoBanner from "../../../Products/LegittPro/LegittProDemoBanner/index";
import ITTeamResourcesSection from "./ITTeamResourcesSection";

export default function IT() {
  return (
    <div>
      <Helmet>
        <title>IT</title>
        <meta
          name="description"
          content="This page provides information about our website."
        />
      </Helmet>
      <ITHeroSection />
      <CustomersSection />
      <ITTestimonialSection />
      <ITValueSection />
      <ITTeamHelpSection />
      <ITTeamResourcesSection />
      <LegittProDemoBanner />
    </div>
  );
}
