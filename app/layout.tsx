import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteMenu from "@/components/SiteMenu";
import "./globals.css";

export const metadata: Metadata = {
  title: "Modena | Performance is only part of the story.",
  description: "Luxury Automotive Brokerage",
  icons: {
    icon: [
      {
        url: "/brand/mp-favicon-v2.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    shortcut: [
      {
        url: "/brand/mp-favicon-v2.ico",
        type: "image/x-icon",
        sizes: "32x32",
      },
    ],
    apple: [
      {
        url: "/brand/mp-apple-icon-v2.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="site">
          <header className="site-header">
            <Link
              className="site-brand"
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
          {children}
          <footer className="site-footer">
            <span>© 2026 MODENA PERFORMANCE</span>
            <Link href="/terms">Terms</Link>
          </footer>
        </div>
      </body>
    </html>
  );
}
