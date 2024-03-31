import type { Metadata } from "next";
import { Rubik, Inter } from "next/font/google";
import "./globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Nav from "@/components/Nav";
import Link from "next/link";

import React from "react";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Ani.me",
  description: "Catálogo com os melhores animes para você!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${rubik.className} px-6 sm:px-8 xl:px-28 2xl:px-[16.3%] flex flex-col min-h-screen`}
      >
        <header className="h-[76px] 2xl:min-h-[128px] flex justify-between items-center">
          <Link href="/" className={"text-2xl font-medium text-emphasis"}>
            Ani.me
          </Link>
          <Nav />
        </header>

        <main className="flex-grow flex flex-col">{children}</main>

        <footer
          className={`${inter.className} text-center text-xs sm:text-lg mx-auto text-light-gray py-6 mt-20`}
        >
          Todos os direitos reservados aos criadores e produtores dos animes
        </footer>
      </body>
    </html>
  );
}
