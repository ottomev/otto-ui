"use client"

import Link from "next/link"
import { Github } from "lucide-react"

export function GithubStars() {
  return (
    <Link
      href="https://github.com/educlopez/ottoui"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-brand flex items-center gap-2 text-sm font-medium transition-colors"
    >
      <Github className="size-4" />
      <span>educlopez/ottoui</span>
    </Link>
  )
}
