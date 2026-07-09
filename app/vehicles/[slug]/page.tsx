import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/ContactForm";
import { siteContent, vehicles } from "@/data/siteContent";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return vehicles.map((vehicle) => ({ slug: vehicle.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = vehicles.find((item) => item.slug === slug);

  if (!vehicle) {
    return {};
  }

  return {
    title: `${vehicle.year} ${vehicle.manufacturer} ${vehicle.model}`,
    description: vehicle.description,
  };
}

export default async function VehicleDetailPage({ params }: Props) {
  const { slug } = await params;
  const vehicle = vehicles.find((item) => item.slug === slug);

  if (!vehicle) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-20">
      <Link href="/vehicles" className="text-xs uppercase tracking-[0.28em] text-champagne">
        {siteContent.pages.vehicles.backLabel}
      </Link>
      <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="image-slot aspect-[16/11]">
            <Image
              src={vehicle.image}
              alt={vehicle.imageAlt}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              priority
              style={{ objectPosition: vehicle.imagePosition }}
              className="object-cover opacity-[0.9] brightness-[0.58] contrast-[1.18] saturate-[0.62]"
            />
            <div className="absolute inset-0 z-[1] bg-gradient-to-t from-carbon/85 via-carbon/20 to-carbon/10" />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="image-slot aspect-[4/3]">
                <Image
                  src={vehicle.image}
                  alt={`${vehicle.imageAlt} detail ${item}`}
                  fill
                  sizes="(min-width: 1024px) 14vw, 30vw"
                  style={{ objectPosition: vehicle.imagePosition }}
                  className="object-cover opacity-80 brightness-[0.56] contrast-[1.18] saturate-[0.6]"
                />
                <div className="absolute inset-0 z-[1] bg-carbon/20" />
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.34em] text-champagne">{vehicle.manufacturer}</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-linen sm:text-5xl">{vehicle.model}</h1>
          <p className="mt-5 text-lg uppercase tracking-[0.2em] text-linen">{vehicle.price}</p>
          <p className="mt-6 text-base leading-8 text-muted">{vehicle.description}</p>
          <dl className="mt-8 grid grid-cols-2 gap-4 border-y border-white/10 py-6 text-sm">
            {[
              [siteContent.pages.vehicles.yearLabel, vehicle.year],
              [siteContent.pages.vehicles.mileageLabel, vehicle.mileage],
              [siteContent.pages.vehicles.transmissionLabel, vehicle.transmission],
              [siteContent.pages.vehicles.priceLabel, vehicle.price],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="text-xs uppercase tracking-[0.22em] text-muted">{label}</dt>
                <dd className="mt-2 text-linen">{value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8">
            <p className="text-xs uppercase tracking-[0.28em] text-champagne">{siteContent.pages.vehicles.detailHighlightsLabel}</p>
            <ul className="mt-4 grid gap-3 text-sm text-muted">
              {vehicle.highlights.map((highlight) => (
                <li key={highlight} className="border-l border-champagne/50 pl-4">{highlight}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-16 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-champagne">{siteContent.pages.vehicles.enquiryEyebrow}</p>
          <h2 className="mt-4 font-serif text-3xl text-linen">{siteContent.pages.vehicles.enquiryHeading}</h2>
        </div>
        <ContactForm intent={`Vehicle enquiry: ${vehicle.year} ${vehicle.manufacturer} ${vehicle.model}`} />
      </div>
    </section>
  );
}
