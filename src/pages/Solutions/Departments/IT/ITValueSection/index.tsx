import React from "react";

export default function ITValueSection() {
  return (
    <div className="mt-12 px-6 md:px-12">
      <div className="text-3xl md:text-5xl leading-snug md:leading-tight text-left font-bold mb-12 heading-2 module-heading loaded">
        <span className="headingunderline"> Strengthen</span> IT operations
        across the <br /> organization
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-12">
        <div className="bg-[#F8CDBE] text-white p-6 md:p-10 rounded-2xl md:rounded-[40px] flex flex-col justify-center items-start h-full">
          <div className="text-xl md:text-3xl font-bold text-black mt-4 md:mt-7 mb-4 md:mb-7">
            Centralize contracts and contract lifecycle management
          </div>
          <div className="text-sm md:text-base font-normal text-[#4d4d4d]">
            Remove bottlenecks, reduce fire drills, and help legal scale by
            centralizing access to contracts, automating workflows for faster,
            less risky transactions, and leveraging AI to track contract data in
            real time.
          </div>
        </div>
        <div className="flex flex-col gap-6 md:gap-10">
          <div className="flex-1 flex justify-center items-center bg-[#eff4f3] text-white rounded-2xl md:rounded-[40px]">
            <img
              src="https://d2qb2qddg7l6c6.cloudfront.net/legitt-website-v5/assets/images/CentralizeContracts.png"
              alt=""
              className="w-full rounded-2xl md:rounded-[40px]"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-12">
        <div className="bg-[#F8CDBE] text-white p-6 md:p-10 rounded-2xl md:rounded-[40px] flex flex-col justify-center items-start h-full">
          <div className="text-xl md:text-3xl font-bold text-black mt-4 md:mt-7 mb-4 md:mb-7">
            Adapt to changing regulations
          </div>
          <div className="text-sm md:text-base font-normal text-[#4d4d4d]">
            Automatically report on exact and semantically similar language for
            regulatory clauses. Create and update contract templates that comply
            with external regulations and internal policies. Analysis using
            AI-powered search and live dashboards.
          </div>
        </div>
        <div className="flex flex-col gap-6 md:gap-10">
          <div className="flex-1 flex justify-center items-center bg-[#eff4f3] text-white rounded-2xl md:rounded-[40px]">
            <img
              src="https://d2qb2qddg7l6c6.cloudfront.net/legitt-website-v5/assets/images/ChangingRegulations.png"
              alt=""
              className="w-full rounded-2xl md:rounded-[40px]"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-12">
        <div className="bg-[#F8CDBE] text-white p-6 md:p-10 rounded-2xl md:rounded-[40px] flex flex-col justify-center items-start h-full">
          <div className="text-xl md:text-3xl font-bold text-black mt-4 md:mt-7 mb-4 md:mb-7">
            Define and enforce standards with AI
          </div>
          <div className="text-sm md:text-base font-normal text-[#4d4d4d]">
            Effortlessly identify terms and clauses that deviate from preferred
            language, and build an intelligent clause library with approved
            language aligned with each contract type.
          </div>
        </div>
        <div className="flex flex-col gap-6 md:gap-10">
          <div className="flex-1 flex justify-center items-center bg-[#eff4f3] text-white rounded-2xl md:rounded-[40px]">
            <img
              src="https://d2qb2qddg7l6c6.cloudfront.net/legitt-website-v5/assets/images/EnforceStandards.png"
              alt=""
              className="w-full rounded-2xl md:rounded-[40px]"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-12">
        <div className="bg-[#F8CDBE] text-white p-6 md:p-10 rounded-2xl md:rounded-[40px] flex flex-col justify-center items-start h-full">
          <div className="text-xl md:text-3xl font-bold text-black mt-4 md:mt-7 mb-4 md:mb-7">
            Improve trust with business partners
          </div>
          <div className="text-sm md:text-base font-normal text-[#4d4d4d]">
            Make it easy for business stakeholders to work within existing
            systems by keeping existing file and folder structures. Tag,
            comment, and collaborate directly in the platform to keep everyone
            on the same page.
          </div>
        </div>
        <div className="flex flex-col gap-6 md:gap-10">
          <div className="flex-1 flex justify-center items-center bg-[#eff4f3] text-white rounded-2xl md:rounded-[40px]">
            <img
              src="https://d2qb2qddg7l6c6.cloudfront.net/legitt-website-v5/assets/images/BusinessPartners.png"
              alt=""
              className="w-full rounded-2xl md:rounded-[40px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
