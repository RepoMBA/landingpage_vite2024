import React from "react";

import { Helmet } from "react-helmet";
import SalesforceHeroSection from "./SalesforceHeroSection";
import SalesforceIntroVideoSection from "./SalesforceIntroVideoSection";
import LegittExperienceWithSalesforce from "./LegittExperienceWithSalesforce";

export default function Salesforce() {
  return (
    <div>
      {" "}
      <Helmet>
        <title>Salesforce Integration Legitt AI</title>
        <meta
          name="description"
          content="This page provides information about our website."
        />
      </Helmet>
      <SalesforceHeroSection />
      <SalesforceIntroVideoSection />
      <LegittExperienceWithSalesforce />
    </div>
  );
}
