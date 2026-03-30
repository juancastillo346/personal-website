import type { Metadata } from 'next'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Juan Castillo | Software Engineer',
  description:
    'Portfolio of Juan Castillo, a Columbia computer science student focused on full-stack engineering, performant systems, and thoughtful product design.',
  icons: [
    { rel: 'icon', url: '/favicon.ico' },
    { rel: 'apple-touch-icon', url: '/favicon.ico' },
    { rel: 'shortcut icon', url: '/favicon.ico' }
  ],
  openGraph: {
    title: 'Juan Castillo | Software Engineer',
    description:
      'Portfolio of Juan Castillo, a Columbia computer science student focused on full-stack engineering, performant systems, and thoughtful product design.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Juan Castillo | Software Engineer',
    description:
      'Portfolio of Juan Castillo, a Columbia computer science student focused on full-stack engineering, performant systems, and thoughtful product design.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
