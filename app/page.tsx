"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SiteMenu from "@/components/SiteMenu";
import { siteContent, vehicles } from "@/data/siteContent";
import styles from "./page.module.css";

type ChapterId = "inventory" | "sourcing" | "sell" | "about" | "contact";

const chapters: Array<{ id: ChapterId; title: string; intro: string }> = [
  {
    id: "inventory",
    title: "Inventory",
    intro: "An evolving selection of performance vehicles, chosen and presented with consideration.",
  },
  {
    id: "sourcing",
    title: "Sourcing",
    intro: "Access to carefully sourced performance vehicles beyond our published inventory.",
  },
  {
    id: "sell",
    title: "Sell Your Car",
    intro: "Trusted representation for owners who value discretion, presentation and considered negotiation.",
  },
  {
    id: "about",
    title: "About",
    intro: "MODENA represents collectors, enthusiasts and private clients with a considered approach to sourcing, brokerage and vehicle sales.",
  },
  {
    id: "contact",
    title: "Contact",
    intro: "Every conversation begins with understanding your requirements.",
  },
];

const drawerImages: Record<string, string> = {
  "mercedes-g63-amg": "/images/inventory/views/g63-amg-front.png",
  "bmw-x5m-competition": "/images/inventory/views/x5m-competition-front.png",
  "porsche-911-gt3-touring": "/images/inventory/views/911-gt3-rs-front.png",
};

export default function Home() {
  const pathname = usePathname();

  if (pathname !== "/") {
    return (
      <main className="site-main">
        <div>
          <h1>MODENA PERFORMANCE</h1>
          <p>Luxury Automotive Brokerage</p>
        </div>
      </main>
    );
  }

  return (
    <main id="phase-one-home" className={styles.page}>
      <header className={styles.header}>
        <Link
          className={styles.brand}
          href="/"
          aria-label="Modena Performance home"
        >
          <Image
            src="/brand/mp-monogram-transparent.png"
            alt=""
            width={700}
            height={1020}
            priority
          />
        </Link>
        <SiteMenu />
      </header>

      <section className={styles.hero} aria-labelledby="home-title">
        <h1 id="home-title">MODENA PERFORMANCE</h1>
      </section>

      <section id="main-navigation" className={styles.navigation} aria-label="Main navigation">
        {chapters.map((chapter) => (
          <article className={styles.chapter} id={chapter.id} key={chapter.id}>
            <div className={styles.chapterHeading}>
              <h2>{chapter.title}</h2>
              <p>{chapter.intro}</p>
            </div>
            <ChapterContent id={chapter.id} />
          </article>
        ))}
      </section>

      <footer className={styles.footer}>
        <span>MODENA PERFORMANCE</span>
        <div>
          <Link
            href="https://www.instagram.com/modena.performance/"
            aria-label="MODENA PERFORMANCE on Instagram"
            target="_blank"
            rel="noreferrer"
          >
            INSTAGRAM
          </Link>
          <Link href="/terms">TERMS</Link>
        </div>
      </footer>
    </main>
  );
}

function ChapterContent({ id }: { id: ChapterId }) {
  const [g63, x5m, gt3] = vehicles;

  if (id === "inventory") {
    return (
      <div className={styles.featureSplit}>
        <EditorialImage vehicle={x5m} priority />
        <div className={styles.featureCopy}>
          <p>{x5m.manufacturer}</p>
          <h3>{x5m.model}</h3>
          <span>{x5m.year} · {x5m.mileage}</span>
          <Link href="/vehicles">View all vehicles →</Link>
        </div>
      </div>
    );
  }

  if (id === "sourcing") {
    return (
      <div className={`${styles.featureSplit} ${styles.reverse}`}>
        <EditorialImage vehicle={gt3} />
        <div className={styles.featureCopy}>
          <h3 className={styles.sourcingTitle}>
            <span>Representing collectors.</span>
            <span>Enthusiasts.</span>
            <span>Private clients.</span>
          </h3>
          <p className={styles.supportingCopy}>{siteContent.pages.sourcing.copy}</p>
          <Link href="/sourcing">Learn more →</Link>
        </div>
      </div>
    );
  }

  if (id === "sell") {
    return (
      <div className={styles.featureSplit}>
        <EditorialImage vehicle={g63} />
        <div className={styles.featureCopy}>
          <p>Private brokerage for considered vehicles.</p>
          <Link href="/sell-your-car">Start a private enquiry →</Link>
        </div>
      </div>
    );
  }

  if (id === "about") {
    return (
      <div className={styles.editorialCopy}>
        <p>Performance is only part of the story.</p>
        <div>
          <p>{siteContent.pages.about.copy}</p>
          <Link href="/about">About MODENA →</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.editorialCopy}>
      <p>Begin a conversation.</p>
      <div>
        <p>
          Whether buying, selling or sourcing, we welcome considered enquiries.
        </p>
        <Link href="/contact">Contact MODENA →</Link>
      </div>
    </div>
  );
}

function EditorialImage({
  vehicle,
  priority = false,
}: {
  vehicle: (typeof vehicles)[number];
  priority?: boolean;
}) {
  return (
    <div className={styles.image}>
      <Image
        src={drawerImages[vehicle.slug] ?? vehicle.image}
        alt={vehicle.imageAlt}
        fill
        priority={priority}
        sizes="(min-width: 768px) 92vw, 100vw"
        style={{ objectPosition: "50% 50%" }}
        className={styles.imageElement}
      />
    </div>
  );
}
