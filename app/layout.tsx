import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { siteContent } from "@/data/siteContent";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteContent.metadata.title,
    template: "%s | MODENA",
  },
  description: siteContent.metadata.description,
  metadataBase: new URL(siteContent.metadata.siteUrl),
  icons: {
    icon: siteContent.brand.logo,
    shortcut: siteContent.brand.logo,
    apple: siteContent.brand.logo,
  },
  openGraph: {
    title: siteContent.brand.name,
    description: siteContent.footer.description,
    url: siteContent.metadata.siteUrl,
    siteName: siteContent.brand.name,
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <WhatsAppCTA />
        <Footer />
      </body>
    </html>
  );
}
