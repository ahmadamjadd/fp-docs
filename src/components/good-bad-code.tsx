"use client"
import { useState, useEffect } from "react"
import { Eye } from "lucide-react"
import { cn } from "@/lib/utils"
import hljs from "highlight.js"
import "highlight.js/styles/github.css"

interface GoodBadCodeProps {
  goodTitle?: string
  badTitle?: string
  goodDescription: string
  badDescription: string
  goodPoints: string[]
  badPoints: string[]
  goodCode: string
  badCode: string
  className?: string
  showViewButton?: boolean
}

export function GoodBadCode({
  goodTitle = "Good",
  badTitle = "Bad",
  goodDescription,
  badDescription,
  goodPoints,
  badPoints,
  goodCode,
  badCode,
  className,
  showViewButton = false,
}: GoodBadCodeProps) {
  const [activeSection, setActiveSection] = useState<"good" | "bad">("good")
  const [highlightedCode, setHighlightedCode] = useState("")

  useEffect(() => {
    const codeToHighlight = activeSection === "good" ? goodCode : badCode
    const result = hljs.highlight(codeToHighlight, { language: "typescript" })
    setHighlightedCode(result.value)
  }, [activeSection, goodCode, badCode])

  return (
    <div className={cn("w-full border border-[var(--color-fd-border)] flex flex-col p-2", className)}>
      <div className="flex flex-col sm:flex-row">
        {/* Good Section */}
        <button
          onClick={() => setActiveSection("good")}
          className={cn(
            "flex-1 flex flex-col p-4 gap-0 text-left transition-all duration-200",
            activeSection !== "good" && "hover:bg-[var(--color-fd-surface)]/80", // ✅ updated
            activeSection === "good"
              ? "bg-[var(--color-fd-muted)] border-b-4 border-[var(--color-fd-primary)]"
              : "bg-[var(--color-fd-secondary)]/50 border-b-0"
          )}
        >
          <div className="flex justify-between items-start">
            <h3 className="text-2xl font-semibold text-[var(--color-fd-foreground)] leading-[33px]">{goodTitle}</h3>
            {showViewButton && activeSection !== "good" && (
              <div className="flex items-center gap-1 text-base leading-6 text-[var(--color-fd-muted-foreground)] hover:text-[var(--color-fd-foreground)] transition-colors cursor-pointer">
                <Eye className="w-4 h-4" />
                Click to View
              </div>
            )}
          </div>
          <div className="space-y-4">
            <p className="text-base leading-6 text-[var(--color-fd-foreground)]">{goodDescription}</p>
            <ul className="space-y-2">
              {goodPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-base leading-6 text-[var(--color-fd-foreground)]"
                >
                  <span className="w-1.5 h-1.5 bg-[var(--color-fd-foreground)] mt-2.5 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </button>

        {/* Bad Section */}
        <button
          onClick={() => setActiveSection("bad")}
          className={cn(
            "flex-1 flex flex-col p-4 gap-0 text-left transition-all duration-200",
            activeSection !== "bad" && "hover:bg-[var(--color-fd-surface)]/80", // ✅ updated
            activeSection === "bad"
              ? "bg-[var(--color-fd-muted)] border-b-4 border-[var(--color-fd-primary)]"
              : "bg-[var(--color-fd-secondary)]/50 border-b-0"
          )}
        >
          <div className="flex justify-between items-start">
            <h3 className="text-2xl font-semibold text-[var(--color-fd-foreground)] leading-[33px]">{badTitle}</h3>
            {showViewButton && activeSection !== "bad" && (
              <div className="flex items-center gap-1 text-base leading-6 text-[var(--color-fd-muted-foreground)] hover:text-[var(--color-fd-foreground)] transition-colors cursor-pointer">
                <Eye className="w-4 h-4" />
                Click to View
              </div>
            )}
          </div>
          <div className="space-y-4">
            <p className="text-base leading-6 text-[var(--color-fd-foreground)]">{badDescription}</p>
            <ul className="space-y-2">
              {badPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-base leading-6 text-[var(--color-fd-foreground)]"
                >
                  <span className="w-1.5 h-1.5 bg-[var(--color-fd-foreground)] rounded-full mt-2.5 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </button>
      </div>

      {/* Bottom Section - Code */}
      <div className="pt-1">
        <div className="bg-[#FDF6E3] dark:bg-[var(--color-fd-border)] p-3 relative overflow-hidden">
          <pre className="font-mono text-sm leading-5 text-[var(--color-fd-foreground)] tracking-[0.16px] p-3 overflow-auto">
            <code
              className="hljs language-typescript"
              dangerouslySetInnerHTML={{ __html: highlightedCode }}
            />
          </pre>
        </div>
      </div>
    </div>
  )
}
