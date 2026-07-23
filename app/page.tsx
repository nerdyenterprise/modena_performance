"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteContent, vehicles } from "@/data/siteContent";
import styles from "./page.module.css";

type DrawerId = "inventory" | "sourcing" | "sell" | "about" | "contact";

const drawers: Array<{ id: DrawerId; title: string }> = [
  { id: "inventory", title: "INVENTORY" },
  { id: "sourcing", title: "SOURCING" },
  { id: "sell", title: "SELL YOUR CAR" },
  { id: "about", title: "ABOUT" },
  { id: "contact", title: "CONTACT" },
];

export default function Home() {
  const pathname = usePathname();
  const [openDrawer, setOpenDrawer] = useState<DrawerId | null>(null);

  function toggleDrawer(id: DrawerId) {
    setOpenDrawer((current) => (current === id ? null : id));
  }

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
        <span>MODENA</span>
        <a href="#main-navigation">MENU</a>
      </header>

      <section className={styles.hero} aria-labelledby="home-title">
        <h1 id="home-title">MODENA PERFORMANCE</h1>
      </section>

      <section id="main-navigation" className={styles.navigation} aria-label="Main navigation">
        {drawers.map((drawer) => {
          const isOpen = openDrawer === drawer.id;
          const panelId = `${drawer.id}-panel`;

          return (
            <article className={`${styles.drawer} ${isOpen ? styles.open : ""}`} key={drawer.id}>
              <h2>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleDrawer(drawer.id)}
                >
                  <span>{drawer.title}</span>
                  <span aria-hidden="true">+</span>
                </button>
              </h2>
              <div className={styles.panel} id={panelId} aria-hidden={!isOpen}>
                <div className={styles.panelInner}>
                  <DrawerContent id={drawer.id} />
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <footer className={styles.footer}>
        <span>MODENA PERFORMANCE</span>
        <Link href="#" aria-label="MODENA PERFORMANCE on Instagram">INSTAGRAM</Link>
      </footer>
    </main>
  );
}

function DrawerContent({ id }: { id: DrawerId }) {
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
      <div className={styles.featureSplit}>
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
        <p>A considered approach to automotive representation.</p>
        <div>
          <p>{siteContent.pages.about.copy}</p>
          <Link href="/about">About MODENA →</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.contact}>
      <p>Begin privately.</p>
      <div>
        <Link href={`mailto:${siteContent.contact.email}`}>{siteContent.contact.email}</Link>
        <Link href={siteContent.contact.whatsappBaseUrl}>WhatsApp →</Link>
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
        src={vehicle.image}
        alt={vehicle.imageAlt}
        fill
        priority={priority}
        sizes="(min-width: 768px) 92vw, 100vw"
        style={{ objectPosition: vehicle.imagePosition }}
        className={styles.imageElement}
      />
    </div>
  );
}
