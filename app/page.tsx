import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Logo } from "@/components/Logo";
import { VehicleCard } from "@/components/VehicleCard";
import { siteContent, vehicles } from "@/data/siteContent";

export default function Home() {
  const featuredVehicles = vehicles.slice(0, 3);
  const { hero, featuredVehicles: featured, services, about, contact } = siteContent.home;

  return (
    <>
      <section className="section-shell min-h-[calc(100svh-8rem)] border-b border-champagne/10">
        <div className="section-inner grid min-h-[calc(100svh-8rem)] items-start gap-10 pb-16 pt-20 lg:grid-cols-[minmax(0,0.82fr)_minmax(24rem,0.68fr)] lg:gap-x-16 lg:pb-20 lg:pt-24">
          <div className="min-w-0 lg:col-span-2">
            <p className="editorial-label">{hero.eyebrow}</p>
            <h1 className="mt-9 max-w-full">
              <span className="sr-only">{hero.headline}</span>
              <Logo priority linked={false} className="w-full max-w-[58rem]" />
            </h1>
          </div>
          <div className="min-w-0">
            <p className="max-w-2xl font-serif text-3xl leading-tight text-linen sm:text-5xl">
              {hero.supportingHeadline}
            </p>
            <p className="mt-7 max-w-xl text-base leading-8 text-muted sm:text-lg">
              {hero.supportingCopy}
            </p>
          </div>
          <div className="image-slot h-[28rem] w-full lg:h-[30rem]">
            <div className="absolute bottom-8 left-8 z-10">
              <p className="text-[0.62rem] uppercase tracking-[0.34em] text-champagne">{hero.imageLabel}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-20 sm:py-28 lg:py-32">
        <div className="section-inner">
          <div className="flex flex-col justify-between gap-8 border-b border-champagne/10 pb-10 lg:flex-row lg:items-end">
            <div>
              <p className="editorial-label">{featured.eyebrow}</p>
              <h2 className="mt-5 font-serif text-5xl leading-none text-linen sm:text-7xl lg:text-8xl">{featured.heading}</h2>
            </div>
            <Link href="/vehicles" className="w-fit text-[0.66rem] uppercase tracking-[0.32em] text-champagne">
              {featured.linkLabel}
            </Link>
          </div>
          <div className="mt-14 grid gap-14 lg:grid-cols-[1.32fr_0.88fr]">
            <VehicleCard vehicle={featuredVehicles[0]} />
            <div className="grid gap-12">
              {featuredVehicles.slice(1).map((vehicle) => (
                <VehicleCard key={vehicle.slug} vehicle={vehicle} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell border-y border-champagne/10 bg-obsidian/55 py-20 sm:py-28 lg:py-32">
        <div className="section-inner grid gap-14 lg:grid-cols-[0.74fr_1.26fr]">
          <div>
            <p className="editorial-label">{services.eyebrow}</p>
            <h2 className="mt-5 font-serif text-5xl leading-tight text-linen sm:text-7xl">{services.heading}</h2>
          </div>
          <div className="grid gap-10 lg:grid-cols-3 lg:pt-4">
            {services.items.map((service) => (
              <article key={service.title} className="border-t border-champagne/20 pt-7">
                <h3 className="font-serif text-3xl text-linen">{service.title}</h3>
                <p className="mt-5 text-sm leading-7 text-muted">{service.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20 sm:py-28 lg:py-32">
        <div className="section-inner grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="image-slot h-[22rem] w-full sm:h-[30rem] lg:h-[34rem]">
            <div className="absolute bottom-8 left-8 z-10 text-[0.62rem] uppercase tracking-[0.34em] text-champagne">
              {about.imageLabel}
            </div>
          </div>
          <div>
            <p className="editorial-label">{about.eyebrow}</p>
            <h2 className="mt-5 font-serif text-5xl leading-tight text-linen sm:text-7xl">{about.heading}</h2>
            <div className="mt-8 grid max-w-2xl gap-5 text-base leading-8 text-muted sm:text-lg">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell border-t border-champagne/10 bg-carbon py-20 sm:py-28 lg:py-32">
        <div className="section-inner grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="editorial-label">{contact.eyebrow}</p>
            <h2 className="mt-5 font-serif text-5xl leading-tight text-linen sm:text-7xl">{contact.heading}</h2>
            <p className="mt-7 max-w-md text-base leading-8 text-muted">
              {contact.copy}
            </p>
            <div className="mt-10 grid gap-4 text-sm text-muted">
              <Link href={siteContent.contact.whatsappBaseUrl} className="w-fit text-[0.66rem] uppercase tracking-[0.32em] text-champagne">
                {siteContent.contact.phoneDisplay}
              </Link>
              <Link href={`mailto:${siteContent.contact.email}`}>{siteContent.contact.email}</Link>
              <span>{siteContent.contact.location}</span>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
