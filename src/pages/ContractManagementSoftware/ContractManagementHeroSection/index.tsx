import React from "react";

export default function ContractManagementHeroSection() {
  return (
    <div>
      <div className="flex justify-between gap-[20px]  text-left 800sm:text-center 1200sm:text-left 1200sm:gap-0 flex-col 1200sm:flex-row flex-wrap justify-center items-center min-h-[calc(80vh-100px)]">
        <div className="w-full 1200sm:w-1/2">
          <div className="text-[16px]">Manage & Automate</div>
          <div className="text-[28px] 1200sm:text-[40px] leading-none font-semibold 1200sm:leading-[50px]">
            Connected contract data for enterprise operations at scale
          </div>
          <div className="text-[16px] text-[#4f4f4f] mt-[10px]">
            Empower teams to move quickly and confidently using AI-powered
            contract lifecycle management software that offers a single source
            of truth for connected contract data.
          </div>
          <div className=" mt-[10px] inline-flex items-center justify-center px-5 py-2 mr-3 text-base font-medium text-center text-[#fff] rounded-[4px] bg-[#9B0343]">
            Get a demo
          </div>
        </div>
        <div className="w-full 1200sm:w-1/2 flex justify-center 1200sm:justify-end">
          <img
            src="https://d2qb2qddg7l6c6.cloudfront.net/legitt-website-v5/assets/images/LegittProHeroImage.png"
            alt="Legitt Pro Hero"
            className="w-[500px] 1200sm:w-[70%] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
