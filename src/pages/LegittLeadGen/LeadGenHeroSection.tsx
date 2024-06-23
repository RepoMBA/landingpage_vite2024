import React from "react";
import LegittChatDashboard from "../../assets/images/ChatBotImage.webp";

export default function LeadGenHeroSection() {
  return (
    <div>
      <section className="relative pt-[100px] mt-[50px]">
        <div className="mx-auto md:px-10 max-w-7xl">
          <div className="mb-10 px-5 max-w-3xl mx-auto text-center">
            <div className="text-3xl text-center sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 heading-2 module-heading loaded">
              Connect with your customers, they'll{" "}
              <span className="headingunderline">appreciate it.</span>
            </div>
            <p className="mx-auto mb-5 max-w-[528px] text-base md:text-lg text-[#636262]">
              Chat with website visitors, manage support tickets, organize
              contacts, and create a self-service Help Center.
            </p>

            <div className="flex justify-center gap-4">
              <a href="#" className="button-outline">
                Get Demo
              </a>
              <a href="#" className="common-button">
                Buy Now
              </a>
            </div>
          </div>

          <div className="flex justify-center gap-8">
            <ul className="flex justify-center gap-2.5 text-[#545454] text-sm font-semibold">
              <li className="flex items-center gap-2.5">
                <img
                  src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/bullet-check.png"
                  className="w-4"
                />
                Live Chat
              </li>
              <li className="flex items-center gap-2.5">
                <img
                  src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/bullet-check.png"
                  className="w-4"
                />
                Easy set-up
              </li>
              <li className="flex items-center gap-2.5">
                <img
                  src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/bullet-check.png"
                  className="w-4"
                />
                Chat Pages
              </li>
              <li className="flex items-center gap-2.5">
                <img
                  src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/bullet-check.png"
                  className="w-4"
                />
                Secure
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center rounded-[40px] px-[20px] pt-[20px] mx-[4%] mt-8 min-w-[100vh] bg-[#F6F6F6]">
          <img
            src={LegittChatDashboard}
            className="max-w-[900px] h-auto"
            alt="Chat Dashboard"
          />
        </div>
      </section>
    </div>
  );
}
