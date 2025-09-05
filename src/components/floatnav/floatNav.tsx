"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Book,
  Bot,
  ChevronsUpDown,
  Cuboid,
  Github,
  Home,
  LayoutDashboard,
  ListChecks,
} from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import useMeasure from "react-use-measure"

import { ThemeSwitch } from "@/components/themeSwitch"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/tooltip"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { basicComponents } from "@/app/doc/data/basicComponents"
import { heroBlocks } from "@/app/doc/data/block-hero"
import { pricingBlocks } from "@/app/doc/data/block-pricing"
import { testimonialBlocks } from "@/app/doc/data/block-testimonials"
// Utility: Map pathname to human-readable page name
import { components } from "@/app/doc/data/components"
import { textComponents } from "@/app/doc/data/textComponentes"

import { ColorPickerFloatNav } from "../ColorPickerFloatNav"
import { Separator } from "../ui/separator"

function getPageTitle(pathname: string): string {
  if (pathname === "/") return "Home"
  if (pathname === "/doc") return "Documentation"
  if (pathname === "/doc/changelog") return "Changelog"
  if (pathname === "/doc/mcp") return "MCP Server"
  // /doc/basic/[slug]
  if (pathname.startsWith("/doc/basic/")) {
    const slug = pathname.split("/doc/basic/")[1]
    const comp = basicComponents.find((c) => c.slug === slug)
    return comp?.componentTitle || "Basic Component"
  }
  // /doc/text/[slug]
  if (pathname.startsWith("/doc/text/")) {
    const slug = pathname.split("/doc/text/")[1]
    const comp = textComponents.find((c) => c.slug === slug)
    return comp?.componentTitle || "Text Component"
  }
  // /doc/components/[slug]
  if (pathname.startsWith("/doc/components/")) {
    const slug = pathname.split("/doc/components/")[1]
    const comp = components.find((c) => c.slug === slug)
    return comp?.componentTitle || "Component"
  }
  // /doc/blocks/[group]
  if (pathname.startsWith("/doc/blocks/")) {
    const group = pathname.split("/doc/blocks/")[1]
    if (group === "hero") return heroBlocks[0]?.title || "Hero Block"
    if (group === "pricing") return pricingBlocks[0]?.title || "Pricing Block"
    if (group === "testimonial")
      return testimonialBlocks[0]?.title || "Testimonial Block"
    return group.charAt(0).toUpperCase() + group.slice(1) + " Block"
  }
  return (
    pathname
      .replace(/^\//, "")
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase()) || "Page"
  )
}

export function FloatNav() {
  const pathname = usePathname()
  const pageTitle = getPageTitle(pathname)
  const [ref, bounds] = useMeasure()

  // Dropdown options
  const navOptions = [
    { label: "Home", href: "/", icon: <Home size={16} /> },
    { label: "Getting Started", href: "/doc", icon: <Book size={16} /> },
    {
      label: "Changelog",
      href: "/doc/changelog",
      icon: <ListChecks size={16} />,
    },
    {
      label: "MCP",
      href: "/doc/mcp",
      icon: <Bot size={16} />,
    },
    {
      label: "Components",
      href: "/doc/components/apple-invites",
      icon: <LayoutDashboard size={16} />,
    },
    {
      label: "Blocks",
      href: "/doc/blocks/testimonial",
      icon: <Cuboid size={16} />,
    },
  ]
  // Exclude current page, and hide Components link on any /doc/components/* page, Blocks link on any /doc/blocks/* page
  const filteredOptions = navOptions.filter((opt) => {
    if (opt.href === pathname) return false
    if (opt.label === "Components" && pathname.startsWith("/doc/components/"))
      return false
    if (opt.label === "Blocks" && pathname.startsWith("/doc/blocks/"))
      return false
    return true
  })

  return (
    <nav
      className="bg-background/70 text-foreground fixed bottom-5 left-1/2 z-50 flex w-fit -translate-x-1/2 flex-row items-center justify-center rounded-full border px-1 py-1 whitespace-nowrap bg-blend-luminosity shadow-xs backdrop-blur-xl transition"
      aria-label="Floating Navigation"
    >
      <TooltipProvider delayDuration={200}>
        {/* Animated Page Title + Selector */}
        <motion.div
          animate={{ width: bounds.width > 0 ? bounds.width : "auto" }}
          transition={{ type: "spring", stiffness: 350, damping: 55 }}
        >
          <div ref={ref} className="relative flex w-fit items-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="https://x.com/intent/user?screen_name=educalvolpz"
                  aria-label="Visit X Profile of educalvolpz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="float-trigger h-auto w-auto !p-2"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="X Icon"
                    fill="currentColor"
                  >
                    <path
                      fill="currentColor"
                      d="M14.773 2.5h2.545l-5.56 6.354 6.54 8.646h-5.12l-4.01-5.244-4.59 5.244H2.032l5.946-6.796L1.704 2.5h5.25l3.626 4.793L14.773 2.5zm-.893 13.477h1.41L6.19 3.943H4.676l9.204 12.034z"
                    ></path>
                  </svg>
                </Link>
              </TooltipTrigger>
              <TooltipContent className="bg-background rounded-full border px-4 py-2 text-xs shadow-xs">
                <p>Follow me on X</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="https://github.com/educlopez/ottoui"
                  aria-label="Visit GitHub Repository"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="float-trigger h-auto w-auto !p-2"
                >
                  <Github size={20} aria-hidden="true" />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="bg-background rounded-full border px-4 py-2 text-xs shadow-xs">
                <p>GitHub</p>
              </TooltipContent>
            </Tooltip>
            <div className="text-foreground text-sm font-semibold">
              <DropdownMenu>
                <DropdownMenuTrigger className="float-trigger !pr-3 !pl-4">
                  <AnimatePresence mode="popLayout" initial={false}>
                    {pageTitle.split("").map((letter, index) => (
                      <motion.div
                        initial={{ opacity: 0, filter: "blur(2px)" }}
                        animate={{
                          opacity: 1,
                          filter: "blur(0px)",
                          transition: {
                            type: "spring",
                            stiffness: 350,
                            damping: 55,
                            delay: index * 0.015,
                          },
                        }}
                        exit={{
                          opacity: 0,
                          filter: "blur(2px)",
                          transition: {
                            type: "spring",
                            stiffness: 500,
                            damping: 55,
                          },
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 55,
                        }}
                        key={index + letter + pageTitle}
                        className="inline-block"
                      >
                        {letter}
                        {letter === " " ? "\u00A0" : ""}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  <ChevronsUpDown size={16} className="ml-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent side="top" align="center">
                  {filteredOptions.map((opt) => (
                    <DropdownMenuItem key={opt.href} asChild>
                      <Link
                        href={opt.href}
                        className="flex w-full cursor-pointer items-center justify-between"
                      >
                        <span>{opt.label}</span>
                        {opt.icon}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </motion.div>
        <div className="flex items-center">
          <Tooltip>
            <TooltipTrigger>
              <ThemeSwitch className="float-trigger h-auto w-auto !p-2" />
            </TooltipTrigger>
            <TooltipContent className="bg-background rounded-full border px-4 py-2 text-xs shadow-xs">
              <p>Theme Switcher</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <span>
                <ColorPickerFloatNav />
              </span>
            </TooltipTrigger>
            <TooltipContent className="bg-background rounded-full border px-4 py-2 text-xs shadow-xs">
              <p>Color Switcher</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </nav>
  )
}
