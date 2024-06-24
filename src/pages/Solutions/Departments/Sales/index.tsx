import React from "react";
import SalesHeroSection from "./SalesHeroSection";
import { Helmet } from "react-helmet";
import CustomersSection from "../../../../components/CustomersSection";
import SalesTestimonialSection from "./SalesTestimonialSection";
import SalesValueSection from "./SalesValueSection";
import SalesTeamHelpSection from "./SalesTeamHelpSection";
import LegittProDemoBanner from "../../../Products/LegittPro/LegittProDemoBanner/index";
import SalesTeamResourcesSection from "./SalesTeamResourcesSection";

export default function Sales() {
  return (
    <div>
      <Helmet>
        <title>Sales</title>
        <meta
          name="description"
          content="This page provides information about our website."
        />
      </Helmet>
      <SalesHeroSection />
      <CustomersSection />
      <SalesTestimonialSection />
      <SalesValueSection />
      <SalesTeamHelpSection />
      <SalesTeamResourcesSection />
      <LegittProDemoBanner />
    </div>
  );
}
