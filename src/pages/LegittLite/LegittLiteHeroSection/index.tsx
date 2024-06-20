import React from "react";
import LegittProHeroImage from "../../../assets/images/LegittProHeroImage.png";

export default function LegittLiteHeroSection() {
  return (
    <div>
      <div>
        <div className="mt-[50px] flex flex-col gap-[50px]">
          <div className="bg-[#FFF9F0] rounded-2xl flex gap-[20px] justify-center items-center flex-col-reverse 1200sm:flex-row  justify-between min-h-[85vh] py-[20px] px-[20px] 1200sm:py-[10px] 1200sm:px-[12%]">
            <div className="w-full 1200sm:w-1/2 flex flex-col justify-center items-end">
              <div>
                <h2 className="font-semibold text-[#000000]">
                  For Small Teams
                </h2>
                <p className="mt-2 text-[45px] font-bold leading-[55px] text-gray-900">
                  Contract Lifecycle Management Tool For Small Teams
                </p>

                <p className="text-lg leading-7 text-gray-600 mb-3">
                  Legitt AI Lite offers a streamlined contract lifecycle
                  management solution tailored for startups, small teams,
                  freelancers, and SMBs. Simplify contract creation, signing,
                  management, and tracking with minimal human effort, empowering
                  teams to achieve more with ease and efficiency.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-2 mr-3 text-base font-medium text-center text-[#fff] rounded-[4px] bg-[#9B0343]"
                >
                  Get started
                  <svg
                    className="w-[15px] h-[15px] ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-2 text-base font-medium text-center text-[#9B0343] rounded-[4px]"
                >
                  Get a demo
                </a>
              </div>
            </div>
            <div className="w-full 1200sm:w-1/2 flex justify-center">
              <img
                src="https://d2qb2qddg7l6c6.cloudfront.net/legitt-website-v5/assets/images/LegittProKeyHighlightImage.jpg"
                alt="Legitt Pro Key Highlight"
                className="w-[500px] 1200sm:w-[70%] object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
