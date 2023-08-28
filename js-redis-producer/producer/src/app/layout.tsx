import { Footer } from '@/components/Footer.component'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/Navbar.component'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Redis Stream Demo',
  description: 'Redis Stream Demo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <Navbar/>
        <div className='mb-8 mt-16 mr-14'>
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}
