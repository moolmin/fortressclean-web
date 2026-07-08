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

const RSS_URL = "https://rss.blog.naver.com/sanha0302.xml";
const CASE_IMAGE_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'%3E%3Cfilter id='b'%3E%3CfeGaussianBlur stdDeviation='1.2'/%3E%3C/filter%3E%3Cg filter='url(%23b)'%3E%3Crect width='12' height='8' fill='%23e5e7eb'/%3E%3Crect width='7' height='8' fill='%23d1d5db'/%3E%3Crect x='5' y='1' width='7' height='6' fill='%239ca3af' opacity='.45'/%3E%3C/g%3E%3C/svg%3E" as const;

type CaseItem = {
  title: string;
  href: string;
  category?: string;
  publishedAt?: string;
  imageSrc: string;
};

function readTag(xml: string, tag: string) {
  return (
    xml
      .match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`))?.[1]
      .replace(/^<!\[CDATA\[|\]\]>$/g, "")
      .trim() ?? ""
  );
}

function readFirstImage(html: string) {
  return html.match(/<img[^>]+src=["']([^"']+)["']/i)?.[1] ?? "";
}

async function getCaseItems(): Promise<CaseItem[]> {
  try {
    const response = await fetch(RSS_URL);

    if (!response.ok) {
      throw new Error("RSS fetch failed");
    }

    const xml = await response.text();
    const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)]
      .map((match) => {
        const itemXml = match[1];
        const description = readTag(itemXml, "description");

        return {
          title: readTag(itemXml, "title"),
          href: readTag(itemXml, "link"),
          category: readTag(itemXml, "category"),
          publishedAt: readTag(itemXml, "pubDate")
            ? new Intl.DateTimeFormat("ko-KR", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              }).format(new Date(readTag(itemXml, "pubDate")))
            : undefined,
          imageSrc: readFirstImage(description),
        };
      })
      .filter((item) => item.title && item.href && item.imageSrc);

    if (items.length > 0) {
      return items;
    }
  } catch {
    // ponytail: RSS 장애 시 빈 페이지 대신 기존 로컬 사례를 보여준다.
  }

  return GALLERY_ITEMS.map((item) => ({
    title: item.title,
    href: "/cases",
    imageSrc: item.afterSrc.src,
  }));
}

function CaseCard({ item }: { item: CaseItem }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="reveal group block overflow-hidden rounded-3xl border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="relative h-64 bg-gray-100">
        <Image
          src={item.imageSrc}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          placeholder={CASE_IMAGE_PLACEHOLDER}
          referrerPolicy="no-referrer"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-brand-950/10" />
      </div>
      <div className="bg-white p-6">
        {item.category ? (
          <p className="mb-2 text-xs font-bold tracking-wider text-brand-600">
            {item.category}
          </p>
        ) : null}
        <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
        {item.publishedAt ? (
          <p className="mt-3 text-sm text-gray-400">{item.publishedAt}</p>
        ) : null}
      </div>
    </a>
  );
}

async function CasesGallery() {
  const items = await getCaseItems();

  return (
    <section id="gallery" className="bg-white py-24">
      <div className="mx-auto max-w-300 px-6">
        <SectionHeading {...GALLERY_INTRO} align="left" className="mb-12" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {items.map((item) => (
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
            <Image
              src="/images/main/2.png"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-brand-950/55" />
            <div className="relative z-10 mx-auto max-w-300">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-700 bg-brand-800/50 px-4 py-2 text-sm font-bold text-brand-100 backdrop-blur-sm">
                <PhosphorIcon
                  icon={Sparkle}
                  weight="fill"
                  className="shrink-0 text-brand-300"
                />
                <span className="inline-flex translate-y-px items-center leading-none">
                  WORK CASES
                </span>
              </div>
              <h1 className="mb-6 text-5xl leading-[1.3] font-bold tracking-tight text-white lg:text-6xl">
                작업사례
              </h1>
              <p className="mb-10 max-w-2xl text-lg leading-relaxed font-medium text-brand-100 sm:text-xl">
                에어컨, 세탁기, 주차장, 주방 후드 등 실제 현장에서 진행한
                <br className="hidden sm:block" />
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
