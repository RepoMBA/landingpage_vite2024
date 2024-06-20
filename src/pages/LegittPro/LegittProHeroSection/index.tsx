import React from "react";
import LegittProHeroImage from "../../../assets/images/LegittProHeroImage.png";

export default function LegittProHeroSection() {
  return (
    <div>
      <div>
        <div className="mt-[50px] flex flex-col gap-[50px]">
          <div className="bg-[#FFF9F0] rounded-2xl flex gap-[20px] justify-center items-center flex-col-reverse 1200sm:flex-row  justify-between min-h-[85vh] py-[20px] px-[20px] 1200sm:py-[10px] 1200sm:px-[12%]">
            <div className="w-full 1200sm:w-1/2 flex flex-col justify-center items-end">
              <div>
                <h2 className="font-semibold text-[#000000]">Enterprise CLM</h2>
                <p className="mt-2 text-[45px] font-bold tracking-tight text-gray-900">
                  Connect contract data across CLM
                </p>
                <p className="text-lg leading-8 text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
                <dl className="mt-[20px] max-w-xl space-y-5 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <img
                        src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/bullet-check.png"
                        alt="bullet-check"
                        className="absolute left-1 top-1 h-5 w-5 text-[#9B0343]"
                      />
                    </dt>
                    <dd className="inline">
                      Connect contract workflows with existing systems and
                      stakeholder approval processes
                    </dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <img
                        src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/bullet-check.png"
                        alt="bullet-check"
                        className="absolute left-1 top-1 h-5 w-5 text-[#9B0343]"
                      />
                    </dt>
                    <dd className="inline">
                      Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                      irure qui lorem cupidatat commodo.
                    </dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <img
                        src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/bullet-check.png"
                        alt="bullet-check"
                        className="absolute left-1 top-1 h-5 w-5 text-[#9B0343]"
                      />
                    </dt>
                    <dd className="inline">
                      Ac tincidunt sapien vehicula erat auctor pellentesque
                      rhoncus. Et magna sit morbi lobortis.
                    </dd>
                  </div>
                </dl>
                <div className="flex justify-start mt-[20px]">
                  <div className="common-button">Get a demo</div>
                </div>
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
