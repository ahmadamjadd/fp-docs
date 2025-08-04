import hljs from "highlight.js/lib/core"
import typescript from "highlight.js/lib/languages/typescript"
import "highlight.js/styles/atom-one-light.css" // Default fallback
import "highlight.js/styles/atom-one-dark.css"  // For dark mode

hljs.registerLanguage("ts", typescript)

export function highlight(code: string): string {
  return hljs.highlight(code, { language: "ts" }).value
}
