import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Cinzel, MedievalSharp, Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { Analytics } from "@vercel/analytics/next"
import { AuthProvider } from "@/lib/firebase"
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

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
})

export const metadata: Metadata = {
  title: {
    default: "Riven Realms",
    template: "%s | Riven Realms",
  },
  description: "Welcome to Riven Realms - A Hytale server featuring epic adventures, kingdoms, and magical realms. Join our community today!",
  keywords: ["Hytale", "server", "Riven Realms", "gaming", "community", "multiplayer", "RPG", "adventure"],
  authors: [{ name: "Riven Realms" }],
  creator: "Riven Realms",
  icons: {
    icon: "/images/desktop/smalllogo.png",
    apple: "/images/desktop/smalllogo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Riven Realms",
    title: "Riven Realms - A Hytale Server",
    description: "Welcome to Riven Realms - A Hytale server featuring epic adventures, kingdoms, and magical realms.",
    images: [
      {
        url: "/images/desktop/hero.jpeg",
        width: 1920,
        height: 1080,
        alt: "Riven Realms",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Riven Realms - A Hytale Server",
    description: "Welcome to Riven Realms - Epic adventures await in our Hytale server.",
    images: ["/images/desktop/hero.jpeg"],
  },
  metadataBase: new URL("https://rivenrealms.com"),
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${cinzel.variable} ${medievalsharp.variable} ${inter.variable} font-cinzel antialiased`}>
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}
