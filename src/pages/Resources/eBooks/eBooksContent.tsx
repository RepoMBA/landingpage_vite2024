import React from "react";
import eBooksDetails from "./eBooksDetails.json";
import { FaFilePdf } from "react-icons/fa";

const eBooksContent: React.FC = () => {
  return (
    <div className="mt-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {eBooksDetails.map((ebook, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="p-4 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold mb-2">{ebook.Title}</h2>
                <div className="flex items-center justify-between text-gray-600 mb-2">
                  <div>
                    <p><strong>Author:</strong> {ebook.Author}</p>
                    <p><strong>Published on:</strong> {ebook.Publish}</p>
                  </div>
                  <a href={ebook.DownloadLink} className="text-red-500 hover:text-red-700 flex items-center" target="_blank" rel="noopener noreferrer">
                    <FaFilePdf className="ml-1 h-6 w-6" />
                  </a>
                </div>
                <div>
                  <p className="text-gray-700">{ebook.Summary}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default eBooksContent;
