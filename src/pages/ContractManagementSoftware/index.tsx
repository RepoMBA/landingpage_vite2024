import React from "react";
import { Helmet } from "react-helmet";
import ContractManagementContent from "./ContractManagementContent";
export default function LegittPro() {
  return (
    <div>
      <Helmet>
        <title>Contract Management Software</title>
        <meta
          name="description"
          content="This page provides information about our website."
        />
      </Helmet>
      <ContractManagementContent />
    </div>
  );
}
