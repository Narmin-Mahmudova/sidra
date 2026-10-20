"use client";

import Link from "next/link";
import { useState } from "react";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";

const links = ["Jewelry", "Collections", "Brands", "Gifts", "Stories"];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <div className="mx-auto flex h-14 max-w-[1280px] items-center gap-4 px-4 sm:px-6 lg:h-16 lg:px-8">
        <button className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link href="/" className="mx-auto font-serif text-2xl tracking-[0.12em] lg:mx-0">SIDRA</Link>

        <nav aria-label="Main" className="hidden gap-5 text-xs font-medium lg:flex">
          {links.map((l) => <Link key={l} href={`/${l.toLowerCase()}`}>{l}</Link>)}
        </nav>

        <label className="relative hidden flex-1 lg:block">
          <span className="sr-only">Search</span>
          <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-muted" aria-hidden />
          <input type="search" placeholder="Search for jewelry, brands, or inspiration…"
            className="h-9 w-full rounded-full bg-sand pl-9 pr-3 text-xs placeholder:text-muted" />
        </label>

        <div className="flex items-center gap-4 text-xs">
          <Search className="h-5 w-5 lg:hidden" aria-hidden />
          <Link href="/account/wishlist" className="hidden items-center gap-1 lg:flex"><Heart className="h-4 w-4" aria-hidden />Wishlist</Link>
          <Link href="/account" className="hidden items-center gap-1 lg:flex"><User className="h-4 w-4" aria-hidden />Account</Link>
          <Link href="/cart" aria-label="Cart, 0 items" className="relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-1.5 -top-1.5 hidden h-3.5 w-3.5 place-items-center rounded-full bg-ink text-[9px] text-white sm:grid">0</span>
          </Link>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-line bg-white px-4 py-3 lg:hidden">
          <ul className="space-y-3 text-sm">
            {links.map((l) => <li key={l}><Link href={`/${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</Link></li>)}
          </ul>
        </nav>
      )}
    </header>
  );
}