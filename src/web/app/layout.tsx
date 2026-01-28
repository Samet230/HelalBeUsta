import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../components/shared/navbar";

export const metadata: Metadata = {
  title: "TamirSepeti - Oto Tamir & Bakım",
  description: "Aracınız için en güvenilir tamir ve bakım hizmeti.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
