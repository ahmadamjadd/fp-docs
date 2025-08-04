import Image from "next/image";
import Link from "next/link";
import CheckList from "./CheckList";
import ExampleTabs from "./Tabs";
import tabsData from "./tabsData"

const Section4 = () => {
  return (
    <section className="flex flex-col items-center px-10 py-[140px] gap-[120px]">
      {/* Content and Illustration */}
      <div className="flex flex-col gap-[72px] max-w-[1440px]">
        <div className="flex flex-col lg:flex-row justify-between gap-[80px]">
          {/* Left content */}
          <div className="flex flex-col gap-[56px] max-w-[1120px]">
            <h2 className="text-[64px] leading-[84px] font-roboto-slab text-[#1A1A1A] dark:text-white text-left">
              Let’s see some example code
            </h2>
            <p className="text-[24px] leading-[33px] font-avenir text-[#1A1A1A] dark:text-gray-200 text-left">
                Doing the right thing in TypeScript is hard. fp makes it easy! We’ve collected some examples to show you how fp can simplify your next project.
            </p>
            <CheckList />
          </div>

          {/* Right illustration */}
          <div className="relative w-[200px] h-[111px]">
            <Image
              src="/components/svg/Section4_1.svg"
              alt="Effect Illustration"
              width={200}
              height={111}
              className="dark:invert"
            />
          </div>
        </div>

        {/* Basics Section */}
        <div className="flex flex-col gap-8 bg-[#D2CE9F] dark:bg-[#2A2A2A] border border-black dark:border-white px-8 py-6 max-w-[1440px]">
          <h3 className="text-[48px] leading-[63px] font-roboto-slab text-center text-[#1A1A1A] dark:text-white">
            Basics
          </h3>

          <ExampleTabs tabs={tabsData} />
        </div>

        {/* Read Documentation link */}
        <div className="flex justify-start text-left">
          <a
            href="/docs/Introduction/errorHandlingBroken"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-avenir font-semibold text-[18px] hover:bg-[#333] dark:hover:bg-[#f5f5f5] transition-colors duration-200"
          >
            Read Documentation
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-right"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section4;
