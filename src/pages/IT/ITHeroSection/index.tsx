import React from "react";

export default function ITHeroSection() {
  return (
    <div className="mt-[50px]">
      <div className="px-[4%] py-[4%] bg-[url('https://d2qb2qddg7l6c6.cloudfront.net/legitt-website-v5/assets/images/ITHeroImage.jpg')] bg-cover bg-center min-h-[70vh] flex items-center">
        <div className="w-full md:w-2/3 lg:w-1/2 bg-white bg-opacity-80 1200sm:bg-transparent p-6 rounded-lg">
          <h2 className="font-semibold text-[#000000]">IT</h2>
          <p className="mt-2 text-[28px] sm:text-[35px] md:text-[45px] font-bold tracking-tight leading-[35px] sm:leading-[40px] md:leading-[50px] text-[#000]">
            Improve security and compliance with trusted AI
          </p>

          <dl className="mt-[20px] max-w-xl space-y-5 text-base leading-7 text-[#000] lg:max-w-none">
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <img
                  src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/bullet-check.png"
                  alt="bullet-check"
                  className="absolute left-1 top-1 h-5 w-5 text-[#9B0343]"
                />
              </dt>
              <dd className="inline">
                Audit technology providers to ensure compliance with
                organizational policies
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
                Identify and fulfill contractual IT commitments
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
                Integrate AI-powered contract management software with existing
                technology and systems
              </dd>
            </div>
          </dl>
          <div className="flex justify-start mt-[20px]">
            <div className="common-button">Get a demo</div>
          </div>
        </div>
      </div>
    </div>
  );
}