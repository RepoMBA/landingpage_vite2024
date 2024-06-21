import React, { useState } from 'react';
import jobListings from './jobList.json';
import CommonPopUp from "../../../components/common/CommonPopUp.tsx";

interface JobListing {
  jobName: string;
  location: string;
  experienceDetail: string;
  team: string;
  jobType: string;
  jobDescription: string;
}

const JobsOpened: React.FC = () => {
  const [selectedTeam, setSelectedTeam] = useState<string>('All');
  const [selectedJobType, setSelectedJobType] = useState<string>('All');
  const [InstructionPopUpOpen, setIsInstructionPopOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsInstructionPopOpen(true);
  };

  const handleClosePopup = () => {
    setIsInstructionPopOpen(false);
  };

  const instructionPopupBodyContent = (
    <div className='text-center p-4'>
      <b className='block text-2xl md:text-3xl font-semibold mb-4 text-gray-800'>Hello Applicant!</b>
      <p className="mb-4 text-lg md:text-xl text-gray-700">Please send your resume to</p>
      <a 
        href='mailto:info@legittai.com' 
        className='mb-4 inline-block text-lg md:text-xl py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300'
      >
        info@legittai.com
      </a>
      <p className="text-lg md:text-xl text-gray-700">Don't forget to mention the position you are applying for!</p>
    </div>
  );
  

  const filteredJobs = (jobListings as JobListing[]).filter((job) => {
    return (
      (selectedTeam === 'All' || job.team === selectedTeam) &&
      (selectedJobType === 'All' || job.jobType === selectedJobType)
    );
  });

  return (
    <div className="mt-24 px-4 sm:px-8 lg:px-32">
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div className="flex flex-col mb-4 md:mb-0">
          <b className="mb-2">Teams</b>
          <div>
            <select
              className="border border-gray-300 rounded-md p-2"
              value={selectedTeam}
              onChange={(e) => setSelectedTeam(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Human Resources">Human Resources</option>
              <option value="Sales">Sales</option>
              <option value="Marketing">Marketing</option>
              <option value="Business & Growth">Business & Growth</option>
              <option value="Analytics">Analytics</option>
              <option value="Design">Design</option>
              <option value="Technology">Technology</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col">
          <b className="mb-2">Job Type</b>
          <div>
            <select
              className="border border-gray-300 rounded-md p-2"
              value={selectedJobType}
              onChange={(e) => setSelectedJobType(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Internship">Internship</option>
              <option value="Contract">Contract</option>
              <option value="On Roll">On Roll</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div
              className="flex flex-col md:flex-row justify-between items-center mb-4 p-4 border border-gray-300 rounded-lg shadow-md"
              key={job.jobName}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                <div className="text-xl font-semibold w-full md:w-48">{job.jobName}</div>
                <div className="text-gray-600 w-full md:w-48">{job.location}</div>
                <div className="text-gray-600">{job.experienceDetail}</div>
              </div>
              <div className="text-gray-600 mt-2 md:mt-0">{job.jobDescription}</div>
              <div>
                <button
                  onClick={handleOpenPopup}
                  type="button"
                  className="mt-2 md:mt-0 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                >
                  Apply
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-gray-600">No job listings found.</div>
        )}
      </div>
      <CommonPopUp 
        open={InstructionPopUpOpen}
        onClose={handleClosePopup}
        title="Applying?"
        content={instructionPopupBodyContent}
        width={400}
        height={200}
        showCloseIcon={true}
      />
    </div>
  );
};

export default JobsOpened;
