import React, { useEffect, useRef, useState } from "react";

const BeniefitAccordianScroll: React.FC = () => {
  const stackAreaRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleResize = () => {
    const windowWidth = window.innerWidth;
    const left = document.querySelector(".left");
    const stackArea = document.querySelector(".stack-area");

    if (left && stackArea) {
      if (windowWidth < 800) {
        stackArea.insertAdjacentElement("beforebegin", left);
      } else {
        stackArea.insertAdjacentElement("afterbegin", left);
      }
    }
  };

  useEffect(() => {
    if (window.innerWidth < 1127) {
      return;
    }
    const stackArea = stackAreaRef.current;

    const handleScroll = () => {
      if (stackArea) {
        const proportion =
          stackArea.getBoundingClientRect().top / window.innerHeight;
        const n = accordionItems.length;
        let index = Math.ceil((proportion * n) / 2);
        index = Math.abs(index) - 1;

        setActiveIndex(index);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const images = [
    "https://d2qb2qddg7l6c6.cloudfront.net/legitt-website-v5/assets/images/LegittAIApiImage.png",
    "https://d2qb2qddg7l6c6.cloudfront.net/legitt-website-v5/assets/images/QuickAIImage.png",
    "https://d2qb2qddg7l6c6.cloudfront.net/legitt-website-v5/assets/images/BreachNoticeApiImage.png",
    "https://d2qb2qddg7l6c6.cloudfront.net/legitt-website-v5/assets/images/DataProcessingAgreementImage.png",
  ];

  return (
    <div className="stack-area" ref={stackAreaRef}>
      <div className="left">
        <div className="text-center font-semibold text-3xl w-full">
          How can your team benefit from Legitt AI Pro?
        </div>
        <div className="ai-left-part h-[35vh] bg-transparent">
          <div className="accordion" id="accordionExample">
            {accordionItems.map((item, index) => (
              <div className="accordion-item" key={index}>
                <div
                  className="accordion-header"
                  id={`accordion-flush-heading-${index + 1}`}
                >
                  <button
                    type="button"
                    className={`flex justify-between items-center w-full py-[1rem] px-[1.25rem] ${
                      activeIndex === index
                        ? "bg-[#FFF9F0] border-t-[10px] border-[#FF836D]"
                        : ""
                    }`}
                    aria-expanded={activeIndex === index}
                    aria-controls={`accordion-flush-body-${index + 1}`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <h3
                      className={`accordion-heading-text ${
                        activeIndex === index ? "text-[#000]" : ""
                      }`}
                    >
                      {item.heading}
                    </h3>

                    <svg
                      className={`w-3 h-3 ${
                        activeIndex === index ? "rotate-[-90deg]" : "rotate-90"
                      } transition-transform`}
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      fill="#000000"
                      height="15px"
                      width="15px"
                      version="1.1"
                      id="Layer_1"
                      viewBox="0 0 330 330"
                      xmlSpace="preserve"
                    >
                      <path
                        id="XMLID_222_"
                        d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213  C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  C255,161.018,253.42,157.202,250.606,154.389z"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  id={`accordion-flush-body-${index + 1}`}
                  className={`accordion-collapse py-[1rem] px-[1.25rem] ${
                    activeIndex === index ? "bg-[#FFF9F0]" : "hidden"
                  }`}
                  aria-labelledby={`accordion-flush-heading-${index + 1}`}
                >
                  <div className="accordion-body">
                    {item.body}
                    <div className="learn-more flex items-center mt-4">
                      <span className="mr-2 text-[14px] cursor-pointer">
                        Learn More
                      </span>
                      <svg
                        className="w-4 h-4 animate-bounce"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h14M12 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="right">
        <div className="ai-right-part h-[30vh] bg-transparent flex justify-center items-center">
          <img src={images[activeIndex ?? 0]} alt="" className="w-[100%]" />
        </div>
      </div>
    </div>
  );
};
const accordionItems = [
  {
    heading: "Legal",
    body: "Elevate legal’s strategic business impact with connected contract data.",
  },
  {
    heading: "Procurement",
    body: "Enrich visibility into supplier obligations and compliance.",
  },
  {
    heading: "Finance",
    body: "Report on cash-impacting obligations and streamline revenue recognition.",
  },
  {
    heading: "Operations",
    body: "Streamline legal and business operations to surface actionable insights.",
  },
];

export default BeniefitAccordianScroll;
