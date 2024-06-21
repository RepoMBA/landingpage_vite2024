import React from "react";
import NewHeader from "../../components/Header/NewHeader";
import Footer from "../../components/Footer/index";

export default function ErrorContent() {
    return (
        <div className="flex flex-col min-h-screen">
            <NewHeader />
            <div className="relative flex flex-col justify-center items-center flex-grow mt-8 md:mt-20">
                <div className="relative w-full max-w-[90%] md:max-w-[1100px]">
                    <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" className="w-full" />
                    <h1 className="absolute top-10 md:top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-[5vw] md:text-[98px] z-10 text-black">404</h1>
                </div>
                <div className="absolute bottom-0 w-full text-center pt-8 md:pb-8">
                    <h1 className="text-[5vw] md:text-[36px] mt-8">Looks like you're lost</h1>
                    <h2 className="text-sm md:text-base mb-3">The page you are looking for is not available!</h2>
                    <button className="rounded-md px-4 py-2 bg-[#9b0242] text-white">
                        <a href="https://legittai.com/">Go to Home</a>
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}
