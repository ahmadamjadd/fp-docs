import React from "react";
import VersionTag from "./VersionTag";
import InstallBox from "./InstallBox";
import Header from "./Header"

export default function Section1() {
  return (
    <section className="relative flex flex-row justify-start items-start px-10 py-[140px] gap-[131px] w-full max-w-[1920px] mx-auto">
      {/* Container */}
      <div className="flex flex-row justify-start items-start gap-[514px] w-[1440px] mx-auto">
        {/* Content */}
        <div className="flex flex-col gap-[56px] w-[1120px] items-start">
          {/* Version & License */}
          <div className="flex flex-row items-start gap-4">
            <VersionTag label="v1.0.1" />
            <VersionTag label="License" />
          </div>

          {/* Heading */}
          <h1 className="font-['Roboto Slab'] text-[88px] leading-[116px] text-[#1A1A1A] dark:text-white text-left">
            Carbonteq Functional Programming Utilities
          </h1>

          {/* Sub-description */}
          <p className="font-['Avenir Next'] text-[24px] leading-[33px] text-[#1A1A1A] dark:text-gray-200 text-left">
            FP is a lightweight TypeScript library designed to simplify functional programming by providing essential types like Option and Result. It helps developers handle errors, manage optional values, and write expressive, composable code.
          </p>

          {/* Install Box */}
          <InstallBox />
        </div>
      </div>

      {/* Floating SVG */}
      <img
        src="/components/svg/Section1.svg"
        alt="Illustration"
        className="absolute top-10 right-[10%] w-[200px] h-[142px] object-contain dark:invert"
      />
    </section>
  );
}

