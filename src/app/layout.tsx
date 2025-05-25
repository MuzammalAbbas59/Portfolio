import type { Metadata } from "next";
import { Inter, Playfair_Display, Fira_Code } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muzammal Abbas | Software Engineer & Poet",
  description: "Portfolio website showcasing my work as a Ruby on Rails software engineer and my creative journey as a poet.",
  openGraph: {
    title: "Muzammal Abbas | Software Engineer & Poet",
    description: "Portfolio website showcasing my work as a Ruby on Rails software engineer and my creative journey as a poet.",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muzammal Abbas - Software Engineer & Poet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muzammal Abbas | Software Engineer & Poet",
    description: "Portfolio website showcasing my work as a Ruby on Rails software engineer and my creative journey as a poet.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${firaCode.variable}`}>
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
