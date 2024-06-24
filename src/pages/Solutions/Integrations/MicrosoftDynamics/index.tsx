import React from "react";

import { Helmet } from "react-helmet";
import MicrosoftDynamicsHeroSection from "./MicrosoftDynamicsHeroSection";
import MicrosoftDynamicsIntroVideoSection from "./MicrosoftDynamicsIntroVideoSection";
import LegittExperienceWithMicrosoftDynamics from "./LegittExperienceWithMicrosoftDynamics";

export default function MicrosoftDynamics() {
  return (
    <div>
      {" "}
      <Helmet>
        <title>Microsoft Dynamics Integration Legitt AI</title>
        <meta
          name="description"
          content="This page provides information about our website."
        />
      </Helmet>
      <MicrosoftDynamicsHeroSection />
      <MicrosoftDynamicsIntroVideoSection />
      <LegittExperienceWithMicrosoftDynamics />
    </div>
  );
}
