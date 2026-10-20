"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Heart, Home, Search, User } from "lucide-react";
import { user } from "./data";

export function MobileProfileLink() {
  return (
    <Link href="/account/profile" className="flex items-center gap-3 rounded-lg border border-line bg-white p-3 md:hidden">
      <span className="grid h-10 w-10 place-items-center rounded-full bg-sand"><User className="h-5 w-5" aria-hidden /></span>
      <span className="flex-1 text-xs"><b className="block font-serif text-base font-medium">{user.name}</b>{user.email}</span>
      <ChevronRight className="h-4 w-4 text-muted" aria-hidden />
    </Link>
  );
}

export function BottomNav() {
  const path = usePathname();
  const tabs = [
    { label: "Home", href: "/", icon: Home },
    { label: "Search", href: "/search", icon: Search },
    { label: "Wishlist", href: "/account/wishlist", icon: Heart },
    { label: "Account", href: "/account", icon: User },
  ];
  return (
    <nav aria-label="Primary" className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-white pb-[env(safe-area-inset-bottom)] md:hidden">
      <ul className="grid grid-cols-4">
        {tabs.map(({ label, href, icon: Icon }) => {
          const active = href === "/" ? path === "/" : path.startsWith(href) && (href !== "/account" || !path.includes("wishlist"));
          return (
            <li key={label}>
              <Link href={href} className={`flex flex-col items-center gap-1 py-2 text-[10px] ${active ? "font-semibold text-ink" : "text-muted"}`}>
                <Icon className="h-5 w-5" fill={active ? "currentColor" : "none"} aria-hidden /> {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}