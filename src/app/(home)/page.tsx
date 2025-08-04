import Link from 'next/link';
import Section1 from "@/components/Section1_LandingPage/section";
import Section2 from "@/components/Section2_LandingPage/section";
import Section3 from "@/components/Section3_LandingPage/Section3";
import Section4 from "@/components/Section4_LandingPage/section";
import FooterStrip from "@/components/FooterStrip/FooterStrip";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      {/* Divider Line */}
      <div className="border-t-2 border-[#1A1A1A] dark:border-white w-1 mx-auto my-4"></div>
      <Section1 />
      <div className="border-t-2 border-[#1A1A1A] dark:border-white w-1/2 mx-auto my-4"></div>
      <Section2 />
      <div className="border-t-2 border-[#1A1A1A] dark:border-white w-1/2 mx-auto my-4"></div>
      <Section3 />
      <div className="border-t-2 border-[#1A1A1A] dark:border-white w-1/2 mx-auto my-4"></div>
      <Section4 />
      <FooterStrip />
    </main>
  );
}
