import React from "react";
import NewHeader from "../../components/Header/NewHeader";
import ITHeroSection from "./ITHeroSection";
import { Helmet } from "react-helmet";
import CustomersSection from "../../components/CustomersSection";
import ITTestimonialSection from "./ITTestimonialSection";
import ITValueSection from "./ITValueSection";
import ITTeamHelpSection from "./ITTeamHelpSection";
import LegittProDemoBanner from "../LegittPro/LegittProDemoBanner";
import ITTeamResourcesSection from "./ITTeamResourcesSection";
import Footer from "../../components/Footer";

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
      <NewHeader />
      <ITHeroSection />
      <CustomersSection />
      <ITTestimonialSection />
      <ITValueSection />
      <ITTeamHelpSection />
      <ITTeamResourcesSection />
      <LegittProDemoBanner />
      <Footer />
    </div>
  );
}
