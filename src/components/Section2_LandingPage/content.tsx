import React from "react";

export default function Content() {
  return (
    <div className="flex flex-col gap-[56px] w-[1120px]">
      <h1 className="font-['Roboto Slab'] text-[64px] leading-[84px] text-[#1A1A1A] dark:text-white text-left">
        But Why <span className="font-bold">FP?</span>
      </h1>
      <p className="font-['Avenir Next'] text-[24px] leading-[33px] text-[#1A1A1A] dark:text-gray-200 text-left">
        In JavaScript and TypeScript, dealing with <code>null</code>, <code>undefined</code>, and errors can lead to verbose, error-prone
        code. <strong>fp</strong> introduces functional paradigms that make
        handling these cases cleaner and more reliable. By leveraging <strong>fp</strong>, you can reduce boilerplate, improve readability,
        and create more maintainable applications.
      </p>
    </div>
  );
}
