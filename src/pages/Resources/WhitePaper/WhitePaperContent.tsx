import React from "react";
import WhitePaperDetails from "./WhitePaperDetails.json";

const WhitePaperContent: React.FC = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="mt-[100px] justify-center text-center text-[90px] font-extrabold">White Paper</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {WhitePaperDetails.map((whitepaper, index) => (
          <div key={index} className="bg-gray-100 border-b-gray-300 border-2 rounded shadow p-4 hover:shadow-lg transition-shadow duration-300">
            <img src={whitepaper.image_link} alt={whitepaper.Title} className="w-72 h-45 object-cover rounded-t mx-auto" />
            <h2 className="text-xl font-bold mt-4">{whitepaper.Title}</h2>
            <p className="text-gray-600 mt-2 line-clamp-2">{whitepaper.Summary}</p>
            <button
              onClick={() => window.location.href = whitepaper.redirectLink}
              className="mt-4 bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700 transition-colors duration-300"
            >
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhitePaperContent;
