import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import UpdatesBanner from "@/components/Banner";

export const metadata: Metadata = {
  title: "Maroon",
  description: "Pirate themed programming language built in python",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/maroon-logo.png" sizes="any" />
      <body>
        <UpdatesBanner />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
