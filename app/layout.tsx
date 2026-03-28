import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Danial AI Fitness | Evolve Your Potential',
  description: 'Premium AI-powered fitness coaching, workout generators, and life-in-weeks visualization.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className} suppressHydrationWarning>{children}</body>
    </html>
  );
}
