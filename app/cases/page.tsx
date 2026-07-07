import type { Metadata } from "next";
import Image from "next/image";
import { GALLERY_INTRO, GALLERY_ITEMS } from "@/components/fortressclean-home/content";
import { Sparkle } from "@/components/fortressclean-home/icons";
import { PhosphorIcon } from "@/components/fortressclean-home/phosphor-icon";
import { RevealObserver } from "@/components/fortressclean-home/reveal-observer";
import { SectionHeading } from "@/components/fortressclean-home/shared";
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

function CaseCard({ item }: { item: (typeof GALLERY_ITEMS)[number] }) {
  return (
    <div className="reveal group overflow-hidden rounded-3xl border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative flex h-64 bg-gray-100">
        <div className="relative h-full w-1/2 overflow-hidden border-r border-white/50">
          <Image
            src={item.beforeSrc}
            alt={item.beforeAlt}
            fill
            sizes="(max-width: 768px) 50vw, 300px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gray-950/18" />
        </div>
        <div className="relative h-full w-1/2 overflow-hidden">
          <Image
            src={item.afterSrc}
            alt={item.afterAlt}
            fill
            sizes="(max-width: 768px) 50vw, 300px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-950/10" />
        </div>
      </div>
      <div className="bg-white p-6">
        <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
      </div>
    </div>
  );
}

function CasesGallery() {
  return (
    <section id="gallery" className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading {...GALLERY_INTRO} align="left" className="mb-12" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {GALLERY_ITEMS.map((item) => (
            <CaseCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CasesPage() {
  return (
    <>
      <RevealObserver />
      <div className="bg-white font-sans text-gray-800 antialiased">
        <SiteHeader />
        <main>
          <section className="relative overflow-hidden bg-brand-900 px-6 pt-40 pb-24 text-white">
            <div className="relative z-10 mx-auto max-w-[1200px]">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-700 bg-brand-800/50 px-4 py-1.5 text-sm font-bold text-brand-100 backdrop-blur-sm">
                <PhosphorIcon
                  icon={Sparkle}
                  weight="fill"
                  className="text-brand-300"
                />
                WORK CASES
              </div>
              <h1 className="mb-6 text-5xl leading-[1.3] font-bold tracking-tight text-white lg:text-6xl">
                작업사례
              </h1>
              <p className="mb-10 max-w-2xl text-xl leading-relaxed font-medium text-brand-100">
                에어컨, 세탁기, 주차장, 주방 후드 등 실제 현장에서 진행한
                <br />
                작업 전후 사례를 확인해보세요.
              </p>
            </div>
          </section>
          <CasesGallery />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
