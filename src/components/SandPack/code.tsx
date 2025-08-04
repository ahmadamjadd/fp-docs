"use client"

import { Sandpack, SandpackProps } from "@codesandbox/sandpack-react"
import { customSandpackTheme } from "@/themes/sandpackTheme"
import { levelUp } from "@codesandbox/sandpack-themes";

type Props = Omit<SandpackProps, "files" | "template" | "options"> & {
  code?: string
  files?: SandpackProps["files"]
  template?: SandpackProps["template"]
}

const defaultPackageJson = {
  code: `{
  "name": "result-exercise",
  "type": "module",
  "scripts": {
    "start": "tsx index.ts",
    "dev": "tsx watch index.ts",
    "build": "tsc index.ts --outDir dist",
    "test": "tsx test/index.test.ts"
  },
  "dependencies": {
    "@carbonteq/fp": "^0.8.2",
    "typescript": "^5.0.0",
    "tsx": "^4.20.3"
  },
  "devDependencies": {
    "@types/node": "^20.0.0"
  }
}`
}

const defaultTsConfig = {
  code: `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true
  }
}`
}

const customSetup = {
  dependencies: {
    "@carbonteq/fp": "^0.8.2",
    "esbuild": "^0.20.2"
  },
  entry: "/index.ts",
}

const SandPack = ({
  code,
  files,
  template = "node",
  ...rest
}: Props) => {
  const defaultFiles =
    files ||
    (code && {
      "/index.ts": {
        code: `// Required polyfill for private fields
if (typeof window === 'undefined') {
  global = globalThis;
}

// Your code
${code}`,
        active: true,
      },
      "/package.json": defaultPackageJson,
      "/tsconfig.json": defaultTsConfig
    })

  const defaultOptions = {
    showConsole: true,
    showConsoleButton: true,
    showTabs: true,
    closableTabs: false,
    editorHeight: 400,
  }

  return (
    <>
      {/* Light Mode */}
      <div className="dark:hidden rounded-md overflow-hidden">
        {/* Outer border */}
        <div className="border border-[var(--color-fd-card)] rounded-md">
          {/* Colored gap + inner bottom border */}
          <div className="p-1.5 bg-[var(--color-fd-card)] border-b-2 border-[var(--color-fd-card)] rounded-md overflow-hidden">
            <Sandpack
              template={template}
              files={defaultFiles}
              theme={customSandpackTheme}
              customSetup={customSetup}
              options={defaultOptions}
              {...rest}
            />
          </div>
        </div>
      </div>
  
      {/* Dark Mode */}
      <div className="hidden dark:block rounded-md overflow-hidden">
        {/* Outer black border */}
        <div className="border border-[var(--color-fd-card)] rounded-md">
          {/* Colored gap + inner bottom border */}
          <div className="p-1.5 bg-[var(--color-fd-border)] border-b-2 border-[var(--color-fd-primary)] rounded-md overflow-hidden">
            <Sandpack
              template={template}
              files={defaultFiles}
              theme={levelUp}
              customSetup={customSetup}
              options={defaultOptions}
              {...rest}
            />
          </div>
        </div>
      </div>
    </>
  )
  
}

export default SandPack