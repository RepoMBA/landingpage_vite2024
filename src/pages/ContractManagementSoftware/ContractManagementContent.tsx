import React from "react";
import ContractManagementHeroSection from "./ContractManagementHeroSection/index.tsx";
import ContractManagementKeyHighlightSection from "./ContractManagementKeyHighlightSection/index.tsx";
import ContractManagmentFeaturesSection from "./ContractManagmentFeaturesSection/index.tsx";
import ContractManagementIntegrationSection from "./ContractManagementIntegrationSection/index.tsx";

export default function ContractManagementContent() {
  return (
    <div>
      <div className="mt-[100px] px-[6%] flex flex-col gap-[50px]">
        <ContractManagementHeroSection />
        <ContractManagementKeyHighlightSection />
        <ContractManagmentFeaturesSection />
        <ContractManagementIntegrationSection />
      </div>
    </div>
  );
}
