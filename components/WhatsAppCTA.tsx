import Link from "next/link";
import { siteContent } from "@/data/siteContent";

export function WhatsAppCTA() {
  return (
    <Link
      href={siteContent.contact.whatsappUrl}
      className="fixed bottom-4 right-4 z-40 border border-champagne/55 bg-carbon/90 px-4 py-3 text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-champagne shadow-2xl shadow-black/40 backdrop-blur transition hover:bg-champagne hover:text-carbon sm:bottom-6 sm:right-6"
    >
      {siteContent.contact.whatsappShortLabel}
    </Link>
  );
}
