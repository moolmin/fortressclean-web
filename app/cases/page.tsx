import type { Metadata } from "next";
import { GallerySection } from "@/components/fortressclean-home/quote-gallery-sections";
import { SiteFooter } from "@/components/fortressclean-home/site-footer";
import { SiteHeader } from "@/components/fortressclean-home/site-header";
import { buildMetadata } from "@/src/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "작업 사례",
  description:
    "에어컨, 세탁기, 주차장, 주방 후드 등 포트리스 클린의 실제 작업 전후 사례를 확인해보세요.",
  path: "/cases",
  image: "/images/cases/aircon-after.png",
  keywords: ["청소 작업사례", "에어컨 청소 사례", "세탁기 청소 사례"],
});

export default function CasesPage() {
  return (
    <div className="bg-white font-sans text-gray-800 antialiased">
      <SiteHeader />
      <main className="pt-20">
        <GallerySection />
      </main>
      <SiteFooter />
    </div>
  );
}
