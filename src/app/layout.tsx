import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../../public/css/responsive.css";
import { Toaster } from "react-hot-toast";

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
  title: "Rencriselle's 18th Birthday",
  description: "18th Birthday, Debut, Birthday, Party, Occassion",
  keywords: "birthday, 18th birthday, party, occassion, event",
  openGraph: {
    title: "RENCRISELLE'S 18TH BIRTHDAY",
    description: "18th Birthday, Debut, Birthday, Party, Occassion",
    url: "https://yourdomain.com",
    siteName: "RENCRISELLE'S 18TH BIRTHDAY",
    images: [
      {
        url: "/banner.jpg", // Make sure this is a real image path
        width: 1200,
        height: 630,
        alt: "Debutant Banner",
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
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Great+Vibes&family=Herr+Von+Muellerhoff&family=Monsieur+La+Doulaise&family=Pinyon+Script&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="wrapper">{children}</div>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
