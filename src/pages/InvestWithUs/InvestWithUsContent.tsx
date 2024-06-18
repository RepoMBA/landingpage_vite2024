import React, {useState} from "react";
import NewHeader from "../../components/Header/NewHeader";
import Footer from "../../components/Footer/index";

export default function InvestWithUsContent() {
    return(
        <div>
            <NewHeader/>
            <div className="px-[6%] mt-[50px]">
            <div className="text-[#4e4d4c] flex gap-[2px] justify-between items-center">
                <div className="text-[black] w-1/2">
                    <h1 className="text-[46px]"><b>Invest with Confidence with Legitt</b></h1>
                    <p>Legitt - Programmable Business Agreements that Manage Themselves. World's first Assisted Business Documents life cycle management with minimal human intervention. Leverage the power of Open AI and Blockchain.</p>
                </div>
                <div className="w-1/2 flex justify-end">
                    <img src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/investus.jpg"  className="w-full" alt='AboutUsHero'/>
                </div>
            </div>
            </div>
        </div>
    )
}