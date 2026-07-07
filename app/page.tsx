import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import FortressCleanHome from "@/components/fortressclean-home";
import { buildMetadata, getAbsoluteUrl } from "@/src/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "서울·경기·인천 수도권 홈케어·입주청소·정기청소·상업공간 종합청소 전문업체",
  description:
    "포트리스 클린은 서울·경기·인천 수도권에서 에어컨, 세탁기, 공기청정기, 냉장고 등 가전 홈케어부터 입주청소, 이사청소, 정기청소, 상업공간·건물 청소까지 현장 상황에 맞춰 꼼꼼하고 책임감 있게 진행하는 청소 전문업체입니다.",
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
