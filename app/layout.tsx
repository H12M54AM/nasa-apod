import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Foot";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: '/favicon.svg',
  authors:
    [{
      name: "Edward Naidoo"
    }],
// {
//   type: "website",
//   url: "https://example.com",
//   title: "My Website",
//   description: "My Website Description",
//   siteName: "My Website",
//   images: [{
//     url: "https://example.com/og.png",
//   }],
// }
  openGraph: {
    type: "website",
    images: [{
      url: "https://apod.edwardcreates.ca/banner.png"
    }]
  }  
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
