"use client";

import React, { useState } from "react";

const commands = {
  npm: "npm i @carbonteq/fp",
  pnpm: "pnpm add @carbonteq/fp",
  yarn: "yarn add @carbonteq/fp",
};

export default function InstallBox() {
  const [activeTab, setActiveTab] = useState<"npm" | "pnpm" | "yarn">("npm");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(commands[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2s
  };

  return (
    <div className="flex flex-col gap-10 w-[800px]">
      {/* Heading */}
      <h2 className="font-['Roboto Slab'] text-[48px] leading-[63px] text-[#1A1A1A] dark:text-white text-left">
        Installation
      </h2>

      {/* Code Block */}
      <div className="border border-[#1A1A1A] dark:border-gray-200 rounded overflow-hidden">
        {/* Tabs */}
        <div className="flex flex-row items-center gap-4 px-4 bg-[#E1DEB7] dark:bg-[#2C2C2C]">
          {Object.keys(commands).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as "npm" | "pnpm" | "yarn")}
              className={`px-2 py-2 font-['Avenir Next'] text-[16px] ${
                activeTab === tab
                  ? "font-semibold border-b-2 border-black dark:border-white"
                  : "text-gray-600 dark:text-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Command */}
        <div className="flex flex-row justify-between items-center bg-[#FDF6E3] dark:bg-[#1E1E1E] px-4 py-3">
          <code className="font-['Fira Code'] text-[16px] text-black dark:text-white">
            {commands[activeTab]}
          </code>
          <button
            onClick={handleCopy}
            className="w-[42px] h-[42px] flex justify-center items-center rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            title="Copy to clipboard"
          >
            <img
              src="/components/svg/Copy.svg"
              alt="Copy"
              className="w-[40px] h-[40px] dark:invert"
            />
          </button>
        </div>
        {copied && (
          <p className="text-green-600 dark:text-green-400 text-sm px-4 py-1">
            Copied!
          </p>
        )}
      </div>

      {/* Get Started Button */}
      <a
        href="/docs/Introduction/GettingStarted/installation"
        className="w-[160px] h-[48px] flex justify-center items-center bg-black dark:bg-white text-white dark:text-black text-[18px] leading-[24px] font-semibold shadow-md rounded"
      >
        Get Started
      </a>
    </div>
  );
}
