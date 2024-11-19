import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s - Lexos",
    absolute: "Lexos",
  },
  description: "Lexos is the easiest way to generate content.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={geistSans.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
