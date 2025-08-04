import React from "react";

export default function Illustration() {
  return (
    <div className="relative w-[220px] h-[186px] flex-shrink-0">
      <img
        src="/components/svg/Section2.svg"
        alt="Why FP Illustration"
        className="absolute top-0 left-0 w-full h-full object-contain dark:invert"
      />
    </div>
  );
}
