import Navbar from './Navbar/Navbar'
import Footer from './Footer'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Guimazon',
  description: 'Guilherme ritter',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Navbar/>
          <main className='p-3 max-w-7x1 m-auto min-w-[300px ]'> 
            {children}
          </main>     
          <Footer/>
      </body>
    </html>
  )
}