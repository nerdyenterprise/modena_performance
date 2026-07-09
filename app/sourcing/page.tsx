import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SectionIntro } from "@/components/SectionIntro";
import { siteContent } from "@/data/siteContent";

export const metadata: Metadata = {
  title: siteContent.pages.sourcing.metadataTitle,
  description: siteContent.pages.sourcing.metadataDescription,
};

export default function SourcingPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionIntro
          eyebrow={siteContent.pages.sourcing.eyebrow}
          title={siteContent.pages.sourcing.heading}
          copy={siteContent.pages.sourcing.copy}
        />
        <div className="image-slot min-h-80" />
      </div>
      <div className="mt-14 grid gap-8 lg:grid-cols-3">
        {siteContent.pages.sourcing.steps.map((step) => (
          <div key={step} className="border border-white/10 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-champagne">{step}</p>
            <p className="mt-5 text-sm leading-7 text-muted">
              {siteContent.pages.sourcing.stepCopy}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-14 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <h2 className="font-serif text-3xl text-linen">{siteContent.pages.sourcing.formHeading}</h2>
        <ContactForm intent={siteContent.pages.sourcing.formIntent} />
      </div>
    </section>
  );
}
