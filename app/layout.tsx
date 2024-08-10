import type { Metadata } from "next";
import { Ysabeau } from "next/font/google";
import "./globals.css";

const ysabeau = Ysabeau({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lingya's Portfolio",
  description: "Lingya's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ysabeau.className}>{children}</body>
    </html>
  );
}
