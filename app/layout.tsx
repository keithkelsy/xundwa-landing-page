import React from "react"
import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: '--font-display' });
const _inter = Inter({ subsets: ["latin"], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'Xundwa - Equipamiento Premium de Montaña y Senderismo',
  description: 'Descubre ropa outdoor premium diseñada para aventuras extremas. Equipamiento sostenible, duradero e innovador para entusiastas de la montaña.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
