import React from "react";
import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import clsx from "clsx";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stefan Mansson",
  description: "Portfolio of Stefan Mansson",
  icons: "/images/favicon.png",
};

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <html lang="en" className={clsx(inter.variable)}>
      <body className="font-sans font-normal text-gray-200 bg-[#161616]">
        {children}
      </body>
    </html>
  );
}
