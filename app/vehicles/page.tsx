import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteContent, vehicles } from "@/data/siteContent";
import styles from "./inventory.module.css";

export const metadata: Metadata = {
  title: `${siteContent.pages.vehicles.metadataTitle} | MODENA PERFORMANCE`,
  description: siteContent.pages.vehicles.metadataDescription,
};

export default function InventoryPage() {
  return (
    <main className={styles.inventory}>
      <header className={styles.introduction}>
        <p className={styles.index}>01 — {String(vehicles.length).padStart(2, "0")}</p>
        <h1>Inventory</h1>
        <p>{siteContent.pages.vehicles.copy}</p>
      </header>

      <div className={styles.collection}>
        {vehicles.map((vehicle, index) => (
          <article className={styles.vehicle} key={vehicle.slug}>
            <Link
              className={styles.imageLink}
              href={`/vehicles/${vehicle.slug}`}
              aria-label={`View ${vehicle.manufacturer} ${vehicle.model}`}
            >
              <div className={styles.listImage}>
                <Image
                  src={vehicle.image}
                  alt={vehicle.imageAlt}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 900px) 94vw, 100vw"
                  style={{ objectPosition: vehicle.imagePosition }}
                  className={styles.image}
                />
              </div>
            </Link>

            <div className={styles.caption}>
              <p>{String(index + 1).padStart(2, "0")}</p>
              <div>
                <p>{vehicle.manufacturer}</p>
                <h2>
                  <Link href={`/vehicles/${vehicle.slug}`}>{vehicle.model}</Link>
                </h2>
              </div>
              <p>{vehicle.year} · {vehicle.mileage}</p>
              <Link className={styles.textLink} href={`/vehicles/${vehicle.slug}`}>
                View vehicle →
              </Link>
            </div>
          </article>
        ))}
      </div>

      <footer className={styles.collectionFooter}>
        <p>Selected vehicles, represented with consideration.</p>
        <Link href={`mailto:${siteContent.contact.email}`}>Private enquiry →</Link>
      </footer>
    </main>
  );
}
