import React, { useState, useEffect, useRef } from "react";

export default function LegittProDemoBanner() {
  const [isInView, setIsInView] = useState(false);
  const bannerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, []);

  return (
    <div ref={bannerRef}>
      <div
        className={`relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32 rounded-4xl transition-all duration-500 ease-in-out ${
          isInView ? "mx-[10%]" : "mx-[4%]"
        } mt-[-100px]`}
      >
        <div className="mx-auto max-w-[800px] px-6 lg:px-8">
          <div className="mx-auto flex flex-col justify-center items-center text-center max-w-2xl">
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
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#3C71DC] sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-[#3C71DC] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3C71DC]"
                >
                  Get a live demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
