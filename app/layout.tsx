import type React from "react"
import "./globals.css"
import BackToTop from "./components/back-to-top"
import AnimationObserver from "./components/animation-observer"

export const metadata = {
  title: "Swiss Design Studio",
  description: "A modern design studio inspired by Swiss Design principles",
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
