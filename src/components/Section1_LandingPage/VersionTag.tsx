import React from "react";

export default function VersionTag({ label }: { label: string }) {
  return (
    <div className="flex flex-row justify-center items-center px-3 py-2 gap-1 border-y border-black dark:border-white w-auto h-[40px]">
      <div className="w-[6px] h-[6px] bg-black dark:bg-white rounded-full" />
      <span className="font-['Avenir Next'] text-[18px] leading-[24px] text-[#1A1A1A] dark:text-white">
        {label}
      </span>
    </div>
  );
}

