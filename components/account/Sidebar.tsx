"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut, MoreHorizontal } from "lucide-react";
import { navItems } from "./data";

const isActive = (path: string, href: string) => (href === "/account" ? path === href : path.startsWith(href));

export function Sidebar() {
  const path = usePathname();
  return (
    <nav aria-label="Account" className="hidden w-56 shrink-0 lg:block">
      <ul className="space-y-1">
        {navItems.map(({ label, href, icon: Icon }) => {
          const active = isActive(path, href);
          return (
            <li key={href}>
              <Link href={href} aria-current={active ? "page" : undefined}
                className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm ${active ? "bg-sand font-medium" : "text-ink/80 hover:bg-sand/60"}`}>
                <Icon className="h-4 w-4" aria-hidden /> {label}
              </Link>
            </li>
          );
        })}
      </ul>
      <button className="mt-6 flex w-full items-center gap-3 border-t border-line px-3 py-3 text-sm text-ink/80 hover:text-ink">
        <LogOut className="h-4 w-4" aria-hidden /> Sign Out
      </button>
    </nav>
  );
}

export function TabletTabs() {
  const path = usePathname();
  const primary = [navItems[0], navItems[1], navItems[2], navItems[4]];
  return (
    <nav aria-label="Account" className="hidden rounded-lg border border-line bg-white md:block lg:hidden">
      <ul className="grid grid-cols-5">
        {primary.map(({ label, href, icon: Icon }) => {
          const active = isActive(path, href);
          return (
            <li key={href}>
              <Link href={href} className={`flex flex-col items-center gap-1 border-b-2 py-3 text-[11px] ${active ? "border-ink font-medium" : "border-transparent text-muted"}`}>
                <Icon className="h-4 w-4" aria-hidden /> {label}
              </Link>
            </li>
          );
        })}
        <li>
          <Link href="/account/menu" className="flex flex-col items-center gap-1 border-b-2 border-transparent py-3 text-[11px] text-muted">
            <MoreHorizontal className="h-4 w-4" aria-hidden /> More
          </Link>
        </li>
      </ul>
    </nav>
  );
}