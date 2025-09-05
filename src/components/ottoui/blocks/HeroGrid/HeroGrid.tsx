"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink } from "lucide-react"

import { Button, buttonVariants } from "@/components/button"
import { AnimatedGroup } from "@/components/landing/animated-group"
import { AnimatedText } from "@/components/landing/animated-text"

import styles from "./HeroGrid.module.css"

const CELL_SIZE = 120 // px
const COLORS = [
  "oklch(0.72 0.2 352.53)", // blue
  "#A764FF",
  "#4B94FD",
  "#FD4B4E",
  "#FF8743",
]

function getRandomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)]
}

function SubGrid({ idx }: { idx: number }) {
  const [hovered, setHovered] = useState<number | null>(null)
  const [cellColors, setCellColors] = useState<(string | null)[]>([
    null,
    null,
    null,
    null,
  ])
  // Add refs for leave timeouts
  const leaveTimeouts = useRef<(NodeJS.Timeout | null)[]>([
    null,
    null,
    null,
    null,
  ])

  function handleHover(cellIdx: number) {
    setHovered(cellIdx)
    // Clear any pending timeout for this cell
    if (leaveTimeouts.current[cellIdx]) {
      clearTimeout(leaveTimeouts.current[cellIdx]!)
      leaveTimeouts.current[cellIdx] = null
    }
    setCellColors((prev) =>
      prev.map((c, i) => (i === cellIdx ? getRandomColor() : c))
    )
  }
  function handleLeave(cellIdx: number) {
    setHovered(null)
    // Add a small delay before removing the color
    leaveTimeouts.current[cellIdx] = setTimeout(() => {
      setCellColors((prev) => prev.map((c, i) => (i === cellIdx ? null : c)))
      leaveTimeouts.current[cellIdx] = null
    }, 120)
  }
  // Cleanup on unmount
  useEffect(() => {
    return () => {
      leaveTimeouts.current.forEach((t) => t && clearTimeout(t))
    }
  }, [])

  return (
    <div className={styles.subgrid} style={{ pointerEvents: "none" }}>
      {[0, 1, 2, 3].map((cellIdx) => (
        <div
          key={cellIdx}
          className={styles.cell}
          style={{
            background: cellColors[cellIdx] || "transparent",
            pointerEvents: "auto",
          }}
          onMouseEnter={() => handleHover(cellIdx)}
          onMouseLeave={() => handleLeave(cellIdx)}
        />
      ))}
    </div>
  )
}

function InteractiveGrid() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [grid, setGrid] = useState({ columns: 0, rows: 0 })

  useEffect(() => {
    function updateGrid() {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect()
        setDimensions({ width, height })
        setGrid({
          columns: Math.ceil(width / CELL_SIZE),
          rows: Math.ceil(height / CELL_SIZE),
        })
      }
    }
    updateGrid()
    window.addEventListener("resize", updateGrid)
    return () => window.removeEventListener("resize", updateGrid)
  }, [])

  const total = grid.columns * grid.rows

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
      style={{ width: "100%", height: "100%" }}
    >
      <div
        className={styles.mainGrid}
        style={
          {
            gridTemplateColumns: `repeat(${grid.columns}, 1fr)`,
            gridTemplateRows: `repeat(${grid.rows}, 1fr)`,
            "--grid-cell-size": `${CELL_SIZE}px`,
            width: "100%",
            height: "100%",
          } as React.CSSProperties
        }
      >
        {Array.from({ length: total }).map((_, idx) => (
          <SubGrid key={idx} idx={idx} />
        ))}
      </div>
    </div>
  )
}

export function HeroGrid() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Interactive animated grid background */}
      <InteractiveGrid />
      <AnimatedGroup
        preset="blur-slide"
        className="pointer-events-none flex flex-col items-center gap-6 text-center"
      >
        <div>
          <AnimatedText
            as="h1"
            className="mb-6 text-2xl font-bold tracking-tight text-pretty lg:text-5xl"
          >
            Build your next project with{" "}
            <span className="text-brand">Ottoui</span>
          </AnimatedText>
          <AnimatedText
            as="p"
            className="text-muted-foreground mx-auto max-w-3xl lg:text-xl"
            delay={0.15}
          >
            Ottoui gives you the building blocks to create stunning, animated
            interfaces in minutes.
          </AnimatedText>
        </div>
        <AnimatedGroup
          preset="slide"
          className="pointer-events-auto mt-6 flex justify-center gap-3"
        >
          <Button
            variant="outline"
            className="shadow-sm transition-shadow hover:shadow"
          >
            Get Started
          </Button>
          <Button variant="candy" className="group">
            Learn more{" "}
            <ExternalLink className="ml-2 h-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </AnimatedGroup>
      </AnimatedGroup>
    </section>
  )
}

export default HeroGrid
