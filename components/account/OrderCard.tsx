import Link from "next/link";
import { ArrowRight, CircleDot } from "lucide-react";
import { Card, btnDark, btnOutline } from "./Card";
import Thumb from "./Thumb";
import { fmt } from "./data";
import type { Order } from "./types";

export default function OrderCard({ order }: { order: Order }) {
  return (
    <Card title="Recent Order" href="/account/orders" linkLabel="View all orders">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="flex items-center gap-2 text-sm font-semibold">
            #{order.id}
            <span className="inline-flex items-center gap-1 rounded bg-ok-bg px-1.5 py-0.5 text-[10px] font-medium text-ok-fg">
              <CircleDot className="h-2.5 w-2.5" aria-hidden /> {order.status}
            </span>
          </p>
          <p className="mt-1 text-xs text-muted">Placed on {order.placedOn}</p>
        </div>
        <p className="hidden text-right text-xs text-muted sm:block">
          Expected delivery
          <span className="block font-serif text-lg text-ink">{order.eta}</span>
        </p>
      </div>

      <ul className="mt-4 flex gap-3">
        {order.items.map((i) => (
          <li key={i.id}><Thumb src={i.image} alt={i.name} className="h-20 w-20 sm:h-24 sm:w-24" /></li>
        ))}
      </ul>

      <div className="mt-3 flex items-end justify-between text-xs text-muted">
        <span>{order.items.length} items</span>
        <span className="text-sm font-semibold text-ink">{fmt(order.total)}</span>
      </div>
      <p className="mt-1 text-xs text-muted sm:hidden">Expected delivery: <b className="text-ink">{order.eta}</b></p>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <Link href={`/account/orders/${order.id}/track`} className={btnDark}>Track Order <ArrowRight className="h-3 w-3" aria-hidden /></Link>
        <Link href={`/account/orders/${order.id}`} className={btnOutline}>
          <span className="sm:hidden">Details</span><span className="hidden sm:inline">View Details</span>
        </Link>
      </div>
    </Card>
  );
}