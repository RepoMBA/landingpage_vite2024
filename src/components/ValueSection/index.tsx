import React, { useEffect, useState } from "react";
const ValueSection: React.FC = () => {
  const [customizeSlideIndex, setCustomizeSlideIndex] = useState(0);

  const customizeSlides = [
    {
      title: "Automation & Intelligence",
      description: `Legitt AI combines automation and intelligence to revolutionize contract management. Automate repetitive tasks like drafting and tracking while leveraging AI for smart contract analysis. Gain insights, ensure compliance, and streamline workflows effortlessly, empowering businesses to manage contracts with precision and efficiency.`,
      imageUrl:
        "https://d2qb2qddg7l6c6.cloudfront.net/legitt-website-v5/assets/images/AutomationLegittPro.jpg",
    },
    {
      title: "Scalability & Security",
      description: `Legitt AI ensures robust security measures, including ISO 27001 certification and SOC 2 Type 2 compliance, safeguarding sensitive data and ensuring regulatory adherence. With scalable infrastructure, it accommodates diverse workloads, enabling seamless expansion and adaptation to evolving business needs.`,
      imageUrl:
        "https://d2qb2qddg7l6c6.cloudfront.net/legitt-website-v5/assets/images/ReviewLegittPro.jpg",
    },
    {
      title: "Review & Risk Analysis",
      description: `Leveraging advanced algorithms, Legitt AI conducts thorough review and analysis of contracts. It identifies inconsistencies, mitigates risks, and ensures compliance with legal standards. With its intuitive interface and AI-powered insights, Legitt AI enhances efficiency and accuracy in contract management processes.`,
      imageUrl:
        "https://d2qb2qddg7l6c6.cloudfront.net/legitt-website-v5/assets/images/ScalabilityLegittPro.jpg",
    },
    {
      title: "Robust Integrations",
      description: `Legitt AI offers robust integrations with popular business tools and platforms, ensuring seamless connectivity across your ecosystem. Streamline workflows, enhance collaboration, and maximize productivity by effortlessly integrating Legitt AI into your existing infrastructure, optimizing contract management processes.`,
      imageUrl:
        "https://d2qb2qddg7l6c6.cloudfront.net/legitt-website-v5/assets/images/IntegrationLegittPro.jpg",
    },
  ];

  const handleNext = () => {
    setCustomizeSlideIndex(
      (prevIndex) => (prevIndex + 1) % customizeSlides.length
    );
  };

  const handlePrev = () => {
    setCustomizeSlideIndex(
      (prevIndex) =>
        (prevIndex - 1 + customizeSlides.length) % customizeSlides.length
    );
  };

  const showCard = (index: number) => {
    setCustomizeSlideIndex(index);
  };

  useEffect(() => {
    highlightActiveButton();
  }, [customizeSlideIndex]);

  const highlightActiveButton = () => {
    const buttons = document.querySelectorAll<HTMLButtonElement>(
      ".active-card-button"
    );
    buttons.forEach((button) => {
      button.style.borderTopWidth = "2px";
      button.style.borderTopColor = "";
    });
    if (buttons[customizeSlideIndex]) {
      buttons[customizeSlideIndex].style.borderTopWidth = "4px";
      buttons[customizeSlideIndex].style.borderTopColor =
        buttons[customizeSlideIndex].getAttribute("data-color") || "";
    }
  };

  return (
    <div className="px-[4%]">
      <div className="my-8 px-[5%]">
        <div>
          <span className="text-4xl font-bold">Legitt AI Pro</span>
        </div>
        <div className="text-lg mt-4 text-gray-600">
          The most comprehensive solution for managing contracts at scale.
        </div>
      </div>
      <div>
        <div>
          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${customizeSlideIndex * 100}%)`,
              }}
            >
              {customizeSlides.map((slide, index) => (
                <div className="flex-none w-full" key={index}>
                  <div className="text-2xl font-bold mt-5 ml-4 mb-5 hidden">
                    {slide.title}
                  </div>
                  <div className="flex gap-[20px]">
                    <div
                      className={`text-white w-[65%] rounded-[20px] min-h-[350px] flex ml-[70px]  gap-[20px] px-[40px] py-[20px] flex-col justify-center  ${
                        index === 0
                          ? "bg-blue-600"
                          : index === 1
                          ? "bg-red-400"
                          : index === 2
                          ? "bg-yellow-300 text-black"
                          : "bg-pink-300 text-black"
                      }`}
                    >
                      <div className="text-3xl">
                        <img
                          src="https://assets-global.website-files.com/63355c7f6c38375bc02dae6c/6346d19d3cbfc87fc4f38255_quote-light.svg"
                          alt="quote"
                          className={`quote-icon ${
                            index === 2 ? "yellow" : ""
                          }`}
                        />
                      </div>
                      <div className="text-lg mt-3">{slide.description}</div>
                    </div>
                    <div className="mr-16 w-[35%]">
                      <img
                        src={slide.imageUrl}
                        alt="image"
                        className="rounded-[20px] h-[370px] object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="absolute bg-black bg-opacity-60 text-white rounded left-0 top-1/2 transform -translate-y-1/2 px-4 py-2"
              onClick={handlePrev}
            >
              &#10094;
            </button>
            <button
              className="absolute bg-black bg-opacity-60 text-white rounded right-0 top-1/2 transform -translate-y-1/2 px-4 py-2"
              onClick={handleNext}
            >
              &#10095;
            </button>
          </div>
          <div className="active-card-buttons-container flex justify-center items-center mt-7">
            {customizeSlides.map((slide, index) => (
              <button
                key={index}
                className={`bg-transparent active-card-button text-base font-[500] mx-2 px-4 py-2 border-t-2 border-gray-600 outline-none min-w-[200px] ${
                  index === 0
                    ? "border-t-blue-600"
                    : index === 1
                    ? "border-t-red-400"
                    : index === 2
                    ? "border-t-yellow-300 text-black"
                    : "border-t-pink-300 text-black"
                }`}
                onClick={() => showCard(index)}
                data-color={getColor(index)}
              >
                {slide.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  function getColor(index: number): string {
    const colors = ["#518CE4", "#FF836D", "#FFD166", "#F6C3B1"];
    return colors[index];
  }
};

export default ValueSection;
