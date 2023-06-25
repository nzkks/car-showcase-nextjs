import { ReactNode } from 'react';

import './globals.css';
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

import { Navbar } from '@/components';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Car hub',
  description: 'Discover the best cars in the world.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
