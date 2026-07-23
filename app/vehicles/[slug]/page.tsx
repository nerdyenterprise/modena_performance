import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteContent, vehicles } from "@/data/siteContent";
import styles from "../inventory.module.css";

type VehiclePageProps = {
  params: Promise<{ slug: string }>;
};

const vehicleAliases: Record<string, string> = {
  "porsche-911-gt3-rs": "porsche-911-gt3-touring",
};

export function generateStaticParams() {
  return [
    ...vehicles.map((vehicle) => ({ slug: vehicle.slug })),
    ...Object.keys(vehicleAliases).map((slug) => ({ slug })),
  ];
}

export async function generateMetadata({ params }: VehiclePageProps): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = vehicles.find((item) => item.slug === (vehicleAliases[slug] ?? slug));

  if (!vehicle) {
    return {};
  }

  return {
    title: `${vehicle.manufacturer} ${vehicle.model} | MODENA PERFORMANCE`,
    description: vehicle.description,
  };
}

export default async function VehiclePage({ params }: VehiclePageProps) {
  const { slug } = await params;
  const vehicle = vehicles.find((item) => item.slug === (vehicleAliases[slug] ?? slug));

  if (!vehicle) {
    notFound();
  }

  return (
    <main className={styles.detail}>
      <nav className={styles.back}>
        <Link href="/vehicles">← {siteContent.pages.vehicles.backLabel}</Link>
      </nav>

      <header className={styles.detailHeader}>
        <p>{vehicle.manufacturer}</p>
        <h1>{vehicle.model}</h1>
        <p>{vehicle.year} · {vehicle.mileage}</p>
      </header>

      <div className={styles.heroImage}>
        <Image
          src={vehicle.detailHeroImage ?? vehicle.image}
          alt={vehicle.imageAlt}
          fill
          priority
          sizes="100vw"
          style={{ objectPosition: vehicle.imagePosition }}
          className={styles.image}
        />
      </div>

      <section className={styles.overview} aria-labelledby="overview-heading">
        <div>
          <p className={styles.sectionIndex}>01 / Overview</p>
          <h2 id="overview-heading">{vehicle.description}</h2>
        </div>

        <dl className={styles.specification}>
          <div>
            <dt>{siteContent.pages.vehicles.yearLabel}</dt>
            <dd>{vehicle.year}</dd>
          </div>
          <div>
            <dt>{siteContent.pages.vehicles.mileageLabel}</dt>
            <dd>{vehicle.mileage}</dd>
          </div>
          <div>
            <dt>{siteContent.pages.vehicles.transmissionLabel}</dt>
            <dd>{vehicle.transmission}</dd>
          </div>
          <div>
            <dt>{siteContent.pages.vehicles.priceLabel}</dt>
            <dd>{vehicle.price}</dd>
          </div>
        </dl>
      </section>

      <section className={styles.editorialBreak} aria-label={`${vehicle.model} detail`}>
        <div className={styles.detailImage}>
          <Image
            src={vehicle.rearImage}
            alt={`Rear three-quarter view of ${vehicle.manufacturer} ${vehicle.model}`}
            fill
            sizes="(min-width: 900px) 68vw, 100vw"
            style={{ objectPosition: vehicle.imagePosition }}
            className={styles.image}
          />
        </div>

        <div className={styles.highlights}>
          <p className={styles.sectionIndex}>02 / Considered details</p>
          <ul>
            {vehicle.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ul>
        </div>
      </section>

      {vehicle.gallery && (
        <section className={styles.vehicleGallery} aria-label={`${vehicle.model} gallery`}>
          {vehicle.gallery.map((image, index) => (
            <div className={index === 0 ? styles.galleryWide : styles.galleryImage} key={image.src}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={index === 0 ? "100vw" : "(min-width: 760px) 50vw, 100vw"}
                className={styles.image}
              />
            </div>
          ))}
        </section>
      )}

      <section className={styles.enquiry} aria-labelledby="enquiry-heading">
        <p>{siteContent.pages.vehicles.enquiryEyebrow}</p>
        <h2 id="enquiry-heading">{siteContent.pages.vehicles.enquiryHeading}</h2>
        <div>
          <Link href={`mailto:${siteContent.contact.email}?subject=${encodeURIComponent(
            `${vehicle.manufacturer} ${vehicle.model} enquiry`,
          )}`}>
            {siteContent.contact.email}
          </Link>
          <Link href={siteContent.contact.whatsappBaseUrl}>WhatsApp →</Link>
        </div>
      </section>
    </main>
  );
}
