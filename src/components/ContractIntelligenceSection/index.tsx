import React, { useEffect, useRef, useState } from "react";
import "../../assets/css/common.css";

const ContractIntelligence: React.FC = () => {
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
    const aiCards = document.querySelectorAll(".card");
    const stackArea = stackAreaRef.current;

    const rotateCards = () => {
      let angle = 0;
      aiCards.forEach((card) => {
        if (card.classList.contains("active")) {
          (
            card as HTMLElement
          ).style.transform = `translate(-50%, -120vh) rotate(-48deg)`;
        } else {
          (
            card as HTMLElement
          ).style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
          angle -= 10;
        }
      });
    };

    const handleScroll = () => {
      if (stackArea) {
        const proportion =
          stackArea.getBoundingClientRect().top / window.innerHeight;
        const n = aiCards.length;
        let index = Math.ceil((proportion * n) / 2);
        index = Math.abs(index) - 1;

        for (let i = 0; i < n; i++) {
          if (i <= index) {
            aiCards[i].classList.add("active");
          } else {
            aiCards[i].classList.remove("active");
          }
        }
        rotateCards();

        const pendingCardsCount =
          document.querySelectorAll(".card:not(.active)").length;
        const accordionToOpen = 4 - pendingCardsCount;
        setActiveIndex(accordionToOpen);
      }
    };

    rotateCards();

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
    <div className="stack-area" ref={stackAreaRef}>
      <div className="left">
        <div className="ai-left-part">
          <div className="Tracking-constant-text ai-first">
            <h2 className="common-heading-text">
              AI-Powered Contract Intelligence
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
                  className={`accordion-collapse py-[1rem] px-[1.25rem]  ${
                    activeIndex === index ? "inherit" : "hidden"
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
          <div className="aiCards">
            {cards.map((card, index) => (
              <Card key={index} sub={card.sub} content={card.content} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Card: React.FC<{ sub: string; content: string }> = ({ sub, content }) => (
  <div className="card">
    <div className="sub">{sub}</div>
    <div className="content">{content}</div>
  </div>
);

const accordionItems = [
  {
    heading: "AI Contract Generator",
    body: "The AI contract generator is a cutting-edge tool powered by artificial intelligence (AI) algorithms. It automates the process of creating legally-binding contracts by analyzing input data, generating customized contract templates, and ensuring compliance with relevant legal standards. This innovative solution streamlines contract creation, saving time and minimizing errors for users.",
  },
  {
    heading: "AI Contract Review",
    body: "The AI Contract Reviewer utilizes advanced artificial intelligence (AI) algorithms to analyze and assess legal contracts efficiently. It scans documents for inconsistencies, errors, and potential risks, providing users with detailed insights and recommendations for amendments. This AI-powered tool enhances contract review processes, ensuring accuracy and compliance with legal standards.",
  },
  {
    heading: "AI Repo Analyzer",
    body: "The AI Repo Analyzer systematically examines entire contract repositories, leveraging advanced algorithms to review, track, and manage contracts at scale. Tailored for enterprise clients, it enhances contract management processes by identifying key insights, mitigating risks, and facilitating efficient decision-making across large volumes of contracts.",
  },
  {
    heading: "AI Contract Tracking",
    body: "AI Contract Tracking harnesses advanced algorithms to monitor and manage contract lifecycles efficiently. It automates the tracking process, providing real-time updates on contract status, milestones, and key deadlines. This AI-powered solution enhances visibility, streamlines workflow management, and ensures compliance with contractual obligations across diverse portfolios.",
  },
];

const cards = [
  {
    sub: "AI Contract Generator",
    content: "Draft Contracts In Seconds",
  },
  {
    sub: "AI Contract Review",
    content: "Extract Critical Insights Automatically",
  },
  {
    sub: "AI Repo Analyzer",
    content: "Contract Intelligence at Scale",
  },
  {
    sub: "Workflow Automation",
    content: "Automate Contract Tracking and Renewals",
  },
];

export default ContractIntelligence;
