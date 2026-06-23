import type { Metadata } from "next";
import { Roboto, Dancing_Script } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Avery's Kitchen Report — May 2026",
  description:
    "Monthly kitchen report showing meal tracking, savings, and dinner distribution for Avery's household.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${dancingScript.variable} antialiased`}
      suppressHydrationWarning
    >
      <body 
        className="min-h-screen bg-slate-50 text-slate-800 flex flex-col"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
