import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { MSWComponent } from '@/app/_component/MSWComponent';
import './globals.css';
import Header from './_component/Header/Header';
import RQProvider from './_component/RQProvider';
import CookieProvider from './_component/CookieProvider';
import Adsense from './_component/Adsense/Adsense';
import RecoilProvider from './_component/RecoilProvider';

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
          <RecoilProvider>
            <RQProvider>
              <MSWComponent>
                <Header />
                {/* <Adsense /> */}
                {children}
              </MSWComponent>
            </RQProvider>
          </RecoilProvider>
        </CookieProvider>
      </body>
    </html>
  );
}
