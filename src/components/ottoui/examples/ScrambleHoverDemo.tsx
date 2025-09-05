"use client"

import ScrambleHover from "@/components/ottoui/ui/ScrambleHover"

export default function ScrambleHoverDemo() {
  return (
    <div className="relative max-w-md space-y-6">
      <div>
        <ScrambleHover>Hover over this text!</ScrambleHover>
        <div>
          <ScrambleHover
            duration={1200}
            speed={50}
            className="text-brand font-mono text-lg"
          >
            Custom duration and speed example
          </ScrambleHover>
        </div>
        <div>
          <ScrambleHover className="text-2xl font-semibold">
            Try me too!
          </ScrambleHover>
        </div>
      </div>
    </div>
  )
}
