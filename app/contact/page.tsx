import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { SectionIntro } from "@/components/SectionIntro";
import { siteContent } from "@/data/siteContent";

export const metadata: Metadata = {
  title: siteContent.pages.contact.metadataTitle,
  description: siteContent.pages.contact.metadataDescription,
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionIntro
            eyebrow={siteContent.pages.contact.eyebrow}
            title={siteContent.pages.contact.heading}
            copy={siteContent.pages.contact.copy}
          />
          <div className="mt-8 grid gap-4 text-sm text-muted">
            <Link href={siteContent.contact.whatsappBaseUrl} className="border border-champagne/60 px-5 py-4 text-center text-xs uppercase tracking-[0.24em] text-champagne transition hover:bg-champagne hover:text-carbon">
              {siteContent.pages.contact.whatsappLabel}
            </Link>
            <Link href={`mailto:${siteContent.contact.email}`} className="text-linen">
              {siteContent.contact.email}
            </Link>
            <span>{siteContent.contact.location}</span>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
