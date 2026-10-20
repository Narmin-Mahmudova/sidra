import Link from "next/link";
import { ArrowRight, ChevronRight, CreditCard, Lock, MapPin, User } from "lucide-react";
import { user } from "./data";

interface Tile { title: string; href: string; icon: React.ElementType; action: string; lines: React.ReactNode[]; }

const Row = ({ label, badge }: { label: string; badge: string }) => (
  <span className="flex items-center justify-between gap-2">
    <span>{label}</span>
    <span className="rounded bg-ok-bg px-1.5 py-0.5 text-[10px] text-ok-fg">{badge}</span>
  </span>
);

const tiles: Tile[] = [
  { title: "Addresses", href: "/account/addresses", icon: MapPin, action: "Manage Addresses",
    lines: [<span key="a" className="text-muted">Default address</span>, "Yıldız Mah, Çırağan Cad. No:12 Daire:5", "Beşiktaş, İstanbul 34349, Türkiye"] },
  { title: "Payment Methods", href: "/account/payments", icon: CreditCard, action: "Manage Payments",
    lines: [<span key="c" className="flex items-center gap-2 font-medium"><span aria-label="Mastercard" className="relative h-4 w-6"><i className="absolute left-0 h-4 w-4 rounded-full bg-red-500"/><i className="absolute right-0 h-4 w-4 rounded-full bg-orange-400/90"/></span>•••• 3456</span>, <span key="d" className="text-muted">Default payment method</span>] },
  { title: "Profile & Preferences", href: "/account/profile", icon: User, action: "Edit Profile",
    lines: [<b key="n" className="font-medium">{user.name}</b>, user.email, <span key="l" className="text-muted">Language: English | Currency: USD</span>] },
  { title: "Security", href: "/account/security", icon: Lock, action: "Manage Security",
    lines: [<Row key="p" label="Password" badge="Updated recently" />, <Row key="t" label="Two-step verification" badge="Enabled" />] },
];


export default function ManagementGrid() {
  return (
    <section aria-labelledby="mgmt" className="mt-6">
      <h2 id="mgmt" className="mb-3 hidden font-serif text-xl sm:block">Account Management</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {tiles.map(({ title, href, icon: Icon, action, lines }) => (
          <Link key={title} href={href}
            className="group flex items-center gap-3 rounded-lg border border-line bg-white p-4 sm:items-start sm:p-5">
            <Icon className="h-5 w-5 shrink-0 text-ink/80" aria-hidden />
            <div className="min-w-0 flex-1 text-xs leading-5">
              <h3 className="font-serif text-base">{title}</h3>
              {/* Mobile shows only the first summary lines to stay compact */}
              <div className="mt-1 space-y-0.5 [&>*:nth-child(n+3)]:hidden sm:[&>*:nth-child(n+3)]:block">
                {lines.map((l, i) => <div key={i}>{l}</div>)}
              </div>
              <span className="mt-3 hidden items-center gap-1 font-medium group-hover:underline sm:inline-flex">
                {action} <ArrowRight className="h-3 w-3" aria-hidden />
              </span>
            </div>
            <ChevronRight className="h-4 w-4 text-muted sm:hidden" aria-hidden />
          </Link>
        ))}
      </div>
    </section>
  );
}