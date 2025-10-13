import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/layout";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oluwatoyin Oredein | Software Developer",
  description:
    "Portfolio of Oluwatoyin Oredein, a Software Developer specializing in building exceptional digital experiences. Explore my projects, skills, and get in touch!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fraunces.variable}`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
