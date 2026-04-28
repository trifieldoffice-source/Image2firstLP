import type { Metadata } from 'next';
import { Noto_Sans_JP, Caveat } from 'next/font/google';
import './globals.css';
import { SITE_CONFIG } from '@/constants/config';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';

const notoLinks = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto',
  weight: ['400', '500', '700', '900'],
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-cursive',
});

export const metadata: Metadata = {
  title: SITE_CONFIG.seo.title,
  description: SITE_CONFIG.seo.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${notoLinks.variable} ${caveat.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
