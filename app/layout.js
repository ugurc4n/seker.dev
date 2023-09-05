import './globals.css'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const poppins = Poppins({
  subsets: ['latin'], weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata = {
  title: 'seker.dev | Ugur Seker',
  description: 'Kişisel Web Sayfam',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
