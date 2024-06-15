import ConnectingLine from "../../assets/images/ConnectingLine.svg";
import ConnectingLineTwo from "../../assets/images/ConnectingLineTwo.svg";
export default function HeroSection() {
  return (
    <div className="mt-[75px] flex flex-col gap-[5px] px-[4%] min-h-[80vh] justify-center items-center 1171sm:flex-row ">
      <div className="w-full 1171sm:w-1/2 text-center 1171sm:text-left">
        <div className="">
          <div className="text-[25px] font-[500]">Empower</div>
          <div className="mt-[-12px] bg-gradient-to-r from-[#6E5EC6]  to-[#ff0066] text-transparent bg-clip-text font-[700] text-[48px]">
            Assistive Intelligence
          </div>
          <div className="mt-[-12px] text-[25px] font-[500]">
            in Your{" "}
            <b>
              <i>Quotations, Proposals, and Contracts.</i>
            </b>
          </div>
        </div>
        <div className="text-[17px] mt-4">
          Experience Assisted Contract Lifecycle Management with the power of AI
          and Blockchain. We help you manage contracts smarter, faster, and
          easier by embedding intelligence in every step.
        </div>

        <div className="mt-[20px] flex gap-2 justify-center items-center 1171sm:justify-start">
          {" "}
          <input
            placeholder="e.g. name@yourcompany.com"
            className="bg-[#fff] border-[1.5px] w-[300px] border-[#717171] rounded-md text-black px-3 py-2 text-base hover:border-[#000] cursor-pointer transition placeholder-[12px]"
            type="text"
          />
          <button className="common-button">Schedule A Demo</button>
        </div>
      </div>
      <div className="w-full 1171sm:w-1/2 mt-[20px] 1171sm:mt-[0px]  flex flex-col 1171sm:items-end gap-[40px] items-center">
        <div className="flex flex-col 700sm:flex-row  w-full 700sm:w-auto items-center gap-2">
          <div className="flex items-baseline gap-2">
            <div className=" shadow-none 700sm:shadow-md px-3 py-2 text-[20px] 700sm:text-[14px] font-[600]">
              Sales Intelligence{" "}
            </div>
            <div className="700sm:flex hidden">
              <img src={ConnectingLine} alt="Connecting Line" />
            </div>
          </div>

          <div className="flex gap-3 flex-col">
            <div className="flex gap-[10px] 1344sm:gap-[30px]">
              <div>
                <div className="w-[80px] h-[80px] rounded-md flex justify-center items-center bg-[#fff] shadow-lg">
                  <img
                    alt="Sales Intelligence"
                    src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/icons/SalesIntelligence.svg"
                    className="w-[35px] h-[35px]"
                  />
                </div>
                <div className="text-[14px] text-[#000] text-center mt-2 font-[500]">
                  Sales <br />
                  Intelligence
                </div>
              </div>
              <div>
                <div className="w-[80px] h-[80px] rounded-md flex justify-center items-center bg-[#fff] shadow-lg">
                  <img
                    alt="Tracking Contact"
                    src="	https://d2qb2qddg7l6c6.cloudfront.net/assets/images/icons/TrackingIcon.png"
                    className="w-[35px] h-[35px]"
                  />
                </div>
                <div className="text-[14px] text-[#000] text-center mt-2 font-[500]">
                  Contract <br />
                  Tracking
                </div>
              </div>

              <div>
                <div className="w-[80px] h-[80px] rounded-md flex justify-center items-center bg-[#fff] shadow-lg">
                  <img
                    alt="Tracking Contact"
                    src="	https://d2qb2qddg7l6c6.cloudfront.net/assets/images/icons/TrackingIcon.png"
                    className="w-[35px] h-[35px]"
                  />
                </div>
                <div className="text-[14px] text-[#000] text-center mt-2 font-[500]">
                  Contract <br />
                  Tracking
                </div>
              </div>
              <div>
                <div className="w-[80px] h-[80px] rounded-md flex justify-center items-center bg-[#fff] shadow-lg">
                  <img
                    alt="Tracking Contact"
                    src="	https://d2qb2qddg7l6c6.cloudfront.net/assets/images/icons/TrackingIcon.png"
                    className="w-[35px] h-[35px]"
                  />
                </div>
                <div className="text-[14px] text-[#000] text-center mt-2 font-[500]">
                  Contract <br />
                  Tracking
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col 700sm:flex-row  w-full 700sm:w-auto items-center gap-2">
          <div className="flex items-start gap-2">
            <div className=" shadow-none 700sm:shadow-md px-3 py-2 text-[20px] 700sm:text-[14px] font-[600]">
              Contract Creation
            </div>
            <div className="700sm:flex hidden">
              <img
                src={ConnectingLineTwo}
                alt="Connecting Line"
                className="mt-[16px]"
              />
            </div>
          </div>
          <div className="flex gap-3 flex-col">
            <div className="flex gap-[10px] 1344sm:gap-[30px]">
              {" "}
              <div>
                <div className="w-[80px] h-[80px] rounded-md flex justify-center items-center bg-[#fff] shadow-lg">
                  <img
                    alt="Tracking Contact"
                    src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/icons/TrackingIcon.png"
                    className="w-[35px] h-[35px]"
                  />
                </div>
                <div className="text-[14px] text-[#000] text-center mt-2 font-[500]">
                  Contract <br />
                  Tracking
                </div>
              </div>
              <div>
                <div className="w-[80px] h-[80px] rounded-md flex justify-center items-center bg-[#fff] shadow-lg">
                  <img
                    alt="Ai Contract Generator"
                    src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/icons/AiContractGenerator.png"
                    className="w-[35px] h-[35px]"
                  />
                </div>
                <div className="text-[14px] text-[#000] text-center mt-2 font-[500]">
                  Contract <br />
                  Tracking
                </div>
              </div>
              <div>
                <div className="w-[80px] h-[80px] rounded-md flex justify-center items-center bg-[#fff] shadow-lg">
                  <img
                    alt="Templates"
                    src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/icons/TemplateIcon.png"
                    className="w-[35px] h-[35px]"
                  />
                </div>
                <div className="text-[14px] text-[#000] text-center mt-2 font-[500]">
                  Contract <br />
                  Tracking
                </div>
              </div>
              <div>
                <div className="w-[80px] h-[80px] rounded-md flex justify-center items-center bg-[#fff] shadow-lg">
                  <img
                    alt="Templates"
                    src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/icons/SignIcon.png"
                    className="w-[35px] h-[35px]"
                  />
                </div>
                <div className="text-[14px] text-[#000] text-center mt-2 font-[500]">
                  Contract <br />
                  Tracking
                </div>
              </div>
            </div>
            <div className="flex gap-[10px] 1344sm:gap-[30px]">
              <div>
                <div className="w-[80px] h-[80px] rounded-md flex justify-center items-center bg-[#fff] shadow-lg">
                  <img
                    alt="Templates"
                    src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/icons/SmartContractIcon.png"
                    className="w-[35px] h-[35px]"
                  />
                </div>
                <div className="text-[14px] text-[#000] text-center mt-2 font-[500]">
                  Contract <br />
                  Tracking
                </div>
              </div>

              <div>
                <div className="w-[80px] h-[80px] rounded-md flex justify-center items-center bg-[#fff] shadow-lg">
                  <img
                    alt="Templates"
                    src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/icons/NFTIcon.png"
                    className="w-[35px] h-[35px]"
                  />
                </div>
                <div className="text-[14px] text-[#000] text-center mt-2 font-[500]">
                  Contract <br />
                  Tracking
                </div>
              </div>

              <div>
                <div className="w-[80px] h-[80px] rounded-md flex justify-center items-center bg-[#fff] shadow-lg">
                  <img
                    alt="Templates"
                    src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/icons/RepoAnalyzerIcon.png"
                    className="w-[35px] h-[35px]"
                  />
                </div>
                <div className="text-[14px] text-[#000] text-center mt-2 font-[500]">
                  Contract <br />
                  Tracking
                </div>
              </div>
              <div>
                <div className="w-[80px] h-[80px] rounded-md flex justify-center items-center bg-[#fff] shadow-lg">
                  <img
                    alt="Templates"
                    src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/icons/RepoAnalyzerIcon.png"
                    className="w-[35px] h-[35px]"
                  />
                </div>
                <div className="text-[14px] text-[#000] text-center mt-2 font-[500]">
                  Contract <br />
                  Tracking
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
