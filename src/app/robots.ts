import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/pages/api/"],
    },
    sitemap: "https://aryankumarportfolio.vercel.app/sitemap.xml",
    host: "https://aryankumarportfolio.vercel.app",
  };
}
