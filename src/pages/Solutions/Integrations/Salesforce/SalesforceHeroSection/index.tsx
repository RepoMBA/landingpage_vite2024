import React from "react";

export default function SalesforceHeroSection() {
  return (
    <div className="mt-[50px]">
      <div className="min-h-[90vh] flex flex-col-reverse lg:flex-row items-center justify-between w-full">
        <div className="w-full lg:w-1/2 p-6 lg:p-0 lg:pl-[4%] bg-white bg-opacity-80 lg:bg-transparent rounded-lg">
          <h2 className="font-semibold text-[20px] text-[#9B0242]">
            Legitt AI Contract Intelligence Integrations{" "}
          </h2>
          <p className="mt-2 text-[28px] sm:text-[35px] md:text-[45px] font-bold tracking-tight leading-[35px] sm:leading-[40px] md:leading-[50px] text-[#000]">
            Legitt AI Contract Intelligence Integration with Salesforce
          </p>
          <div className="mt-4 text-[#5d5d5d] text-[18px] sm:text-[20px] md:text-[18px] leading-[30px]">
            With our contract management integrations, your teams can create,
            view, approve and collaborate on contracts within the applications
            you use every day to accelerate contract flow and move your business
            forward.
          </div>
          <div className="flex justify-start mt-[20px]">
            <div className="common-button">Get a demo</div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="https://d2qb2qddg7l6c6.cloudfront.net/legitt-website-v5/assets/images/SalesForceHeroImage.png"
            alt="SalesforceHeroImage"
            className="w-[90%] object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}
