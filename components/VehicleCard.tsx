import Image from "next/image";
import Link from "next/link";
import type { Vehicle } from "@/data/vehicles";

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <article className="group bg-transparent">
      <Link href={`/vehicles/${vehicle.slug}`} className="block">
        <div className="image-slot aspect-[16/11]">
          <Image
            src={vehicle.image}
            alt={vehicle.imageAlt}
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            style={{ objectPosition: vehicle.imagePosition }}
            className="object-cover opacity-[0.88] brightness-[0.58] contrast-[1.18] saturate-[0.62] transition duration-700 group-hover:scale-[1.015] group-hover:opacity-95"
          />
          <div className="absolute inset-0 z-[1] bg-gradient-to-t from-carbon/85 via-carbon/20 to-carbon/10" />
        </div>
        <div className="pt-6">
          <div>
              <p className="text-[0.66rem] uppercase tracking-[0.34em] text-champagne">{vehicle.manufacturer}</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-linen sm:text-4xl">{vehicle.model}</h2>
          </div>
          <div className="mt-6 flex items-center justify-between gap-6 border-t border-champagne/10 pt-5 text-xs uppercase tracking-[0.24em]">
            <span>{vehicle.year}</span>
            <span className="text-linen">{vehicle.price}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
