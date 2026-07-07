import type { MetadataRoute } from "next";
import { getAbsoluteUrl, SITE_NAME } from "@/src/lib/seo";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description:
      "수도권 홈케어·종합청소 전문 포트리스 클린 공식 웹사이트",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1f3f8d",
    lang: "ko-KR",
    icons: [
      {
        src: getAbsoluteUrl("/icon.svg"),
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
