import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import Thumb from "./Thumb";
import { brands, fmt, recentlyViewed } from "./data";

const ViewAll = ({ href }: { href: string }) => (
  <Link href={href} className="inline-flex items-center gap-1 text-xs text-muted hover:text-ink">
    View all <ArrowRight className="h-3 w-3" aria-hidden />
  </Link>
);

export function FollowedBrands() {
  return (
    <section aria-labelledby="brands" className="mt-6">
      <div className="mb-3 flex items-baseline justify-between">
        <h2 id="brands" className="font-serif text-xl">Followed Brands</h2>
        <ViewAll href="/account/brands" />
      </div>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {brands.map((b, i) => (
          <li key={b.id} className={i === 2 ? "hidden sm:block" : ""}>
            <Link href={`/brands/${b.id}`} className="relative flex h-24 items-center justify-end overflow-hidden rounded-lg bg-sand p-3 sm:h-28">
              <div className="absolute inset-0"><Thumb src={b.image} alt="" className="h-full w-full rounded-none" /></div>
              <span className="relative text-right font-serif text-base leading-tight">
                {b.name}
                <span className="hidden text-[10px] text-muted lg:block">{b.tagline}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function RecentlyViewed() {
  return (
    <section aria-labelledby="recent" className="mt-6 hidden lg:block">
      <div className="mb-3 flex items-baseline justify-between">
        <h2 id="recent" className="font-serif text-xl">Recently Viewed</h2>
        <ViewAll href="/account/recently-viewed" />
      </div>
      <ul className="grid grid-cols-4 gap-3">
        {recentlyViewed.map((p) => (
          <li key={p.id} className="relative rounded-lg border border-line bg-white p-2">
            <button aria-label={`Save ${p.name}`} className="absolute right-3 top-3 z-10 text-ink/70 hover:text-copper">
              <Heart className="h-4 w-4" />
            </button>
            <Thumb src={p.image} alt={p.name} className="aspect-[4/3] w-full" />
            <div className="p-1 pt-2 text-[10px] text-muted">
              <p>{p.brand}</p>
              <p className="text-xs text-ink">{p.name}</p>
              <p>{p.material}</p>
              <p className="mt-1 text-sm font-semibold text-ink">{fmt(p.price)}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}