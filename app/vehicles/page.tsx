import type { Metadata } from "next";
import { SectionIntro } from "@/components/SectionIntro";
import { VehicleCard } from "@/components/VehicleCard";
import { siteContent, vehicles } from "@/data/siteContent";

export const metadata: Metadata = {
  title: siteContent.pages.vehicles.metadataTitle,
  description: siteContent.pages.vehicles.metadataDescription,
};

export default function VehiclesPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-24">
      <SectionIntro
        eyebrow={siteContent.pages.vehicles.eyebrow}
        title={siteContent.pages.vehicles.heading}
        copy={siteContent.pages.vehicles.copy}
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.slug} vehicle={vehicle} />
        ))}
      </div>
    </section>
  );
}
