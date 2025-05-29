import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pasia Sanat Akademisi - Müzik Eğitimi",
  description: "İstanbul'da profesyonel müzik eğitimi. Piyano, keman, gitar dersleri ve sınav hazırlık programları.",
  keywords: "müzik okulu, piyano dersi, keman dersi, gitar dersi, müzik eğitimi, İstanbul, sanat akademisi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
