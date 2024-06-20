import React, { useEffect, useRef, useState } from "react";

const AccordianScroll: React.FC = () => {
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

  return (
    <div className="stack-area rounded-xl" ref={stackAreaRef}>
      <div className="left">
        <div className="ai-left-part">
          <div className="Tracking-constant-text ai-first">
            <h2 className="common-heading-text">
              What makes Legitt AI the best of the lot?
            </h2>
          </div>
          <div className="accordion" id="accordionExample">
            {accordionItems.map((item, index) => (
              <div className="accordion-item" key={index}>
                <div
                  className="accordion-header"
                  id={`accordion-flush-heading-${index + 1}`}
                >
                  <button
                    type="button"
                    className="flex justify-between items-center w-full py-[1rem] px-[1.25rem]"
                    aria-expanded={activeIndex === index}
                    aria-controls={`accordion-flush-body-${index + 1}`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <h3 className="accordion-heading-text">{item.heading}</h3>

                    <svg
                      className={`w-3 h-3 ${activeIndex === index ? "rotate-[-90deg]" : "rotate-90"
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
                  className={`accordion-collapse py-[1rem] px-[1.25rem]  ${activeIndex === index ? "inherit" : "hidden"
                    }`}
                  aria-labelledby={`accordion-flush-heading-${index + 1}`}
                >
                  <div className="accordion-body">{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="right">
        <div className="ai-right-part">
          <div className="sticky top-0 h-full">
            <img
              src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/comp.png"
              className="w-full h-full object-cover"
              alt="Comp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const accordionItems = [
  {
    heading: "Innovation",
    body: "Legitt AI is at the forefront of innovation in contract management. Our platform is built on a foundation of continuous research, development, and refinement, ensuring that our clients always have access to the latest advancements and capabilities in CLM technology.",
  },
  {
    heading: "Reliability",
    body: "We understand the importance of reliability and consistency in contract management. That's why Legitt AI is designed with robust infrastructure, rigorous testing processes, and industry-leading security measures to ensure the integrity and confidentiality of our clients' data at all times.",
  },
  {
    heading: "Scalability",
    body: "Whether you're a startup or a Fortune 500 company, Legitt AI is built to scale with your business. Our flexible pricing plans and customizable solutions cater to organizations of all sizes and industries, providing the scalability and agility needed to adapt and grow in a rapidly changing business landscape.",
  },
  {
    heading: "User Experience",
    body: "At Legitt AI, we prioritize user experience above all else. Our platform features an intuitive interface, seamless navigation, and personalized dashboards, making it easy for users to access, manage, and collaborate on contracts from anywhere, at any time.",
  },
];

export default AccordianScroll;

<div className="w-1/2 sticky top-0 h-full items-center">
  <img
    src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/comp.png"
    className="w-full"
    alt="Comp"
  />
</div>