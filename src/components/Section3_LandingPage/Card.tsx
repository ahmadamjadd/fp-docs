import React from "react";

interface CardProps {
  icon: string; // path to svg icon
  title: string;
  description: string;
  items: string[];
  link?: string; // optional link for "Read Documentation"
}

const Card = ({ icon, title, description, items, link = "/docs/Introduction/errorHandlingBroken" }: CardProps) => {
  return (
    <div className="flex flex-col gap-8 w-full max-w-[437px]">
      {/* Icon + Title */}
      <div className="flex items-start gap-3">
        <img
          src={icon}
          alt={title}
          className="w-12 h-12 dark:invert"
        />
        <h3 className="font-['Roboto Slab'] text-[30px] leading-[40px] text-[#1A1A1A] dark:text-white text-left">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="font-['Avenir Next'] text-[24px] leading-[33px] text-[#1A1A1A] dark:text-gray-200 text-left">
        {description}
      </p>

      {/* Features */}
      <ul className="flex flex-col gap-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-3">
            {/* Check Circle SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-[#1A1A1A] dark:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            <span className="font-['Avenir Next'] text-[24px] leading-[33px] text-[#1A1A1A] dark:text-gray-200">
              {item}
            </span>
          </li>
        ))}
      </ul>

      {/* Read Documentation Link */}
      <a
        href={link}
        className="mt-6 inline-flex items-center gap-2 px-4 py-2 border border-black dark:border-white drop-shadow-sm font-['Avenir Next'] font-semibold text-[18px] text-[#1A1A1A] dark:text-white hover:bg-[#f5f5f5] dark:hover:bg-[#333333] transition-colors duration-200"
      >
        Read Documentation
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-4 h-4"
        >
          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
        </svg>
      </a>
    </div>
  );
};

export default Card;
