import type { Metadata } from "next";
import { Newsreader, Work_Sans, Caveat } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Clinical Psychologist in Santa Monica, CA",
  description:
    "Dr. Maya Reynolds, PsyD is a licensed clinical psychologist in Santa Monica, CA offering therapy for adults struggling with anxiety, panic, trauma, and burnout.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${workSans.variable} ${caveat.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#FAF8F5] text-[#242828] font-sans antialiased selection:bg-[#E2ECE6] selection:text-[#242828]">
        {children}
      </body>
    </html>
  );
}
