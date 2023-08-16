import './globals.css'

export const metadata = {
  title: 'Owen Gaspard',
  description: 'Hey, I\'m Owen, a seventeen-year-old systems administrator and full-stack developer based in New Orleans.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='dark:bg-zinc-200'>{children}</body>
    </html>
  )
}
