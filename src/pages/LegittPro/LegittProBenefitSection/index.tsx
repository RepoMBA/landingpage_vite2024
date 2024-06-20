import React from "react";
import BeniefitAccordianScroll from "./BeniefitAccordianScroll";

export default function LegittLiteBenefitSection() {
  return (
    <div>
      <div className="flex justify-between items-start w-full mt-[50px] mb-[50px]">
        <div className="w-full">
          <BeniefitAccordianScroll />
        </div>
      </div>
    </div>
  );
}
