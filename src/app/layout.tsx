import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import MouseProvider from "./context/MouseProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "JAY: A Leading Global Investment | JAY",
  description: "JAY is a leading global investment firm offering solutions in alternative assets spanning real estate, private credit, private equity, and infrastructure, as well as liquid credit, capital markets and insurance.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <MouseProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </MouseProvider>
  )
}
