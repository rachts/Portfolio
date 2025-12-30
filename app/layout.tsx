import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rachit Kumar Tiwari | Full-Stack Developer",
  description:
    "Full-stack developer building AI-driven web products with real-world impact. Specializing in JavaScript, TypeScript, Next.js, and AI integration.",
  keywords: [
    "Full-Stack Developer",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "React",
    "AI Integration",
    "Web Development",
  ],
  authors: [{ name: "Rachit Kumar Tiwari" }],
  openGraph: {
    title: "Rachit Kumar Tiwari | Full-Stack Developer",
    description: "Full-stack developer building AI-driven web products with real-world impact.",
    type: "website",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#0f172a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
