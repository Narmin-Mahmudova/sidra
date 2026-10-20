import ManagementGrid from "@/components/account/ManagementGrid";
import OrderCard from "@/components/account/OrderCard";
import { FollowedBrands, RecentlyViewed } from "@/components/account/ProductStrips";
import WishlistCard from "@/components/account/WishlistCard";
import { recentOrder } from "@/components/account/data";


export default function AccountOverviewPage() {
  return (
    <>
      <div className="grid gap-4 lg:grid-cols-[1.35fr_1fr]">
        <OrderCard order={recentOrder} />
        <WishlistCard />
      </div>
      <ManagementGrid />
      <FollowedBrands />
      <RecentlyViewed />
    </>
  );
}