import { TestimonialsSimple } from "@/components/ottoui/blocks/TestimonialsSimple"

import type { BlocksProps } from "./typeBlock"

export const testimonialBlocks: BlocksProps[] = [
  {
    title: "Simple Testimonials",
    description:
      "A clean testimonials section with two user quotes and entry animation.",
    componentPath: "src/components/ottoui/blocks/TestimonialsSimple.tsx",
    componentUi: TestimonialsSimple,
  },
]
