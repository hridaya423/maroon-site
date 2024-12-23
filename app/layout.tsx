import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";



export const metadata: Metadata = {
  title: "Maroon",
  description: "Website for a pirate themed programming language built in python",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <link rel="icon" href="/maroon-logo.png" sizes="any" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
