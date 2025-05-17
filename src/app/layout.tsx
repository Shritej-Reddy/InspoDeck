import type { Metadata } from "next";
import Cursor from "@/components/Cursor";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import CircularScrollProgress from "@/components/CircularScrollProgress";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import AnimatedPageWrapper from "@/components/AnimatedPageWrapper";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InspoDeck — Curated Design Inspiration",
  description:
    "Browse a handpicked collection of design inspiration from Dribbble. Save your favorites, filter by tags, and build your own creative deck.",
  metadataBase: new URL("https://inspodeck.vercel.app"),
  openGraph: {
    title: "InspoDeck — Curated Design Inspiration",
    description:
      "Discover and save stunning design inspiration handpicked from Dribbble. Your personal deck for creative ideas.",
    url: "https://inspodeck.vercel.app",
    siteName: "InspoDeck",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "InspoDeck — Design Inspiration",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InspoDeck — Curated Design Inspiration",
    description:
      "Browse and save stunning Dribbble designs. Build your personal creative deck.",
    images: ["/og-image.png"],
    creator: "@Shritej_r",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CircularScrollProgress />
          <Cursor />
          <Navbar />
          <AnimatedPageWrapper>{children}</AnimatedPageWrapper>
          <Footer />
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
