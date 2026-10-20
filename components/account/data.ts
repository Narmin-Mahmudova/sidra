import { Box, Heart, LayoutDashboard, Tag, MapPin, CreditCard, User, Lock, Bell, HelpCircle } from "lucide-react";
import type { Brand, NavItem, Order, Product } from "./types";

export const navItems: NavItem[] = [
  { label: "Overview", href: "/account", icon: LayoutDashboard },
  { label: "Orders", href: "/account/orders", icon: Box },
  { label: "Wishlist", href: "/account/wishlist", icon: Heart },
  { label: "Followed Brands", href: "/account/brands", icon: Tag },
  { label: "Addresses", href: "/account/addresses", icon: MapPin },
  { label: "Payment Methods", href: "/account/payments", icon: CreditCard },
  { label: "Profile & Preferences", href: "/account/profile", icon: User },
  { label: "Security", href: "/account/security", icon: Lock },
  { label: "Notifications", href: "/account/notifications", icon: Bell },
  { label: "Help", href: "/account/help", icon: HelpCircle },
];

export const user = { name: "John Doe", firstName: "John", email: "you@email.com" };

export const recentOrder: Order = {
  id: "SID-284731",
  status: "Shipped",
  placedOn: "17 Sep 2026",
  eta: "25 – 28 Sep",
  total: 4222,
  items: [
    { id: "1", name: "Solitaire ring", image: "/img/ring.jpg" },
    { id: "2", name: "Hoop earrings", image: "/img/hoops.jpg" },
    { id: "3", name: "Clover necklace", image: "/img/clover.jpg" },
  ],
};

export const wishlistPreview = [
  { id: "w1", name: "Diamond ring", image: "/img/ring.jpg" },
  { id: "w2", name: "Pendant", image: "/img/pendant.jpg" },
  { id: "w3", name: "Drop earrings", image: "/img/drops.jpg" },
];

export const brands: Brand[] = [
  { id: "b1", name: "Maison Éclat", tagline: "Timeless Brilliance", image: "/img/brand-1.jpg" },
  { id: "b2", name: "Veluna", tagline: "Modern Elegance", image: "/img/brand-2.jpg" },
  { id: "b3", name: "Atelier Noor", tagline: "Rare by Design", image: "/img/brand-3.jpg" },
];

export const recentlyViewed: Product[] = [
  { id: "p1", name: "Solitaire Diamond Ring", brand: "Maison Éclat", material: "18K Gold · Diamond", price: 1250, image: "/img/recent-ring.jpg" },
  { id: "p2", name: "Éclat Hoop Earrings", brand: "Maison Éclat", material: "18K Gold", price: 1240, image: "/img/recent-hoops.jpg" },
  { id: "p3", name: "Clover Necklace", brand: "Veluna", material: "18K Gold · Malachite", price: 1420, image: "/img/recent-clover.jpg" },
  { id: "p4", name: "Infinity Ring", brand: "Atelier Noor", material: "18K Gold · Diamond", price: 1680, image: "/img/recent-infinity.jpg" },
];

export const fmt = (n: number) => `$${n.toLocaleString("en-US")}`;