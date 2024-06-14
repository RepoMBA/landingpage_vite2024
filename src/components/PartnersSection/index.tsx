import React from "react";

export default function PartnersSection() {
  return (
    <div>
      <section className="bg-[#fff] mt-[10px]">
        <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
          <h2 className="text-3xl font-bold tracking-tight leading-tight text-center text-gray-900 md:text-4xl">
            Partners
          </h2>
          <p className="max-w-2xl mx-auto text-[16px] leading-8 text-center text-gray-600 mb-8 lg:mb-8 ">
            We are proud to partner with the best in the industry
          </p>
          <div className="flex justify-between items-center flex-wrap">
            <a className="flex justify-center items-center w-[200px] h-[100px] px-4 py-2 shadow-md rounded-lg">
              <img
                src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/g2_crowd.png"
                alt="G2 Crowd"
                className="w-[60px]"
              />
            </a>
            <a className="flex justify-center items-center w-[200px] h-[100px] px-4 py-2 shadow-md rounded-lg">
              <img
                src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/polygon.svg"
                alt="Polygon"
                className="w-[140px]"
              />
            </a>
            <a className="flex justify-center items-center w-[200px] h-[100px] px-4 py-2 shadow-md rounded-lg">
              <img
                src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/gartner.png"
                alt="Gartner"
                className="w-[140px]"
              />
            </a>

            <a className="flex justify-center items-center w-[200px] h-[100px] px-4 py-2 shadow-md rounded-lg">
              <img
                src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/icons/aws.svg"
                alt="AWS"
                className="w-[80px]"
              />
            </a>
            <a className="flex justify-center items-center w-[200px] h-[100px] px-4 py-2 shadow-md rounded-lg">
              <img
                src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/microsoft.svg"
                alt="Microsoft"
                className="w-[140px]"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
