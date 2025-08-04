"use client"

import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { highlight } from "@/components/highlightcode"
import "highlight.js/styles/atom-one-dark.css"

type Props = {
  code: string
  title?: string
}

export default function AnswerDialog({ code, title = "Answer" }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mt-4 bg-[var(--color-fd-card)] text-[var(--color-fd-foreground)] hover:opacity-90 transition">
          💡 Show {title}
        </Button>
      </DialogTrigger>
      <DialogContent
        title={title}
        className="bg-[var(--color-fd-muted)] border border-[var(--color-fd-border)] text-[var(--color-fd-foreground)]"
      >
        <pre className="rounded-md border border-[var(--color-fd-border)] overflow-x-auto p-1">
          <code className="hljs font-mono text-sm m-1" dangerouslySetInnerHTML={{ __html: highlight(code) }} />
        </pre>
      </DialogContent>
    </Dialog>
  )
}
