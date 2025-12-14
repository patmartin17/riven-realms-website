import type { ReactNode } from "react"
import { MainLayout } from "@/components/MainLayout"

export default function MainSiteLayout({
  children,
}: {
  children: ReactNode
}) {
  return <MainLayout>{children}</MainLayout>
}

