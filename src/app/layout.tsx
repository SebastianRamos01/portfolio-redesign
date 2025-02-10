import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { AnimatePresence } from "framer-motion";

const roboto = Roboto({
  weight: ['400', '300'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Sebas Ramos",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={roboto.className}
      >
        <AnimatePresence>
          {children}
        </AnimatePresence>
      </body>
    </html>
  );
}
