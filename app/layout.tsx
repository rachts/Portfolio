import type React from "react"
import type { Metadata, Viewport } from "next"
import { Sora, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { TopNav } from "@/components/top-nav"

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Rachit Tiwari | Frontend Developer | React & Next.js",
  description: "Frontend developer specializing in high-performance web apps using React, Next.js, and modern UI/UX principles.",
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
