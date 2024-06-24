import React from "react";
import CustomersSection from "../../../components/CustomersSection";
import ScheduleDemo from "./DemoForm";


export default function DemoContent() {
    return (
        <div className="mt-[100px]">
            <div className="flex mx-[80px] rounded-lg">
                <div className="w-1/2">
                    <h1 className="font-bold text-[48px]  rounded-lg">Talk to our experts</h1>
                    <p className="text-[20px] text-gray-700 font-bold">Schedule a personalized consultation</p>
                    <p className="text-[16px] text-gray-600">Explore how to use our contract lifecycle management tools and solutions. How this AI based contract management software aligns with your business needs. Take a guided walk through of contract management system and find how to gain insights tailored to your specific goals and challenges.</p>
                    <ul>
                        <li className="mt-[14px]">Customized Solutions for Your Business</li>
                        <li className="mt-[14px]">Tailored Product Walkthrough for Your Business</li>
                        <li className="mt-[14px]">Expert Consultation for Your Business Needs and Challenges</li>
                    </ul>
                    <div className="flex gap-[100px] items-center mt-[20px]">
                        <img src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/iso.webp" alt="iso" className="w-[70px] h-[70px]" />
                        <img src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/gdpr.webp" alt="iso" className="w-auto h-[50px]" />
                        <img src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/SOC.webp" alt="iso" className="w-auto h-[70px]" />
                        <img src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/ba.webp" alt="iso" className="w-auto h-[30px]" />
                    </div>
                </div>
                <div>
                    <ScheduleDemo/>
                </div>
            </div>
            <CustomersSection/>
        </div>
    )
}