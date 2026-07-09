import type { Metadata } from "next";
import { SectionIntro } from "@/components/SectionIntro";
import { siteContent } from "@/data/siteContent";

export const metadata: Metadata = {
  title: siteContent.pages.about.metadataTitle,
  description: siteContent.pages.about.metadataDescription,
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionIntro
          eyebrow={siteContent.pages.about.eyebrow}
          title={siteContent.pages.about.heading}
          copy={siteContent.pages.about.copy}
        />
        <div className="grid gap-6 text-base leading-8 text-muted">
          {siteContent.pages.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {siteContent.pages.about.values.map((value) => (
          <div key={value.title} className="border border-white/10 p-7">
            <p className="font-serif text-3xl text-linen">{value.title}</p>
            <p className="mt-4 text-sm leading-7 text-muted">
              {value.copy}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
