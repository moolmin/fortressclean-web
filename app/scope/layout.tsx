import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, getAbsoluteUrl } from "@/src/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "작업 범위",
  description:
    "에어컨, 세탁기, 공기청정기, 냉장고 홈케어부터 주거·상업·건물·시설 청소까지 포트리스 클린의 작업 범위를 확인해보세요.",
  path: "/scope",
  image: "/images/scope/scope-hero.jpg",
  keywords: [
    "청소 작업범위",
    "가전 홈케어",
    "건물청소",
    "상업공간 청소",
    "시설청소",
  ],
});

export default function ScopeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "포트리스 클린 서비스 범위",
    url: getAbsoluteUrl("/scope"),
    itemListElement: [
      "에어컨 청소",
      "세탁기 청소",
      "공기청정기 청소",
      "냉장고 청소",
      "주거 청소",
      "입주·이사 청소",
      "정기 관리 청소",
      "상업 공간 청소",
      "건물·공용공간 청소",
      "시설·단체 청소",
    ].map((name, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
    })),
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      {children}
    </>
  );
}
