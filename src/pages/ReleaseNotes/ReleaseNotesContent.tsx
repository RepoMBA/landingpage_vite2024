import React, { useState } from "react";
import NewHeader from "../../components/Header/NewHeader";
import Footer from "../../components/Footer/index";
import releaseNotes from './releasenotes.json';

interface Release {
    Version: string;
    Title: string;
    Description: string;
    ReleaseDate: string;
}

export default function ReleaseNotesContent() {
    const [month, setMonth] = useState<string>('');
    const [year, setYear] = useState<string>('');

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const uniqueYears = Array.from(new Set(releaseNotes.map((note: Release) => new Date(note.ReleaseDate).getFullYear().toString())));

    const filteredAndSortedNotes = releaseNotes
        .filter((note: Release) => {
            const noteDate = new Date(note.ReleaseDate);
            const noteMonth = months[noteDate.getMonth()];
            const noteYear = noteDate.getFullYear().toString();
            return (!month || noteMonth === month) && (!year || noteYear === year);
        })
        .sort((a: Release, b: Release) => new Date(b.ReleaseDate).getTime() - new Date(a.ReleaseDate).getTime());

    const handleYearClick = (selectedYear: string) => {
        if (year === selectedYear) {
            setYear('');
            setMonth('');
        } else {
            setYear(selectedYear);
            setMonth('');
        }
    };

    const handleMonthClick = (selectedMonth: string) => {
        setMonth(selectedMonth);
    };

    return (
        <div>
            <NewHeader />
            <div className="flex items-center justify-center">
                <div className="mt-[100px] m-2 shadow-xl w-full max-w-5xl px-[3px] border-[2px]">
                    <h1 className="font-bold m-2 text-[32px] sm:text-[48px] ml-3">Release Notes</h1>
                    <p className="m-2 ml-3">Below are the release notes for the latest versions of the Legitt AI.</p>
                    <div className="flex flex-col sm:flex-row">
                        <div className="m-2 w-full sm:w-1/5">
                            <div className="space-y-4">
                                {uniqueYears.map((uniqueYear) => (
                                    <div key={uniqueYear}>
                                        <h3
                                            className={`font-bold cursor-pointer py-2 px-3 rounded ${year === uniqueYear ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
                                            onClick={() => handleYearClick(uniqueYear)}
                                        >
                                            {uniqueYear}
                                        </h3>
                                        {year === uniqueYear && (
                                            <div className="ml-4 space-y-2 transition-all duration-300 ease-in-out">
                                                {months.map((m, index) => (
                                                    <div
                                                        key={index}
                                                        className={`cursor-pointer py-1 px-3 rounded ${month === m ? 'bg-blue-400 text-white' : 'hover:bg-gray-100'}`}
                                                        onClick={() => handleMonthClick(m)}
                                                    >
                                                        {m}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4 w-full sm:w-4/5">
                            {filteredAndSortedNotes.map((note: Release, index: number) => (
                                <div key={index} className="relative p-4 border rounded shadow-md transition-transform transform hover:scale-105">
                                    <div className="space-y-2">
                                        <h2 className="font-bold text-xl sm:text-2xl">{note.Title}</h2>
                                        <p className="text-blue-500"><strong>Version:</strong> {note.Version}</p>
                                        <p className="text-gray-600"><strong>Release Date:</strong> {new Date(note.ReleaseDate).toLocaleDateString()}</p>
                                        <p className="text-gray-600 line-clamp-3"><strong>Description:</strong> {note.Description}</p>
                                    </div>
                                    <div className="absolute inset-0 bg-white p-4 rounded opacity-0 hover:opacity-100 overflow-auto transition-opacity duration-300">
                                        <div className="flex flex-col sm:flex-row sm:space-x-5">
                                            <h2 className="font-bold text-xl sm:text-2xl w-full sm:w-3/4">{note.Title}</h2>
                                            <p className="text-blue-500"><strong>Version:</strong> {note.Version}</p>
                                            <p className="text-gray-600"><strong>Release Date:</strong> {new Date(note.ReleaseDate).toLocaleDateString()}</p>
                                        </div>
                                        <p className="text-gray-600"><strong>Description:</strong> {note.Description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
