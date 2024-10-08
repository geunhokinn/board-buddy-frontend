import type { Metadata } from 'next';
import '../../styles/globals.css';

export const metadata: Metadata = {
  title: 'Board Buddy',
  description: '보드게임 할 사람, 여기 버디 모여라!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="overflow-y-auto">{children}</main>;
}
