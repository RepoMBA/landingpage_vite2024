import React from "react";
import NewHeader from "../../components/Header/NewHeader";
import Footer from "../../components/Footer/index";
import AccordianScroll from "./AccordianScroll";

export default function AboutUsContent() {
    return (
        <div>
            <NewHeader />
            <div className="px-[6%] mt-[50px]">
                <div className="text-[#4e4d4c] flex flex-col lg:flex-row lg:gap-[2px] justify-between items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-[28px] lg:text-[36px]"><b>About Us</b></h2>
                        <h1 className="text-[46px] lg:text-[56px]"><b>Transforming the way world handles contracts</b></h1>
                        <p>At Legitt AI, we revolutionize the way businesses manage their contracts through cutting-edge Assistive Intelligence technology. As the world's first Assistive Intelligence platform dedicated to Contract Lifecycle Management (CLM), we cater to the diverse needs of organizations, offering tailored solutions to both startups and enterprise clients.</p>
                    </div>
                    <div className="lg:w-1/2 flex justify-center">
                        <img src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/aboutusHero.svg" className="w-full lg:max-w-full" alt='AboutUsHero' />
                    </div>
                </div>

                <div className="text-[#4e4d4c] flex flex-col lg:flex-row lg:gap-[2px] justify-between items-center mt-[50px] mb-[50px]">
                    <div className="lg:w-1/2 flex items-center">
                        <img src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/missionIcon.svg" alt='missionIcon' />
                        <h1 className="text-[36px] lg:text-[48px] text-black"><b>Our Mission</b></h1>
                    </div>
                    <div className="lg:w-1/2">
                        <p>Our mission is to empower businesses with the tools they need to manage their contracts efficiently and effectively. We aim to provide a seamless and intuitive platform that simplifies the contract management process, enabling organizations to focus on their core business activities. By leveraging the power of Assistive Intelligence, we are committed to transforming the way businesses handle contracts, making the process smarter, faster, and more efficient.</p>
                    </div>
                </div>

                <div className="text-[#4e4d4c] flex flex-col flex-col-reverse lg:flex-row lg:gap-[2px] justify-between items-center mt-[50px] mb-[50px]">
                    <div className="lg:w-1/2 flex items-center text-[black]">
                        <p className="mb-0"> We envision a future where contract management is seamless, intuitive, and transformative. By harnessing the power of Assistive Intelligence, we aspire to set new standards in CLM, unlocking new possibilities and driving positive change in how businesses operate and thrive in the digital age.</p>
                    </div>
                    <div className="lg:w-1/2 flex justify-center">
                        <h1 className="mt-[50px] text-[36px] lg:text-[48px] text-black"><b>Vision</b></h1>
                        <img src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/visionIcon.svg" alt='visionIcon' />
                    </div>
                </div>

                <div className="text-[#4e4d4c] flex flex-col lg:flex-row lg:gap-[2px] justify-between items-center mt-[50px] mb-[50px]">
                    <div className="lg:w-1/2 flex items-center">
                        <img src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/technologyIcon.svg" alt='missionIcon' />
                        <h1 className="text-[36px] lg:text-[48px] text-black"><b>Technology</b></h1>
                    </div>
                    <div className="lg:w-1/2">
                        <p>At Legitt AI, we leverage state-of-the-art technology to deliver best-in-class contract management solutions. Our platform combines advanced machine learning algorithms, natural language processing (NLP), and predictive analytics to automate mundane tasks, extract valuable insights, and optimize contract workflows. With features such as smart contract generation, AI-powered contract review, and automated approval workflows, we empower organizations to streamline their contract processes and unlock new levels of efficiency and productivity.</p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-start mt-[50px] mb-[50px]">
                    <div className="w-full lg:w-auto">
                        <AccordianScroll />
                    </div>
                </div>

                <div className="flex flex-col  items-center text-xl text-center mt-8">
                    <h1 className="text-3xl lg:text-4xl font-bold mb-4">We Care About Your Business</h1>
                    <p className="mb-4 max-w-2xl">
                        Legitt AI is more than just a contract management platform—it's a catalyst for transformation, innovation, and success. With our forward-thinking approach, advanced technology, and unwavering commitment to excellence, we empower organizations to unlock new possibilities, drive sustainable growth, and shape a future where contract management is smarter, simpler, and more impactful than ever before. Join us on this journey to reimagine contract management and unleash the full potential of your business with Legitt AI.
                    </p>
                    <a href="https://legittai.com/demo"><button className="px-6 py-2 bg-[#9b0242] text-white rounded-lg">Schedule a Demo</button></a>
                </div>

                <Footer />
            </div>
        </div>
    );
}
