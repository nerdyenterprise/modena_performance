import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";

type LogoProps = {
  priority?: boolean;
  className?: string;
  linked?: boolean;
};

export function Logo({ priority = false, className = "w-40 sm:w-48", linked = true }: LogoProps) {
  const image = (
    <span className={`relative block aspect-[2018/436] ${className}`}>
      <Image
        src={siteContent.brand.logo}
        alt={siteContent.brand.fullName}
        fill
        priority={priority}
        sizes="(min-width: 640px) 12rem, 10rem"
        className="object-contain"
      />
    </span>
  );

  if (!linked) {
    return image;
  }

  return (
    <Link href="/" aria-label="MODENA home">
      {image}
    </Link>
  );
}
