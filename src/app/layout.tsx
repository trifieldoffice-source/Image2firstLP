import type { Metadata } from 'next';
// eslint-disable-next-line camelcase
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import { SITE_CONFIG } from '@/constants/config';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';

const notoSansJP = Noto_Sans_JP({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-jp',
});

export const metadata: Metadata = {
  title: SITE_CONFIG.seo.title,
  description: SITE_CONFIG.seo.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${notoSansJP.className} text-slate-800 antialiased pt-20 relative`}>
        {/* Decorative background blobs */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none opacity-40">
          <div className="absolute top-[-10%] left-[-5%] w-[40%] aspect-square bg-secondary/10 rounded-full blur-3xl"></div>
          <div className="absolute top-[20%] right-[-10%] w-[30%] aspect-square bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] left-[20%] w-[50%] aspect-square bg-accent-purple/10 rounded-full blur-3xl"></div>
        </div>

        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
