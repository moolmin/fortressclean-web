import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { FAQPageContent } from "@/components/fortressclean-home/faq-page";
import { FAQ_ITEMS } from "@/components/fortressclean-home/content";
import { buildMetadata, getAbsoluteUrl } from "@/src/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "FAQ",
  description:
    "예약 방법, 견적 방식, 작업 시간, 서비스 가능 지역, A/S 보증 등 포트리스 클린 이용 전 자주 묻는 질문을 정리했습니다.",
  path: "/faq",
  keywords: ["청소 FAQ", "에어컨 청소 문의", "입주청소 견적", "청소 서비스 지역"],
});

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
    url: getAbsoluteUrl("/faq"),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <FAQPageContent />
    </>
  );
}
