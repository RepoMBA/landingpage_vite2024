import React from "react";

export default function LegittExperienceWithMicrosoftDynamics() {
  return (
    <div className="px-[4%]">
      <section className="bg-[#F0F0EC] rounded-[20px] py-8 px-4 lg:py-16 lg:px-12 mb-[50px]">
        <div className="text-center">
          <a
            href="#"
            className="inline-flex justify-between items-center py-1 px-4 mb-7 text-sm text-gray-700 bg-white rounded-full"
            role="alert"
          >
            <span className="text-sm font-medium">
              The Legitt AI Experience
            </span>
          </a>
          <h1 className="mb-4 text-4xl font-semibold tracking-tight leading-none text-gray-900 md:text-[36px] lg:text-5xl lg:mb-6">
            For Microsoft Dynamics
          </h1>
          <p className="mb-8 text-lg font-normal text-[#000] lg:text-[18px] sm:px-16 xl:px-48">
            If your Microsoft Dynamics implementation isn’t integrated with a
            robust contract management platform, you aren’t taking full
            advantage of the benefits offered by either system.
          </p>
          <p className="mb-8 text-lg font-normal text-[#000] lg:text-[18px] sm:px-16 xl:px-48">
            With Legitt AI Experience for Microsoft Dynamics, your sales team
            can create, view, approve and collaborate on contracts within
            Microsoft Dynamics to provide a seamless lead-to-contract process
            without imposing additional administrative burdens on the sales
            user.
          </p>
        </div>
      </section>

      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-[20px]">
          <div className="w-full lg:w-[40%]">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-4xl lg:leading-tight">
              How It
              <span className="text-[#9B0242]"> Works</span>
            </h1>
            <p className="mt-3 text-lg text-gray-800">
              The ICI Experience for Microsoft Dynamics utilizes the Icertis
              Contract Intelligence Lightning Ready Microsoft Dynamics app
              available on the Microsoft Dynamics AppExchange.
            </p>
          </div>

          <div className="w-full lg:w-[60%] flex justify-center">
            <div>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                This app allows Microsoft Dynamics <br /> customers and users to
                access the Legitt AI platform’s functionality from within
                Microsoft Dynamics to:
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {[
                  "Create and process self-service contracts from within accounts, opportunities or quote screens.",
                  "Make use of structured forms to speed contract creation.",
                  "Enable contract management functionality across a variety of use cases.",
                  "Stay up-to-date with chatter notifications on contract milestones.",
                  "Leverage a rules-driven engine to govern contract authoring, workflow, and approvals.",
                ].map((text, index) => (
                  <div key={index} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <img
                        src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/bullet-check.png"
                        alt="bullet-check"
                        className="absolute left-1 top-1 h-5 w-5"
                      />
                    </dt>
                    <dd className="inline">{text}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-[20px]">
          <div className="w-full lg:w-[40%]">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-4xl lg:leading-tight">
              Key Benefits
            </h1>
            <p className="mt-3 text-lg text-gray-800">
              Leverage a familiar interface to improve the salesperson’s
              adoption of a standardized contract process.
            </p>
          </div>

          <div className="w-full lg:w-[60%] flex justify-center">
            <div>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {[
                  "Reduce lead to contracting cycle time by more than 60%.",
                  "Enforce downstream compliance and reporting by capturing commercial terms in a structured form.",
                  "Improve contract quality, reduce rework and improve customer satisfaction.",
                  "Gain oversight over the sales and contract management workflow with proactive visibility.",
                  "Leverage an intelligent rules engine to ensure compliance and mitigate risks.",
                ].map((text, index) => (
                  <div key={index} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <img
                        src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/bullet-check.png"
                        alt="bullet-check"
                        className="absolute left-1 top-1 h-5 w-5"
                      />
                    </dt>
                    <dd className="inline">{text}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

      <section className="py-24 bg-gray-50 mt-[100px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="w-full lg:w-1/2">
              <p className="text-lg text-gray-500 mb-[15px] text-center lg:text-left">
                Icertis Contract Intelligence
              </p>
              <h2 className="font-manrope text-3xl text-gray-900 font-bold mb-7 text-center lg:text-left">
                Standardize, streamline, and automate every contract –
                everywhere
              </h2>
              <button className="cursor-pointer py-2 px-5 bg-[#9B0242] text-white text-base font-medium transition-all duration-500 block text-center rounded-[4px] mx-auto lg:mx-0">
                Get a demo
              </button>
            </div>
            <div className="w-full lg:w-1/2 lg:mt-0 mt-16 md:mt-40 max-lg:max-w-2xl">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                {[
                  "https://pagedone.io/asset/uploads/1696238644.png",
                  "https://pagedone.io/asset/uploads/1696238665.png",
                  "https://pagedone.io/asset/uploads/1696238684.png",
                  "https://pagedone.io/asset/uploads/1696238702.png",
                  "https://pagedone.io/asset/uploads/1696238720.png",
                  "https://pagedone.io/asset/uploads/1696238737.png",
                ].map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Team tailwind section ${index}`}
                    className="w-44 h-56 rounded-2xl object-cover mx-auto"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
