import type { MetadataRoute } from "next";
import { getAbsoluteUrl } from "@/src/lib/seo";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: getAbsoluteUrl("/sitemap.xml"),
  };
}
