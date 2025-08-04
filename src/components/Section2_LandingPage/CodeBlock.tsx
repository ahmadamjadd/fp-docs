"use client";

import React from "react";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";

interface CodeBlockProps {
  title: string;
  code: string;
  lang?: string;
}

export default function CodeBlock({ title, code, lang = "ts" }: CodeBlockProps) {
  return (
    <div className="flex flex-col gap-[32px] w-full">
      <h2 className="font-['Roboto Slab'] text-[48px] leading-[63px] text-[#1A1A1A] dark:text-white">
        {title}
      </h2>
      <div className="text-left">
        <DynamicCodeBlock
          lang={lang}
          code={code}
          options={{
            themes: {
              light: "github-light",
              dark: "github-dark",
            },
          }}
        />
      </div>
    </div>
  );
}
