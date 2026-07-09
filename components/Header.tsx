import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-champagne/10 bg-carbon/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[92rem] items-center justify-between px-5 py-5 sm:px-10">
        <Logo priority />
        <nav className="hidden items-center gap-9 text-[0.66rem] uppercase tracking-[0.3em] text-muted lg:flex">
          {siteContent.navigation.map(({ label, href }) => (
            <Link key={href} href={href} className="transition hover:text-champagne">
              {label}
            </Link>
          ))}
        </nav>
        <Link
          href={siteContent.contact.whatsappUrl}
          className="hidden border border-champagne/45 px-5 py-3 text-[0.62rem] uppercase tracking-[0.28em] text-champagne transition hover:bg-champagne hover:text-carbon sm:inline-flex"
        >
          {siteContent.contact.whatsappShortLabel}
        </Link>
      </div>
      <nav className="flex max-w-full flex-wrap gap-x-6 gap-y-3 overflow-hidden border-t border-champagne/10 px-5 py-3 text-[0.62rem] uppercase tracking-[0.24em] text-muted sm:px-10 lg:hidden">
        {siteContent.navigation.map(({ label, href }) => (
          <Link key={href} href={href} className="shrink-0 transition hover:text-champagne">
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
