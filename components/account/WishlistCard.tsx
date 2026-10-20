import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, btnOutline } from "./Card";
import Thumb from "./Thumb";
import { wishlistPreview } from "./data";

export default function WishlistCard() {
  return (
    <Card title="Your Wishlist" href="/account/wishlist">
      <p className="text-sm font-semibold">8 saved pieces</p>
      <p className="mt-1 hidden text-xs text-muted lg:block">Pieces that inspire your next chapter.</p>
      <ul className="mt-4 grid grid-cols-3 gap-3">
        {wishlistPreview.map((w) => (
          <li key={w.id}><Thumb src={w.image} alt={w.name} className="aspect-square w-full" /></li>
        ))}
      </ul>
      <Link href="/account/wishlist" className={`${btnOutline} mt-4 w-full`}>View Wishlist <ArrowRight className="h-3 w-3" aria-hidden /></Link>
    </Card>
  );
}