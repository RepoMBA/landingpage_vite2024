import React from "react";
import LegittLiteHeroImage from "../../assets/images/LegittLiteImage.png";
import LegittLiteFeatureImage from "../../assets/images/LegittLiteFeatureImage.png";

export default function LegittLiteContent() {
  return (
    <>
      <div className="mt-[30px] p-[4%] min-h-[100vh] flex justify-center items-center flex-col">
        <section className="bg-white">
          <div className="grid max-w-screen-xl mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-semibold tracking-tight leading-none md:text-5xl xl:text-[40px] ">
                Contract Lifecycle Management Tool For{" "}
                <span className="bg-gradient-to-r from-[#6E5EC6]  to-[#ff0066] text-transparent bg-clip-text font-[700]">
                  <i>Small Teams</i>
                </span>
              </h1>
              <p className="max-w-2xl mb-6 font-light text-[#000] lg:mb-8 md:text-[16px] lg:text-[16px]">
                Legitt AI Lite offers a streamlined contract lifecycle
                management solution tailored for startups, small teams,
                freelancers, and SMBs. Simplify contract creation, signing,
                management, and tracking with minimal human effort, empowering
                teams to achieve more with ease and efficiency.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-2 mr-3 text-base font-medium text-center text-[#fff] rounded-[4px] bg-[#9B0343]"
              >
                Get started
                <svg
                  className="w-[15px] h-[15px] ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-2 text-base font-medium text-center text-[#9B0343] rounded-[4px]"
              >
                Get a demo
              </a>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img src={LegittLiteHeroImage} alt="Legitt Lite" />
            </div>
          </div>
        </section>
      </div>
      <div className="overflow-hidden  p-[4%] bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <img
              src={LegittLiteFeatureImage}
              alt="Product screenshot"
              className="w-auto h-[500px]"
              width="2432"
              height="1442"
            />
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">
                  Deploy faster
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  A better workflow
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative">
                    <dt className="flex items-center gap-2 font-semibold text-gray-900">
                      <img
                        src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/bullet-check.png"
                        className="w-[25px]"
                      />
                      Push to deploy.
                    </dt>
                    <dd className="inline">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </dd>
                  </div>
                  <div className="relative">
                    <dt className="flex items-center gap-2 font-semibold text-gray-900">
                      <img
                        src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/bullet-check.png"
                        className="w-[25px]"
                      />
                      SSL certificates.
                    </dt>
                    <dd className="inline">
                      Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                      irure qui lorem cupidatat commodo.
                    </dd>
                  </div>
                  <div className="relative">
                    <dt className="flex items-center gap-2 font-semibold text-gray-900">
                      <img
                        src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/bullet-check.png"
                        className="w-[25px]"
                      />
                      Database backups.
                    </dt>
                    <dd className="inline">
                      Ac tincidunt sapien vehicula erat auctor pellentesque
                      rhoncus. Et magna sit morbi lobortis.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-6 p-[4%] min-h-[100vh] flex justify-center items-center sm:py-12 dark:bg-gray-100 m-[4%] rounded-[20px]">
        <div className="container p-6 mx-auto space-y-8 ">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Features</h2>
            <p className="font-serif text-sm dark:text-gray-600">
              Qualisque erroribus usu at, duo te agam soluta mucius.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-3 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            <article className="flex flex-col text-[#fff]">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 dark:bg-gray-500"
                  src="https://source.unsplash.com/200x200/?fashion?1"
                />
              </a>
              <div className="flex flex-col flex-1 p-6 bg-[#3B71DC]">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline text-[#fff]"
                >
                  Contract Repository
                </a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Centralize access to contracts across all your repositories
                  and systems of arguments.
                </h3>
              </div>
            </article>

            <article className="flex flex-col text-[#fff]">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 dark:bg-gray-500"
                  src="https://source.unsplash.com/200x200/?fashion?1"
                />
              </a>
              <div className="flex flex-col flex-1 p-6 bg-[#3B71DC]">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline text-[#fff]"
                >
                  Contract Repository
                </a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Centralize access to contracts across all your repositories
                  and systems of arguments.
                </h3>
              </div>
            </article>

            <article className="flex flex-col text-[#fff]">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 dark:bg-gray-500"
                  src="https://source.unsplash.com/200x200/?fashion?1"
                />
              </a>
              <div className="flex flex-col flex-1 p-6 bg-[#3B71DC]">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline text-[#fff]"
                >
                  Contract Repository
                </a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Centralize access to contracts across all your repositories
                  and systems of arguments.
                </h3>
              </div>
            </article>
          </div>
        </div>
      </section>

      <div className="text-[35px] text-center font-semibold mb-[50px]">
        How Legitt Lite Works?
      </div>

      <div className="grid grid-cols-2 gap-2.5 h-full mb-12 px-[4%]">
        <div className="bg-[#f0f0ec] text-white p-10 rounded-2xl flex flex-col justify-center items-start h-full">
          <span className="text-lg py-2.5 px-7 rounded-full font-normal text-white bg-[#9b0242]">
            Create
          </span>

          <div className="text-2xl font-bold text-black mt-7 mb-7">
            No more Word documents or files. Generate drafts using the power of
            data.
          </div>

          <div className="text-base font-normal text-[#4d4d4d]">
            Create contracts in seconds with Legitt AI. Generate drafts straight
            from your connected tools, a form submission, or your templates.
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="flex-1 flex justify-center items-center bg-[#eff4f3] text-white rounded-2xl">
            <img
              src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/create.gif"
              alt=""
              className="w-[90%]"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2.5 h-full mb-12 px-[4%]">
        <div className="flex flex-col gap-2.5">
          <div className="flex-1 flex justify-center items-center bg-[#eff4f3] text-white rounded-2xl">
            <img
              src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/create.gif"
              alt=""
              className="w-[90%]"
            />
          </div>
        </div>
        <div className="bg-[#f0f0ec] text-white p-10 rounded-2xl flex flex-col justify-center items-start h-full">
          <span className="text-lg py-2.5 px-7 rounded-full font-normal text-white bg-[#9b0242]">
            Collaborate
          </span>

          <div className="text-2xl font-bold text-black mt-7 mb-7">
            No more Word documents or files. Generate drafts using the power of
            data.
          </div>

          <div className="text-base font-normal text-[#4d4d4d]">
            Create contracts in seconds with Legitt AI. Generate drafts straight
            from your connected tools, a form submission, or your templates.
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2.5 h-full mb-12 px-[4%]">
        <div className="bg-[#f0f0ec] text-white p-10 rounded-2xl flex flex-col justify-center items-start h-full">
          <span className="text-lg py-2.5 px-7 rounded-full font-normal text-white bg-[#9b0242]">
            Sign
          </span>

          <div className="text-2xl font-bold text-black mt-7 mb-7">
            No more Word documents or files. Generate drafts using the power of
            data.
          </div>

          <div className="text-base font-normal text-[#4d4d4d]">
            Create contracts in seconds with Legitt AI. Generate drafts straight
            from your connected tools, a form submission, or your templates.
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="flex-1 flex justify-center items-center bg-[#eff4f3] text-white rounded-2xl">
            <img
              src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/create.gif"
              alt=""
              className="w-[90%]"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2.5 h-full mb-12 px-[4%]">
        <div className="flex flex-col gap-2.5">
          <div className="flex-1 flex justify-center items-center bg-[#eff4f3] text-white rounded-2xl">
            <img
              src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/create.gif"
              alt=""
              className="w-[90%]"
            />
          </div>
        </div>
        <div className="bg-[#f0f0ec] text-white p-10 rounded-2xl flex flex-col justify-center items-start h-full">
          <span className="text-lg py-2.5 px-7 rounded-full font-normal text-white bg-[#9b0242]">
            Track
          </span>

          <div className="text-2xl font-bold text-black mt-7 mb-7">
            No more Word documents or files. Generate drafts using the power of
            data.
          </div>

          <div className="text-base font-normal text-[#4d4d4d]">
            Create contracts in seconds with Legitt AI. Generate drafts straight
            from your connected tools, a form submission, or your templates.
          </div>
        </div>
      </div>

      <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32 rounded-4xl mx-[4%]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Talk to our experts
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Unlock the power of our product—schedule a demo today and
                transform possibilities into results!
              </p>
              <div className="mt-6 flex max-w-md gap-x-4">
                <label className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Get a demo
                </button>
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                    />
                  </svg>
                </div>
                <dt className="mt-4 font-semibold text-white">
                  Weekly articles
                </dt>
                <dd className="mt-2 leading-7 text-gray-400">
                  Non laboris consequat cupidatat laborum magna. Eiusmod non
                  irure cupidatat duis commodo amet.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002"
                    />
                  </svg>
                </div>
                <dt className="mt-4 font-semibold text-white">No spam</dt>
                <dd className="mt-2 leading-7 text-gray-400">
                  Officia excepteur ullamco ut sint duis proident non
                  adipisicing. Voluptate incididunt anim.
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
          aria-hidden="true"
        >
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
