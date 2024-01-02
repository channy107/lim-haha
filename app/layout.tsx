import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { MSWComponent } from '@/app/_component/MSWComponent';
import './globals.css';
import Header from './_component/Header/Header';
import RQProvider from './_component/RQProvider';
import CookieProvider from './_component/CookieProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '임하하',
  description: '침하하 클론',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CookieProvider>
          <RQProvider>
            <MSWComponent>
              <Header />
              {children}
            </MSWComponent>
          </RQProvider>
        </CookieProvider>
      </body>
    </html>
  );
}
