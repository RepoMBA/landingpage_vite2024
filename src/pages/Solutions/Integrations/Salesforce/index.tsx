import React from "react";

import { Helmet } from "react-helmet";
import NewHeader from "../../../../components/Header/NewHeader";

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
      <NewHeader />
    </div>
  );
}
