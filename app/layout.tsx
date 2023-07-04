import { ProviderRedux } from '@/redux/ProviderRedux'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SmartPhones',
  description: 'Trabajado con next.js 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />

      </head>
      <body className={inter.className}>
        < ProviderRedux>
          {children}
        </ProviderRedux> 
      </body>
    </html>
  )
}
