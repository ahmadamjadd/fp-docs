export default function Header() {
  return (
    <div className="flex flex-col items-start gap-[24px]">
      {/* Tags */}
      <div className="flex flex-row items-center gap-[8px]">
        <span className="flex flex-row justify-center items-center px-[12px] py-[8px] border border-black dark:border-white gap-[4px] text-[18px] leading-[24px] font-normal">
          <div className="w-[6px] h-[6px] bg-black dark:bg-white rounded-full" />
          v1.0.1
        </span>
        <span className="flex flex-row justify-center items-center px-[12px] py-[8px] border border-black dark:border-white gap-[4px] text-[18px] leading-[24px] font-normal">
          <div className="w-[6px] h-[6px] bg-black dark:bg-white rounded-full" />
          License
        </span>
      </div>

      {/* Main heading */}
      <h1 className="font-['Roboto_Slab'] text-[88px] leading-[116px] text-[#1A1A1A] dark:text-white">
        Carbonteq Functional Programming Utilities
      </h1>

      {/* Sub-description */}
      <p className="font-['Avenir_Next'] text-[24px] leading-[33px] text-[#1A1A1A] dark:text-gray-200 max-w-[1120px]">
        FP is a lightweight TypeScript library designed to simplify functional programming by providing essential types like Option and Result.
      </p>
    </div>
  );
}
