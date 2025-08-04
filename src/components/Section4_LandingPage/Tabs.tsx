import { Tabs, Tab } from "fumadocs-ui/components/tabs";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";

type CodeBlockProps = {
  title: string;
  lang: string;
  code: string;
};

type TabData = {
  name: string; // Tab label e.g. "With FP"
  blocks: CodeBlockProps[]; // Two code blocks per tab
};

interface ExampleTabsProps {
  tabs: TabData[];
}

const ExampleTabs = ({ tabs }: ExampleTabsProps) => {
  return (
    <Tabs items={tabs.map((tab) => tab.name)}>

      {tabs.map((tab) => (
        <Tab key={tab.name} value={tab.name}>
          <div className="flex flex-col gap-6">
            {/* Code Blocks in Columns */}
            <div className="flex flex-col lg:flex-row gap-6 w-full">
              {tab.blocks.map((block, idx) => (
                <div
                  key={idx}
                  className="flex flex-col gap-4 flex-1 min-w-0 h-full items-stretch" // Added h-full here
                >
                  <h4 className="font-semibold text-xl text-[#1A1A1A] dark:text-white">
                    {block.title}
                  </h4>
                  <div className="text-left h-full items-stretch"> {/* And h-full here */}
                    <DynamicCodeBlock
                      lang={block.lang}
                      code={block.code}
                      options={{
                        themes: {
                          light: "github-light",
                          dark: "github-dark",
                        },
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Tab>
      ))}
    </Tabs>
  );
};

export default ExampleTabs;