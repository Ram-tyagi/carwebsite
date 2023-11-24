

import type { Metadata } from 'next'
import { Navbar, Footer } from '@/Components'
import './globals.css'



export const metadata: Metadata = {
  title: 'Cart Hub',
  description: 'Discover the best cars in the world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
