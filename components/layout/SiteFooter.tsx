import Link from "next/link";
import { BadgeCheck, Globe, RotateCcw, ShieldCheck, Truck } from "lucide-react";

const perks = [
  { icon: ShieldCheck, title: "Secure Payments", text: "Your information is encrypted" },
  { icon: Truck, title: "Global Delivery", text: "To 100+ countries" },
  { icon: RotateCcw, title: "Easy Returns", text: "Hassle-free within 30 days" },
  { icon: BadgeCheck, title: "Authenticity Guaranteed", text: "Every piece is verified" },
];

const columns = {
  Help: ["Contact Us", "Shipping", "Returns", "Size Guide", "Jewellery Care"],
  "Our Story": ["About Sidra", "Sustainability", "Press", "Careers"],
  "For Businesses": ["Sell on Sidra", "Partnerships", "Affiliates"],
};

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <rect x="2" y="5" width="20" height="14" rx="4" fill="currentColor" />
        <path d="M10 9l5 3-5 3z" fill="#fff" />
      </svg>
    ),
  },
  {
    label: "Pinterest",
    href: "https://pinterest.com",
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5">
        <circle cx="12" cy="12" r="10" fill="currentColor" />
        <text x="12" y="17" textAnchor="middle" fontSize="14" fontWeight="700" fontFamily="Georgia, serif" fill="#fff">P</text>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <rect x="3" y="9" width="4" height="12" />
        <circle cx="5" cy="5" r="2.2" />
        <path d="M10 9h3.8v1.8c.6-1.1 1.9-2.1 3.9-2.1 3.6 0 4.3 2.4 4.3 5.5V21h-4v-5.8c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V21h-4z" />
      </svg>
    ),
  },
];

export default function SiteFooter() {
  return (
    <footer className="mt-10 border-t border-line bg-white pb-16 md:pb-0">
      <ul className="mx-auto hidden max-w-[1280px] grid-cols-4 gap-4 border-b border-line px-6 py-5 md:grid lg:px-8">
        {perks.map(({ icon: Icon, title, text }) => (
          <li key={title} className="flex flex-col items-center gap-1 text-center text-[10px] text-muted lg:flex-row lg:gap-3 lg:text-left">
            <Icon className="h-6 w-6 text-ink" aria-hidden />
            <span><b className="block text-xs font-medium text-ink">{title}</b>{text}</span>
          </li>
        ))}
      </ul>

      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-4 py-8 sm:px-6 lg:flex-row lg:justify-between lg:px-8">
        <p className="font-serif text-2xl tracking-[0.12em]">SIDRA</p>

        <div className="hidden gap-12 text-xs text-muted sm:flex">
          {Object.entries(columns).map(([h, items]) => (
            <div key={h}>
              <p className="mb-2 font-medium text-ink">{h}</p>
              <ul className="space-y-1.5">{items.map((i) => <li key={i}><Link href="#">{i}</Link></li>)}</ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 lg:items-end lg:justify-between">
          <ul className="flex items-center gap-5 text-ink">
            {socials.map(({ label, href, svg }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="block hover:text-copper">
                  {svg}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 text-[10px] text-muted">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Cookies</Link>
            <span className="inline-flex items-center gap-1"><Globe className="h-3 w-3" aria-hidden />EN</span>
          </div>
        </div>
      </div>

      <p className="px-4 pb-6 text-center text-[10px] text-muted lg:px-8 lg:text-left">© 2026 Sidra. All rights reserved.</p>
    </footer>
  );
}