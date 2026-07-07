import type { Metadata } from "next";

export const SITE_NAME = "포트리스 클린";
export const SITE_NAME_EN = "Fortress Clean";
export const DEFAULT_OG_IMAGE = "/opengraph-image.png";
export const DEFAULT_LOCALE = "ko_KR";

export const BUSINESS_INFO = {
  name: SITE_NAME,
  alternateName: SITE_NAME_EN,
  description:
    "포트리스 클린은 에어컨, 세탁기, 공기청정기, 냉장고 청소부터 입주청소, 정기청소, 상업공간·건물 청소까지 제공하는 수도권 전문 청소 서비스입니다.",
  phone: "010-8115-9256",
  email: "thefortressclean@gmail.com",
  address: "경기도 부천시 원미구 소향로 239",
  region: "경기도",
  locality: "부천시",
  country: "KR",
  businessNumber: "216-35-01265",
  openingHours: "Mo-Su 09:00-20:00",
  serviceAreas: ["서울", "경기", "인천"],
} as const;

function withProtocol(url: string) {
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  return `https://${url}`;
}

export function getSiteUrl() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL;

  if (!siteUrl) {
    return undefined;
  }

  return withProtocol(siteUrl).replace(/\/$/, "");
}

export function getMetadataBase() {
  const siteUrl = getSiteUrl();

  return siteUrl ? new URL(siteUrl) : undefined;
}

export function getAbsoluteUrl(path = "/") {
  const metadataBase = getMetadataBase();

  return metadataBase ? new URL(path, metadataBase).toString() : path;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  keywords,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
}): Metadata {
  const canonical = getAbsoluteUrl(path);
  const imageUrl = getAbsoluteUrl(image);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
      languages: {
        "ko-KR": canonical,
      },
    },
    openGraph: {
      type: "website",
      locale: DEFAULT_LOCALE,
      url: canonical,
      title,
      description,
      siteName: SITE_NAME,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} 대표 이미지`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function toJsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
