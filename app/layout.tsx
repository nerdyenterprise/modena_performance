import type { Metadata } from "next";
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
            <strong>MODENA PERFORMANCE</strong>
            <span>Menu</span>
          </header>
          {children}
          <footer className="site-footer">
            <span>© 2026 MODENA PERFORMANCE</span>
          </footer>
        </div>
      </body>
    </html>
  );
}
