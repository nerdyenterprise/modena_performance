import type { Metadata } from "next";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import { SellReveal } from "./SellReveal";
import styles from "./sell.module.css";

export const metadata: Metadata = {
  title: `${siteContent.pages.sellYourCar.metadataTitle} | MODENA PERFORMANCE`,
  description: siteContent.pages.sellYourCar.metadataDescription,
};

const approach = [
  {
    number: "01",
    title: "Preparation",
    details: [
      "Vehicle presentation.",
      "Photography.",
      "Documentation.",
      "History.",
    ],
  },
  {
    number: "02",
    title: "Marketing",
    details: [
      "Private database.",
      "Website.",
      "Selected platforms.",
      "Dealer network.",
    ],
  },
  {
    number: "03",
    title: "Negotiation",
    details: [
      "Qualified enquiries.",
      "Private viewings.",
      "Transparent communication.",
      "Careful representation.",
    ],
  },
  {
    number: "04",
    title: "Completion",
    details: [
      "Payment.",
      "Collection.",
      "Ownership transfer.",
      "Handover.",
    ],
  },
];

export default function SellYourCarPage() {
  return (
    <main className={styles.sell}>
      <SellReveal />

      <header className={styles.hero} data-reveal>
        <p className={styles.index}>01 / Sell your car</p>
        <h1>SELL YOUR CAR</h1>
        <p>
          Trusted representation for owners who value discretion, presentation
          and considered negotiation.
        </p>
      </header>

      <section
        className={styles.why}
        aria-labelledby="why-sell-heading"
        data-reveal
      >
        <div>
          <p className={styles.index}>02 / Why sell with MODENA</p>
          <h2 id="why-sell-heading">
            The best vehicles deserve better than a classified advert.
          </h2>
        </div>
        <div className={styles.supportingCopy}>
          <p>
            Careful presentation and professional photography provide an
            accurate, considered account of the vehicle.
          </p>
          <p>
            Enquiries are qualified before introduction, allowing negotiation
            to remain measured and focused on quality rather than quantity.
          </p>
        </div>
      </section>

      <section
        className={styles.approachSection}
        aria-labelledby="approach-heading"
        data-reveal
      >
        <div className={styles.approachHeading}>
          <p className={styles.index}>03 / Our approach</p>
          <h2 id="approach-heading">
            Representation over
            <br />
            transaction.
          </h2>
        </div>
        <div className={styles.approach}>
          {approach.map((step) => (
            <article key={step.number}>
              <p className={styles.stepNumber}>{step.number}</p>
              <h3>{step.title}</h3>
              <ul>
                {step.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section
        className={styles.representation}
        aria-labelledby="representation-heading"
        data-reveal
      >
        <p className={styles.index}>04 / Who we represent</p>
        <h2 id="representation-heading">
          <span>Performance cars. Prestige SUVs.</span>
          <span>Limited production vehicles. Collector examples.</span>
        </h2>
        <p>
          Every vehicle is assessed individually, with attention given to
          provenance, condition, specification and market position.
        </p>
      </section>

      <section
        className={styles.enquiry}
        aria-labelledby="enquiry-heading"
        data-reveal
      >
        <p>Private representation</p>
        <h2 id="enquiry-heading">Let&apos;s represent your vehicle.</h2>
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
