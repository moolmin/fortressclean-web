import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import FortressCleanHome from "@/components/fortressclean-home";
import { buildMetadata, getAbsoluteUrl } from "@/src/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "수도권 홈케어·종합청소 전문",
  description:
    "가전 홈케어부터 입주청소, 정기청소, 상업공간·건물 청소까지 수도권 현장에 맞춰 책임감 있게 진행하는 포트리스 클린입니다.",
  path: "/",
  keywords: [
    "포트리스 클린",
    "홈케어",
    "종합청소",
    "에어컨 청소",
    "세탁기 청소",
    "입주청소",
  ],
});

export default function Home() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "가전 홈케어 서비스",
        provider: {
          "@type": "LocalBusiness",
          name: "포트리스 클린",
          "@id": getAbsoluteUrl("/#localbusiness"),
        },
        areaServed: ["서울", "경기", "인천"],
        serviceType: [
          "에어컨 청소",
          "세탁기 청소",
          "공기청정기 청소",
          "냉장고 청소",
        ],
        url: getAbsoluteUrl("/"),
      },
      {
        "@type": "Service",
        name: "종합청소 및 시설청소 서비스",
        provider: {
          "@type": "LocalBusiness",
          name: "포트리스 클린",
          "@id": getAbsoluteUrl("/#localbusiness"),
        },
        areaServed: ["서울", "경기", "인천"],
        serviceType: [
          "입주청소",
          "정기청소",
          "상업공간 청소",
          "건물청소",
          "시설청소",
        ],
        url: getAbsoluteUrl("/scope"),
      },
    ],
  };

  return (
    <>
      <JsonLd data={homeSchema} />
      <FortressCleanHome />
    </>
  );
}
