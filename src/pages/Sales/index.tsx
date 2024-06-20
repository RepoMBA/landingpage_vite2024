import React from "react";
import NewHeader from "../../components/Header/NewHeader";
import SalesHeroSection from "./SalesHeroSection";
import { Helmet } from "react-helmet";
import CustomersSection from "../../components/CustomersSection";
import SalesTestimonialSection from "./SalesTestimonialSection";
import SalesValueSection from "./SalesValueSection";
import SalesTeamHelpSection from "./SalesTeamHelpSection";
import LegittProDemoBanner from "../LegittPro/LegittProDemoBanner";
import SalesTeamResourcesSection from "./SalesTeamResourcesSection";
import Footer from "../../components/Footer";

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
      <NewHeader />
      <SalesHeroSection />
      <CustomersSection />
      <SalesTestimonialSection />
      <SalesValueSection />
      <SalesTeamHelpSection />
      <SalesTeamResourcesSection />
      <LegittProDemoBanner />
      <Footer />
    </div>
  );
}
