import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TechFlow - Transform Your Business',
  description: 'Modern SaaS solutions powered by AI to boost your productivity by 300%',
  keywords: ['SaaS', 'AI', 'productivity', 'automation', 'business solutions'],
  authors: [{ name: 'TechFlow Team' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}