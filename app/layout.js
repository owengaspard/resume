import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Owen Gaspard',
  description: 'Owen Gaspard\'s resume',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='dark:bg-neutral-900'>{children}</body>
    </html>
  )
}
