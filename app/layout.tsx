import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'KACPER PIERON',
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
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    </html>
  )
}
