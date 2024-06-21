import React from "react";
import SampleSalesForceHeroImage from "../../../../../assets/images/SampleSalesforceIntro.png";

export default function SalesforceIntroVideoSection() {
  return (
    <div>
      <div className="flex justify-center items-center min-h-[80vh]">
        <img
          src={SampleSalesForceHeroImage}
          alt="SalesforceHeroImage"
          className="w-[100%] max-w-[900px] object-cover object-center"
        />
      </div>
    </div>
  );
}
