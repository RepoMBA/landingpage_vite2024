import React from "react";
import NewHeader from "../../components/Header/NewHeader";
import FinanceHeroSection from "./FinanceHeroSection";
import { Helmet } from "react-helmet";
import CustomersSection from "../../components/CustomersSection";
import FinanceTestimonialSection from "./FinanceTestimonialSection";
import FinanceValueSection from "./FinanceValueSection";
import FinanceTeamHelpSection from "./FinanceTeamHelpSection";
import LegittProDemoBanner from "../LegittPro/LegittProDemoBanner";
import FinanceTeamResourcesSection from "./FinanceTeamResourcesSection";
import Footer from "../../components/Footer";

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
      <NewHeader />
      <FinanceHeroSection />
      <CustomersSection />
      <FinanceTestimonialSection />
      <FinanceValueSection />
      <FinanceTeamHelpSection />
      <FinanceTeamResourcesSection />
      <LegittProDemoBanner />
      <Footer />
    </div>
  );
}
