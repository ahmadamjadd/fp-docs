import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Link from "next/link";

export const baseOptions: BaseLayoutProps = {
  githubUrl: 'https://github.com/carbonteq/fp',
  nav: {
    title: (
      <div className="flex items-center gap-6 ">
        {/* Logo */}
        <img src="/components/svg/FP.svg" alt="FP icon" className="dark:invert" />
        
      </div>
    ),
  },
  links: [
  ],
};
