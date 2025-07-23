import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

// Update the page title and description to match Abhi's portfolio
export const metadata = {
  title: "Abhi S | Portfolio",
  description: "Aspiring Software Engineer specializing in Data Science and Web Development",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
