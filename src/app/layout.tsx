import type { Metadata } from "next"
import { Asap, Inter } from "next/font/google"

import { ottoUISchema } from "@/app/utils/schema"

import "./styles/globals.css"

import { VercelToolbar } from "@vercel/toolbar/next"
import { ThemeProvider } from "next-themes"

import { Analytics } from "@/components/analytics"
import { FloatNav } from "@/components/floatnav/floatNav"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})
const asap = Asap({
  subsets: ["latin"],
  variable: "--font-asap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://ottoui.dev"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Otto UI - React UI with TailwindCSS & Motion Animations",
    template: "%s | Otto UI",
  },
  description:
    "Free React UI components built with TailwindCSS and Framer Motion. Customizable, responsive, dark mode-ready, and perfect for modern UIs.",
  keywords: [
    "react components",
    "tailwindcss ui",
    "motion animations",
    "framer motion",
    "shadcn/ui",
    "react ui library",
    "customizable components",
    "animated ui components",
    "dark mode components",
  ],
  openGraph: {
    title: "Otto UI - React UI with TailwindCSS & Motion Animations",
    description:
      "Explore smooth animated UI components for React, powered by TailwindCSS and Framer Motion.",
    url: "https://ottoui.dev",
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
    title: "Otto UI - React UI with TailwindCSS & Motion Animations",
    description:
      "Explore smooth animated UI components for React, powered by TailwindCSS and Framer Motion.",
    card: "summary_large_image",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://ottoui.dev/og.jpg",
        alt: "Otto UI Cover",
      },
    ],
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

export default function RootLayout({ children }: ComponentPageLayout) {
  const shouldInjectToolbar = process.env.NODE_ENV === "development"
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ottoUISchema) }}
        />
      </head>
      <body
        className={`bg-black antialiased transition-all ${asap.variable} ${inter.className}`}
      >
        <ThemeProvider 
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          <FloatNav />
          {children}
          <Analytics />
        </ThemeProvider>
        {shouldInjectToolbar && <VercelToolbar />}
      </body>
    </html>
  )
}
