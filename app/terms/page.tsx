import type { Metadata } from "next";
import Link from "next/link";
import styles from "./terms.module.css";

export const metadata: Metadata = {
  title: "Terms | MODENA PERFORMANCE",
  description:
    "Terms of website use, privacy information and cookie policy for Modena Performance.",
};

export default function TermsPage() {
  return (
    <main className={styles.terms}>
      <header className={styles.hero}>
        <p>Terms, privacy and cookies</p>
        <h1>Terms</h1>
        <p>Last updated 24 July 2026</p>
      </header>

      <div className={styles.document}>
        <section>
          <p className={styles.index}>01</p>
          <div>
            <h2>About these terms</h2>
            <p>
              This page sets out the terms on which this website is made
              available, together with our privacy and cookie information.
              Modena Performance is a trading name of Powrr Limited
              (&ldquo;we&rdquo;, &ldquo;us&rdquo; and &ldquo;our&rdquo;).
              By using this website, you agree to these terms.
            </p>
          </div>
        </section>

        <section>
          <p className={styles.index}>02</p>
          <div>
            <h2>Website use</h2>
            <p>
              You may use this website for lawful, personal purposes. You must
              not misuse the website, interfere with its operation, attempt
              unauthorised access, or use its content in a way that infringes
              another person&apos;s rights.
            </p>
            <p>
              We may update, suspend or withdraw any part of the website
              without notice. Access is provided on a temporary basis and is
              not guaranteed to be uninterrupted.
            </p>
          </div>
        </section>

        <section>
          <p className={styles.index}>03</p>
          <div>
            <h2>Vehicles, prices and availability</h2>
            <p>
              Vehicle descriptions, specifications, mileage, provenance,
              condition, images and other details are provided for general
              guidance. They do not form an offer, warranty or contractual
              representation. Prospective buyers should satisfy themselves as
              to all material details before proceeding.
            </p>
            <p>
              Where a price is stated as Price on Application or POA, pricing
              will be provided following an enquiry and may change before a
              transaction is agreed. Vehicles remain subject to prior sale,
              withdrawal and availability. A listing does not reserve a
              vehicle.
            </p>
          </div>
        </section>

        <section>
          <p className={styles.index}>04</p>
          <div>
            <h2>Accuracy</h2>
            <p>
              We take reasonable care when preparing website information, but
              details may contain errors, omissions or information supplied by
              third parties. Content may become out of date. Please confirm
              information important to your decision directly with us.
            </p>
          </div>
        </section>

        <section>
          <p className={styles.index}>05</p>
          <div>
            <h2>Intellectual property</h2>
            <p>
              Unless stated otherwise, the website, its design, text,
              photography, graphics and branding are owned by or licensed to
              Powrr Limited. Content may be viewed for personal use but must
              not be copied, republished, distributed or used commercially
              without prior written permission.
            </p>
          </div>
        </section>

        <section>
          <p className={styles.index}>06</p>
          <div>
            <h2>Enquiries</h2>
            <p>
              Sending an enquiry does not create an agency, brokerage or sales
              agreement. Any engagement, representation or vehicle transaction
              is subject to separate written terms and appropriate checks.
            </p>
          </div>
        </section>

        <section>
          <p className={styles.index}>07</p>
          <div>
            <h2>Privacy</h2>
            <p>
              We may collect the information you provide through an enquiry,
              including your name, email address, telephone number, vehicle
              interests and message, together with limited technical data
              generated when you use the website.
            </p>
            <p>
              We use this information to respond to enquiries, manage client
              relationships, provide requested services, protect the website
              and meet legal obligations. We rely on steps taken at your
              request before entering a contract, performance of a contract,
              compliance with legal obligations and our legitimate interests
              in operating and improving the business, as applicable.
            </p>
            <p>
              Information is kept only for as long as reasonably required for
              the relevant enquiry, relationship, legal obligation or dispute.
              It may be shared with professional advisers, technology and
              hosting providers, payment or transaction partners, authorities
              where required, and other parties involved in a service you ask
              us to arrange. Where information is processed outside the United
              Kingdom, we use appropriate safeguards where required.
            </p>
            <p>
              Subject to applicable law, you may request access, correction,
              deletion, restriction or portability of your personal
              information, or object to certain processing. Where processing
              relies on consent, you may withdraw it at any time. We do not use
              solely automated decision-making that produces legal or similarly
              significant effects.
            </p>
            <p>
              Privacy requests should be sent to{" "}
              <Link href="mailto:hello@modenaperformance.com">
                hello@modenaperformance.com
              </Link>
              . You may also raise a concern with the UK Information
              Commissioner&apos;s Office.
            </p>
          </div>
        </section>

        <section>
          <p className={styles.index}>08</p>
          <div>
            <h2>Cookies</h2>
            <p>
              Cookies and similar technologies are small files or identifiers
              used by websites and browsers. We may use cookies that are
              necessary for security, reliable operation and website
              functionality.
            </p>
            <p>
              With appropriate notice and consent where required, we may also
              use optional cookies or similar technologies to improve website
              functionality and understand website usage. These may collect
              information such as pages viewed, device or browser details,
              approximate location and interaction patterns.
            </p>
            <p>
              You can manage cookies through your browser and, where provided,
              our consent controls. Disabling necessary cookies may affect how
              the website operates. We will update this page if our use of
              cookies materially changes.
            </p>
          </div>
        </section>

        <section>
          <p className={styles.index}>09</p>
          <div>
            <h2>Third-party links</h2>
            <p>
              Links to third-party websites or services are provided for
              convenience. We do not control their content, availability or
              privacy practices and are not responsible for them. Their own
              terms and policies apply.
            </p>
          </div>
        </section>

        <section>
          <p className={styles.index}>10</p>
          <div>
            <h2>Liability</h2>
            <p>
              To the fullest extent permitted by law, we are not liable for
              loss arising from reliance on website content, inability to use
              the website, or third-party content. Nothing in these terms
              excludes liability that cannot lawfully be excluded, including
              liability for death or personal injury caused by negligence,
              fraud or fraudulent misrepresentation. Your statutory rights are
              unaffected.
            </p>
          </div>
        </section>

        <section>
          <p className={styles.index}>11</p>
          <div>
            <h2>Governing law</h2>
            <p>
              These terms are governed by the laws of England and Wales. The
              courts of England and Wales have jurisdiction, subject to any
              mandatory rights you may have as a consumer.
            </p>
          </div>
        </section>

        <section>
          <p className={styles.index}>12</p>
          <div>
            <h2>Company information</h2>
            <address>
              <p>Modena Performance is a trading name of Powrr Limited.</p>
              <p>Company number 09933637</p>
              <p>
                Office 52
                <br />
                321–323 High Road
                <br />
                Romford
                <br />
                Essex
                <br />
                England
                <br />
                RM6 6AX
              </p>
              <p>
                <Link href="mailto:hello@modenaperformance.com">
                  hello@modenaperformance.com
                </Link>
                <br />
                <Link href="tel:+447907070776">+44 7907 070776</Link>
              </p>
            </address>
          </div>
        </section>
      </div>
    </main>
  );
}
