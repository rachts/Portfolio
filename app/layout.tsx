import type React from "react"
import type { Metadata, Viewport } from "next"
import { JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { TopNav } from "@/components/top-nav"

const _mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Rachit Kumar Tiwari | AI Product Builder",
  description: "Tactical UI Portfolio of Rachit Kumar Tiwari, Full-Stack AI Developer.",
  generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${_mono.variable}`}>
      <body className={`font-sans antialiased overflow-x-hidden selection:bg-primary selection:text-white`}>
        <TopNav />
        <div className="hud-grid" />
        <div className="scanline" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
