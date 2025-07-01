import type { Metadata } from "next";
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
  title: "HaruCode - Inovação, Código e Novos Começos",
  description:
    "Empresa especializada em desenvolvimento de software, soluções digitais e inovação tecnológica. Transformamos ideias em realidade através de código de qualidade.",
  keywords: [
    "desenvolvimento de software",
    "programação",
    "tecnologia",
    "inovação",
    "soluções digitais",
    "web development",
    "mobile development",
    "HaruCode",
    "Campo Grande",
    "MS",
  ],
  authors: [{ name: "HaruCode" }],
  creator: "HaruCode",
  publisher: "HaruCode",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://harucode.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "HaruCode - Inovação, Código e Novos Começos",
    description:
      "Empresa especializada em desenvolvimento de software, soluções digitais e inovação tecnológica. Transformamos ideias em realidade através de código de qualidade.",
    url: "https://harucode.com.br",
    siteName: "HaruCode",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HaruCode - Inovação, Código e Novos Começos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HaruCode - Inovação, Código e Novos Começos",
    description:
      "Empresa especializada em desenvolvimento de software, soluções digitais e inovação tecnológica.",
    images: ["/og-image.jpg"],
    creator: "@harucode",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
