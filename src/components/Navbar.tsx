"use client"

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
 

export default function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive} >
        <Link href={"#"}>
        <MenuItem setActive={setActive} active={active} item="Home">
        
        </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
        <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/course">All Courses</HoveredLink>
            <HoveredLink href="/course">Music Theory</HoveredLink>
            <HoveredLink href="/course">Advance Composition</HoveredLink>
            <HoveredLink href="/course">Song Writing</HoveredLink>
            <HoveredLink href="/course">Music Production</HoveredLink>
            </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact Us">
        
        </MenuItem>
      </Menu>
    </div>
  )
}
