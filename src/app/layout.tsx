import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'AI Standards Directory: Protocols and Standards for the Agentic Era',
  description:
    'Discover the emerging protocols and standards which will define how we build and connect agentic AI workloads.',
  openGraph: {
    images: '/og.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-twitter.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col bg-white text-neutral-900">
          <div className="flex-1">
            <Header />
            {children}
          </div>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
