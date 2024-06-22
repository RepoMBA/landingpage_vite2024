import React from "react";
import SampleSalesForceHeroImage from "../../../../../assets/images/SampleSalesforceIntro.png";

export default function MicrosoftDynamicsIntroVideoSection() {
  return (
    <div className="px-4">
      <div className="flex justify-center items-center min-h-[80vh]">
        <img
          src={SampleSalesForceHeroImage}
          alt="SalesforceHeroImage"
          className="w-full max-w-[900px] object-cover object-center"
        />
      </div>
    </div>
  );
}
