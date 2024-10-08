import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/utils/tailwind';
import '../styles/globals.css';
import { MSWComponent } from '@/mocks/MSWComponent';
import ReactQueryProviders from '@/utils/reactQueryProvider';
import Header from '@/components/Header';
import { HeaderProvider } from '@/context/HeaderContext';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Board Buddy',
  description: '보드게임 할 사람, 여기 버디 모여라!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={cn(
          'min-h-screen bg-gray-100 font-sans antialiased',
          fontSans.variable,
        )}
      >
        <div
          className={cn(
            'max-w-md bg-white mx-auto min-h-dvh max-h-dvh flex flex-col shadow-md',
          )}
        >
          <MSWComponent>
            <ReactQueryProviders>
              <HeaderProvider>
                <Header />
                {children}
              </HeaderProvider>
            </ReactQueryProviders>
          </MSWComponent>
        </div>
      </body>
    </html>
  );
}
