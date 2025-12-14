import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Cinzel, MedievalSharp } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { Analytics } from "@vercel/analytics/next"
import { MainLayout } from "@/components/MainLayout"
import "./globals.css"

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
  preload: true,
  fallback: ["serif"],
})

const medievalsharp = MedievalSharp({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-medievalsharp",
  display: "swap",
  preload: true,
  fallback: ["cursive", "serif"],
})

export const metadata: Metadata = {
  title: {
    default: "HytaleHighlights",
    template: "%s | HytaleHighlights",
  },
  description: "Discover and rank the best Hytale servers. Find your perfect community with detailed rankings, reviews, and server information.",
  keywords: ["Hytale", "servers", "rankings", "gaming", "community", "multiplayer"],
  authors: [{ name: "HytaleHighlights" }],
  creator: "HytaleHighlights",
  icons: {
    icon: "/images/desktop/smalllogo.png",
    apple: "/images/desktop/smalllogo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "HytaleHighlights",
    title: "HytaleHighlights - Discover the Best Hytale Servers",
    description: "Discover and rank the best Hytale servers. Find your perfect community with detailed rankings, reviews, and server information.",
    images: [
      {
        url: "/images/desktop/hero.jpeg",
        width: 1920,
        height: 1080,
        alt: "HytaleHighlights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HytaleHighlights - Discover the Best Hytale Servers",
    description: "Discover and rank the best Hytale servers. Find your perfect community.",
    images: ["/images/desktop/hero.jpeg"],
  },
  metadataBase: new URL("https://hytalehighlights.vercel.app"),
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${cinzel.variable} ${medievalsharp.variable} font-cinzel antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <MainLayout>
            {children}
          </MainLayout>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
