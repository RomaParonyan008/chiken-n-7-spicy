import type { Metadata } from "next";
import { Inter, Bebas_Neue, Noto_Sans } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chicken N'7 Spicy | How Spicy Can You Go?",
  description:
    "Challenge your taste buds with 7 spice levels. From mild to extreme - only the bravest reach Level 7.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${bebasNeue.variable} ${notoSans.variable}`}
    >
      <body className="antialiased">
        <CartProvider>
          <LanguageProvider>
            <Navbar />
            <main className="pt-16 md:pt-20">{children}</main>
          </LanguageProvider>
        </CartProvider>
      </body>
    </html>
  );
}
