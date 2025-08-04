"use client";

import React from "react";
import Card from "./Card";

const Section3 = () => {
  return (
    <section className="flex flex-col items-center px-10 py-36 gap-[120px] w-full">
      <div className="flex flex-col gap-16 max-w-[1440px]">
        {/* Heading */}
        <h2 className="font-['Roboto Slab'] text-[64px] leading-[84px] text-[#1A1A1A] dark:text-white text-left">
          Usage
        </h2>

        {/* Cards */}
        {/* Cards */}
         <div className="flex flex-col lg:flex-row gap-16 text-left items-center">
          <Card
            icon="/components/svg/Section3_1.svg"
            title="Safer Functional Programming"
            description="Harness functional patterns that simplify complex logic and error handling."
            items={[
              "Eliminate null and undefined pitfalls",
              "Chain operations with expressive APIs",
              "Build predictable and reusable code",
            ]}
          />

          <Card
            icon="/components/svg/Section3_2.svg"
            title="Fewer Libraries, More Power"
            description="With @carbonteq/fp, you get the functional essentials without bloating your project."
            items={[
              "Lightweight",
              "Covers Option, Result, and common utilities",
              "Works seamlessly with TypeScript",
            ]}
          />

          <Card
            icon="/components/svg/Section3_3.svg"
            title="No More If-Else Hell"
            description="Say goodbye to deeply nested conditionals and manual error checks."
            items={[
              "Declarative error handling with Result",
              "Null value management with Option",
              "Pattern matching for clean branching logic",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Section3;
