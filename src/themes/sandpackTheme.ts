import { SandpackTheme } from "@codesandbox/sandpack-react"

export const customSandpackTheme: SandpackTheme = {
  colors: {
    surface1: "#FDF6E3", // white background
    surface2: "var(--color-fd-muted)",
    surface3: "var(--color-fd-accent)",
    base: "#1e1e1e", // dark text
    clickable: "#2b2a2a",
    disabled: "#2b2a2a",
    hover: "#2b2a2a",
    accent: "#2b2a2a",
    error: "#c70000",
    errorSurface: "#ffebeb"
  },
  syntax: {
    plain: "#1e1e1e", // dark default text
    comment: "#6a737d",
    keyword: "#d73a49",
    tag: "#22863a",
    punctuation: "#24292e",
    definition: "#005cc5",
    property: "#e36209",
    static: "#032f62",
    string: "#032f62"
  },
  font: {
    body: "var(--font-sans, ui-sans-serif, system-ui)",
    mono: "var(--font-mono, ui-monospace, SFMono-Regular)",
    size: "13px",
    lineHeight: "1.6"
  }
}
