import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Bungee,
  Dancing_Script,
  Great_Vibes,
} from "next/font/google";
import "./globals.css";
import "../css/responsive.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//USE FOR SEO
export const metadata: Metadata = {
  // title: "Rolan and Kate's Wedding",
  // description: "Rolan and Kate's Wedding",
  title: "RM'S MUG PRINTING",
  description:
    "Affordable Mugs, Sintra Board, Money Envelopes, Ref Magnets and Loot Bags for all occassions and sourvenirs",
  keywords:
    "mugs, magic mugs, affordable mugs sintra, sintra boards, affordable sintra boards, money envelopes, affordable money envelopes, ref magnets, affordable ref magnets, loot bags, affordable loot bags",
  openGraph: {
    title: "RM'S MUG PRINTING",
    description:
      "Affordable Mugs, Sintra Board, Money Envelopes, Ref Magnets and Loot Bags for all occassions and souvenirs",
    url: "https://yourdomain.com",
    siteName: "RM'S MUG PRINTING",
    images: [
      {
        url: "/banner.jpg", // Make sure this is a real image path
        width: 1200,
        height: 630,
        alt: "Company Banner",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="wrapper">
          <Header />
          <Banner />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
