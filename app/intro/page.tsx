import type { Metadata } from "next";
import { IntroPageContent } from "@/components/fortressclean-home/intro-page";
import { buildMetadata } from "@/src/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "회사 소개",
  description:
    "포트리스 클린의 서비스 철학, 운영 방식, 고객을 대하는 기준을 소개합니다. 정직함과 책임감을 바탕으로 수도권 청소 서비스를 제공합니다.",
  path: "/intro",
  keywords: ["포트리스 클린 소개", "청소업체 소개", "부천 청소업체"],
});

export default function IntroPage() {
  return <IntroPageContent />;
}
