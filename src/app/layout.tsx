import '@/style/style.scss';

import Favicon from '/public/favicon.png';
import type { Metadata, Viewport } from 'next';
import { Header } from '@/components/ui/header';
import {
  fontPretendard,
  fontNeueHaasGrotesk,
  fontScript,
} from '@/components/fonts';
import Footer from '@/components/ui/footer/Footer';
import GSAPRegister from '@/components/register/gsap/GSAPRegister';
import { Cursor } from '@/components/ui/cursor';
import RenisScroll from '@/components/register/renis/RenisScroll';

export const metadata: Metadata = {
  title: 'FlowKat',
  description:
    '프론트엔드 개발자, 웹 퍼블리셔, 웹 개발자, UX/UI 개발자 박예림 포트폴리오입니다.',
  keywords: [
    '프론트엔드 개발자, 프론트엔드 포트폴리오, 웹 퍼블리셔 포트폴리오, UX 엔지니어, UI 개발자, 웹 퍼블리셔',
  ],
  icons: [{ rel: 'icon', url: Favicon.src }],
  verification: {
    google: 'YxlqZ71uNOrnU5b6IEnjMCb7CYtdr-LeWdgBl6WlY5o',
  },
  applicationName: 'FlowKat',
  openGraph: {
    images: '/og-image.png',
    title: 'FlowKat',
    type: 'website',
    description:
      '프론트엔드 개발자, 웹 퍼블리셔, 웹 개발자, UI 개발자 박예림 포트폴리오입니다.',
  },
};
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='ko'
      className={`${fontScript.variable} ${fontPretendard.variable} ${fontNeueHaasGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body>
        <GSAPRegister>
          <Header />
          {children}
          <Cursor />
          <Footer />
        </GSAPRegister>
        <RenisScroll />
      </body>
    </html>
  );
}
