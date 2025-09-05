import React from "react"
import Link from "next/link"
import { BookOpen } from "lucide-react"

import { cn } from "@/components/ottoui/utils/cn"
import type { ComponentsProps } from "@/app/doc/data/typeComponent"

interface FrameProps {
  component: ComponentsProps
  className?: string
  clean?: boolean
  group: string
}

export default function Frame({
  component,
  className,
  clean = false,
  group,
}: FrameProps) {
  return (
    <div
      className={cn("w-full py-12 last:pb-0 odd:pt-0 md:w-[600px]", className)}
    >
      <div className="mx-auto w-full">
        <article className="grid gap-3">
          <div
            id={`component-${component.id}`}
            className="border-smooth-200 bg-smooth-100 relative flex h-[340px] w-full items-center justify-center overflow-hidden rounded-lg border transition md:flex-1"
          >
            {/* Floating docs button */}
            {!clean && component.slug && (
              <div
                className={cn(
                  "bg-background/40 absolute top-4 right-4 z-20 flex gap-1 rounded-full border p-1 backdrop-blur"
                )}
              >
                <Link
                  href={`/doc/${group}/${component.slug}`}
                  className="bg-primary flex size-8 items-center justify-center rounded-full border px-2"
                  title={`Go to docs for ${component.componentTitle}`}
                  aria-label={`Go to docs for ${component.componentTitle}`}
                >
                  <BookOpen size={16} className="text-foreground" />
                </Link>
              </div>
            )}
            {component.componentUi &&
              React.createElement(component.componentUi)}
          </div>
        </article>
      </div>
    </div>
  )
}
