import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Card({ title, href, linkLabel = "View all", children, className = "" }: {
  title: string; href?: string; linkLabel?: string; children: React.ReactNode; className?: string;
}) {
  return (
    <section className={`rounded-lg border border-line bg-white p-4 sm:p-5 ${className}`}>
      <header className="mb-4 flex items-baseline justify-between">
        <h2 className="font-serif text-xl">{title}</h2>
        {href && (
          <Link href={href} className="inline-flex items-center gap-1 text-xs text-muted hover:text-ink">
            {linkLabel} <ArrowRight className="h-3 w-3" aria-hidden />
          </Link>
        )}
      </header>
      {children}
    </section>
  );
}

export const btnDark =
  "inline-flex h-10 items-center justify-center gap-2 rounded-md bg-ink px-4 text-xs font-medium text-white hover:bg-black/80";
export const btnOutline =
  "inline-flex h-10 items-center justify-center gap-2 rounded-md border border-ink/70 bg-white px-4 text-xs font-medium hover:bg-sand";