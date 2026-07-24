import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "MODENA PERFORMANCE",
  description: "Luxury Automotive Brokerage",
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
            <Link href="/#main-navigation">MENU</Link>
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
