export default function DemoBannerSection() {
  return (
    <div className="relative ">
      <div className="isolate overflow-hidden bg-[#ededed] py-16 sm:py-24 lg:py-22 mx-[4%] rounded-4xl mt-[50px]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-[40px] leading-[50px]">
                We've been called gamechangers for a reason.
              </h2>
              <p className="mt-4 text-md leading-6 text-[#555]">
                Nostrud amet eu ullamco nisi aute in ad minim nostrud
                adipisicing velit quis. Duis tempor incididunt dolore.
              </p>
              <div className="mt-6 flex max-w-md gap-x-4">
                <button type="submit" className="common-button">
                  Schedule A Demo
                </button>
              </div>
            </div>
            <div>
              <img
                src="https://d2qb2qddg7l6c6.cloudfront.net/legitt-website-v5/assets/images/DemoCardDriveforceImage.png"
                alt="Driveforce"
                className="w-[200px] rounded-2xl shadow-md absolute right-[24%]"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        src="https://d2qb2qddg7l6c6.cloudfront.net/legitt-website-v5/assets/images/DemoCardDicidiumImage.png"
        alt="Dicidium"
        className="absolute top-0 w-[180px] rounded-2xl shadow-md right-[16%] -mt-10 -mr-20"
      />
    </div>
  );
}
