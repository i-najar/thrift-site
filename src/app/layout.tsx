import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Ribbon from "@/components/Ribbon";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "threadBare",
  description: "A silly little e-thrift store.",
};

const ribbonMessages = [
  "Hi there! 👋 In celebration of our countdown to the new year, we're offering a site-wide 50% off discount on shipping for all orders over $100! Happy Holidays!",
  "Wondering what pieces your favorite seller will drop? 🤔 Check their profile posts for updates!",
  "We're giving back! For every glove, scarf, and sock purchase, we'll donate a pair to charity 😊",
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <Ribbon messages={ribbonMessages} />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
