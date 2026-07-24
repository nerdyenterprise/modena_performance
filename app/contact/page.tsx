import type { Metadata } from "next";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import { ContactReveal } from "./ContactReveal";
import { EnquiryForm } from "./EnquiryForm";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: `${siteContent.pages.contact.metadataTitle} | MODENA PERFORMANCE`,
  description: siteContent.pages.contact.metadataDescription,
};

export default function ContactPage() {
  return (
    <main className={styles.contact}>
      <ContactReveal />

      <header className={styles.hero} data-reveal>
        <p className={styles.index}>01 / Contact</p>
        <h1>CONTACT</h1>
        <div>
          <p>Every conversation begins with understanding your requirements.</p>
          <p>
            Whether buying, selling or sourcing, we welcome considered
            enquiries.
          </p>
        </div>
      </header>

      <section
        className={styles.details}
        aria-labelledby="details-heading"
        data-reveal
      >
        <div>
          <p className={styles.index}>02 / Our details</p>
          <h2 id="details-heading">
            Every great collection begins with a conversation.
          </h2>
        </div>
        <dl>
          <div>
            <dt>Email</dt>
            <dd>
              <Link href={`mailto:${siteContent.contact.email}`}>
                {siteContent.contact.email}
              </Link>
            </dd>
          </div>
          <div>
            <dt>WhatsApp</dt>
            <dd>
              <Link href={siteContent.contact.whatsappBaseUrl}>
                Start a conversation →
              </Link>
            </dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>Manchester, United Kingdom</dd>
          </div>
          <div>
            <dt>Business Hours</dt>
            <dd>By Appointment</dd>
          </div>
        </dl>
      </section>

      <section
        className={styles.formSection}
        aria-labelledby="form-heading"
        data-reveal
      >
        <div className={styles.sectionHeading}>
          <p className={styles.index}>03 / Enquiry</p>
          <h2 id="form-heading">Begin a conversation.</h2>
        </div>
        <EnquiryForm email={siteContent.contact.email} />
      </section>

      <section
        className={styles.response}
        aria-labelledby="response-heading"
        data-reveal
      >
        <div>
          <p className={styles.index}>04 / Response</p>
          <h2 id="response-heading">
            We value thoughtful enquiries over quick transactions.
          </h2>
        </div>
        <div className={styles.supportingCopy}>
          <p>Every enquiry is reviewed personally.</p>
          <p>
            If we believe we can help, we&apos;ll respond with honesty, clarity
            and discretion.
          </p>
        </div>
      </section>

      <section
        className={styles.finalChapter}
        aria-labelledby="final-heading"
        data-reveal
      >
        <p>05 / Final chapter</p>
        <h2 id="final-heading">
          <span>The right vehicle.</span>
          <span>The right owner.</span>
          <span>The right conversation.</span>
        </h2>
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
