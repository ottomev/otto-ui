import { PricingCreative } from "@/components/ottoui/blocks/PricingCreative"
import { PricingModern } from "@/components/ottoui/blocks/PricingModern"
import { PricingSimple } from "@/components/ottoui/blocks/PricingSimple"

import type { BlocksProps } from "./typeBlock"

export const pricingBlocks: BlocksProps[] = [
  {
    title: "Simple Pricing",
    description: "A single plan pricing section with entry animation.",
    componentPath: "src/components/ottoui/blocks/PricingSimple.tsx",
    componentUi: PricingSimple,
  },
  {
    title: "Modern Pricing",
    description:
      "A modern, glassmorphic pricing section with gradients and a featured plan.",
    componentPath: "src/components/ottoui/blocks/PricingModern.tsx",
    componentUi: PricingModern,
  },
  {
    title: "Creative Pricing",
    description:
      "A playful, card-overlap pricing section with vibrant colors and floating animation.",
    componentPath: "src/components/ottoui/blocks/PricingCreative.tsx",
    componentUi: PricingCreative,
  },
]
