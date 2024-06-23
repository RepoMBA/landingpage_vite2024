import React from "react";

export default function WhyLeadGenSection() {
  return (
    <div className="mt-8 px-4 sm:px-6 lg:px-[12%]">
      <div className="text-3xl sm:text-4xl lg:text-5xl text-center lg:text-left font-bold mb-8 sm:mb-10 heading-2 module-heading loaded">
        Why Legitt
        <span className="headingunderline">Lead Gen?</span>
      </div>
      {/* First Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8 mb-8 sm:mb-12">
        <div className="bg-[#f0f0ec] text-[#4d4d4d] p-6 lg:p-10 rounded-xl flex flex-col justify-center items-start">
          <span className="text-lg font-normal text-[#000]">1 — 4</span>

          <div className="text-xl sm:text-2xl font-bold text-black mt-4 lg:mt-6 mb-4 lg:mb-6">
            Get close
          </div>

          <div className="text-base font-normal">
            Your customers have questions before they buy. Be where they are,
            when they need you, so they have the confidence they need to choose
            you over the competition. Every time.
          </div>
        </div>
        <div className="flex justify-center items-center bg-[#eff4f3] rounded-xl overflow-hidden">
          <img
            src="https://d2qb2qddg7l6c6.cloudfront.net/legitt-website-v5/assets/images/LegittAIApiImage.png"
            alt=""
            className="w-full h-auto"
          />
        </div>
      </div>
      {/* Second Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8 mb-8 sm:mb-12">
        <div className="bg-[#f0f0ec] text-[#4d4d4d] p-6 lg:p-10 rounded-xl flex flex-col justify-center items-start">
          <span className="text-lg font-normal text-[#000]">2 — 4</span>

          <div className="text-xl sm:text-2xl font-bold text-black mt-4 lg:mt-6 mb-4 lg:mb-6">
            Get organized
          </div>

          <div className="text-base font-normal">
            With customer data siloed across so many tools, it’s hard to get a
            top-down view of the customer journey. Not anymore. You now have one
            place for all your customer interactions.
          </div>
        </div>
        <div className="flex justify-center items-center bg-[#eff4f3] rounded-xl overflow-hidden">
          <img
            src="https://d2qb2qddg7l6c6.cloudfront.net/legitt-website-v5/assets/images/QuickAIImage.png"
            alt=""
            className="w-full h-auto"
          />
        </div>
      </div>
      {/* Third Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8 mb-8 sm:mb-12">
        <div className="bg-[#f0f0ec] text-[#4d4d4d] p-6 lg:p-10 rounded-xl flex flex-col justify-center items-start">
          <span className="text-lg font-normal text-[#000]">3 — 4</span>

          <div className="text-xl sm:text-2xl font-bold text-black mt-4 lg:mt-6 mb-4 lg:mb-6">
            Boost your conversion rate
          </div>

          <div className="text-base font-normal">
            Easily identify FAQs and capture help center searches to create
            articles and shortcuts, so agents can respond faster, and customers
            can get help without having to make contact.
          </div>
        </div>
        <div className="flex justify-center items-center bg-[#eff4f3] rounded-xl overflow-hidden">
          <img
            src="https://d2qb2qddg7l6c6.cloudfront.net/legitt-website-v5/assets/images/BreachNoticeApiImage.png"
            alt=""
            className="w-full h-auto"
          />
        </div>
      </div>
      {/* Fourth Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8 mb-8 sm:mb-12">
        <div className="bg-[#f0f0ec] text-[#4d4d4d] p-6 lg:p-10 rounded-xl flex flex-col justify-center items-start">
          <span className="text-lg font-normal text-[#000]">4 — 4</span>

          <div className="text-xl sm:text-2xl font-bold text-black mt-4 lg:mt-6 mb-4 lg:mb-6">
            Streamline operations and accelerate CLM efficiency
          </div>

          <div className="text-base font-normal">
            Speed contract approvals and cycle times for sales and vendor
            contracts alike to do business faster and reduce time-related risk
            in enterprise operations.
          </div>
        </div>
        <div className="flex justify-center items-center bg-[#eff4f3] rounded-xl overflow-hidden">
          <img
            src="https://d2qb2qddg7l6c6.cloudfront.net/legitt-website-v5/assets/images/DataProcessingAgreementImage.png"
            alt=""
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
