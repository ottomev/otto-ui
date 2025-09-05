import { HeroGrid } from "@/components/ottoui/blocks/HeroGrid/HeroGrid"
import { HeroShowcase } from "@/components/ottoui/blocks/HeroShowcase"

import type { BlocksProps } from "./typeBlock"

export const heroBlocks: BlocksProps[] = [
  {
    title: "Showcase Hero",
    description:
      "A beautiful, UX-friendly hero with animated headline, buttons, logos, and image.",
    componentPath: "src/components/ottoui/blocks/HeroShowcase.tsx",
    componentUi: HeroShowcase,
    stylePath: undefined, // No CSS extra para este block
  },
  {
    title: "Ottoui Animated Hero",
    description:
      "A modern hero section with Ottoui-style entrance animations, animated text, buttons, and logos.",
    componentPath: "src/components/ottoui/blocks/HeroGrid/HeroGrid.tsx",
    componentUi: HeroGrid,
    stylePath: "src/components/ottoui/blocks/HeroGrid/HeroGrid.module.css", // Asociar CSS extra
  },
]
