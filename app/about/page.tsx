import type { Metadata } from "next";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import { AboutReveal } from "./AboutReveal";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: `${siteContent.pages.about.metadataTitle} | MODENA PERFORMANCE`,
  description: siteContent.pages.about.metadataDescription,
};

const services = [
  {
    title: "Vehicle Sales",
    copy: "Curated inventory of carefully selected performance vehicles.",
  },
  {
    title: "Sourcing",
    copy: "Private sourcing tailored to specification, provenance and budget.",
  },
  {
    title: "Brokerage",
    copy: "Discreet representation for buyers and sellers seeking a considered process.",
  },
];

export default function AboutPage() {
  return (
    <main className={styles.about}>
      <AboutReveal />

      <header className={styles.hero} data-reveal>
        <p className={styles.index}>01 / About</p>
        <h1>ABOUT</h1>
        <p>
          MODENA represents collectors, enthusiasts and private clients with a
          considered approach to sourcing, brokerage and vehicle sales.
        </p>
      </header>

      <section
        className={styles.philosophy}
        aria-labelledby="philosophy-heading"
        data-reveal
      >
        <div>
          <p className={styles.index}>02 / Philosophy</p>
          <h2 id="philosophy-heading">Performance is only part of the story.</h2>
        </div>
        <div className={styles.supportingCopy}>
          <p>
            We value provenance, condition and long-term ownership above
            volume.
          </p>
          <p>
            Every vehicle and every brief is considered on its own terms, with
            attention given to what matters beyond the specification sheet.
          </p>
        </div>
      </section>

      <section
        className={styles.services}
        aria-labelledby="services-heading"
        data-reveal
      >
        <div className={styles.sectionHeading}>
          <p className={styles.index}>03 / What we do</p>
          <h2 id="services-heading">What we do.</h2>
        </div>
        <div className={styles.serviceColumns}>
          {services.map((service) => (
            <article key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className={styles.approach}
        aria-labelledby="approach-heading"
        data-reveal
      >
        <p className={styles.index}>04 / Our approach</p>
        <h2 id="approach-heading">
          We believe buying the right vehicle should feel personal rather than
          transactional.
        </h2>
        <div className={styles.approachCopy}>
          <p>
            Careful selection and honest presentation establish a clear view
            of every vehicle.
          </p>
          <p>
            Transparent communication and long-term relationships guide the
            process from first conversation to handover.
          </p>
        </div>
      </section>

      <section
        className={styles.enquiry}
        aria-labelledby="enquiry-heading"
        data-reveal
      >
        <p>Start a conversation</p>
        <h2 id="enquiry-heading">Let&apos;s start the conversation.</h2>
        <div>
          <Link href={`mailto:${siteContent.contact.email}`}>
            {siteContent.contact.email}
          </Link>
          <Link href={siteContent.contact.whatsappBaseUrl}>WhatsApp →</Link>
        </div>
      </section>
    </main>
  );
}
