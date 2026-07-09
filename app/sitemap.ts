import type { MetadataRoute } from "next";
import { siteContent, vehicles } from "@/data/siteContent";

const baseUrl = siteContent.metadata.siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/vehicles", "/sourcing", "/sell-your-car", "/about", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const vehicleRoutes = vehicles.map((vehicle) => ({
    url: `${baseUrl}/vehicles/${vehicle.slug}`,
    lastModified: new Date(),
  }));

  return [...routes, ...vehicleRoutes];
}
