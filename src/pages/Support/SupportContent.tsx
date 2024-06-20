import React, { useState } from "react";
import NewHeader from "../../components/Header/NewHeader";
import Footer from "../../components/Footer/index";
import faqData from './faqData.json';

interface FAQ {
    Question: string;
    Answer: string;
}

const FAQItem: React.FC<{ faq: FAQ }> = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleFAQ = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="faq-item border rounded p-4 mb-4 shadow-sm">
            <h3 className="text-lg font-semibold cursor-pointer" onClick={toggleFAQ}>
                {faq.Question}
            </h3>
            {isOpen && <p className="mt-2">{faq.Answer}</p>}
        </div>
    );
};

const FAQContainer: React.FC = () => {
    return (
        <div className="faq-container mx-auto max-w-4xl p-6">
            {faqData.map((faq: FAQ, index: number) => (
                <FAQItem key={index} faq={faq} />
            ))}
        </div>
    );
};

const SupportContent: React.FC = () => {
    return (
        <div>
            <NewHeader />
            <div className="mt-16 font-mono px-4 lg:px-0"> {/* Padding adjusted for responsiveness */}
                <div className="text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4"><b>FAQs - Frequently Asked Questions</b></h1> {/* Adjusted text sizes */}
                    <p className="text-lg lg:text-xl">Here are the answers to some of the most frequently asked questions about our work.</p> {/* Adjusted text sizes */}
                </div>
                <FAQContainer />
            </div>
            <Footer />
        </div>
    );
};

export default SupportContent;
