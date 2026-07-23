import type { Metadata } from "next";
import { Figtree, Fraunces } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rainforest Reptile Haven",
    template: "%s · Rainforest Reptile Haven",
  },
  description:
    "Dark rainforest reptile care guides for bearded dragons, snakes, geckos, monitor lizards, and chameleons — plus a personal keeper dashboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${figtree.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
