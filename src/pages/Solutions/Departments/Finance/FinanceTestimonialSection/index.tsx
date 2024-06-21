import React from "react";

export default function FinanceTestimonialSection() {
  return (
    <div>
      <div className="py-[2%] relative bg-[url('https://d2qb2qddg7l6c6.cloudfront.net/legitt-website-v5/assets/images/LegalTestimonialImage.jpg')] bg-cover bg-center min-h-[62vh] flex items-center justify-center">
        <div className="absolute p-[20px] px-[5%] lg:px-[3%] left-[5%] sm:left-[12%] top-[5%] sm:top-[9%] min-h-[250px] sm:min-h-[350px] rounded-3xl bg-[#FFD166] max-w-[90%] sm:max-w-[600px] w-full text-[#fff]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="24"
            viewBox="0 0 28 24"
            fill="none"
          >
            <path
              d="M12.5427 22.1916V22.2913H12.543C12.4885 23.1839 11.7064 23.9003 10.7403 23.9003H1.90542C0.903648 23.9003 0.0996678 23.13 0.0996678 22.1916V11.9984C0.0996678 5.46229 5.65554 0.150835 12.5427 0.100035V5.04223C8.5494 5.09291 5.31752 8.18441 5.31752 11.9984V12.0981H5.41719H10.7369C11.7387 12.0981 12.5427 12.8684 12.5427 13.8068V22.1916ZM20.6718 11.9984V12.0981H20.7715H26.0912H26.0946C27.0964 12.0981 27.9003 12.8684 27.9003 13.8068V22.1916C27.9003 23.13 27.0964 23.9003 26.0946 23.9003H17.2597C16.2579 23.9003 15.454 23.13 15.454 22.1916V11.9984C15.454 5.46229 21.0098 0.150836 27.897 0.100035V5.04223C23.9037 5.09291 20.6718 8.18441 20.6718 11.9984Z"
              fill="white"
              stroke="white"
              strokeWidth="0.199336"
            />
          </svg>
          <div className="mt-[20px] text-[16px] sm:text-[20px] font-[500]">
            We’ve been able to reduce the number of contracts that our legal
            team needs to do an in-depth review of by one third in any given
            year.
          </div>
          <div className="mt-[10px] text-[14px] sm:text-[16px] font-[500]">
            <div className="text-[#ffffff] text-[30px] sm:text-[40px]">-</div>
            <div className="text-[#ffffff]">In-House Counsel</div>
            <div className="text-[#ffffff]">Jelly Belly Candy Company</div>
          </div>
          <div className="flex justify-start">
            <div className="bg-[#000000] rounded-md text-[12px] sm:text-[14px] text-[#fff] font-medium p-2 font-[600] my-[20px]">
              Learn More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
