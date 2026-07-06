import type { Metadata } from "next";
import { QuoteGuidePageContent } from "@/components/fortressclean-home/quote-guide-page";
import { buildMetadata } from "@/src/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "견적 안내",
  description:
    "가전 홈케어 사진 견적과 종합청소 방문 견적 방식, 상담 시 필요한 정보와 견적 기준을 안내합니다.",
  path: "/quote-guide",
  keywords: ["청소 견적", "방문 견적", "사진 견적", "가전 홈케어 견적"],
});

export default function QuoteGuidePage() {
  return <QuoteGuidePageContent />;
}
