import Link from "next/link";
import { user } from "./data";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-sand via-[#EADFD2] to-[#D9C3AE]">
      <div aria-hidden className="absolute inset-0 bg-[url('/img/hero.jpg')] bg-cover bg-right " />
      <div className="relative mx-auto max-w-[1280px] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <nav aria-label="Breadcrumb" className="hidden text-[10px] text-muted sm:block">
          <Link href="/">Home</Link> <span aria-hidden>›</span> <span aria-current="page">My Account</span>
        </nav>
        <h1 className="mt-2 font-serif text-4xl sm:text-5xl">My Account</h1>
        <p className="mt-1 font-serif text-lg sm:text-xl">Welcome back, {user.firstName}</p>
        <p className="mt-1 max-w-xs text-xs text-muted sm:max-w-sm sm:text-sm">
          Manage your orders, wishlist and account settings all in one place.
        </p>
      </div>
    </div>
  );
}