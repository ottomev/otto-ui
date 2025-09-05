"use client"

import { useState } from "react"

import AnimatedProgressBar from "@/components/ottoui/ui/AnimatedProgressBar"

export default function AnimatedProgressBarDemo() {
  const [value, setValue] = useState(40)
  const [refreshKey, setRefreshKey] = useState(0)
  return (
    <div className="relative max-w-xs space-y-6">
      <AnimatedProgressBar
        key={refreshKey}
        value={value}
        label={`Progress: ${value}%`}
      />
      <AnimatedProgressBar
        key={refreshKey + 1000}
        value={value}
        color="#22d3ee"
        label="Custom Color"
      />
      <div className="mt-4 flex gap-2">
        <button
          className="bg-background text-foreground rounded border px-4 py-2"
          onClick={() => setValue((v) => (v >= 100 ? 0 : v + 10))}
        >
          Increase
        </button>
      </div>
    </div>
  )
}
