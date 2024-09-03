import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raku",
  description: "Raku customer app",
  manifest: "manifest.json",
  icons: {
    icon: "/icon.png", // /public path
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-screen-sm mx-auto `}>
        {children}
      </body>
    </html>
  );
}
