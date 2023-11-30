"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";

const disableNavbar = ["/login", "/register"];
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <head>
        <title>Flixflix</title>
        <link
          rel="icon"
          href="/app/assets/logo.png"
          type="image/png"
          sizes="any"
        />
      </head>
      <body className={inter.className}>
        <div>{!disableNavbar.includes(pathname) && <Navbar />}</div>
        {children}
      </body>
    </html>
  );
}
