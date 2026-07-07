import type { MetadataRoute } from "next";
import { getAbsoluteUrl } from "@/src/lib/seo";

export const dynamic = "force-static";

const ROUTES: Array<{
  path: string;
  priority: number;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  images?: string[];
}> = [
  {
    path: "/",
    priority: 1,
    changeFrequency: "weekly",
    images: ["/images/main/1.png", "/images/main/2.png"],
  },
  {
    path: "/intro",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/scope",
    priority: 0.9,
    changeFrequency: "weekly",
    images: ["/images/scope/scope-hero.jpg"],
  },
  {
    path: "/cases",
    priority: 0.8,
    changeFrequency: "monthly",
    images: ["/images/cases/aircon-after.png"],
  },
  {
    path: "/quote-guide",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/faq",
    priority: 0.7,
    changeFrequency: "monthly",
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map((route) => ({
    url: getAbsoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    images: route.images?.map((image) => getAbsoluteUrl(image)),
  }));
}
