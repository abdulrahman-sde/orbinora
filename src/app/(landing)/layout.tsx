import { SiteFooter } from "@/components/layout/site-footer";
import { StickyHeader } from "@/components/layout/site-nav";

export default function LandingLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <StickyHeader />
      <main className="flex-1 overflow-x-clip">{children}</main>
      <SiteFooter />
    </>
  );
}
