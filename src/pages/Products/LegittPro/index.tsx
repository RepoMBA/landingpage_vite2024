import React from "react";
import NewHeader from "../../../components/Header/NewHeader";
import LegittProHeroSection from "./LegittProHeroSection";
import CustomersSection from "../../../components/CustomersSection";
import LegittProTestimonialSection from "./LegittProTestimonialSection";
import LegittProValueSection from "./LegittProValueSection";
import LegittProBenefitSection from "./LegittProBenefitSection";
import LegittProDemoBanner from "./LegittProDemoBanner/index";
import Footer from "../../../components/Footer";
import { Helmet } from "react-helmet";
export default function LegittPro() {
  return (
    <div>
      <Helmet>
        <title>Legitt Pro</title>
        <meta
          name="description"
          content="This page provides information about our website."
        />
      </Helmet>
      <NewHeader />

      <LegittProHeroSection />
      <CustomersSection />
      <LegittProTestimonialSection />
      <LegittProValueSection />
      <LegittProBenefitSection />
      <LegittProDemoBanner />

      <Footer />
    </div>
  );
}
