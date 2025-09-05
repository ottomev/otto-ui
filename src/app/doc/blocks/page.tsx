import * as React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, PackagePlus, Sparkles, User } from "lucide-react"

import { Button } from "@/components/button"
import { Breadcrumbs } from "@/components/doc/breadcrumbs"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { heroBlocks } from "@/app/doc/data/block-hero"
import { pricingBlocks } from "@/app/doc/data/block-pricing"
import { testimonialBlocks } from "@/app/doc/data/block-testimonials"

export const metadata: Metadata = {
  title: "Blocks",
  description:
    "Pre-built page sections and layouts for faster development with TailwindCSS and Framer Motion.",
  alternates: {
    canonical: "/doc/blocks",
  },
  openGraph: {
    title: "Blocks - OttoUI",
    description:
      "Pre-built page sections and layouts for faster development with TailwindCSS and Framer Motion.",
    type: "website",
    url: "/doc/blocks",
    images: [
      {
        width: 1200,
        height: 630,
        url: "/api/og?title=Blocks&description=Pre-built page sections and layouts for faster development with TailwindCSS and Framer Motion",
        alt: "OttoUI Blocks showcase",
      },
    ],
    siteName: "OttoUI",
  },
  twitter: {
    title: "Blocks - OttoUI",
    description:
      "Pre-built page sections and layouts for faster development with TailwindCSS and Framer Motion.",
    card: "summary_large_image",
    images: [
      {
        width: 1200,
        height: 630,
        url: "/api/og?title=Blocks&description=Pre-built page sections and layouts for faster development with TailwindCSS and Framer Motion",
        alt: "OttoUI Blocks showcase",
      },
    ],
    site: "@educalvolpz",
    creator: "@educalvolpz",
  },
}

export default function BlocksPage() {
  const iconMap = {
    Sparkles: Sparkles,
    PackagePlus: PackagePlus,
    User: User,
  }

  const blockCategories = [
    {
      name: "Hero",
      description:
        "A collection of animated hero sections for landing pages, featuring modern layouts and engaging effects.",
      count: heroBlocks.length,
      href: "/doc/blocks/hero",
      icon: "Sparkles",
      color:
        "bg-gradient-to-r from-brand to-brand-secondary border border-brand-secondary",
    },
    {
      name: "Pricing",
      description:
        "Beautiful, responsive pricing sections to showcase your product plans with style and clarity.",
      count: pricingBlocks.length,
      href: "/doc/blocks/pricing",
      icon: "PackagePlus",
      color:
        "bg-gradient-to-r from-brand to-brand-secondary border border-brand-secondary",
    },
    {
      name: "Testimonials",
      description:
        "Stylish testimonial sections to highlight user feedback and build trust with your audience.",
      count: testimonialBlocks.length,
      href: "/doc/blocks/testimonial",
      icon: "User",
      color:
        "bg-gradient-to-r from-brand to-brand-secondary border border-brand-secondary",
    },
  ]

  return (
    <div className="container mx-auto max-w-4xl space-y-4 px-4 py-8">
      <Breadcrumbs
        category="Documentation"
        groupName="Blocks"
        backLink="/doc"
        currentPage="Overview"
      />

      <div className="mb-8">
        <h1
          className="text-4xl font-bold tracking-tight"
          data-table-content="Blocks"
          data-level="1"
        >
          Blocks
        </h1>
        <p className="text-foreground/70 mt-4 text-lg">
          Pre-built page sections and layouts for faster development with
          TailwindCSS and Framer Motion. Each block is designed to be easily
          customizable and ready to use in your projects.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {blockCategories.map((category) => (
          <Card
            key={category.name}
            className="group !shadow-none transition-all duration-200"
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-10 w-10 rounded-lg ${category.color} flex items-center justify-center`}
                    >
                      {React.createElement(
                        iconMap[category.icon as keyof typeof iconMap],
                        {
                          className: "h-5 w-5 text-white",
                        }
                      )}
                    </div>
                    <div className="flex flex-row gap-2">
                      <CardTitle
                        className="group-hover:text-brand text-xl transition-colors"
                        data-table-content={category.name}
                        data-level="2"
                      >
                        {category.name}
                      </CardTitle>
                      <div className="mt-1 flex items-center gap-2">
                        <Badge
                          variant="secondary"
                          className="bg-primary text-foreground border-border text-xs"
                        >
                          {category.count} blocks
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <CardDescription className="text-foreground/70 mb-6 text-sm">
                {category.description}
              </CardDescription>

              <div className="flex items-center justify-between">
                <div className="text-foreground text-xs">
                  Ready to use • Fully customizable
                </div>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="group-hover:bg-brand/10 group-hover:text-brand transition-colors"
                >
                  <Link href={category.href}>
                    View {category.name} Blocks
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-primary mt-12 rounded-lg border p-6">
        <h3 className="mb-2 text-lg font-semibold">Looking for more?</h3>
        <p className="text-foreground/70 mb-4">
          Explore our individual components for more UI elements and
          interactions.
        </p>
        <div className="flex gap-4">
          <Button asChild variant="outline">
            <Link href="/doc/components">Advanced Components</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/doc/basic">Basic Components</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/doc/text">Text Components</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
