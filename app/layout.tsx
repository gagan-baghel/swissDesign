import type React from "react"
import "./globals.css"
import BackToTop from "./components/back-to-top"
import AnimationObserver from "./components/animation-observer"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Swiss Design Studio | Rigorous Digital Experiences",
    template: "%s | Swiss Design Studio",
  },
  description: "A modern design studio inspired by Swiss Design principles. We create rigorous, functional, and aesthetically striking digital experiences.",
  keywords: ["Swiss Design", "Design Studio", "Modern Design", "UI/UX", "Web Design", "Graphic Design", "Digital Agency"],
  authors: [{ name: "Swiss Design Studio" }],
  creator: "Swiss Design Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://swissdesignstudio.com",
    title: "Swiss Design Studio | Rigorous Digital Experiences",
    description: "A modern design studio inspired by Swiss Design principles. We create rigorous, functional, and aesthetically striking digital experiences.",
    siteName: "Swiss Design Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swiss Design Studio | Rigorous Digital Experiences",
    description: "A modern design studio inspired by Swiss Design principles. We create rigorous, functional, and aesthetically striking digital experiences.",
    creator: "@swissdesignstudio",
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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-light-32x32.png', type: 'image/png', sizes: '32x32', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', type: 'image/png', sizes: '32x32', media: '(prefers-color-scheme: dark)' }
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body>
        <AnimationObserver />
        {children}
        <BackToTop />
      </body>
    </html>
  )
}
