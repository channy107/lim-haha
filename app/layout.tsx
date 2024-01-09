import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { MSWComponent } from '@/app/_common/components/MSWComponent';
import './globals.css';
import Header from '@/app//_component/Header/Header';
import RQProvider from '@/app/_common/components/RQProvider';
import CookieProvider from '@/app//_common/components/CookieProvider';
import RecoilProvider from '@/app/_common/components/RecoilProvider';
import Container from '@/app/_common/components/Container/Container';
import TopBar from '@/app//_component/TopBar';

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
                <TopBar />
                <Container>
                  <Header />
                  {children}
                </Container>
              </MSWComponent>
            </RQProvider>
          </RecoilProvider>
        </CookieProvider>
      </body>
    </html>
  );
}
