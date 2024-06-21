import React from "react";
import Footer from "../../../components/Footer";
import LegittLiteHeroSection from "./LegittLiteHeroSection";
import CustomersSection from "../../../components/CustomersSection";
import LegittLiteTestimonialSection from "./LegittLiteTestimonialSection";
import LegittLiteValueSection from "./LegittLiteValueSection";
import LegittLiteBenefitSection from "../LegittLite/LegittLiteBenefitSection";
import LegittLiteDemoBanner from "./LegittLiteDemoBanner";
import { Helmet } from "react-helmet";

export default function LegittLite() {
  return (
    <div>
      <Helmet>
        <title>Legitt Lite</title>
        <meta
          name="description"
          content="This page provides information about our website."
        />
      </Helmet>

      <LegittLiteHeroSection />
      <CustomersSection />
      <LegittLiteTestimonialSection />
      <LegittLiteValueSection />
      <LegittLiteBenefitSection />
      <LegittLiteDemoBanner />

      <Footer />
    </div>
  );
}
