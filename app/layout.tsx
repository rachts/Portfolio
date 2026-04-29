import type React from "react"
import type { Metadata, Viewport } from "next"
import { Sora, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { TopNav } from "@/components/top-nav"

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  metadataBase: new URL("https://rachittiwari.com"),
  title: "Rachit Tiwari | Frontend Architect & Product Engineer",
  description: "Product-minded frontend engineer specializing in high-performance web apps, AI interfaces, and scalable architectures using React and Next.js.",
  keywords: ["Frontend Engineer", "React Developer", "Next.js", "TypeScript", "Product Engineer", "AI Interfaces"],
  authors: [{ name: "Rachit Tiwari" }],
  creator: "Rachit Tiwari",
  publisher: "Rachit Tiwari",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rachittiwari.com",
    title: "Rachit Tiwari | Frontend Architect",
    description: "Product-minded frontend engineer building high-performance web applications and AI interfaces.",
    siteName: "Rachit Tiwari Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rachit Tiwari - Frontend Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rachit Tiwari | Frontend Architect",
    description: "Product-minded frontend engineer building high-performance web applications and AI interfaces.",
    creator: "@rachts",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: 'Next.js',
  icons: "/icon.png",
}

export const viewport: Viewport = {
  themeColor: "#0f0f0f",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${sora.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className={`font-sans antialiased overflow-x-hidden selection:bg-indigo-500 selection:text-white bg-[#0f0f0f] text-gray-100`}>
        <TopNav />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
