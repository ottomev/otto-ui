import { Metadata } from "next"

import { AppSidebar } from "@/components/doc/sidebar/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

import Header from "../../components/doc/header"
import { DocLayoutClient } from "./DocLayoutClient"

export const metadata: Metadata = {
  title: {
    default: "Docs - TailwindCSS + Framer Motion Components for React",
    template: "%s | Otto UI",
  },
  alternates: {
    canonical: `/doc`,
  },
  description:
    "Documentation for Otto UI - learn how to use free React components styled with TailwindCSS and animated with Framer Motion.",
  keywords: [
    "react ui documentation",
    "tailwindcss components",
    "framer motion docs",
    "animated components react",
    "ottoui",
    "component usage guide",
    "interactive react ui",
  ],
  openGraph: {
    title: "Otto UI Docs - TailwindCSS + Motion Components",
    description:
      "Explore the Otto UI documentation. Learn how to implement customizable React components with TailwindCSS and Framer Motion.",
    url: "https://ottoui.dev/doc",
    siteName: "Otto UI",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://ottoui.dev/og.jpg",
        alt: "Otto UI Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Otto UI Docs - TailwindCSS + Motion Components for React",
    description:
      "Official documentation for Otto UI. Learn how to use beautifully animated React UI components built with TailwindCSS and Framer Motion.",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://ottoui.dev/og.jpg",
        alt: "Otto UI Cover",
      },
    ],
    card: "summary_large_image",
    site: "@educalvolpz",
    creator: "@educalvolpz",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

type ComponentPageLayout = {
  children: React.ReactNode
}

export default function ComponentPageLayout({ children }: ComponentPageLayout) {
  return (
    <div className={`bg-black antialiased transition`}>
      <SidebarProvider
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 64)",
          } as React.CSSProperties
        }
      >
        <AppSidebar variant="inset" />
        <SidebarInset className="border md:peer-data-[variant=inset]:shadow-none">
          <Header />
          <DocLayoutClient>{children}</DocLayoutClient>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
