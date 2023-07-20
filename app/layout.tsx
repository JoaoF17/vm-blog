import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vegan Monkey Blog',
  description: 'Everything Vegan in Bangkok',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='mx-auto max-w-3xl px-6'>
          <Header />
          {children}
          <Footer />
        </div>
        
        
      </body>
    </html>
  )
}
