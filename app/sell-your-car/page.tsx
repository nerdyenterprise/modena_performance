import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SectionIntro } from "@/components/SectionIntro";
import { siteContent } from "@/data/siteContent";

export const metadata: Metadata = {
  title: siteContent.pages.sellYourCar.metadataTitle,
  description: siteContent.pages.sellYourCar.metadataDescription,
};

export default function SellYourCarPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-24">
      <SectionIntro
        eyebrow={siteContent.pages.sellYourCar.eyebrow}
        title={siteContent.pages.sellYourCar.heading}
        copy={siteContent.pages.sellYourCar.copy}
      />
      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="image-slot min-h-96" />
        <div className="grid content-start gap-5">
          {siteContent.pages.sellYourCar.points.map((item) => (
            <div key={item} className="border-b border-white/10 pb-5">
              <p className="text-sm uppercase tracking-[0.22em] text-linen">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-14 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <h2 className="font-serif text-3xl text-linen">{siteContent.pages.sellYourCar.formHeading}</h2>
        <ContactForm intent={siteContent.pages.sellYourCar.formIntent} />
      </div>
    </section>
  );
}
