import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "@/styles/globals.css";

import { Header, Footer, } from "@/components";

export const metadata: Metadata = {
  title: "FlavorShare",
  description: "View and share recipes with the world!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} relative`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
