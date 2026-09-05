import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-cormorant', weight: ['400', '500', '600'] })
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', weight: ['400', '500', '600'] })

export const metadata: Metadata = {
  title: 'Trivedi Asthetic Studio — Objects with an atmosphere',
  description: 'Handcrafted resin art and furniture made with intention in Ahmedabad, India.',
  generator: 'v0.app',
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f4f1eb' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-[#f4f1eb]"><body className={`${cormorant.variable} ${dmSans.variable} antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
