import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import {
  BUSINESS_INFO,
  buildMetadata,
  getAbsoluteUrl,
  getMetadataBase,
  SITE_NAME,
} from "@/src/lib/seo";
import "./globals.css";

const rootSeo = buildMetadata({
  title: `${SITE_NAME} | 수도권 홈케어·종합청소 전문`,
  description:
    "에어컨, 세탁기, 공기청정기, 냉장고 청소부터 입주청소, 정기청소, 상업공간·건물 청소까지 제공하는 포트리스 클린의 공식 웹사이트입니다.",
  keywords: [
    "포트리스 클린",
    "부천 청소",
    "수도권 청소업체",
    "에어컨 청소",
    "세탁기 청소",
    "입주청소",
    "정기청소",
    "건물청소",
  ],
});

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: `${SITE_NAME} | 수도권 홈케어·종합청소 전문`,
    template: `%s | ${SITE_NAME}`,
  },
  description: rootSeo.description,
  keywords: rootSeo.keywords,
  alternates: rootSeo.alternates,
  openGraph: rootSeo.openGraph,
  twitter: rootSeo.twitter,
  applicationName: SITE_NAME,
  category: "Cleaning Service",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: getAbsoluteUrl("/"),
    inLanguage: "ko-KR",
    description: BUSINESS_INFO.description,
    publisher: {
      "@type": "LocalBusiness",
      name: BUSINESS_INFO.name,
      telephone: BUSINESS_INFO.phone,
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": getAbsoluteUrl("/#localbusiness"),
    name: BUSINESS_INFO.name,
    alternateName: BUSINESS_INFO.alternateName,
    image: [getAbsoluteUrl("/opengraph-image.png")],
    url: getAbsoluteUrl("/"),
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    description: BUSINESS_INFO.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.address,
      addressLocality: BUSINESS_INFO.locality,
      addressRegion: BUSINESS_INFO.region,
      addressCountry: BUSINESS_INFO.country,
    },
    areaServed: BUSINESS_INFO.serviceAreas,
    openingHours: BUSINESS_INFO.openingHours,
    taxID: BUSINESS_INFO.businessNumber,
  };

  return (
    <html lang="ko" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <JsonLd data={websiteSchema} />
        <JsonLd data={localBusinessSchema} />
        {children}
      </body>
    </html>
  );
}
