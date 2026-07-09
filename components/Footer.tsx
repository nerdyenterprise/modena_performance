import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-champagne/10 bg-carbon">
      <div className="mx-auto grid max-w-[92rem] gap-10 px-5 py-14 sm:px-10 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo className="w-48" />
          <p className="mt-6 max-w-sm text-sm leading-7 text-muted">
            {siteContent.footer.description}
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-champagne">{siteContent.footer.servicesHeading}</p>
          <div className="mt-5 grid gap-3 text-sm text-muted">
            {siteContent.navigation.slice(0, 3).map(({ label, href }) => (
              <Link key={href} href={href}>{label}</Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-champagne">{siteContent.footer.contactHeading}</p>
          <div className="mt-5 grid gap-3 text-sm text-muted">
            <Link href={`mailto:${siteContent.contact.email}`}>{siteContent.contact.email}</Link>
            <Link href={siteContent.contact.whatsappBaseUrl}>{siteContent.contact.phoneDisplay}</Link>
            <span>{siteContent.contact.location}</span>
          </div>
        </div>
      </div>
      <div className="border-t border-champagne/10 px-5 py-5 text-center text-[0.68rem] uppercase tracking-[0.24em] text-muted">
        {siteContent.brand.copyright}
      </div>
    </footer>
  );
}
