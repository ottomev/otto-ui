import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import SparkbitesIcon from "@/assets/images/sparkbites.png"

import { Button } from "@/components/button"
import Logo from "@/components/logo"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import SidebarLinkClient from "./SidebarLinkClient"

export async function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5 [&>h1]:text-2xl [&>svg]:size-auto [&>svg]:h-6 [&>span]:!text-2xl flex items-center gap-1"
            >
              <Link href="/" title="home" aria-label="Home">
                <Logo />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarLinkClient />
      </SidebarContent>
      <SidebarFooter>
        <Button asChild variant="candy" size="sm">
          <Link
            href="https://github.com/educlopez/ottoui/issues/new/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Report an Issue</span>
          </Link>
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}
