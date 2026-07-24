import type { Metadata } from "next";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import { SourcingReveal } from "./SourcingReveal";
import styles from "./sourcing.module.css";

export const metadata: Metadata = {
  title: `${siteContent.pages.sourcing.metadataTitle} | MODENA PERFORMANCE`,
  description: siteContent.pages.sourcing.metadataDescription,
};

const process = [
  {
    number: "01",
    title: "Consultation",
    copy: "Understanding specification, intended use and priorities.",
  },
  {
    number: "02",
    title: "Search",
    copy: "Private network, trusted dealers and off-market opportunities.",
  },
  {
    number: "03",
    title: "Selection",
    copy: "Condition, provenance and specification reviewed before recommendation.",
  },
  {
    number: "04",
    title: "Delivery",
    copy: "A straightforward purchasing process from introduction to handover.",
  },
];

export default function SourcingPage() {
  return (
    <main className={styles.sourcing}>
      <SourcingReveal />

      <header className={styles.hero} data-reveal>
        <p className={styles.index}>01 / Sourcing</p>
        <h1>SOURCING</h1>
        <p>
          Access to carefully sourced performance vehicles beyond our published
          inventory.
        </p>
      </header>

      <section
        className={styles.philosophy}
        aria-labelledby="why-source-heading"
        data-reveal
      >
        <div>
          <p className={styles.index}>02 / Why source with MODENA</p>
          <h2 id="why-source-heading">
            Not every exceptional vehicle is publicly available.
          </h2>
        </div>
        <div className={styles.supportingCopy}>
          <p>
            Many suitable vehicles change hands privately through established
            relationships rather than public listings.
          </p>
          <p>
            We approach trusted owners, specialists and dealers with a clear
            brief, then review each opportunity before making a recommendation.
          </p>
        </div>
      </section>

      <section
        className={styles.processSection}
        aria-labelledby="process-heading"
        data-reveal
      >
        <div className={styles.sectionHeading}>
          <p className={styles.index}>03 / The process</p>
          <h2 id="process-heading">The process.</h2>
        </div>
        <div className={styles.process}>
          {process.map((step) => (
            <article key={step.number}>
              <p className={styles.stepNumber}>{step.number}</p>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className={styles.whatWeSource}
        aria-labelledby="what-we-source-heading"
        data-reveal
      >
        <p className={styles.index}>04 / What we source</p>
        <h2 id="what-we-source-heading">
          <span>Performance cars.</span>
          <span>Prestige SUVs.</span>
          <span>Limited production vehicles.</span>
          <span>Collector specification examples.</span>
        </h2>
        <p>
          Each brief is considered individually, with the search shaped around
          specification, provenance, condition and intended ownership.
        </p>
      </section>

      <section
        className={styles.enquiry}
        aria-labelledby="enquiry-heading"
        data-reveal
      >
        <p>Start a conversation</p>
        <h2 id="enquiry-heading">Let&apos;s find the right vehicle.</h2>
        <div>
          <Link href={`mailto:${siteContent.contact.email}`}>
            {siteContent.contact.email}
          </Link>
          <Link href={siteContent.contact.whatsappBaseUrl}>
            Start your enquiry →
          </Link>
        </div>
      </section>
    </main>
  );
}
