import React, { useState } from 'react';
import jobListings from './jobList.json';
import CommonPopUp from "../../components/common/CommonPopUp.tsx";

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
    <div className='text-center justify-center'>
      <b className='block text-3xl font-semibold mb-2'>Hello Applicant!</b>
      <p className="mb-2 text-xl">Mail your Resume to</p>
      <a href='mailto:info@legittai.com' className=' className="mb-3 py-2 my-4 bg-green-400 rounded-lg inline-block"'>info@legittai.com</a>
      <p className="mb-1 text-xl">Do not forget to mention the post you are applying for!</p>
    </div>
  );
  const filteredJobs = (jobListings as JobListing[]).filter((job) => {
    return (
      (selectedTeam === 'All' || job.team === selectedTeam) &&
      (selectedJobType === 'All' || job.jobType === selectedJobType)
    );
  });
  
  return (
    <div className="mt-24 px-32">
      <div className="flex justify-between mb-8">
        <div className="flex flex-col">
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
              className="flex justify-between items-center mb-4 p-4 border border-gray-300 rounded-lg shadow-md"
              key={job.jobName}
            >
              <div>
                <div className='flex items-center gap-6'>
                <div className="text-xl font-semibold w-128">{job.jobName}</div>
                <div className="text-gray-600 w-128">{job.location}</div>
                <div className="text-gray-600">{job.experienceDetail}</div>
                </div>
                <div className="text-gray-600 mt-2">{job.jobDescription}</div>
              </div>
              <div>
                <button
                onClick={handleOpenPopup}
                  type="button"
                  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
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
