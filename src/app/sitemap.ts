import type { MetadataRoute } from "next";

const baseUrl = "https://femmestalls.com";

const routes = [
  "",
  "/about",
  "/members",
  "/femme-stalls",
  "/programmes",
  "/events",
  "/opportunities",
  "/partners",
  "/media",
  "/transparency",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
