import { z } from "zod"
import { Selection, Selectable, SelectionProvider } from "codehike/utils/selection"
import { Block, CodeBlock, parseProps } from "codehike/blocks"
import { Pre, type RawCode, highlight } from "codehike/code"
import { tokenTransitions } from "@/components/annotations/token-transitions"
import { wordWrap } from "./annotations/word-wrap"
import {collapse, collapseTrigger, collapseContent} from "./annotations/collapse"

const Schema = Block.extend({
  steps: z.array(Block.extend({ code: CodeBlock })),
})

export function Scrollycoding(props: unknown) {
  const { steps } = parseProps(props, Schema)

  return (
    <SelectionProvider className="flex w-full bg-[var(--color-fd-background)] border-2 border-[#2b2a2a] bordergap-8 min-h-screen">
      {/* Left Text Section */}
      <div className="flex-1 mt-0 mb-0 pl-0 prose max-w-none">
        {steps.map((step, i) => (
          <Selectable
            key={i}
            index={i}
            selectOn={["click", "scroll", "hover"]}
            className="border-2 border-[#2b2a2a] bg-[var(--color-fd-background)] text-[#2c2c2c]
              w-full px-8 py-6 mb-0 shadow-lg transition-all duration-300
              hover:shadow-xl hover:border-[#c4b59a]
              data-[selected=true]:border-[var(--color-fd-primary)] dark:data-[selected=true]:border-[var(--color-fd-border)] data-[selected=true]:bg-[var(--color-fd-muted)]
              data-[selected=true]:shadow-xl data-[selected=true]:scale-[1.02]"
          >
            <h2 className="mt-0 mb-4 text-xl font-bold text-[#2c2c2c] dark:text-white flex items-center">
              <span
                className="inline-flex items-center justify-center w-8 h-8 
                bg-[var(--color-fd-primary)] dark:bg-[var(--color-fd-background)] text-white text-sm font-bold rounded-full mr-4 
                shadow-md"
              >
                {i + 1}
              </span>
              {step.title}
            </h2>
            <div className="mt-0 text-[#4a4a4a] dark:text-white leading-relaxed">{step.children}</div>
          </Selectable>
        ))}
      </div>

      {/* Right Code Panel */}
      <div className="w-1/2 bg-[#F0EED9] dark:bg-[var(--color-fd-accent)] border-l-2 border-[var(--color-fd-foreground)] dark:border-[var(--color-fd-border)] dark:border-[var(--color-fd-border)] pl-8 pr-6 pt-20 h-screen sticky top-0 overflow-y-auto">
        <div className="top-20 sticky overflow-auto">
          <Selection from={steps.map((step, i) => <Code codeblock={step.code} />)} />
        </div>
      </div>
    </SelectionProvider>
  )
}

export async function Code({ codeblock }: { codeblock: RawCode }) {
  const lightTheme = await highlight(codeblock, "github-light")
  const darkTheme = await highlight(codeblock, "github-dark")

  return (
    <>
      {/* Light mode */}
      <div className="dark:hidden">
        <Pre
          code={lightTheme}
          handlers={[tokenTransitions, wordWrap, collapse, collapseTrigger, collapseContent]}
          className="min-h-[40rem] 
            bg-[#F0EED9] text-[#2c2c2c] shadow-lg p-6
            font-mono text-sm leading-relaxed"
        />
      </div>

      {/* Dark mode */}
      <div className="hidden dark:block">
        <Pre
          code={darkTheme}
          handlers={[tokenTransitions, wordWrap, collapse, collapseTrigger, collapseContent]}
          className="min-h-[40rem] 
            "
        />
      </div>
    </>
  )
}
