import Image from "next/image";

const CheckList = () => {
  const items = [
    "No null or undefined issues",
    "No more manual error handling",
    "Declarative coding for sync and async flows",
  ];

  return (
    <ul className="flex flex-col gap-4">
      {items.map((item, idx) => (
        <li
          key={idx}
          className="flex gap-3 items-start text-[24px] leading-[33px] font-avenir text-[#1A1A1A] dark:text-gray-200"
        >
          <Image
            src="/components/svg/Section4_2.svg"
            alt="check"
            width={24}
            height={24}
            className="dark:invert"
          />
          {item}
        </li>
      ))}
    </ul>
  );
};

export default CheckList;
