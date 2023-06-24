
import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

import { Navbar } from '@/components'

export const metadata = {
  title: 'Car hub',
  description: 'Disover the best cars in the world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body className="relative">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
