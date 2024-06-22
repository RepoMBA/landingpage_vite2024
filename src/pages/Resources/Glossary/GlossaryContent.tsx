import React, { useEffect, useState } from 'react';
import glossaryData from './glossary.json';

// Define the interface for the glossary items
interface GlossaryItem {
  Title: string;
  Description: string;
}

const GlossaryContent: React.FC = () => {
  const [glossary, setGlossary] = useState<GlossaryItem[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    // TGlossary Dictionary Mapping
    const data: GlossaryItem[] = glossaryData as GlossaryItem[];

    // Sorting alphabetically
    const sortedGlossary = [...data].sort((a, b) =>
      a.Title.localeCompare(b.Title)
    );

    setGlossary(sortedGlossary);
  }, []);

  // Indexing letters
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredGlossary = glossary.filter((item) =>
    item.Title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Glossary</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search..."
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />
      <div className="flex flex-wrap justify-center mb-6">
        {alphabet.map((letter) => (
          <a
            key={letter}
            href={`#${letter}`}
            className="mx-2 text-lg text-blue-500 hover:underline"
          >
            {letter}
          </a>
        ))}
      </div>
      {alphabet.map((letter) => (
        <div key={letter} id={letter}>
          <h2 className="text-2xl font-semibold mt-6 mb-2">{letter}</h2>
          <div>
            {filteredGlossary
              .filter((item) => item.Title.startsWith(letter))
              .map((item, index) => (
                <div key={index} className="mb-4 p-4 border rounded shadow-sm flex">
                  <h3 className="text-xl font-bold w-1/4">{item.Title}</h3>
                  <p className="w-3/4">{item.Description}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GlossaryContent;
