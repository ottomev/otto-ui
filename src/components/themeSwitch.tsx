"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"

export const ThemeSwitch = ({ className }: { className?: string }) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  let otherTheme = theme === "dark" ? "light" : "dark"

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  const handleButtonClick = () => {
    setTheme(otherTheme)
  }

  return (
    <div
      className={cn(
        "flex h-auto w-auto cursor-pointer items-center justify-center gap-4 p-1",
        className
      )}
      aria-label={mounted ? `Switch to ${otherTheme} theme` : "Toggle theme"}
      onClick={handleButtonClick}
    >
      <Sun size={20} className="transition dark:hidden" />
      <Moon size={20} className="hidden transition dark:block" />
    </div>
  )
}
