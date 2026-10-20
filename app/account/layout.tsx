import Hero from "@/components/account/Hero";
import { Sidebar, TabletTabs } from "@/components/account/Sidebar";
import { BottomNav, MobileProfileLink } from "@/components/account/MobileChrome";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";


export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <Hero />
      <div className="mx-auto flex max-w-[1280px] gap-8 px-4 py-6 sm:px-6 lg:px-8">
        <Sidebar />
        <main className="min-w-0 flex-1 space-y-4">
          <MobileProfileLink />
          <TabletTabs />
          {children}
        </main>
      </div>
      <SiteFooter />
      <BottomNav />
    </>
  );
}