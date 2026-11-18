import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/ui/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PRINCE2® Certification Training | Xcademia PeopleCert Partner",
  description:
    "Official PeopleCert-aligned PRINCE2® Foundation & Practitioner certification training. Weekend & weekday evening interactive batches with exam vouchers included and 98.4% pass rate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF9F6] text-[#0B1B3A] selection:bg-amber-400 selection:text-[#071426]">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
