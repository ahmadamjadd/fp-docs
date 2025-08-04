import { DialogDescription } from "@/components/ui/dialog"
import { DialogTitle } from "@/components/ui/dialog"
import defaultMdxComponents from "fumadocs-ui/mdx"
import type { MDXComponents } from "mdx/types"
import SandPack from "./components/SandPack/code"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogClose,
  DialogOverlay,
} from "@/components/ui/dialog"
import { Tabs } from "@/components/ui/tabs"
import AnswerDialog from "./components/AnswerDialog"
import { Scrollycoding } from "./components/scrollycoding"
import { SmoothPre } from "./components/annotations/token-transitions.client"
import { GoodBadCode } from "./components/good-bad-code"

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    SandPack,
    Button,
    Dialog,
    Tabs,
    DialogContent,
    DialogTitle,
    DialogDescription,
    DialogHeader,
    DialogFooter,
    DialogOverlay,
    DialogClose,
    DialogTrigger,
    AnswerDialog,
    SmoothPre,
    Scrollycoding,
    GoodBadCode,
    
  }
}
